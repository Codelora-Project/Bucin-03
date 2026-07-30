import React, { useEffect, useState } from 'react';
import { giftData } from '../data/giftData';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface CountdownGateProps {
  onCountdownEnded: () => void;
  onEnableDevMode: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOver: boolean;
}

export const CountdownGate: React.FC<CountdownGateProps> = ({ onCountdownEnded, onEnableDevMode }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(giftData.targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        onCountdownEnded();
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [onCountdownEnded]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center space-y-8"
      >
        {/* Minimal Subtitle Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold tracking-wider uppercase border border-amber-300/60 font-sans">
          Momen Istimewa Menuju Ulang Tahun
        </div>

        {/* Header Title in Cormorant Garamond */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 tracking-tight leading-tight">
            Kado Ulang Tahun Spesial <br />
            <span className="text-stone-700 font-normal">untuk</span>{' '}
            <span className="glow-gold-text italic font-semibold block mt-1">
              {giftData.recipientName}
            </span>
          </h1>
          <p className="text-stone-600 text-sm md:text-base max-w-lg mx-auto font-sans leading-relaxed pt-1">
            Hitung mundur menuju detik-detik kado ulang tahun terbuka.
          </p>
        </div>

        {/* Warm Glowing Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 my-8">
          {[
            { label: 'Hari', value: timeLeft.days },
            { label: 'Jam', value: timeLeft.hours },
            { label: 'Menit', value: timeLeft.minutes },
            { label: 'Detik', value: timeLeft.seconds }
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.08 * idx, duration: 0.4 }}
              className="glass-card rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center border border-amber-300/50 shadow-sm"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-amber-900">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-stone-500 mt-2 font-sans">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lock Status Card without emojis or lock icons */}
        <div className="glass-card rounded-2xl p-5 border border-amber-300/50 max-w-md mx-auto shadow-sm text-center">
          <h4 className="font-serif font-semibold text-stone-900 text-base">Akses Konten Belum Terbuka</h4>
          <p className="text-xs text-stone-600 leading-relaxed font-sans mt-1">
            Galeri kenangan, surat cinta, dan playlist akan terbuka otomatis saat waktu hitung mundur selesai.
          </p>
        </div>

        {/* Dev / Tester Bypass Section */}
        <div className="pt-6 border-t border-amber-200/50">
          <p className="text-xs text-stone-500 mb-3 font-sans">
            {giftData.devInstructions}
          </p>
          <button
            onClick={onEnableDevMode}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-amber-300 text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer border border-amber-500/20 shadow-sm font-sans"
          >
            <Eye className="w-4 h-4 text-amber-400" />
            <span>Buka Kado Sekarang (Preview Mode)</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
