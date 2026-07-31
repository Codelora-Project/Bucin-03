import React from 'react';
import { giftData, TimelineItem } from '../data/giftData';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const defaultImages = [
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop"
];

const parseDateDisplay = (dateStr: string) => {
  if (dateStr.toLowerCase().includes('today')) {
    return { year: 'TODAY', subDate: 'Special Day' };
  }
  const match = dateStr.match(/\d{4}/);
  const year = match ? match[0] : '2024';
  const subDate = dateStr.replace(/\d{4}/, '').replace(/,/g, '').trim();
  return { year, subDate };
};

export const TimelineSection: React.FC = () => {
  const items = giftData.timeline;

  return (
    <section id="timeline" className="py-16 md:py-24 px-4 max-w-5xl mx-auto relative overflow-hidden font-sans">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-semibold uppercase tracking-wider border border-amber-300/60 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          Relationship Journey
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
          Relationship Journey Timeline
        </h2>
        <p className="text-stone-600 text-base max-w-xl mx-auto leading-relaxed">
          From our first hello to today's special birthday celebration.
        </p>
      </div>

      {/* Main Timeline Wrapper */}
      <div className="relative">
        {/* Desktop Winding Serpentine SVG Path */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 1900" preserveAspectRatio="none">
            <defs>
              <linearGradient id="serpentineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="25%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#ea580c" />
                <stop offset="75%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing serpentine winding bezier path passing through node centers */}
            <path
              d="M 250 120 
                 C 600 120, 750 320, 750 500 
                 C 750 680, 250 720, 250 900 
                 C 250 1080, 750 1120, 750 1300 
                 C 750 1480, 250 1520, 250 1700"
              fill="none"
              stroke="url(#serpentineGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              filter="url(#pathGlow)"
              className="opacity-90"
            />
          </svg>
        </div>

        {/* Mobile Vertical Curved Guide Line */}
        <div className="md:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-amber-600 via-orange-500 to-amber-500 rounded-full opacity-60 pointer-events-none" />

        {/* Timeline Items */}
        <div className="space-y-20 md:space-y-32 relative z-10">
          {items.map((item: TimelineItem, idx: number) => {
            const { year, subDate } = parseDateDisplay(item.date);
            const isEven = idx % 2 === 0;
            const imgSrc = item.imageUrl || defaultImages[idx % defaultImages.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 1. Milestone Polaroid Photo Frame Node (No caption inside) */}
                <div className="w-full md:w-1/2 flex justify-center relative group">
                  <div
                    className={`relative bg-amber-50/95 p-3.5 pt-3.5 pb-9 sm:p-4 sm:pt-4 sm:pb-11 rounded-2xl border border-amber-200/80 shadow-xl group-hover:shadow-2xl transition-all duration-500 z-10 group-hover:scale-105 group-hover:rotate-0 ${
                      idx % 2 === 0 ? '-rotate-3' : 'rotate-3'
                    }`}
                  >
                    {/* Decorative Washi Tape on Top */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-amber-200/60 backdrop-blur-xs border border-amber-300/40 shadow-2xs z-20 rounded-xs pointer-events-none rotate-[-2deg]" />

                    {/* Polaroid Photo Frame */}
                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-xl overflow-hidden bg-stone-100 border border-amber-200/60 relative">
                      <img
                        src={imgSrc}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                    </div>
                  </div>
                </div>

                {/* 2. Text Info Card & Big Year Display */}
                <div
                  className={`w-full md:w-1/2 text-center ${
                    isEven ? 'md:text-left' : 'md:text-right'
                  } space-y-3`}
                >
                  {/* Prominent Year Header */}
                  <div className="inline-block">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-amber-900 tracking-tight block leading-none drop-shadow-xs">
                      {year}
                    </span>
                    <span className="text-xs sm:text-sm font-sans font-semibold text-amber-700 uppercase tracking-widest block mt-1">
                      {subDate}
                    </span>
                  </div>

                  {/* Card Box */}
                  <div className="glass-card rounded-3xl p-6 sm:p-7 border border-amber-300/60 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-amber-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform" />

                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        isEven ? 'md:justify-start' : 'md:justify-end'
                      } justify-center`}
                    >
                      <span className="px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold font-sans border border-amber-300/60 shadow-2xs">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base font-sans leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


