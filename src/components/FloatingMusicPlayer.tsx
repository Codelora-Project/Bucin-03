import React, { useState, useEffect } from 'react';
import { useMusic } from '../context/MusicContext';
import { Play, Pause, SkipBack, SkipForward, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingMusicPlayer: React.FC = () => {
  const { currentSong, isPlaying, togglePlay, startPlay, nextSong, prevSong } = useMusic();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    startPlay();
  }, []);

  return (
    <div 
      className="fixed bottom-5 right-8 sm:right-12 z-[99990] flex flex-col items-end select-none font-sans"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Pop-up Song Info Badge on Hover/Playing */}
      <AnimatePresence>
        {(showTooltip || isPlaying) && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-2 px-3 py-1 rounded-full bg-stone-900/90 text-amber-100 backdrop-blur-md border border-amber-500/40 shadow-xl flex items-center gap-1.5 text-[11px] sm:text-xs"
          >
            <Music className={`w-3 h-3 text-amber-400 ${isPlaying ? 'animate-bounce' : ''}`} />
            <div className="max-w-[130px] sm:max-w-[170px] truncate">
              <span className="font-semibold text-white">{currentSong.title}</span>
              <span className="text-amber-300/80 ml-1">• {currentSong.artist}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compact 3D Neumorphic Vinyl Record Player Body */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative flex flex-col items-center"
      >
        {/* Console Box */}
        <div className="relative flex items-center bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200/90 border-2 border-amber-300/80 shadow-[0_8px_20px_rgba(217,119,6,0.2),inset_0_1.5px_3px_rgba(255,255,255,0.8)] rounded-2xl p-2 pr-3.5 sm:pr-4 gap-2.5 sm:gap-3">
          
          {/* LEFT: Compact Vinyl Record Disc & Tone Arm */}
          <div className="relative shrink-0 flex items-center justify-center">
            {/* Black Vinyl Record Disk */}
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-stone-950 via-stone-900 to-stone-950 shadow-lg border border-stone-800 flex items-center justify-center relative overflow-hidden"
              style={{
                animation: 'spinSlow 3s linear infinite',
                animationPlayState: isPlaying ? 'running' : 'paused',
              }}
            >
              {/* Asymmetrical Light Glare Sheen Overlay (Makes 360° spin crystal clear!) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent pointer-events-none" />

              <div className="absolute inset-0.5 rounded-full border border-stone-700/40" />
              <div className="absolute inset-1.5 rounded-full border border-stone-700/30" />
              <div className="absolute inset-2.5 rounded-full border border-stone-700/20" />

              {/* Center Vinyl Label with Asymmetric Marker */}
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 border border-amber-300 flex items-center justify-center shadow-inner relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-100 relative">
                  <div className="absolute -top-1 left-0.5 w-1 h-1 rounded-full bg-amber-950" />
                </div>
              </div>
            </div>

            {/* Silver Tone Arm */}
            <motion.div
              animate={{ rotate: isPlaying ? 20 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute -top-1 left-9 sm:left-10 w-6 h-0.5 bg-gradient-to-r from-stone-400 to-stone-300 rounded-full shadow-xs origin-top-left pointer-events-none z-20"
            >
              <div className="absolute right-0 -top-0.5 w-2 h-2 bg-amber-600 rounded-2xs shadow-2xs" />
            </motion.div>
          </div>

          {/* RIGHT: Compact Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Skip Back */}
            <button
              onClick={prevSong}
              className="p-1 text-amber-900/70 hover:text-amber-950 hover:scale-110 active:scale-95 transition-all cursor-pointer"
              title="Lagu Sebelumnya"
            >
              <SkipBack className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-900/60" />
            </button>

            {/* 3D Inset Play/Pause Circle Button */}
            <div className="p-0.5 rounded-full bg-amber-200/90 border border-amber-300 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.15)] flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-white flex items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer"
                title={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                ) : (
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white ml-0.5" />
                )}
              </button>
            </div>

            {/* Skip Forward */}
            <button
              onClick={nextSong}
              className="p-1 text-amber-900/70 hover:text-amber-950 hover:scale-110 active:scale-95 transition-all cursor-pointer"
              title="Lagu Selanjutnya"
            >
              <SkipForward className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-900/60" />
            </button>
          </div>
        </div>

        {/* BOTTOM: Speaker Base */}
        <div className="w-[80%] h-3 -mt-0.5 bg-gradient-to-b from-amber-200/90 to-amber-300/80 border-b border-x border-amber-400/60 rounded-b-xl shadow-xs flex flex-col justify-center items-center px-3 space-y-[1px] overflow-hidden">
          <div className="w-full h-[1px] bg-amber-800/30 rounded-full" />
          <div className="w-4/5 h-[1px] bg-amber-800/30 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingMusicPlayer;
