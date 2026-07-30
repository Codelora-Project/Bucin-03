import React from 'react';
import { giftData, TimelineItem } from '../data/giftData';
import { motion } from 'framer-motion';
import { Sparkles, Coffee, HeartHandshake, Gift, Cake, Calendar } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  Coffee,
  HeartHandshake,
  Gift,
  Cake
};

export const TimelineSection: React.FC = () => {
  const getIcon = (iconName?: string) => {
    if (iconName && iconMap[iconName]) {
      const IconComponent = iconMap[iconName];
      return <IconComponent className="w-4 h-4" />;
    }
    return <Sparkles className="w-4 h-4" />;
  };

  return (
    <section id="timeline" className="py-12 md:py-20 px-4 max-w-4xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold uppercase tracking-wider border border-amber-300/60 font-sans">
          Rangkaian Cerita Hubungan
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">
          Timeline Perjalanan Hubungan
        </h2>
        <p className="text-stone-600 text-base max-w-xl mx-auto font-sans leading-relaxed">
          Dari obrolan awal hingga momen ulang tahun istimewa hari ini.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative border-l-2 border-amber-300/60 ml-4 sm:ml-32 space-y-10">
        {giftData.timeline.map((item: TimelineItem, idx: number) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="relative pl-6 sm:pl-8 group"
          >
            {/* Timeline Icon Marker Node */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-amber-800 text-white flex items-center justify-center shadow-md ring-4 ring-amber-100/80 group-hover:scale-105 transition-transform">
              {getIcon(item.iconName)}
            </div>

            {/* Date Tag Desktop (Left side) */}
            <div className="hidden sm:block absolute -left-36 top-2.5 w-28 text-right font-serif font-semibold text-xs text-amber-900 tracking-wide">
              {item.date}
            </div>

            {/* Timeline Card */}
            <div className="glass-card rounded-2xl p-5 md:p-6 border border-amber-300/50 space-y-3 shadow-sm group-hover:shadow-md transition-all">
              {/* Date Mobile */}
              <div className="sm:hidden inline-flex items-center gap-1 text-xs font-semibold text-amber-900 mb-1 font-sans">
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>{item.date}</span>
              </div>

              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg md:text-xl font-serif font-semibold text-stone-900 leading-snug">
                  {item.title}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 text-[11px] font-semibold shrink-0 font-sans border border-amber-300/50">
                  {item.tag}
                </span>
              </div>

              <p className="text-stone-700 text-sm md:text-base font-sans leading-relaxed">
                {item.description}
              </p>

              {/* Optional Photo Attachment */}
              {item.imageUrl && (
                <div className="mt-3 rounded-xl overflow-hidden aspect-[16/9] bg-stone-100 max-h-56 shadow-sm border border-amber-200/60">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
