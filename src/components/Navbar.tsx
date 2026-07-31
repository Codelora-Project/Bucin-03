import React, { useState, useEffect } from 'react';
import { giftData } from '../data/giftData';
import { Image, Clock, Mail, Music, Eye, Gift, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  isDevMode: boolean;
  onResetLock: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSelectSection,
  isDevMode,
  onResetLock
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'galeri', label: 'Photo Gallery', shortLabel: 'Gallery', icon: Image },
    { id: 'timeline', label: 'Journey', shortLabel: 'Journey', icon: Clock },
    { id: 'surat', label: 'Love Letter', shortLabel: 'Letter', icon: Mail },
    { id: 'playlist', label: 'Playlist', shortLabel: 'Playlist', icon: Music }
  ];

  return (
    <header className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 w-full max-w-4xl px-2 sm:px-4 z-50 transition-all duration-300">
      <nav
        className={`rounded-full p-1 sm:p-2 border transition-all duration-300 flex items-center justify-between gap-0.5 sm:gap-2 ${
          isScrolled
            ? 'bg-amber-50/45 backdrop-blur-xl border-amber-300/70 shadow-lg shadow-amber-950/10'
            : 'bg-amber-50/90 backdrop-blur-md border-amber-300/60 shadow-md'
        }`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1 sm:gap-2 pl-2 sm:pl-3 pr-1 sm:pr-2 py-1 sm:py-1.5 rounded-full hover:bg-amber-100/60 transition-colors shrink-0 cursor-pointer"
          title="Scroll to top"
        >
          <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-amber-800" />
          <span className="font-serif text-xs sm:text-lg md:text-xl font-bold text-amber-900 hidden md:inline">
            HBD {giftData.recipientName}
          </span>
        </button>

        {/* Links Container */}
        <div className="flex-1 min-w-0 flex items-center justify-evenly sm:justify-center gap-0.5 sm:gap-1 py-0.5 overflow-x-auto no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`relative px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full font-medium text-[11px] sm:text-xs md:text-sm transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 cursor-pointer font-sans whitespace-nowrap ${
                  isActive
                    ? 'text-amber-950 font-bold'
                    : 'text-stone-700 hover:text-amber-900 hover:bg-amber-100/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-amber-200/90 border border-amber-300/80 rounded-full shadow-2xs"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-amber-800' : 'text-stone-500'}`} />
                  <span className="hidden md:inline">{item.label}</span>
                  <span className="md:hidden">{item.shortLabel}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Actions (Dev indicator & Lock reset) */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0 pr-1">
          {isDevMode && (
            <span className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-200/80 text-amber-950 text-xs font-semibold border border-amber-300">
              <Eye className="w-3.5 h-3.5 text-amber-800" />
              <span>Preview</span>
            </span>
          )}
          <button
            onClick={onResetLock}
            className="px-2 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-amber-100/60 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1"
            title="Relock Gift"
          >
            <RotateCcw className="w-3 h-3 text-stone-500 sm:hidden" />
            <span>Relock</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

