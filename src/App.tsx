import React, { useState, useEffect } from 'react';
import { giftData } from './data/giftData';
import { FloatingHearts } from './components/FloatingHearts';
import { CountdownGate } from './components/CountdownGate';
import { PuzzleGate } from './components/PuzzleGate';
import { Navbar } from './components/Navbar';
import { GallerySection } from './components/GallerySection';
import { TimelineSection } from './components/TimelineSection';
import { LoveLetterSection } from './components/LoveLetterSection';
import { PlaylistSection } from './components/PlaylistSection';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

export const App: React.FC = () => {
  const [isCountdownOver, setIsCountdownOver] = useState<boolean>(false);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [isDevMode, setIsDevMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('galeri');

  useEffect(() => {
    const target = new Date(giftData.targetDate).getTime();
    const now = new Date().getTime();
    if (now >= target) {
      setIsCountdownOver(true);
    }

    const storedUnlock = localStorage.getItem('bucin_gift_unlocked');
    if (storedUnlock === 'true') {
      setIsUnlocked(true);
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get('preview') === 'true') {
      setIsDevMode(true);
    }
  }, []);

  const handleUnlockSuccess = () => {
    setIsUnlocked(true);
    localStorage.setItem('bucin_gift_unlocked', 'true');
  };

  const handleResetLock = () => {
    localStorage.removeItem('bucin_gift_unlocked');
    setIsUnlocked(false);
    setIsDevMode(false);
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showCountdown = !isCountdownOver && !isDevMode && !isUnlocked;
  const showPuzzle = (isCountdownOver || isDevMode) && !isUnlocked;

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans bg-gradient-to-br from-amber-100/90 via-orange-50/85 to-amber-100/70">
      {/* Background Floating Warm Lights & Ambient Orbs */}
      <FloatingHearts />

      {/* PHASE 1: COUNTDOWN GATE */}
      {showCountdown && (
        <CountdownGate
          onCountdownEnded={() => setIsCountdownOver(true)}
          onEnableDevMode={() => {
            setIsDevMode(true);
            setIsCountdownOver(true);
          }}
        />
      )}

      {/* PHASE 2: PUZZLE UNLOCK GATE */}
      {showPuzzle && (
        <PuzzleGate onUnlockSuccess={handleUnlockSuccess} />
      )}

      {/* PHASE 3: MAIN UNLOCKED GIFT WEBSITE */}
      {isUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col min-h-screen"
        >
          {/* Top Sticky Navigation */}
          <Navbar
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
            isDevMode={isDevMode}
            onResetLock={handleResetLock}
          />

          {/* Hero Welcome Banner */}
          <section className="pt-10 pb-12 px-4 text-center max-w-4xl mx-auto space-y-4 font-sans">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-semibold uppercase tracking-wider border border-amber-300/60"
            >
              Happy {giftData.birthdayAge}rd Birthday
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 leading-tight">
              Happy Birthday, <br />
              <span className="glow-gold-text italic block mt-1">
                {giftData.recipientName}
              </span>
            </h1>

            <p className="text-stone-600 text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed">
              I created this website specially to celebrate your special moment. Enjoy exploring all the sweet memories below.
            </p>
          </section>

          {/* Main Content Sections */}
          <div className="space-y-12 flex-1">
            <GallerySection />
            <TimelineSection />
            <LoveLetterSection />
            <PlaylistSection />
          </div>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}
    </div>
  );
};
export default App;
