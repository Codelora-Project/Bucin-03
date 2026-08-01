import React, { useState } from 'react';
import { giftData } from '../data/giftData';
import { motion } from 'framer-motion';
import { Heart, ChevronUp, RotateCcw, Sparkles } from 'lucide-react';

export const LoveLetterSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const photo1 = giftData.gallery[0]?.url || "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop";
  const photo2 = giftData.gallery[1]?.url || "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop";

  return (
    <section id="surat" className="py-16 md:py-24 px-4 max-w-5xl mx-auto space-y-10 font-sans">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-semibold uppercase tracking-wider border border-amber-300/60 shadow-xs">
          <Heart className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
          Sincere Feelings
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
          A Love Letter Just for You
        </h2>
        <p className="text-stone-600 text-base max-w-xl mx-auto leading-relaxed">
          {isOpen
            ? "Read the sweet message written from the bottom of my heart."
            : "Surat berada di dalam amplop. Klik segel lilin atau tarik surat ke atas untuk membukanya."}
        </p>
      </div>

      {/* Main Interactive Open Envelope Container */}
      <div className="relative max-w-3xl md:max-w-4xl mx-auto">
        
        {/* Floating Pull Prompt Banner when closed */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{ opacity: { duration: 0.3 }, y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" } }}
            className="flex justify-center mb-5 cursor-pointer relative z-30"
            onClick={() => setIsOpen(true)}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7f1d1d] text-amber-100 text-xs sm:text-sm font-bold shadow-xl border border-red-800 hover:bg-[#991b1b] transition-colors">
              <ChevronUp className="w-4 h-4 text-amber-300 animate-bounce" />
              <span>Klik / Tarik Surat Ke Atas untuk Membuka</span>
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
          </motion.div>
        )}

        {/* ENVELOPE CONTAINER */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-[#7f1d1d] shadow-2xl border-4 border-[#991b1b] p-3 sm:p-6 md:p-8">
          
          {/* LAYER 1: BACK OF ENVELOPE & OPEN TOP FLAP CORNERS (DEEP RED) */}
          <div className="relative bg-[#ede8e1] rounded-2xl pt-6 pb-2 min-h-[440px] sm:min-h-[520px] overflow-hidden flex flex-col justify-between shadow-inner">
            
            {/* Top Red Flap Corners */}
            <div className="absolute top-0 left-0 right-0 h-16 sm:h-28 pointer-events-none z-0 flex">
              <div className="w-1/2 h-full bg-[#7f1d1d]" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />
              <div className="w-1/2 h-full bg-[#7f1d1d]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
            </div>

            {/* LAYER 2: THE LOVE LETTER CARD */}
            <div className="relative z-10 px-2 sm:px-8 pt-4">
              <motion.div
                layout
                animate={{
                  y: isOpen ? 0 : 0,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative bg-[#fffef8] rounded-sm shadow-2xl border border-amber-200/80 text-stone-900 transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? "p-6 sm:p-12 space-y-8 z-30"
                    : "p-5 sm:p-8 space-y-4 max-h-68 sm:max-h-80 cursor-pointer hover:-translate-y-4 z-10"
                }`}
                onClick={() => {
                  if (!isOpen) setIsOpen(true);
                }}
              >
                {/* Scalloped Postage Teeth Edge Overlays */}
                <div className="absolute -top-2.5 left-0 right-0 h-5 flex justify-around overflow-hidden pointer-events-none z-20">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-[#ede8e1] -mt-2 shrink-0 opacity-90" />
                  ))}
                </div>
                {isOpen && (
                  <div className="absolute -bottom-2.5 left-0 right-0 h-5 flex justify-around overflow-hidden pointer-events-none z-20">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div key={i} className="w-4 h-4 rounded-full bg-[#ede8e1] mt-2 shrink-0 opacity-90" />
                    ))}
                  </div>
                )}

                {/* 1. Header: "A LOVE LETTER" */}
                <div className="text-center pt-2 border-b border-amber-900/20 pb-4 space-y-1">
                  <h3 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#7f1d1d] tracking-widest uppercase drop-shadow-2xs">
                    A LOVE LETTER
                  </h3>
                </div>

                {/* 2. Meta Info Box: TO / FROM + Mini Photo Stamps */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 bg-amber-100/50 p-5 sm:p-6 rounded-2xl border border-amber-200/80">
                  {/* Left: TO & FROM */}
                  <div className="space-y-3 text-left w-full sm:w-auto">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs sm:text-sm font-bold text-[#7f1d1d] uppercase tracking-wider font-sans w-14">
                        TO:
                      </span>
                      <span className="font-serif italic text-2xl sm:text-3xl font-bold text-amber-900 border-b border-amber-900/40 pb-0.5 min-w-[160px] sm:min-w-[200px] block">
                        {giftData.recipientName}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs sm:text-sm font-bold text-[#7f1d1d] uppercase tracking-wider font-sans w-14">
                        FROM:
                      </span>
                      <span className="font-serif italic text-2xl sm:text-3xl font-bold text-amber-900 border-b border-amber-900/40 pb-0.5 min-w-[160px] sm:min-w-[200px] block">
                        {giftData.senderName}
                      </span>
                    </div>
                  </div>

                  {/* Right: 2 Mini Stamp Photos */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="relative p-1.5 bg-white border-2 border-dashed border-amber-800/40 shadow-sm rotate-[-4deg] rounded-xs">
                      <img
                        src={photo1}
                        alt="Stamp 1"
                        className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded-xs"
                      />
                    </div>
                    <div className="relative p-1.5 bg-white border-2 border-dashed border-amber-800/40 shadow-sm rotate-[5deg] rounded-xs">
                      <img
                        src={photo2}
                        alt="Stamp 2"
                        className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* CONTENT BELOW IS FULLY UNFOLDED WHEN isOpen = true */}
                {isOpen ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="space-y-6 pt-2"
                  >
                    {/* 3. Salutation Greeting */}
                    <div>
                      <h4 className="font-serif italic text-3xl sm:text-4xl font-bold text-[#7f1d1d]">
                        {giftData.letter.greeting}
                      </h4>
                    </div>

                    {/* 4. Letter Body Paragraphs */}
                    <div className="space-y-4 font-serif text-lg sm:text-xl text-stone-800 leading-relaxed text-justify">
                      {giftData.letter.contentParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    {/* 5. Closing & Signature */}
                    <div className="pt-6 border-t border-amber-900/20 text-right space-y-1">
                      <p className="text-stone-600 text-sm sm:text-base font-sans font-medium">
                        {giftData.letter.closing}
                      </p>
                      <p className="font-serif italic text-3xl sm:text-4xl font-bold text-[#7f1d1d]">
                        — {giftData.senderName}
                      </p>
                    </div>

                    {/* 6. Vintage Rubber Stamp Badge at Bottom Right */}
                    <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-24 h-24 rounded-full border-2 border-dashed border-[#7f1d1d]/60 flex flex-col items-center justify-center rotate-[-14deg] opacity-80 pointer-events-none select-none">
                      <div className="w-20 h-20 rounded-full border border-[#7f1d1d]/40 flex flex-col items-center justify-center p-1 text-center">
                        <span className="text-[8px] font-bold tracking-widest text-[#7f1d1d] uppercase font-sans">
                          MADE WITH
                        </span>
                        <Heart className="w-4 h-4 fill-[#7f1d1d] text-[#7f1d1d] my-0.5" />
                        <span className="text-[8px] font-bold tracking-widest text-[#7f1d1d] uppercase font-sans">
                          LOVE
                        </span>
                      </div>
                    </div>

                    {/* Secret Postscript */}
                    {giftData.letter.secretPostscript && (
                      <div className="mt-4 p-4 rounded-xl bg-amber-100/70 border border-amber-300/70 text-amber-950 text-xs sm:text-sm font-sans space-y-1">
                        <span className="font-bold">P.S.:</span>
                        <p>{giftData.letter.secretPostscript}</p>
                      </div>
                    )}

                    {/* Action Buttons (Re-fold Envelope) */}
                    <div className="flex items-center justify-start pt-6 border-t border-amber-900/10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsOpen(false);
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-950 text-xs sm:text-sm font-semibold hover:bg-amber-200 transition-colors shadow-2xs cursor-pointer font-sans"
                      >
                        <RotateCcw className="w-4 h-4 text-amber-800" />
                        <span>Masukkan Kembali Ke Amplop</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* PEEKING HINT OVERLAY WHEN CLOSED */
                  <div className="text-center pt-2 pb-3 space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#7f1d1d] uppercase tracking-widest animate-pulse font-sans">
                      <ChevronUp className="w-4 h-4 text-[#7f1d1d]" />
                      <span>Klik Atau Tarik Surat Ini Ke Atas Untuk Membaca</span>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* LAYER 3: FRONT OFF-WHITE V-SHAPED ENVELOPE POCKET WITH REALISTIC RED WAX SEAL */}
            {!isOpen && (
              <div
                className="relative -mt-16 sm:-mt-24 z-20 bg-[#e2ddd5] border-t border-stone-300/80 shadow-2xl flex flex-col items-center justify-center text-center cursor-pointer group pt-12 pb-8 px-6 overflow-hidden rounded-b-2xl"
                onClick={() => setIsOpen(true)}
              >
                {/* V-Pocket Triangular Shadows */}
                <div
                  className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-[#d8d2c7] opacity-90 shadow-md"
                  style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
                />

                {/* 3D Realistic Red Heart Wax Seal Button */}
                <div className="relative z-30 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-red-950 via-[#7f1d1d] to-red-600 shadow-2xl border-2 border-red-500/40 flex items-center justify-center my-2 group-hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-full border border-red-400/30 flex items-center justify-center bg-red-900/50">
                    <Heart className="w-7 h-7 sm:w-9 sm:h-9 fill-amber-200 text-amber-200 drop-shadow-md" />
                  </div>
                </div>

                <p className="font-serif italic text-xl sm:text-2xl text-[#7f1d1d] font-bold relative z-30 mt-1">
                  Surat Cinta Terbuka Di Dalam Amplop
                </p>
                <span className="text-xs sm:text-sm text-stone-600 font-sans relative z-30 mt-0.5">
                  Sentuh segel lilin atau tarik surat di atas untuk membukanya secara penuh
                </span>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
