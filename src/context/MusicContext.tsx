import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { giftData, TopSongItem } from '../data/giftData';

interface MusicContextType {
  currentSong: TopSongItem;
  isPlaying: boolean;
  togglePlay: () => void;
  playSong: (song: TopSongItem) => void;
  startPlay: () => void;
  nextSong: () => void;
  prevSong: () => void;
}

const DEFAULT_SONG: TopSongItem = {
  id: 'song-1',
  title: 'Angel Baby',
  artist: 'Troye Sivan',
  coverUrl: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=200&auto=format&fit=crop',
  audioUrl: '/assets/angel baby.mp3',
};

const FALLBACK_AUDIO_URL = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3';

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialSong = giftData.playlist.topSongs[0] || DEFAULT_SONG;
  const [currentSong, setCurrentSong] = useState<TopSongItem>(initialSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync currentSong if giftData topSongs order or details change dynamically
  useEffect(() => {
    const topSong = giftData.playlist.topSongs[0];
    if (topSong && (topSong.id !== currentSong.id || topSong.audioUrl !== currentSong.audioUrl)) {
      setCurrentSong(topSong);
      if (audioRef.current && topSong.audioUrl) {
        audioRef.current.pause();
        audioRef.current.src = encodeURI(topSong.audioUrl);
        if (isPlaying) {
          audioRef.current.play().catch(() => {});
        }
      }
    }
  }, [giftData.playlist.topSongs]);

  useEffect(() => {
    const audio = new Audio();
    audio.src = currentSong.audioUrl ? encodeURI(currentSong.audioUrl) : FALLBACK_AUDIO_URL;
    audio.loop = true;
    audioRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    const handleError = (e: Event) => {
      console.warn('Audio play error, falling back to lofi sample:', audio.src, e);
      if (audio.src !== FALLBACK_AUDIO_URL) {
        audio.src = FALLBACK_AUDIO_URL;
        if (isPlaying) {
          audio.play().catch(() => {});
        }
      }
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const startPlay = () => {
    if (!audioRef.current || isPlaying) return;
    if (currentSong.audioUrl) {
      audioRef.current.src = encodeURI(currentSong.audioUrl);
    }
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        if (audioRef.current) {
          audioRef.current.src = FALLBACK_AUDIO_URL;
          audioRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
        }
      });
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          if (audioRef.current) {
            audioRef.current.src = FALLBACK_AUDIO_URL;
            audioRef.current
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {});
          }
        });
    }
  };

  const playSong = (song: TopSongItem) => {
    const isSameSong = currentSong.id === song.id && currentSong.audioUrl === song.audioUrl;
    if (isSameSong) {
      togglePlay();
      return;
    }

    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = song.audioUrl ? encodeURI(song.audioUrl) : FALLBACK_AUDIO_URL;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          if (audioRef.current) {
            audioRef.current.src = FALLBACK_AUDIO_URL;
            audioRef.current
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {});
          }
        });
    }
  };

  const nextSong = () => {
    const songs = giftData.playlist.topSongs;
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id && s.audioUrl === currentSong.audioUrl);
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(songs[nextIndex]);
  };

  const prevSong = () => {
    const songs = giftData.playlist.topSongs;
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id && s.audioUrl === currentSong.audioUrl);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(songs[prevIndex]);
  };

  return (
    <MusicContext.Provider value={{ currentSong, isPlaying, togglePlay, playSong, startPlay, nextSong, prevSong }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
