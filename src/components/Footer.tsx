import { Linkedin, Twitter, Youtube, Instagram, MapPin, Phone, Mail, Award } from 'lucide-react';
import KopruSoftLogo from './KopruSoftLogo';

interface FooterProps {
  onOpenDoc: (docId: string) => void;
}

export default function Footer({ onOpenDoc }: FooterProps) {

  const handleLinkClick = (e: React.MouseEvent, docId: string) => {
    e.preventDefault();
    onOpenDoc(docId);
  };

  return (
    <footer id="iletisim" className="bg-[#07131d] text-slate-400 pt-16 pb-12 border-t border-slate-800 flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand & Social Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b border-slate-800 gap-6">
          <div className="space-y-3">
            {/* Modern Vectorized Logo */}
            <KopruSoftLogo variant="dark" iconSize="h-10 w-10" textClassName="text-xl sm:text-2xl" />
            <p className="text-xs text-slate-400 max-w-md">
              Köprü Soft Kurumsal Yazılım ve Bilişim Teknolojileri A.Ş. • Türkiye'nin öncü yerli kurumsal yazılım mimarisi ve e-Dönüşüm entegratör üreticisi.
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a 
              href="#linkedin" 
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-brand-blue text-white flex items-center justify-center transition-all hover:scale-105"
              aria-label="Linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="#twitter" 
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-brand-blue text-white flex items-center justify-center transition-all hover:scale-105"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="#youtube" 
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-brand-blue text-white flex items-center justify-center transition-all hover:scale-105"
              aria-label="Youtube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a 
              href="#instagram" 
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-brand-blue text-white flex items-center justify-center transition-all hover:scale-105"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Multi-Column Sitemap Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-12 text-[11px] sm:text-xs">
          
          {/* Col 1: Kurumsal */}
          <div className="space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-xs font-display">Kurumsal</h5>
            <ul className="space-y-2 font-medium">
              <li><a className="hover:text-white transition-colors" href="#hakkimizda" onClick={(e) => handleLinkClick(e, 'hakkimizda')}>Hakkımızda</a></li>
              <li><a className="hover:text-white transition-colors" href="#misyon" onClick={(e) => handleLinkClick(e, 'misyon')}>Vizyon & Misyon</a></li>
              <li><a className="hover:text-white transition-colors" href="#arge" onClick={(e) => handleLinkClick(e, 'arge')}>Ar-Ge Merkezleri</a></li>
              <li><a className="hover:text-white transition-colors" href="#oduller" onClick={(e) => handleLinkClick(e, 'oduller')}>Ödüllerimiz</a></li>
              <li><a className="hover:text-white transition-colors" href="#basin" onClick={(e) => handleLinkClick(e, 'basin')}>Basında Biz</a></li>
              <li><a className="hover:text-white transition-colors" href="#sorumluluk" onClick={(e) => handleLinkClick(e, 'sorumluluk')}>Sosyal Sorumluluk</a></li>
            </ul>
          </div>

          {/* Col 2: Çözümler */}
          <div className="space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-xs font-display">ERP & Çözümler</h5>
            <ul className="space-y-2 font-medium">
              <li><a className="hover:text-white transition-colors" href="#erp-std" onClick={(e) => handleLinkClick(e, 'erp-std')}>Köprü ERP Standard</a></li>
              <li><a className="hover:text-white transition-colors" href="#erp-ent" onClick={(e) => handleLinkClick(e, 'erp-ent')}>Köprü ERP Enterprise</a></li>
              <li><a className="hover:text-white transition-colors" href="#mrp-uretim" onClick={(e) => handleLinkClick(e, 'mrp-uretim')}>Köprü MRP Üretim</a></li>
              <li><a className="hover:text-white transition-colors" href="#on-muhasebe" onClick={(e) => handleLinkClick(e, 'on-muhasebe')}>Köprü Ön Muhasebe</a></li>
              <li><a className="hover:text-white transition-colors" href="#mobil-satis" onClick={(e) => handleLinkClick(e, 'mobil-satis')}>Mobil Satış ve Depo</a></li>
              <li><a className="hover:text-white transition-colors" href="#restoran-adisyon" onClick={(e) => handleLinkClick(e, 'restoran-adisyon')}>Restoran ve Adisyon</a></li>
            </ul>
          </div>

          {/* Col 3: e-Dönüşüm */}
          <div className="space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-xs font-display">e-Dönüşüm</h5>
            <ul className="space-y-2 font-medium">
              <li><a className="hover:text-white transition-colors" href="#e-fatura-ent" onClick={(e) => handleLinkClick(e, 'e-fatura-ent')}>e-Fatura Entegratörü</a></li>
              <li><a className="hover:text-white transition-colors" href="#e-arsiv-fat" onClick={(e) => handleLinkClick(e, 'e-arsiv-fat')}>e-Arşiv Fatura</a></li>
              <li><a className="hover:text-white transition-colors" href="#e-irsaliye-sis" onClick={(e) => handleLinkClick(e, 'e-irsaliye-sis')}>e-İrsaliye</a></li>
              <li><a className="hover:text-white transition-colors" href="#e-defter-sak" onClick={(e) => handleLinkClick(e, 'e-defter-sak')}>e-Defter Saklama</a></li>
              <li><a className="hover:text-white transition-colors" href="#e-mustahsil-mak" onClick={(e) => handleLinkClick(e, 'e-mustahsil-mak')}>e-Müstahsil Makbuzu</a></li>
              <li><a className="hover:text-white transition-colors" href="#gib-takvim" onClick={(e) => handleLinkClick(e, 'gib-takvim')}>GİB Mevzuat Takvimi</a></li>
            </ul>
          </div>

          {/* Col 4: İş Ortaklığı */}
          <div className="space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-xs font-display">İş Ortaklığı</h5>
            <ul className="space-y-2 font-medium">
              <li><a className="hover:text-white transition-colors" href="#bayilik" onClick={(e) => handleLinkClick(e, 'bayilik')}>Bayilik Başvurusu</a></li>
              <li><a className="hover:text-white transition-colors" href="#ortak-giris" onClick={(e) => handleLinkClick(e, 'ortak-giris')}>Çözüm Ortağı Girişi</a></li>
              <li><a className="hover:text-white transition-colors" href="#sertifikasyon" onClick={(e) => handleLinkClick(e, 'sertifikasyon')}>Sertifikasyon Programı</a></li>
              <li><a className="hover:text-white transition-colors" href="#api-portal" onClick={(e) => handleLinkClick(e, 'api-portal')}>Yazılımcı API Portalı</a></li>
              <li><a className="hover:text-white transition-colors" href="#akademi" onClick={(e) => handleLinkClick(e, 'akademi')}>Partner Akademisi</a></li>
            </ul>
          </div>

          {/* Col 5: Destek & İK */}
          <div className="space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-xs font-display">Destek & Kariyer</h5>
            <ul className="space-y-2 font-medium">
              <li><a className="hover:text-white transition-colors" href="#teknik-destek" onClick={(e) => handleLinkClick(e, 'teknik-destek')}>Teknik Destek Masası</a></li>
              <li><a className="hover:text-white transition-colors" href="#kilavuzlar" onClick={(e) => handleLinkClick(e, 'kilavuzlar')}>Kullanım Kılavuzları</a></li>
              <li><a className="hover:text-white transition-colors" href="#videolar" onClick={(e) => handleLinkClick(e, 'videolar')}>Video Eğitimler</a></li>
              <li><a className="hover:text-white transition-colors" href="#ik-pozisyon" onClick={(e) => handleLinkClick(e, 'ik-pozisyon')}>Açık Pozisyonlar (İK)</a></li>
              <li><a className="hover:text-white transition-colors" href="#staj" onClick={(e) => handleLinkClick(e, 'staj')}>Staj Olanakları</a></li>
            </ul>
          </div>

          {/* Col 6: Genel Merkez */}
          <div className="space-y-4">
            <h5 className="text-white font-bold uppercase tracking-wider text-xs font-display">Genel Merkez</h5>
            <div className="space-y-3 text-slate-400 leading-relaxed font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <p>Maslak Mah. Büyükdere Cad. No: 182 KÖPRÜ Plaza Kat: 12 Sarıyer / İstanbul</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a href="tel:08504410020" className="hover:text-white">0850 441 00 20</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a href="mailto:info@koprusoft.com.tr" className="hover:text-white">info@koprusoft.com.tr</a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4 font-medium">
          <div>
            © {new Date().getFullYear()} Köprü Soft Kurumsal Yazılım Çözümleri A.Ş. Tüm hakları saklıdır.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-center">
            <a className="hover:text-slate-300 cursor-pointer" href="#kvkk" onClick={(e) => handleLinkClick(e, 'kvkk')}>KVKK Aydınlatma Metni</a>
            <a className="hover:text-slate-300 cursor-pointer" href="#cerez" onClick={(e) => handleLinkClick(e, 'cerez')}>Gizlilik ve Çerez Politikası</a>
            <a className="hover:text-slate-300 cursor-pointer" href="#bilgi" onClick={(e) => handleLinkClick(e, 'bilgi')}>Bilgi Toplumu Hizmetleri</a>
            <a href="#iso" className="inline-flex items-center gap-1 hover:text-slate-300 cursor-default">
              <Award className="w-3.5 h-3.5 text-brand-accent" />
              <span>ISO 27001 Bilgi Güvenliği</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
