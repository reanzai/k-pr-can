import { useState } from 'react';
import { Leaf, DollarSign, Clock, FileText, Check, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SavingsCalculatorProps {
  onOpenDemo: (campaignName?: string) => void;
}

export default function SavingsCalculator({ onOpenDemo }: SavingsCalculatorProps) {
  const [invoiceCount, setInvoiceCount] = useState<number>(2500);

  // Constants
  const PAPER_COST_PER_INVOICE = 8.5; // Paper, envelope, toner, postage
  const KOPRU_COST_PER_INVOICE = 0.28; // Average e-invoice bundle cost
  const MINUTES_SAVED_PER_INVOICE = 2; // Printing, packing, posting, archiving

  // Calculations
  const monthlyPaperCost = invoiceCount * PAPER_COST_PER_INVOICE;
  const monthlyKopruCost = invoiceCount * KOPRU_COST_PER_INVOICE;
  const monthlyFinancialSavings = monthlyPaperCost - monthlyKopruCost;
  const annualFinancialSavings = monthlyFinancialSavings * 12;

  const annualPaperSheetsSaved = invoiceCount * 2 * 12; // 2 pages per invoice
  const annualTreesSaved = Math.round(annualPaperSheetsSaved / 8300); // ~8,300 pages of paper = 1 tree
  const annualHoursSaved = Math.round((invoiceCount * MINUTES_SAVED_PER_INVOICE * 12) / 60);

  return (
    <section id="e-donusum" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold tracking-wide uppercase">
            <Leaf className="w-3.5 h-3.5 text-emerald-500" />
            <span>e-Dönüşüm Tasarruf Hesaplayıcı</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Kağıdı Bırakın, <span className="text-brand-blue">Köprü Soft</span> ile Dijitalleşin!
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Gelir İdaresi Başkanlığı tam uyumlu altyapımız ile hem gezegenimizi hem de bütçenizi koruyun.
          </p>
        </div>

        {/* Calculator Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-premium">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 font-display">Aylık İşlem Hacmi</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Ayda ortalama kestiğiniz e-Fatura, e-Arşiv, e-SMM veya e-Müstahsil makbuzu sayısını aşağıdaki kaydırıcıyı sürükleyerek girin.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-600">Aylık Fatura Adedi:</span>
                <span className="text-lg font-extrabold text-brand-blue font-display">
                  {invoiceCount.toLocaleString('tr-TR')}
                </span>
              </div>
              
              <input 
                type="range" 
                min="100" 
                max="50000" 
                step="100"
                value={invoiceCount} 
                onChange={(e) => setInvoiceCount(parseInt(e.target.value))}
                className="w-full accent-brand-blue cursor-pointer h-2 bg-slate-100 rounded-lg appearance-none"
              />

              <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                <span>100</span>
                <span>25.000</span>
                <span>50.000</span>
              </div>
            </div>

            {/* Core structural compliance bullets */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>GİB standartlarına %100 uyumlu, anında yasal gönderim</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Mali Müşavir paneli ile tek tıkla Excel/XML aktarımı</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>10 yıl boyunca GİB standartlarında ücretsiz saklama garantisi</span>
              </div>
            </div>
          </div>

          {/* Results Summary Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <p className="text-xs text-slate-400 font-extrabold uppercase tracking-wider">YILLIK NET TASARRUFUNUZ</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-display mt-1">
                  ₺{Math.round(annualFinancialSavings).toLocaleString('tr-TR')}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Geleneksel matbaa, zarf, toner ve kargo maliyetlerinize kıyasla elde edilen kazançtır.
                </p>
              </div>

              {/* Grid of Environmental & Productivity Metrics */}
              <div className="grid grid-cols-3 gap-4">
                
                {/* Metric 1 */}
                <div className="space-y-1.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-400 font-bold">Kurtarılan Kağıt</p>
                  <p className="text-sm font-extrabold text-slate-800 font-display">
                    {annualPaperSheetsSaved.toLocaleString('tr-TR')} Yaprak
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="space-y-1.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-400 font-bold">Kurtarılan Ağaç</p>
                  <p className="text-sm font-extrabold text-emerald-600 font-display">
                    {annualTreesSaved} Yetişkin Ağaç
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="space-y-1.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-400 font-bold">Kazanılan Zaman</p>
                  <p className="text-sm font-extrabold text-slate-800 font-display">
                    {annualHoursSaved} İş Saati
                  </p>
                </div>

              </div>
            </div>

            {/* CTA action */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
              <span className="text-xs text-slate-500 leading-tight">
                Hemen GİB Entegratörlük sistemine geçin, ücretsiz e-imza hediyenizi kazanın.
              </span>
              <button 
                onClick={() => onOpenDemo(`e-Donusum Tasarruf - Aylık ${invoiceCount} Fatura`)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Hemen Başvur</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
