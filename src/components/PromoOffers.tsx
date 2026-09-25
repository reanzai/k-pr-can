import { ArrowRight, Tag, Gift, ShoppingBag, Percent } from 'lucide-react';

interface PromoOffersProps {
  onOpenDemo: (campaignName?: string) => void;
}

export default function PromoOffers({ onOpenDemo }: PromoOffersProps) {
  return (
    <section id="kampanyalar" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-brand-blue font-black text-xs uppercase tracking-widest block pb-1">
            2026 KAMPANYALARI
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Ayrıcalıklı Kampanyaları Keşfedin
          </h2>
          <p className="text-slate-500 text-sm">
            İşletmenizi dijital dünyada zirveye taşıyacak kurumsal paketler ve benzersiz maliyet avantajları.
          </p>
        </div>

        {/* Triple Promotional Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: KöprüCommerce Zero Commission (NEW FEATURE REQUEST) */}
          <div className="relative bg-gradient-to-tr from-[#07131d] via-[#0f2537] to-[#1e293b] rounded-3xl p-8 border border-slate-800 shadow-premium flex flex-col justify-between hover:border-brand-accent/40 transition-all duration-300 group text-white">
            <div>
              <div className="flex items-center gap-1.5 text-brand-accent font-black text-[10px] uppercase tracking-wider mb-4">
                <ShoppingBag className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
                <span>Ömür Boyu Sıfır Komisyon</span>
              </div>
              
              <h3 className="text-2xl font-bold font-display mb-2 text-white group-hover:text-brand-accent transition-colors">
                KöprüCommerce e-Ticaret
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                E-ticaret satışlarınızda kazandığınız parayı yüksek komisyon oranlarıyla paylaşmaktan yoruldunuz mu? KöprüCommerce ile kurumsal e-ticaret sitenizi bugün açın, kendi alan adınızda <strong className="text-brand-accent font-extrabold">ömür boyu sıfır komisyon</strong> avantajıyla satış yapın! Sanal POS, kargo ve çift yönlü pazaryeri entegrasyonları tamamen paket içeriğindedir.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 font-mono">₺0 Komisyon • %100 Kazanç</span>
              <button 
                onClick={() => onOpenDemo("KöprüCommerce Ömür Boyu Sıfır Komisyon Kampanyası")}
                className="text-xs font-bold text-brand-accent hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Hemen Kurtulun</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: KöprüCloud Migration */}
          <div className="relative bg-gradient-to-tr from-slate-50 via-blue-50/40 to-white rounded-3xl p-8 border border-slate-200 shadow-premium flex flex-col justify-between hover:border-brand-blue/40 transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-1.5 text-brand-blue font-black text-[10px] uppercase tracking-wider mb-4">
                <Tag className="w-3.5 h-3.5 text-brand-blue" />
                <span>%30 İndirim</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 font-display mb-2 group-hover:text-brand-blue transition-colors">
                KöprüCloud Geçiş Paketi
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Eski, hantal ve bakımı pahalı yerel sunucu bağımlı sistemlerinizi zahmetsizce güvenli KöprüCloud mimarisine taşıyın. Ücretsiz veri göçü aktarımı, veri kaybı koruması ve 6 ay kesintisiz uzman danışmanlığı ile kesintisiz büyüme sağlayın.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-brand-navy">Son Başvuru: Bu Ay Sonu</span>
              <button 
                onClick={() => onOpenDemo("KöprüCloud Geçiş Paketi (%30 İndirim)")}
                className="text-xs font-bold text-brand-blue hover:text-brand-blue-hover flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Fırsatı Yakala</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: 100K Kontör Campaign */}
          <div className="relative bg-gradient-to-tr from-slate-50 via-sky-50/40 to-white rounded-3xl p-8 border border-slate-200 shadow-premium flex flex-col justify-between hover:border-brand-blue/40 transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-1.5 text-amber-500 font-black text-[10px] uppercase tracking-wider mb-4">
                <Gift className="w-3.5 h-3.5 text-amber-500" />
                <span>e-Dönüşüm Paketi</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 font-display mb-2 group-hover:text-brand-blue transition-colors">
                100.000 Kontör + e-İmza
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Yeni nesil e-Fatura, e-İrsaliye ve e-Arşiv sistemlerine geçiş yapan kurumsal firmalara özel, en yüksek kota avantajıyla 100.000 kontör yüklemesi ve 3 yıllık USB e-İmza / Mali Mühür donanımı anında hediye!
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Ücretsiz Yerinde Kurulum</span>
              <button 
                onClick={() => onOpenDemo("100.000 Kontör + e-İmza Kampanyası")}
                className="text-xs font-bold text-brand-blue hover:text-brand-blue-hover flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                <span>Hemen Başvur</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
