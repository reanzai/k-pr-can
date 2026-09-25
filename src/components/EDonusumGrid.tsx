import { useState } from 'react';
import { 
  FileText, 
  Archive, 
  Truck, 
  BookOpen, 
  PenTool, 
  Sprout, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EDonusumGridProps {
  onOpenDemo: (campaignName?: string) => void;
}

interface EDonusumItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: any;
  badge?: string;
  features: string[];
  gibUptime: string;
}

export default function EDonusumGrid({ onOpenDemo }: EDonusumGridProps) {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const E_DONUSUM_ITEMS: EDonusumItem[] = [
    {
      id: 'e-fatura',
      title: 'e-Fatura Entegrasyonu',
      subtitle: 'Kağıt Faturaya Veda Edin',
      description: 'Elektronik fatura düzenleme, gönderme ve alma süreçlerinizi saniyeler içinde tamamlayın.',
      longDescription: 'Köprü Soft e-Fatura çözümü, Gelir İdaresi Başkanlığı (GİB) standartlarına %100 uyumlu olarak çalışır. Gelen faturalarınız sisteme otomatik düşer, giden faturalarınız ise tek tıkla müşterilerinizin posta kutusuna iletilir.',
      icon: FileText,
      badge: 'En Çok Tercih Edilen',
      features: ['30 Dakikada Aktivasyon', 'Yerinde Ücretsiz Eğitim', 'Akıllı Vergi Hesaplaması', 'Sınırsız PDF Çıktı & Tasarım'],
      gibUptime: '%99.99 GİB Sync'
    },
    {
      id: 'e-arsiv',
      title: 'e-Arşiv Fatura',
      subtitle: 'Tüm Faturalar Dijital Güvende',
      description: 'E-Fatura mükellefi olmayan müşterilerinize de dijital fatura gönderin, baskı maliyetlerini sıfırlayın.',
      longDescription: 'E-Arşiv fatura çözümü ile tüm nihai tüketicilere ve e-Fatura kullanmayan firmalara mail veya SMS ile anında fatura iletebilirsiniz. Geçmişe dönük fatura sorgulama ekranlarıyla arşiv karmaşası tamamen biter.',
      icon: Archive,
      badge: '10 Yıl Saklama Garantili',
      features: ['Zaman Damgalı İvme', 'SMS & Mail Entegrasyonu', 'Toplu İptal ve İade Yönetimi', 'Mali Mühür Uyumlu Altyapı'],
      gibUptime: '%100 Bulut Arşiv'
    },
    {
      id: 'e-irsaliye',
      title: 'e-İrsaliye Sistemi',
      subtitle: 'Sevkiyat ve Lojistikte Hız',
      description: 'Sevkiyat işlemlerinizi kağıt irsaliye basmadan, araç yol çıkmadan önce dijital olarak onaylatın.',
      longDescription: 'Taşıma ve sevk irsaliyelerinizi tamamen elektronik ortamda düzenleyin. Yol denetimlerinde karekod okutarak saniyeler içinde yasal kontrol imkanı sunan bu sistem, lojistik süreçlerinizi uçtan uca dijitalleştirir.',
      icon: Truck,
      features: ['Karekod (QR Code) Üretimi', 'Plaka & Şoför Eşleştirme', 'Müşteriye Anlık Teslimat Bilgisi', 'Hızlı Kabul / Kısmi Red Altyapısı'],
      gibUptime: 'Mobil Denetim Uyumlu'
    },
    {
      id: 'e-defter',
      title: 'e-Defter Saklama',
      subtitle: 'Hızlı ve Güvenli İbraz',
      description: 'Yevmiye ve Kebir defterlerinizi yasal süreler dahilinde GİB standartlarına göre oluşturun ve saklayın.',
      longDescription: 'Köprü Soft e-Defter çözümü, yasal defterlerinizi her ay otomatik olarak hazırlar, GİB beratlarını alır ve sistemlerimizde 10 yıl boyunca şifreli olarak yedekler. Denetim süreçlerinde tek tıkla indirme ve raporlama sunar.',
      icon: BookOpen,
      badge: 'Otomatik Berat Gönderimi',
      features: ['Şifreli Güvenli Sunucu Saklama', 'Otomatik Berat Alma Algoritması', 'Uluslararası Denetim Standartları', 'Hızlı Mizan Entegrasyonu'],
      gibUptime: 'KVKK & ISO Uyumlu'
    },
    {
      id: 'e-smm',
      title: 'e-SMM (Serbest Meslek)',
      subtitle: 'Kolay Makbuz Yönetimi',
      description: 'Serbest meslek makbuzlarınızı dijital ortamda düzenleyip müşterilerinize anında iletin.',
      longDescription: 'Doktorlar, mühendisler, avukatlar ve mali müşavirler için özel tasarlanan e-SMM panelimiz ile stopaj, KDV ve tevkifat hesaplamaları otomatik yapılır. Yanlış hesaplama riskini tamamen sıfırlarsınız.',
      icon: PenTool,
      features: ['Stopaj & Tevkifat Otomatik Hesap', 'E-Posta ile Anında Gönderim', 'Cari Kart Listesi & Kayıtlı Alıcılar', 'Mobil Uyumlu Hızlı Kesim'],
      gibUptime: 'Serbest Meslek Uyumlu'
    },
    {
      id: 'e-mustahsil',
      title: 'e-Müstahsil Makbuzu',
      subtitle: 'Tarım ve Hayvancılıkta Kolaylık',
      description: 'Defter tutmayan çiftçilerden yapılan tarımsal alımları elektronik ortamda anında belgelendirin.',
      longDescription: 'Tarım ürünleri ve hayvancılık alımlarında, kağıt müstahsil makbuzu kesme zahmetine son verin. Çiftçilerden alınan ürünlerin GİB bildirimlerini saniyeler içinde tamamlayarak vergi muafiyet süreçlerini hatasız yönetin.',
      icon: Sprout,
      features: ['Vergi Muafiyet Oranları Hazır', 'Çevrimdışı (Offline) Çalışabilme', 'Hızlı Üretici Kartı Açma', 'Gelişmiş Stopaj Analizleri'],
      gibUptime: '%100 Tarım Entegre'
    },
    {
      id: 'e-mutabakat',
      title: 'e-Mutabakat Portalı',
      subtitle: 'Telefon Trafiğine Son Verin',
      description: 'Cari bakiye ve BA/BS mutabakatlarınızı saniyeler içinde otomatik olarak yapın.',
      longDescription: 'Yüzlerce cari hesabınızla tek tek telefonla görüşmek yerine, e-Mutabakat sistemimiz üzerinden toplu olarak mail ve SMS gönderin. Karşı taraftan gelen onay veya ret bildirimlerini canlı ekranda izleyin.',
      icon: CheckCircle2,
      badge: 'Zaman Kazandıran Çözüm',
      features: ['BA/BS Tek Tıkla Mutabakat', 'Otomatik Hatırlatma E-Postaları', 'Müşteri Tarafından Çevrimiçi Onay', 'Excel Dosyasından Otomatik Aktarım'],
      gibUptime: 'Canlı Mutabakat Takibi'
    }
  ];

  const toggleItem = (id: string) => {
    setActiveItemId(activeItemId === id ? null : id);
  };

  return (
    <section id="e-donusum" className="py-20 bg-gradient-to-b from-white to-slate-50/60 border-b border-slate-200/50 relative overflow-hidden">
      {/* Absolute background accent elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 right-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with high-end typography */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3 h-3 text-brand-blue animate-pulse" />
              <span>GİB Özel Entegratörlüğü</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Güvenilir ve Hızlı <br className="hidden sm:inline" />
              <span className="text-brand-blue">e-Dönüşüm Uygulamaları</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              2026 kurumsal regülasyonları ve siber güvenlik protokolleri ile uyumlu, Gelir İdaresi Başkanlığı onaylı akıllı e-Dönüşüm modülleri. İş gücünüzü hızlandırın, maliyetleri minimize edin.
            </p>
          </div>
          
          {/* GİB Live Pulse Indicator badge */}
          <div className="bg-white px-4 py-3 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="text-left">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wide">Mevzuat Durumu</p>
              <p className="text-xs font-bold text-slate-800">GİB Entegrasyon Hatları %100 Aktif</p>
            </div>
          </div>
        </div>

        {/* Core Solutions Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {E_DONUSUM_ITEMS.map((item) => {
            const Icon = item.icon;
            const isOpen = activeItemId === item.id;

            return (
              <div 
                key={item.id}
                className={`bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group ${
                  isOpen 
                    ? 'border-brand-blue shadow-premium ring-1 ring-brand-blue/20' 
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
                onClick={() => toggleItem(item.id)}
              >
                <div className="p-6">
                  {/* Card top banner */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
                      isOpen ? 'bg-brand-blue text-white' : 'bg-slate-50 text-slate-600 group-hover:bg-blue-50 group-hover:text-brand-blue'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {item.badge ? (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-[9px] font-bold text-emerald-600 border border-emerald-100">
                        {item.badge}
                      </span>
                    ) : (
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                        {item.gibUptime}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors font-display">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-brand-blue mt-0.5">{item.subtitle}</p>
                  
                  <p className="text-xs text-slate-500 leading-relaxed mt-2">
                    {item.description}
                  </p>

                  {/* Highlights preview */}
                  <div className="space-y-1.5 mt-4 pt-4 border-t border-slate-100">
                    {item.features.slice(0, 2).map((feat, index) => (
                      <div key={index} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span className="font-medium truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action Bar */}
                <div className="px-6 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Info className="w-3 h-3 text-brand-blue" />
                    <span>{isOpen ? 'Detayları Kapat' : 'Detayları İncele'}</span>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenDemo(`e-Dönüşüm: ${item.title}`);
                    }}
                    className="p-1.5 rounded-lg bg-white hover:bg-brand-blue text-slate-600 hover:text-white border border-slate-200 hover:border-brand-blue transition-all shadow-sm flex items-center justify-center cursor-pointer"
                    aria-label="Demo Başvurusu"
                    type="button"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Expandable detailed drawer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-slate-50 border-t border-slate-200/80 overflow-hidden text-left"
                      onClick={(e) => e.stopPropagation()} // Stop toggle when clicking inside drawer
                    >
                      <div className="p-5 space-y-4 text-xs">
                        <p className="text-slate-600 leading-relaxed font-medium">
                          {item.longDescription}
                        </p>
                        
                        <div className="bg-white rounded-2xl p-3 border border-slate-200/60 space-y-2">
                          <p className="font-bold text-slate-800 text-[11px] flex items-center gap-1 text-brand-blue">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Mevzuat & Donanım Özellikleri</span>
                          </p>
                          <div className="grid grid-cols-1 gap-1.5">
                            {item.features.map((feat, index) => (
                              <div key={index} className="flex items-center gap-1.5 text-slate-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => onOpenDemo(`e-Dönüşüm Hızlı Geçiş: ${item.title}`)}
                          className="w-full py-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                          type="button"
                        >
                          <span>Hemen Geçiş Başvurusu Yap</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom alert info banner regarding GDPR / KVKK and siber güvenlik */}
        <div className="mt-12 bg-blue-50/60 border border-blue-100 rounded-3xl p-5 max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-600">
          <ShieldAlert className="w-8 h-8 text-brand-blue flex-shrink-0 animate-pulse" />
          <div className="space-y-0.5 text-center sm:text-left">
            <p className="font-bold text-slate-900">2026 Siber Güvenlik ve Regülasyon Uyumluluğu</p>
            <p className="text-slate-500 leading-relaxed">
              Köprü Soft e-Dönüşüm veri iletim hatları, çift katmanlı SSL sertifikasyonları, ISO 27001 Bilgi Güvenliği Standartları ve KVKK korumalarıyla %100 şifrelenmiştir. Tüm faturalarınız ve defterleriniz yedekli olarak Türkiye merkezli güvenli veri merkezlerimizde barındırılır.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
