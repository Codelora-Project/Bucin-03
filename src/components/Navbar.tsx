import React from 'react';
import { giftData } from '../data/giftData';
import { Image, Clock, Mail, Music, Eye } from 'lucide-react';
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
  const navItems = [
    { id: 'galeri', label: 'Galeri Foto', icon: Image },
    { id: 'timeline', label: 'Perjalanan', icon: Clock },
    { id: 'surat', label: 'Surat Cinta', icon: Mail },
    { id: 'playlist', label: 'Playlist', icon: Music }
  ];

  return (
    <header className="sticky top-4 z-50 max-w-4xl mx-auto px-4">
      <nav className="glass-card rounded-full p-2 border border-amber-300/60 shadow-xl flex items-center justify-between gap-1 md:gap-2">
        {/* Brand / Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full hover:bg-amber-100/50 transition-colors shrink-0 cursor-pointer"
        >
          <span className="font-serif text-lg md:text-xl font-bold text-amber-900 hidden sm:inline">
            HUT {giftData.recipientName}
          </span>
        </button>

        {/* Links */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`relative px-3 md:px-4 py-2 rounded-full font-medium text-xs md:text-sm transition-all flex items-center gap-1.5 shrink-0 cursor-pointer font-sans ${
                  isActive
                    ? 'text-amber-950 font-bold'
                    : 'text-stone-700 hover:text-amber-900 hover:bg-amber-100/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-amber-200/80 border border-amber-300/80 rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-800' : 'text-stone-500'}`} />
                  <span>{item.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Actions (Dev indicator & Lock reset) */}
        <div className="flex items-center gap-1 shrink-0 pr-1">
          {isDevMode && (
            <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-200/80 text-amber-950 text-xs font-semibold border border-amber-300">
              <Eye className="w-3.5 h-3.5 text-amber-800" />
              <span>Preview</span>
            </span>
          )}
          <button
            onClick={onResetLock}
            className="px-3 py-1 rounded-full text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-amber-100/60 transition-colors cursor-pointer"
          >
            Kunci Ulang
          </button>
        </div>
      </nav>
    </header>
  );
};
