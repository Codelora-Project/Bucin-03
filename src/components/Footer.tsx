import React, { useState } from 'react';
import { giftData } from '../data/giftData';
import { Code2, X, FileText, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Footer: React.FC = () => {
  const [showGuideModal, setShowGuideModal] = useState(false);

  return (
    <footer className="mt-16 pt-12 pb-16 px-4 bg-gradient-to-b from-transparent via-amber-100/30 to-amber-100/60 border-t border-amber-300/50 text-center relative z-10 font-sans w-full">
      <div className="max-w-3xl mx-auto space-y-6 flex flex-col items-center">
        {/* Main Footer Message */}
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-amber-950">
            Dibuat Khusus untuk {giftData.recipientName}
          </h3>
          <p className="text-stone-600 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            Semoga kado digital ini memberikan kebahagiaan di hari spesialmu.
          </p>
        </div>

        {/* Action Button for Creator */}
        <div className="pt-1">
          <button
            onClick={() => setShowGuideModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-amber-100/80 text-amber-950 text-xs font-semibold transition-all shadow-sm border border-amber-300/80 hover:shadow cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Cara Edit Konten (Untuk Pembuat Kado)</span>
          </button>
        </div>

        {/* Copyright Notice */}
        <div className="pt-6 border-t border-amber-300/40 w-full text-center text-[11px] text-stone-500">
          © {new Date().getFullYear()} • Personal Birthday Gift Site
        </div>
      </div>

      {/* Guide Modal for Content Editor */}
      <AnimatePresence>
        {showGuideModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowGuideModal(false)}
            className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-4 text-left"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-amber-300/80 text-stone-800 rounded-3xl max-w-xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative font-sans"
            >
              <button
                onClick={() => setShowGuideModal(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300/60">
                  Panduan Edit Konten
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Di mana Mengganti Foto, Teks & Tanggal?
                </h3>
              </div>

              <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-amber-900 text-xs uppercase tracking-wider">
                    <FileText className="w-4 h-4 text-amber-700" />
                    <span>File Terpusat: src/data/giftData.ts</span>
                  </div>
                  <p className="text-xs text-stone-600">
                    Semua isi website (nama pasangan, tanggal countdown, teka-teki puzzle, foto galeri, timeline, surat cinta, dan playlist Spotify) disimpan di satu file ini.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-stone-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span><strong>Ganti Nama & Tanggal:</strong> Ubah <code>targetDate</code> (ISO format) dan <code>recipientName</code>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span><strong>Ganti Foto & Video:</strong> Masukkan file foto ke folder <code>public/</code> dan ganti URL di <code>gallery</code>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span><strong>Ganti Playlist Spotify:</strong> Copy-paste link embed playlist Spotify kamu ke <code>spotifyEmbedUrl</code>.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setShowGuideModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold transition-colors cursor-pointer shadow-sm"
                >
                  Paham, Tutup Panduan
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
