import React from 'react';
import { giftData, SongItem } from '../data/giftData';
import { motion } from 'framer-motion';
import { Music, ExternalLink, Disc } from 'lucide-react';

export const PlaylistSection: React.FC = () => {
  return (
    <section id="playlist" className="py-12 md:py-20 px-4 max-w-4xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold uppercase tracking-wider border border-amber-300/60 font-sans">
          Lagu-Lagu Kenangan
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">
          Playlist Kenangan Berdua
        </h2>
        <p className="text-stone-600 text-base max-w-xl mx-auto font-sans leading-relaxed">
          {giftData.playlist.description}
        </p>
      </div>

      {/* Main Grid: Embed Player + Songs Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left: Spotify Embed Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 glass-card rounded-3xl p-4 border border-amber-300/60 shadow-lg space-y-4"
        >
          <div className="flex items-center justify-between px-2 pt-1 font-sans">
            <div className="flex items-center gap-2 font-semibold font-serif text-amber-900 text-sm">
              <Disc className="w-4 h-4 text-amber-700" />
              <span>Spotify Player</span>
            </div>
            <a
              href={giftData.playlist.spotifyDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-amber-800 font-semibold hover:underline"
            >
              <span>Buka di Spotify</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Spotify Embed Iframe */}
          <div className="rounded-2xl overflow-hidden shadow-inner bg-stone-900 min-h-[350px] border border-amber-300/30">
            <iframe
              style={{ borderRadius: '12px' }}
              src={giftData.playlist.spotifyEmbedUrl}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            />
          </div>

          <div className="text-center pt-1 font-sans">
            <a
              href={giftData.playlist.spotifyDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
            >
              <Music className="w-4 h-4" />
              <span>Putar Langsung di Spotify</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Favorite Song Memories Cards */}
        <div className="md:col-span-7 space-y-3">
          <h3 className="text-lg font-semibold font-serif text-stone-900 px-1">
            Cerita di Balik Lagu-Lagu Ini
          </h3>

          {giftData.playlist.favoriteSongs.map((song: SongItem, idx: number) => (
            <motion.div
              key={song.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="glass-card rounded-2xl p-4 border border-amber-300/50 shadow-sm space-y-1 hover:border-amber-400 transition-colors"
            >
              <div className="flex items-center justify-between font-sans">
                <h4 className="font-semibold text-stone-900 font-serif text-base">
                  {song.title}
                </h4>
                <span className="text-xs text-amber-800 font-medium">
                  {song.artist}
                </span>
              </div>
              <p className="text-stone-600 text-xs md:text-sm font-sans leading-relaxed">
                {song.memory}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
