import { useState } from 'react';
import { WORKFLOW_TABS } from '../types';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DashboardShowcase() {
  const [activeTabId, setActiveTabId] = useState<string>('uretim');

  const activeTab = WORKFLOW_TABS.find((t) => t.id === activeTabId) || WORKFLOW_TABS[2];

  return (
    <section id="sektorel" className="py-16 sm:py-24 bg-slate-50/50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tüm <span className="text-brand-blue">iş süreçleriniz</span> tek bir sistemde.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Karmaşaya veda edin, hızınıza hız katın. Sektörünüze özel geliştirilmiş modüler yapılarla kusursuz uyum ve verimlilik.
          </p>
        </div>

        {/* Dynamic Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Simulated Browser ERP Dashboard (Left side, takes 8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-premium border border-slate-200 transition-all duration-500">
              
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  <div className="bg-slate-100 rounded-md px-3 sm:px-4 py-1 text-[10px] sm:text-xs text-slate-500 font-mono w-48 sm:w-64 truncate ml-2">
                    https://portal.koprusoft.com.tr/{activeTab.id}/dashboard
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">ERP Portal v25</span>
              </div>

              {/* Dynamic Dashboard Frame Content with layout animation */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Dynamic Gradient Ribbon */}
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${activeTab.colorTheme} text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-inner`}>
                    <div>
                      <h4 className="font-bold text-sm font-display tracking-wide">{activeTab.dashboardTitle}</h4>
                      <p className="text-xs text-slate-300">{activeTab.subtitle}</p>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold rounded-md border border-emerald-500/30 uppercase tracking-wide">
                      Sistem Aktif
                    </span>
                  </div>

                  {/* Operational KPI Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* KPI Box 1 */}
                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700">{activeTab.metric1.label}</span>
                        <span className="text-sm font-extrabold text-brand-blue font-display">{activeTab.metric1.value}</span>
                      </div>
                      
                      {/* Interactive simulated bar chart */}
                      <div className="w-full bg-slate-200 rounded-full h-2 mt-4 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${activeTab.metric1.percent}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className={`h-2 rounded-full ${activeTab.metric1.progressColor}`}
                        />
                      </div>
                      
                      <p className="text-[10px] text-slate-400 mt-2 font-medium">{activeTab.metric1.status}</p>
                    </div>

                    {/* KPI Box 2 */}
                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700">{activeTab.metric2.label}</span>
                        <span className="text-sm font-extrabold text-brand-blue font-display">{activeTab.metric2.value}</span>
                      </div>
                      
                      <div className="w-full bg-slate-200 rounded-full h-2 mt-4 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${activeTab.metric2.percent}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                          className={`h-2 rounded-full ${activeTab.metric2.progressColor}`}
                        />
                      </div>
                      
                      <p className="text-[10px] text-slate-400 mt-2 font-medium">{activeTab.metric2.status}</p>
                    </div>
                  </div>

                  {/* Small Live status log simulated terminal to look incredibly professional */}
                  <div className="bg-[#0b1b29] text-slate-400 rounded-xl p-3 text-[10px] font-mono space-y-1">
                    <p className="text-brand-accent"># terminal - sys_events_logger</p>
                    <p className="text-slate-300">&gt; VERİTABANI BAĞLANTISI GÜVENLİ: SSL_ECDHE_RSA_WITH_AES_256_GCM</p>
                    <p className="text-slate-500">&gt; Entegrasyon Kuyruğu: 0 bekleyen mesaj, gecikme süresi 12ms.</p>
                    <p className="text-emerald-400">&gt; Senkronizasyon durumu: Tüm bağlı şubeler ve e-Dönüşüm kanalları %100 güncel.</p>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* Sektörel Selection Tab List (Right side, takes 4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {WORKFLOW_TABS.map((tab) => {
              const IconComponent = (Icons as any)[tab.iconName] || Icons.HelpCircle;
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl text-left border transition-all duration-300 group cursor-pointer ${
                    isActive 
                      ? 'bg-brand-navy text-white border-brand-navy shadow-lg shadow-brand-navy/10 translate-x-2' 
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200/80 hover:border-slate-300'
                  }`}
                  type="button"
                >
                  <span className="flex items-center space-x-3">
                    <IconComponent className={`w-5 h-5 transition-colors ${isActive ? 'text-brand-accent' : 'text-slate-400 group-hover:text-brand-blue'}`} />
                    <span className="font-bold text-sm tracking-wide">{tab.title}</span>
                  </span>
                  <Icons.ChevronRight className={`w-3.5 h-3.5 transition-all ${isActive ? 'text-brand-accent translate-x-1' : 'text-slate-400 group-hover:text-slate-600'}`} />
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
