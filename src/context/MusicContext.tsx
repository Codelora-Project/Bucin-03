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
  title: 'Sampai Jadi Debu',
  artist: 'Banda Neira',
  coverUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=200&auto=format&fit=crop',
  audioUrl: '/assets/sampai-jadi-debu.mp3',
};

const FALLBACK_AUDIO_URL = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3';

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialSong = giftData.playlist.topSongs[0] || DEFAULT_SONG;
  const [currentSong, setCurrentSong] = useState<TopSongItem>(initialSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.src = currentSong.audioUrl || FALLBACK_AUDIO_URL;
    audio.loop = true;
    audioRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    const handleError = () => {
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
    if (currentSong.id === song.id) {
      togglePlay();
      return;
    }

    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = song.audioUrl || FALLBACK_AUDIO_URL;
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
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(songs[nextIndex]);
  };

  const prevSong = () => {
    const songs = giftData.playlist.topSongs;
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
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
