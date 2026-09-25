import { useState, useEffect, useMemo } from 'react';
import { DOCUMENT_PORTAL_DATA, DocumentSection } from '../data/documentPortalData';
import { 
  X, 
  Search, 
  ChevronRight, 
  ShieldCheck, 
  Building2, 
  Layers, 
  Network, 
  Users, 
  Briefcase,
  ExternalLink,
  PhoneCall,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';

interface DocumentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDocId: string | null;
}

export default function DocumentPortalModal({ isOpen, onClose, selectedDocId }: DocumentPortalModalProps) {
  const [activeDocId, setActiveDocId] = useState<string>('kvkk');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync initial preselected document when modal opens
  useEffect(() => {
    if (isOpen && selectedDocId && DOCUMENT_PORTAL_DATA[selectedDocId]) {
      setActiveDocId(selectedDocId);
      setSearchQuery('');
    }
  }, [isOpen, selectedDocId]);

  // Read current active document
  const activeDoc = useMemo(() => {
    return DOCUMENT_PORTAL_DATA[activeDocId] || DOCUMENT_PORTAL_DATA['kvkk'];
  }, [activeDocId]);

  // Grouped document directory sidebar
  const groupedDirectory = useMemo(() => {
    const list = Object.values(DOCUMENT_PORTAL_DATA);
    
    // Filter by search query if exists
    const filteredList = list.filter((doc) => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      doc.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.content.some((para) => para.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const groups: Record<string, { label: string; docs: DocumentSection[] }> = {
      'legal': { label: 'Yasal Uyum & Politikalar', docs: [] },
      'corporate': { label: 'Kurumsal Bilgiler', docs: [] },
      'solutions': { label: 'ERP & Ticari Çözümler', docs: [] },
      'e-trans': { label: 'e-Dönüşüm Çözümleri', docs: [] },
      'partners': { label: 'İş Ortaklığı', docs: [] },
      'careers': { label: 'Destek & Kariyer', docs: [] }
    };

    filteredList.forEach((doc) => {
      if (groups[doc.category]) {
        groups[doc.category].docs.push(doc);
      }
    });

    // Remove empty groups
    return Object.entries(groups).filter(([_, group]) => group.docs.length > 0);
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
      {/* Semi-transparent dark background backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Heavy-duty Document Center Modal container */}
      <div className="bg-white w-full h-full sm:h-[90vh] sm:max-w-6xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative z-10">
        
        {/* Top Header Ribbon */}
        <div className="bg-[#0f2537] text-white px-6 py-4 flex justify-between items-center flex-shrink-0 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-5 h-5 text-brand-accent animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-display tracking-wider uppercase">Köprü Soft • Bilgi & Doküman Merkezi</h3>
              <p className="text-[10px] text-slate-400 font-medium">Tüm kurumsal dokümanlar, yasal tebliğler ve ürün kılavuzları aktif (Yıl 2026)</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1.5 bg-slate-800 hover:bg-slate-750 rounded-xl"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Layout (Split Screen) */}
        <div className="flex-grow flex flex-col md:flex-row overflow-hidden min-h-0">
          
          {/* LEFT COLUMN: Sidebar Navigation Directory (Take 4/12 cols) */}
          <div className="w-full md:w-80 border-r border-slate-100 flex flex-col bg-slate-50 flex-shrink-0">
            {/* Live Search Input */}
            <div className="p-4 border-b border-slate-100 bg-white">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Dizin içinde arayın..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-100 border border-slate-200/60 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-blue focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Scrollable list directory */}
            <div className="flex-grow overflow-y-auto p-4 space-y-6">
              {groupedDirectory.length === 0 ? (
                <div className="text-center py-8 text-slate-400">
                  <p className="text-xs font-bold">Sonuç bulunamadı.</p>
                  <p className="text-[10px] mt-0.5">Kelimeyi kontrol edin.</p>
                </div>
              ) : (
                groupedDirectory.map(([key, group]) => (
                  <div key={key} className="space-y-1.5">
                    <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-wider pl-2">
                      {group.label}
                    </h5>
                    <div className="space-y-0.5">
                      {group.docs.map((doc) => {
                        const isDocActive = doc.id === activeDocId;

                        return (
                          <button
                            key={doc.id}
                            onClick={() => setActiveDocId(doc.id)}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between gap-2 group cursor-pointer ${
                              isDocActive 
                                ? 'bg-brand-blue text-white shadow-sm' 
                                : 'text-slate-600 hover:bg-slate-150 hover:text-slate-900'
                            }`}
                            type="button"
                          >
                            <span className="truncate">{doc.title}</span>
                            <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                              isDocActive ? 'text-brand-accent translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'
                            }`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Active Document Viewer (Take 8/12 cols) */}
          <div className="flex-grow flex flex-col overflow-y-auto bg-white p-6 sm:p-10 space-y-6">
            
            {/* Category and tag heading */}
            <div className="space-y-1 pb-4 border-b border-slate-100 text-left">
              <span className="text-brand-blue text-[10px] font-black uppercase tracking-widest block pb-1">
                {activeDoc.categoryLabel}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display pt-2">
                {activeDoc.title}
              </h1>
              <p className="text-xs font-semibold text-slate-400">{activeDoc.subtitle}</p>
            </div>

            {/* Fleshed out document content paragraphs */}
            <div className="flex-grow space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {activeDoc.content.map((paragraph, index) => (
                <p key={index} className="indent-2">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Interactive footer contact options for trust */}
            <div className="pt-6 border-t border-slate-150 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50 p-4 rounded-2xl border border-slate-100 mt-auto flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center">
                  <PhoneCall className="w-5 h-5 text-brand-blue" />
                </div>
                <div className="text-left text-xs">
                  <p className="font-bold text-slate-900">Teknik Destek ve Yasal Danışmanlık</p>
                  <p className="text-slate-400 font-semibold text-[10px]">Sorularınız için uzman kadromuz hazırdır.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href="tel:08504410020"
                  className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>0850 441 00 20</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-brand-navy hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                  type="button"
                >
                  Kapat
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
