import React from 'react';
import { giftData } from '../data/giftData';
import { motion } from 'framer-motion';

export const GallerySection: React.FC = () => {
  // Organic scattered offsets and tilts for a realistic messy photo table collage
  const scatteredStyles = [
    { rotate: -7.5, translateY: 12, translateX: -6 },
    { rotate: 6.2, translateY: -16, translateX: 8 },
    { rotate: -5.8, translateY: 18, translateX: -4 },
    { rotate: 8.0, translateY: -10, translateX: 10 },
    { rotate: -6.5, translateY: 14, translateX: -8 },
    { rotate: 7.2, translateY: -18, translateX: 6 },
    { rotate: -8.0, translateY: 10, translateX: -10 },
    { rotate: 5.8, translateY: -12, translateX: 8 }
  ];
  
  return (
    <section id="galeri" className="py-12 md:py-20 px-4 max-w-7xl mx-auto space-y-10 overflow-hidden">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold uppercase tracking-wider border border-amber-300/60 font-sans">
          Bingkai Kenangan Manis
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">
          Galeri Foto Polaroid Kita
        </h2>
        <p className="text-stone-600 text-base max-w-xl mx-auto font-sans leading-relaxed">
          Kumpulan momen manis yang abadi tersimpan dalam setiap bingkai polaroid.
        </p>
      </div>

      {/* Larger & Messy Scattered Overlapping Polaroid Photo Canvas */}
      <div className="py-8 px-2 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 -space-x-2 md:-space-x-4">
          {giftData.gallery.map((item, idx) => {
            const styleConfig = scatteredStyles[idx % scatteredStyles.length];
            const itemRotation = item.rotation ?? styleConfig.rotate;

            return (
              <motion.div
                key={item.id}
                initial={{ 
                  opacity: 0, 
                  y: styleConfig.translateY + 20, 
                  x: styleConfig.translateX, 
                  rotate: itemRotation 
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: styleConfig.translateY, 
                  x: styleConfig.translateX, 
                  rotate: itemRotation 
                }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{
                  rotate: 0,
                  scale: 1.0,
                  y: 0,
                  x: 0,
                  zIndex: 50,
                  transition: { type: 'spring', stiffness: 280, damping: 18 }
                }}
                className="bg-white p-3 pt-3 pb-8 md:p-4 md:pt-4 md:pb-12 shadow-xl hover:shadow-2xl border border-stone-200/90 relative flex flex-col rounded-xs select-none cursor-pointer"
              >
                {/* Larger Photo Image Frame (3:4 Polaroid Aspect Ratio) */}
                <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden border border-stone-200/50 shadow-inner">
                  <img
                    src={item.url}
                    alt={item.caption || "Foto Kenangan"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
