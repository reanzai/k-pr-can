import { useState } from 'react';
import { Award, ChevronRight, CheckCircle2, CloudLightning, HelpCircle, Gift, Server, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenDemo: (campaignName?: string) => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  // Let's add an interactive state: User can play with a "Monthly Target Revenue" slider or simulated scale
  // and see how e-invoices, branches, and simulated cloud server discount change.
  const [targetRevenue, setTargetRevenue] = useState<number>(14.8); // Millions of TL

  // Equations for interactive calculations:
  const monthlyInvoices = Math.round(targetRevenue * 1920);
  const activeBranches = Math.round(targetRevenue * 2.8);
  const percentGrowth = (targetRevenue * 1.6 + 1.2).toFixed(1);

  return (
    <section className="relative bg-gradient-to-b from-blue-50/70 via-white to-white border-b border-slate-100 overflow-hidden py-10 sm:py-16 lg:py-24">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-sky-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-brand-blue text-xs font-black tracking-widest uppercase pb-1">
              <Award className="w-4 h-4 text-brand-accent flex-shrink-0 animate-pulse" />
              <span>2026 Kurumsal Dönüşüm Kampanyası</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-brand-navy leading-[1.1] tracking-tight">
              KÖPRÜ SOFT <br />
              <span className="text-brand-blue relative">
                Başarıyı
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-accent/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> Ödüllendiriyor!
            </h1>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              KÖPRÜ SOFT olarak başarıya giden yoldaki rehberliğimiz ve vizyoner büyümeniz ile, Türkiye'nin en güçlü iş ortaklarına kusursuz bir iş ekosistemi sunuyoruz. Entegre bulut ERP, e-Fatura, yapay zekâ destekli analitik ve sektörel çözümlerle şimdi geleceğinizi inşa edin!
            </p>

            {/* Quick Interactive Slider for engagement */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 max-w-xl shadow-sm">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                <span>Şirketinizin Aylık Hedef Cirosunu Ayarlayın:</span>
                <span className="text-brand-blue font-display text-sm">₺{targetRevenue.toFixed(1)}M</span>
              </div>
              <input 
                type="range" 
                min="1.0" 
                max="50.0" 
                step="0.5"
                value={targetRevenue} 
                onChange={(e) => setTargetRevenue(parseFloat(e.target.value))}
                className="w-full accent-brand-blue cursor-pointer"
              />
              <p className="text-[10px] text-slate-400 mt-1">
                Aşağıdaki göstergelerin ve bulut ihtiyaçlarınızın bu hacme göre nasıl hesaplandığını canlı izleyin!
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a 
                href="#kampanyalar"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-navy hover:bg-slate-900 text-white font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>Detayları Gör</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => onOpenDemo(`Aylık Ciro Hedefi: ₺${targetRevenue.toFixed(1)}M Hızlı Teklif`)}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-slate-300 hover:border-brand-blue text-slate-700 hover:text-brand-blue font-semibold text-sm rounded-lg transition-all shadow-sm cursor-pointer"
              >
                Hızlı Teklif Al
              </button>
            </div>

            {/* Checked Compliance badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>GİB e-Defter Onaylı</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>%100 Bulut Uyumlu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>7/24 Kesintisiz Ar-Ge</span>
              </div>
            </div>
          </div>

          {/* Right Visual Dashboard Mockup Column */}
          <div className="lg:col-span-6 relative">
            
            {/* Background geometric accents */}
            <div className="absolute inset-0 bg-blue-100/40 rounded-3xl -rotate-2 scale-102 blur-lg -z-10" />

            {/* Core Interactive Card Container */}
            <div className="relative bg-gradient-to-tr from-slate-100 via-blue-50 to-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-premium">
              
              {/* Floating Active Migration Status */}
              <div className="absolute -top-4 right-6 bg-white shadow-lg rounded-xl p-3 border border-slate-100 flex items-center space-x-3 transition-transform hover:scale-105 z-10">
                <div className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <CloudLightning className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wide">Bulut Göçü</p>
                  <p className="text-xs font-bold text-slate-800">%99.98 Uptime Garantisi</p>
                </div>
              </div>

              {/* simulated OS bar */}
              <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-bold text-slate-600 ml-2 font-display">Köprü ERP Hub v25.4</span>
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 flex items-center gap-1.5 uppercase tracking-wider animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    CANLI VERİ
                  </span>
                </div>

                {/* Grid of Dynamic Indicators based on the engagement slider */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col justify-between">
                    <p className="text-[9px] uppercase text-slate-400 font-extrabold tracking-wider">Ciro (Aylık)</p>
                    <p className="text-base sm:text-lg font-extrabold text-slate-800 mt-1 font-display">
                      ₺{targetRevenue.toFixed(1)}M
                    </p>
                    <span className="text-[10px] text-emerald-600 font-bold mt-1 flex items-center gap-0.5">
                      📈 +%{percentGrowth}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col justify-between">
                    <p className="text-[9px] uppercase text-slate-400 font-extrabold tracking-wider">e-Faturalar</p>
                    <p className="text-base sm:text-lg font-extrabold text-slate-800 mt-1 font-display">
                      {monthlyInvoices.toLocaleString('tr-TR')}
                    </p>
                    <span className="text-[10px] text-brand-blue font-bold mt-1">Anlık İletim</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex flex-col justify-between">
                    <p className="text-[9px] uppercase text-slate-400 font-extrabold tracking-wider">Aktif Şube</p>
                    <p className="text-base sm:text-lg font-extrabold text-slate-800 mt-1 font-display">
                      {activeBranches} Bayi
                    </p>
                    <span className="text-[10px] text-emerald-600 font-bold mt-1">Senkronize</span>
                  </div>
                </div>

                {/* Animated graphic representation bars */}
                <div className="h-24 bg-gradient-to-b from-blue-50/30 to-transparent rounded-lg p-2 flex items-end justify-between gap-1.5 border border-slate-100/50">
                  <div className="w-full bg-blue-200/70 rounded-t transition-all duration-500" style={{ height: `${Math.min(100, Math.max(15, targetRevenue * 1.5))}%` }}></div>
                  <div className="w-full bg-blue-300/70 rounded-t transition-all duration-500" style={{ height: `${Math.min(100, Math.max(25, targetRevenue * 1.8))}%` }}></div>
                  <div className="w-full bg-brand-blue rounded-t transition-all duration-500" style={{ height: `${Math.min(100, Math.max(35, targetRevenue * 2.2))}%` }}></div>
                  <div className="w-full bg-blue-400/70 rounded-t transition-all duration-500" style={{ height: `${Math.min(100, Math.max(20, targetRevenue * 1.6))}%` }}></div>
                  <div className="w-full bg-blue-300/70 rounded-t transition-all duration-500" style={{ height: `${Math.min(100, Math.max(30, targetRevenue * 2.0))}%` }}></div>
                  <div className="w-full bg-brand-blue rounded-t transition-all duration-500" style={{ height: `${Math.min(100, Math.max(45, targetRevenue * 2.4))}%` }}></div>
                  <div className="w-full bg-blue-400/70 rounded-t transition-all duration-500" style={{ height: `${Math.min(100, Math.max(25, targetRevenue * 1.7))}%` }}></div>
                </div>
              </div>

              {/* Secondary Interactive Campaign Grid directly corresponding to reference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="bg-gradient-to-r from-brand-navy to-slate-900 rounded-xl p-3.5 text-white flex items-center space-x-3 border border-slate-800 shadow-sm">
                  <Gift className="w-8 h-8 text-amber-400 flex-shrink-0 animate-bounce" />
                  <div>
                    <p className="text-xs font-bold font-display text-white">50.000 e-Kontör Hediye</p>
                    <p className="text-[10px] text-slate-300">Geçiş Yapan Yeni Firmalara Özel</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-slate-200 flex items-center space-x-3 shadow-sm">
                  <Server className="w-8 h-8 text-brand-blue flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-800 font-display">Sınırsız Bulut Depolama</p>
                    <p className="text-[10px] text-slate-500">12 Ay Boyunca %40 İndirimle</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
