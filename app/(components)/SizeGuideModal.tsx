'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto">
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-50 p-2 rounded-lg">
                      <Ruler className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 font-display">
                      Panduan Ukuran Kertas
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-900"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Visual Comparison */}
                  <div className="relative aspect-[1/1.414] bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 p-8 flex items-end justify-center">
                    {/* A3 */}
                    <div className="absolute inset-8 bg-white shadow-md border border-slate-200 flex flex-col justify-between p-4">
                      <span className="font-bold text-slate-900 text-lg">A3</span>
                      <span className="text-slate-400 text-sm">29.7 x 42.0 cm</span>
                      
                      {/* A4 */}
                      <div className="absolute bottom-4 right-4 w-[210px] h-[297px] bg-orange-50 border border-orange-200 flex flex-col justify-between p-3 shadow-sm transform scale-[0.4] origin-bottom-right sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.7] transition-transform">
                        <span className="font-bold text-orange-700 text-xs">A4</span>
                        <span className="text-orange-600 text-[10px]">21.0 x 29.7 cm</span>
                        
                        {/* A5 */}
                        <div className="absolute bottom-2 right-2 w-[148px] h-[210px] bg-blue-50 border border-blue-200 flex flex-col justify-between p-2 shadow-sm transform scale-75 origin-bottom-right">
                          <span className="font-bold text-blue-700 text-[8px]">A5</span>
                          <span className="text-blue-600 text-[6px]">14.8 x 21.0 cm</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Size Table & Details */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Detail Ukuran</h3>
                      <div className="overflow-hidden rounded-xl border border-slate-200">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-slate-50 text-slate-900 font-bold">
                            <tr>
                              <th className="px-6 py-4">Format</th>
                              <th className="px-6 py-4">Ukuran (cm)</th>
                              <th className="px-6 py-4">Ukuran (mm)</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            <tr className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4 font-medium text-slate-900">A3</td>
                              <td className="px-6 py-4 text-slate-600">29.7 x 42.0</td>
                              <td className="px-6 py-4 text-slate-600">297 x 420</td>
                            </tr>
                            <tr className="hover:bg-slate-50 transition-colors bg-orange-50/30">
                              <td className="px-6 py-4 font-medium text-slate-900">A4</td>
                              <td className="px-6 py-4 text-slate-600">21.0 x 29.7</td>
                              <td className="px-6 py-4 text-slate-600">210 x 297</td>
                            </tr>
                            <tr className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4 font-medium text-slate-900">A5</td>
                              <td className="px-6 py-4 text-slate-600">14.8 x 21.0</td>
                              <td className="px-6 py-4 text-slate-600">148 x 210</td>
                            </tr>
                            <tr className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4 font-medium text-slate-900">A6</td>
                              <td className="px-6 py-4 text-slate-600">10.5 x 14.8</td>
                              <td className="px-6 py-4 text-slate-600">105 x 148</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                        Tips Memilih Ukuran
                      </h4>
                      <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex gap-2">
                          <span className="font-bold text-slate-900 min-w-[24px]">A3:</span>
                          Ideal untuk poster, denah, diagram, atau kalender dinding.
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-slate-900 min-w-[24px]">A4:</span>
                          Standar dokumen kantor, surat menyurat, majalah, dan flyer.
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-slate-900 min-w-[24px]">A5:</span>
                          Populer untuk buku catatan, novel, brosur lipat, dan flyer event.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Tutup Panduan
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
