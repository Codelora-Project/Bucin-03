import React, { useState } from 'react';
import { giftData, TopSongItem } from '../data/giftData';
import { motion } from 'framer-motion';
import { Play, Pause, Heart } from 'lucide-react';

export const PlaylistSection: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const data = giftData.playlist;

  const togglePlay = (song: TopSongItem) => {
    if (playingId === song.id) {
      setPlayingId(null);
    } else {
      setPlayingId(song.id);
      if (song.spotifyUrl) {
        window.open(song.spotifyUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <section id="playlist" className="py-12 md:py-20 px-4 max-w-6xl mx-auto font-sans">
      {/* Container with soft warm grid background matching reference image */}
      <div className="bg-amber-50/60 p-6 sm:p-10 md:p-14 rounded-3xl border border-amber-300/60 shadow-sm relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:18px_18px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: MUSIC CARD & QUOTE */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Music Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card-glow p-5 sm:p-6 rounded-3xl border border-amber-300/80 shadow-md relative space-y-4 max-w-md mx-auto lg:mx-0 bg-amber-100/70"
            >
              {/* Card Main Body */}
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Photo */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-300/80 shadow-xs bg-amber-50">
                    <img
                      src={data.musicCard.photoUrl}
                      alt={data.musicCard.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-[10px] text-amber-900/60 text-center mt-1.5 font-sans font-medium">
                    {data.musicCard.issuedDate}
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="space-y-1.5 text-xs sm:text-sm font-sans text-stone-800 flex-1">
                  <div className="text-amber-950 font-serif font-bold text-base sm:text-lg mb-1">
                    {data.musicCard.title}
                  </div>
                  <div>
                    <span className="text-amber-900/60 text-[11px]">Name: </span>
                    <span className="font-semibold">{data.musicCard.name}</span>
                  </div>
                  <div>
                    <span className="text-amber-900/60 text-[11px]">Song: </span>
                    <span className="font-semibold">{data.musicCard.song}</span>
                  </div>
                  <div>
                    <span className="text-amber-900/60 text-[11px]">Artist: </span>
                    <span className="font-semibold">{data.musicCard.artist}</span>
                  </div>
                  <div className="truncate">
                    <span className="text-amber-900/60 text-[11px]">Album: </span>
                    <span className="font-semibold">{data.musicCard.album}</span>
                  </div>
                </div>
              </div>

              {/* Card Bottom Bar (Barcode & Play Button) */}
              <div className="pt-3 border-t border-amber-300/60 flex items-center justify-between">
                {/* Barcode Graphic */}
                <div className="flex items-center gap-1 opacity-70">
                  <div className="h-5 w-0.5 bg-stone-800"></div>
                  <div className="h-5 w-1 bg-stone-800"></div>
                  <div className="h-5 w-0.5 bg-stone-800"></div>
                  <div className="h-5 w-1.5 bg-stone-800"></div>
                  <div className="h-5 w-0.5 bg-stone-800"></div>
                  <div className="h-5 w-1 bg-stone-800"></div>
                  <div className="h-5 w-2 bg-stone-800"></div>
                  <div className="h-5 w-0.5 bg-stone-800"></div>
                  <div className="h-5 w-1 bg-stone-800"></div>
                  <div className="h-5 w-0.5 bg-stone-800"></div>
                </div>

                <div className="text-[10px] font-mono text-amber-900/70 tracking-wider font-semibold">
                  {data.musicCard.code}
                </div>

                {/* Play Button */}
                <button
                  onClick={() => window.open(`https://open.spotify.com/search/${encodeURIComponent(data.musicCard.song)}`, '_blank')}
                  className="w-8 h-8 rounded-full bg-amber-800 hover:bg-amber-900 text-white flex items-center justify-center shadow-sm transition-colors cursor-pointer"
                  title="Play Song on Spotify"
                >
                  <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                </button>
              </div>
            </motion.div>

            {/* Romantic Quote Text */}
            <div className="space-y-2 text-center lg:text-left max-w-md mx-auto lg:mx-0 font-sans">
              <p className="text-stone-700 text-sm sm:text-base font-serif italic leading-relaxed">
                "{data.quote}"
              </p>
              <p className="text-xs text-amber-900/70 font-sans font-medium">
                {data.buddiesLabel}
              </p>
            </div>

          </div>

          {/* RIGHT SIDE: MY TOP 5 SONGS TAPED PAPER CARD */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-amber-300/60 relative w-full max-w-md -rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              {/* Semi-transparent Tape Accent at Top Center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-amber-200/70 backdrop-blur-sm border-t border-b border-amber-300/80 rotate-1 shadow-xs" />

              {/* Title Header with Minimalist Line-Art Heart Outline Accent */}
              <div className="flex items-center justify-between mb-6 pt-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  {data.topSongsTitle}
                </h3>

                {/* Minimalist Line-Art Heart Outline (Same line-art style as Share icon) */}
                <Heart className="w-4 h-4 text-amber-800/60 stroke-[1.75]" />
              </div>

              {/* Song List */}
              <div className="space-y-4">
                {data.topSongs.map((song) => {
                  const isCurrentlyPlaying = playingId === song.id;
                  return (
                    <div
                      key={song.id}
                      onClick={() => togglePlay(song)}
                      className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-amber-50/60 transition-colors group cursor-pointer"
                    >
                      {/* Album Cover & Details */}
                      <div className="flex items-center gap-3">
                        <img
                          src={song.coverUrl}
                          alt={song.title}
                          className="w-11 h-11 rounded-lg object-cover border border-amber-200/80 shadow-xs"
                        />
                        <div className="space-y-0.5">
                          <h4 className="font-semibold text-stone-900 text-sm font-sans group-hover:text-amber-900 transition-colors">
                            {song.title}
                          </h4>
                          <p className="text-xs text-stone-500 font-sans">
                            {song.artist}
                          </p>
                        </div>
                      </div>

                      {/* Play Button Circle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay(song);
                        }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-xs ${
                          isCurrentlyPlaying
                            ? 'bg-amber-800 text-white'
                            : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                        }`}
                        title="Play on Spotify"
                      >
                        {isCurrentlyPlaying ? (
                          <Pause className="w-3.5 h-3.5 fill-white" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-amber-900 ml-0.5" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
