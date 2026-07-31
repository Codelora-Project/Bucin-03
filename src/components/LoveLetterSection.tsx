import React, { useState } from 'react';
import { giftData } from '../data/giftData';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export const LoveLetterSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLetter = () => {
    const fullText = `${giftData.letter.greeting}\n\n${giftData.letter.contentParagraphs.join('\n\n')}\n\n${giftData.letter.closing}\n${giftData.letter.signature}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="surat" className="py-12 md:py-20 px-4 max-w-3xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold uppercase tracking-wider border border-amber-300/60 font-sans">
          Sincere Feelings
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900">
          A Love Letter Just for You
        </h2>
        <p className="text-stone-600 text-base max-w-xl mx-auto font-sans leading-relaxed">
          A sweet message written from the bottom of my heart.
        </p>
      </div>

      {/* Elegant Parchment Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-8 sm:p-12 shadow-xl border border-amber-300/60 relative space-y-6 overflow-hidden bg-amber-50/70"
      >
        {/* Greeting with Cormorant Garamond */}
        <div className="border-b border-amber-300/50 pb-4">
          <h3 className="font-serif text-3xl md:text-4xl font-semibold text-amber-950 leading-tight">
            {giftData.letter.greeting}
          </h3>
        </div>

        {/* Letter Body Paragraphs */}
        <div className="space-y-4 text-stone-800 font-serif text-base md:text-xl leading-relaxed pt-2">
          {giftData.letter.contentParagraphs.map((para, i) => (
            <p key={i}>
              {para}
            </p>
          ))}
        </div>

        {/* Closing & Signature */}
        <div className="pt-6 border-t border-amber-300/50 space-y-1 text-right">
          <p className="text-stone-600 text-sm font-sans font-medium">
            {giftData.letter.closing}
          </p>
          <p className="text-amber-950 font-serif text-3xl font-bold italic">
            {giftData.letter.signature}
          </p>
        </div>

        {/* Secret Postscript */}
        {giftData.letter.secretPostscript && (
          <div className="mt-4 p-4 rounded-2xl bg-amber-100/60 border border-amber-200/80 text-amber-950 text-xs font-sans space-y-1">
            <span className="font-semibold">Postscript:</span>
            <p>{giftData.letter.secretPostscript}</p>
          </div>
        )}

        {/* Copy Button */}
        <div className="flex justify-end pt-2">
          <button
            onClick={handleCopyLetter}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 border border-amber-300 text-stone-700 text-xs font-semibold hover:bg-amber-100 hover:text-amber-900 transition-colors shadow-sm cursor-pointer font-sans"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-700" />
                <span>Copy Letter Content</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};
