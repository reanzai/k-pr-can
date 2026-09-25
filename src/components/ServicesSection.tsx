import { Globe, Code, Cloud, ArrowRight, ShieldCheck, Cpu, LayoutGrid } from 'lucide-react';

interface ServicesSectionProps {
  onOpenDemo: (campaignName?: string) => void;
}

export default function ServicesSection({ onOpenDemo }: ServicesSectionProps) {
  const services = [
    {
      id: 'web-design',
      icon: Globe,
      title: 'Kurumsal Web Sitesi Tasarımı & Yapımı',
      badge: '2026 Premium Tasarım',
      description: 'İşletmenizin dijital vizyonunu yansıtan, ultra yüksek performanslı, SEO uyumlu ve %100 mobil duyarlı kurumsal web siteleri tasarlıyoruz.',
      bullets: [
        'Arama motorlarında (Google) üst sırada listelenen SEO mimarisi',
        'Yüksek dönüşüm odaklı, modern, akıcı ve özgün kullanıcı arayüzü',
        'Köprü ERP ve e-Ticaret (Sanal POS, kargo) altyapısı ile tam entegre',
        'SSL sertifikası, siber koruma duvarı ve sınırsız yüksek hızlı hosting dahil'
      ],
      ctaText: 'Web Sitesi Projesi Başlat',
      campaignName: 'Kurumsal Web Sitesi Tasarımı ve Yapımı Hizmeti'
    },
    {
      id: 'custom-dev',
      icon: Code,
      title: 'Özel Yazılım Entegrasyonu & API Hizmeti',
      badge: 'Gelişmiş OpenAPI',
      description: 'İş akışlarınıza özel, esnek modüller geliştiriyor ve mevcut 3. parti sistemlerinizle siber güvenlikli, çift yönlü veri akışını sağlıyoruz.',
      bullets: [
        'JWT yetkilendirmeli, güvenli ve yüksek hızlı RESTful OpenAPI',
        'CRM, kargo, ERP, depo ve tedarik zinciri sistemleri arası entegrasyon',
        'İşletmenize özel tasarlanan otomasyon ve veri akışı şemaları',
        '7/24 kesintisiz API izleme ve yük dengeleme (Load Balancing) desteği'
      ],
      ctaText: 'Entegrasyon Talebi Oluştur',
      campaignName: 'Özel Yazılım ve API Entegrasyon Hizmeti'
    },
    {
      id: 'cloud-infra',
      icon: Cloud,
      title: 'Bulut Veri Göçü & Altyapı Yönetimi',
      badge: '%99.99 SLA Garantisi',
      description: 'Hantal, bakım maliyetleri yüksek yerel sunucularınızı sıfır veri kaybı ve kesinti ile şifreli, yüksek güvenlikli KöprüCloud mimarisine taşıyoruz.',
      bullets: [
        'Sıfır iş kesintisi ile saniyeler içinde sorunsuz veritabanı göçü',
        'ISO 27001 Bilgi Güvenliği standartlarında uçtan uca şifreli veri saklama',
        'Günlük, haftalık ve aylık tam otomatik coğrafi yedekleme',
        'Siber saldırılara, fidye yazılımlarına (Ransomware) karşı gelişmiş koruma'
      ],
      ctaText: 'Altyapı Danışmanlığı Al',
      campaignName: 'Bulut Veri Göçü ve Altyapı Hizmeti'
    }
  ];

  return (
    <section id="hizmetler" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-bold tracking-wide uppercase">
            <LayoutGrid className="w-3.5 h-3.5 text-brand-blue" />
            <span>Profesyonel Kurumsal Hizmetler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Yazılımın Ötesinde, <span className="text-brand-blue">Uçtan Uca</span> Dijital Hizmetler
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Köprü Soft olarak işletmenizin sadece ERP ihtiyaçlarını değil, dijital kimliğini ve altyapı güvenliğini de inşa ediyoruz.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((srv) => {
            const IconComponent = srv.icon;

            return (
              <div 
                key={srv.id} 
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-premium flex flex-col justify-between hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Accent Top Bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-slate-100 group-hover:bg-brand-blue transition-colors" />

                <div className="space-y-6">
                  {/* Icon Badge and Label */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black text-brand-blue bg-blue-50/50 border border-blue-100/60 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors font-display">
                      {srv.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  {/* Bullet Lists */}
                  <ul className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-500 font-medium">
                    {srv.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onOpenDemo(srv.campaignName)}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-brand-blue text-slate-700 hover:text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer group/btn"
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
