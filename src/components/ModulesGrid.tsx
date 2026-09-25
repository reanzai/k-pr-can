import { useState, useMemo } from 'react';
import { SOLUTION_MODULES } from '../types';
import { Search, Sparkles, Check, ChevronDown, ChevronUp, Layers, HelpCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModulesGridProps {
  onOpenDemo: (campaignName?: string) => void;
}

export default function ModulesGrid({ onOpenDemo }: ModulesGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'erp-mrp' | 'crm-hrm' | 'mobile-cloud'>('all');
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);

  // Filter solutions
  const filteredSolutions = useMemo(() => {
    return SOLUTION_MODULES.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                              (selectedCategory === 'erp-mrp' && item.category === 'erp-mrp') ||
                              (selectedCategory === 'crm-hrm' && item.category === 'crm-hrm') ||
                              (selectedCategory === 'mobile-cloud' && item.category === 'mobile-cloud');

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="moduller" className="py-20 bg-slate-50/40 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Yarın İçin <span className="text-brand-blue">Tasarlandı</span>
          </h2>
          <p className="text-slate-500 text-sm">
            KÖPRÜ SOFT ile işletmeniz 150'den fazla entegre modül ve esnek dikey yazılım çözümleriyle dijital çağda tam kontrol kazanıyor.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Categories Tab selector */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-xl w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${selectedCategory === 'all' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Tüm Çözümler
            </button>
            <button
              onClick={() => setSelectedCategory('erp-mrp')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${selectedCategory === 'erp-mrp' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              ERP & MRP (Üretim)
            </button>
            <button
              onClick={() => setSelectedCategory('crm-hrm')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${selectedCategory === 'crm-hrm' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Müşteri & İK (CRM/HRM)
            </button>
            <button
              onClick={() => setSelectedCategory('mobile-cloud')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${selectedCategory === 'mobile-cloud' ? 'bg-white text-brand-blue shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Bulut Yazılımlar
            </button>
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Modül veya özellik arayın..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
            />
          </div>
        </div>

        {/* Modules Grid list */}
        {filteredSolutions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200/80 max-w-md mx-auto">
            <Layers className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-bold text-sm">Aradığınız kriterde modül bulunamadı.</p>
            <p className="text-xs text-slate-400 mt-1">Lütfen farklı bir anahtar kelime deneyin.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredSolutions.map((module) => {
              const IconComponent = (Icons as any)[module.iconName] || HelpCircle;
              const isExpanded = expandedModuleId === module.id;

              return (
                <div
                  key={module.id}
                  className="bg-white rounded-2xl border border-slate-200/70 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-6">
                    {/* Header line */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      {module.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[10px] font-bold text-brand-blue border border-blue-100">
                          {module.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-display mb-2">{module.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{module.description}</p>

                    {/* Features checklist summary */}
                    <div className="space-y-2 mb-4">
                      {module.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer expand trigger */}
                  <div className="bg-slate-50/80 px-6 py-3 border-t border-slate-100 flex justify-between items-center">
                    <button
                      onClick={() => setExpandedModuleId(isExpanded ? null : module.id)}
                      className="text-[11px] font-bold text-brand-blue hover:text-brand-blue-hover inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Detayları Gizle' : 'Detayları İncele'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => onOpenDemo(module.title)}
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-700 hover:border-brand-blue hover:text-brand-blue transition-all cursor-pointer"
                    >
                      Demo Al
                    </button>
                  </div>

                  {/* Expanded Detail drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-blue-50/40 border-t border-blue-100/60 overflow-hidden"
                      >
                        <div className="p-6 space-y-4 text-xs">
                          <p className="text-slate-600 leading-relaxed font-medium">
                            {module.longDescription}
                          </p>
                          <div className="space-y-2 pt-2 border-t border-blue-100/80">
                            <p className="font-bold text-slate-800">Öne Çıkan Tüm Özellikleri:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {module.features.map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-1.5 text-slate-600">
                                  <Check className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
