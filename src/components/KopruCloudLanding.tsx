import { useState } from 'react';
import { 
  Globe, 
  UserCheck, 
  CreditCard, 
  ShoppingBag, 
  Building, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Check, 
  Laptop, 
  Plus, 
  MessageSquare,
  Shield,
  FileSpreadsheet,
  Award,
  Zap,
  Menu,
  X,
  Cloud,
  Play
} from 'lucide-react';
import { motion } from 'motion/react';
import KopruCloudDashboard from './KopruCloudDashboard';

interface KopruCloudLandingProps {
  onBackToCorporate: () => void;
  onOpenDemo: (campaignName?: string) => void;
}

export default function KopruCloudLanding({ onBackToCorporate, onOpenDemo }: KopruCloudLandingProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeFeatureTab, setActiveFeatureTab] = useState('all');
  const [showDashboard, setShowDashboard] = useState(false);

  const testimonials = [
    {
      company: 'Hasalp İnşaat Taah. Tic. Ltd. Şti.',
      text: 'Talep edilen argelerin hızlı bir şekilde yapılması web tabanlı olup her yerden ulaşım sağlanması işimizi kolaylaştırıyor. İlerleyen süreçte fazla kullanıcı ile giriş sağlayacağız. Ayrıca maliyet olarak da makul fiyata bu imkanları sağlanması da oldukça güzel.',
      author: 'Hasan Şenol',
      role: 'Şirket Ortağı'
    },
    {
      company: 'Tekstape Teflobant Termo Plastik Ürünleri Ltd. Şti.',
      text: 'Her yerden ulaşım sağlayabilmemiz verilerin bulut sisteminde yedeklenmesi oldukça güvenli. E-fatura gönderimimiz hızlı ve sorunsuz. Web tabanlı program için diğer programlara göre oldukça uygun maliyetli, detaylı ve kullanışlı.',
      author: 'Tuncay Sermet',
      role: 'Şirket Sahibi'
    },
    {
      company: 'Uyumplast Ambalaj San. Tic. Ltd. Şti.',
      text: 'Kullanıcı sınırlandırması olmadan her yerden ulaşım sağlayabildiğimiz ve verilerimizin güvende olduğunu bilmemiz oldukça güzel. Bir çok web tabanlı programa göre Ar-ge alanının gelişmiş olması ve dönüşlerin yapılması oldukça motive edici. E-fatura gönderimlerimiz hızlı ve başarılı.',
      author: 'Mustafa Yenibayrak',
      role: 'Şirket Sahibi'
    }
  ];

  const references = [
    { name: 'BKIW Creative', logo: 'BKIW' },
    { name: 'Bora Biotechnology', logo: 'Bora' },
    { name: 'Idealisi Co.', logo: 'Idealisi' },
    { name: 'Müzik Reyonu', logo: 'Müzik Reyonu' }
  ];

  if (showDashboard) {
    return (
      <KopruCloudDashboard 
        onExit={() => setShowDashboard(false)} 
        onBackToCorporate={onBackToCorporate} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#070e14] text-slate-100 font-sans selection:bg-brand-accent selection:text-slate-900">
      
      {/* Dynamic Subdomain Toggle Notification Banner */}
      <div className="bg-brand-blue text-white px-4 py-2.5 text-center text-xs font-bold flex flex-col sm:flex-row items-center justify-center gap-2 border-b border-blue-900/40 relative z-50 shadow-md">
        <span className="inline-flex items-center gap-1.5 bg-brand-navy/30 px-2 py-0.5 rounded-md text-[10px] border border-blue-800">
          <Globe className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
          <span>Subdomain Aktif: bulut.koprusoft.com.tr</span>
        </span>
        <p className="text-slate-100">Bu sayfa, kurumsal web sitenizin bulut ön muhasebe subdomaine özel landing sayfasıdır.</p>
        <button 
          onClick={onBackToCorporate}
          className="underline text-brand-accent hover:text-white transition-colors cursor-pointer text-xs font-extrabold"
        >
          Ana Kurumsal Siteden Devam Et →
        </button>
      </div>

      {/* OctoCloud Style Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#070e14]/90 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Brand */}
            <div className="flex items-center gap-1.5">
              <KopruSoftLogo variant="dark" iconSize="h-10 w-10" showText={false} />
              <span className="font-display font-extrabold text-white tracking-tight text-base sm:text-lg">
                Köprü<span className="text-brand-blue">Cloud</span>
              </span>
            </div>

            {/* Desktop Navbar Menu links */}
            <nav className="hidden lg:flex items-center space-x-6 text-xs font-bold text-slate-300">
              <a href="#hero" className="hover:text-brand-blue transition-colors">ANASAYFA</a>
              <a href="#ozellikler" className="hover:text-brand-blue transition-colors">ÖZELLİKLER</a>
              <a href="#entegrasyonlar" className="hover:text-brand-blue transition-colors">ENTEGRASYONLAR</a>
              <a href="#gorev-yonetimi" className="hover:text-brand-blue transition-colors">GÖREV YÖNETİMİ</a>
              <a href="#tasarim" className="hover:text-brand-blue transition-colors">TASARIM</a>
              <a href="#yorumlar" className="hover:text-brand-blue transition-colors">YORUMLAR</a>
              <a href="#mobil" className="hover:text-brand-blue transition-colors">MOBİL</a>
            </nav>

            {/* Actions CTA buttons */}
            <div className="hidden sm:flex items-center space-x-2.5 text-xs font-bold">
              <button 
                onClick={() => setShowDashboard(true)}
                className="px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-slate-950 font-black rounded-xl transition-all cursor-pointer shadow-md shadow-emerald-950/20 animate-pulse flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                <span>HEMEN TEST ET (GİRİŞ)</span>
              </button>
              <button 
                onClick={() => setShowDashboard(true)}
                className="px-3.5 py-2 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-xl transition-all shadow-lg shadow-blue-900/30 cursor-pointer"
              >
                30 GÜN ÜCRETSİZ DENE
              </button>
            </div>

            {/* Mobile Hamburger toggle */}
            <button 
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden text-slate-300 hover:text-white p-2"
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileNavOpen && (
          <div className="lg:hidden bg-[#070e14] border-b border-slate-800 py-4 px-6 space-y-4 text-xs font-bold">
            <nav className="flex flex-col space-y-3 text-slate-300">
              <a href="#hero" onClick={() => setMobileNavOpen(false)} className="hover:text-brand-blue">ANASAYFA</a>
              <a href="#ozellikler" onClick={() => setMobileNavOpen(false)} className="hover:text-brand-blue">ÖZELLİKLER</a>
              <a href="#entegrasyonlar" onClick={() => setMobileNavOpen(false)} className="hover:text-brand-blue">ENTEGRASYONLAR</a>
              <a href="#gorev-yonetimi" onClick={() => setMobileNavOpen(false)} className="hover:text-brand-blue">GÖREV YÖNETİMİ</a>
              <a href="#tasarim" onClick={() => setMobileNavOpen(false)} className="hover:text-brand-blue">TASARIM</a>
              <a href="#yorumlar" onClick={() => setMobileNavOpen(false)} className="hover:text-brand-blue">YORUMLAR</a>
              <a href="#mobil" onClick={() => setMobileNavOpen(false)} className="hover:text-brand-blue">MOBİL</a>
            </nav>
            <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-800">
              <button 
                onClick={() => { setMobileNavOpen(false); setShowDashboard(true); }}
                className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-500 text-slate-950 font-black text-center rounded-xl flex items-center justify-center gap-1.5 animate-pulse"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                <span>HEMEN TEST ET (GİRİŞ)</span>
              </button>
              <button 
                onClick={() => { setMobileNavOpen(false); setShowDashboard(true); }}
                className="w-full py-2.5 bg-brand-blue text-center font-bold rounded-xl text-white"
              >
                30 GÜN ÜCRETSİZ DENE
              </button>
            </div>
          </div>
        )}
      </header>

      {/* SECTION 1: HERO SECTION */}
      <section id="hero" className="relative pt-16 pb-24 md:pt-24 md:pb-36 overflow-hidden bg-gradient-to-b from-[#091520] via-[#070e14] to-[#070e14] border-b border-slate-900">
        {/* Background glowing shapes */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          {/* Main Titles */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-accent text-[11px] font-black uppercase tracking-widest inline-block animate-pulse">
              Ömür Boyu Komisyonsuz & %100 Güvenli Bulut
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-display leading-[1.1]">
              KöprüCloud Bulut Tabanlı <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">
                Ön Muhasebe Programı
              </span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
              KöprüCloud'un modern ve kolay arayüzü ile ön muhasebenizi her yerden, her zaman, istediğiniz cihazdan yönetin. Köprü Soft'un en geniş ve yaygın eğitim ve destek ağı ile dijitalleşin.
            </p>
          </div>

          {/* Core Action buttons inside hero */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={() => setShowDashboard(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-slate-950 font-black text-sm tracking-wider uppercase shadow-xl shadow-emerald-950/20 cursor-pointer animate-bounce"
            >
              🚀 CANLI DEMO / HEMEN BAŞLAT
            </button>
            <button 
              onClick={() => setShowDashboard(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-blue-900/40 cursor-pointer"
            >
              30 Gün Ücretsiz Dene
            </button>
          </div>

          {/* Triple Device CSS/SVG Mockup as requested in the image */}
          <div className="pt-16 max-w-5xl mx-auto relative group">
            <div className="absolute inset-0 bg-brand-blue/10 blur-3xl opacity-60 rounded-full scale-90" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
              
              {/* Tablet/Dashboard Display Mockup (Back-Left) */}
              <div className="hidden md:block w-72 bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-2xl shrink-0 -rotate-3 hover:rotate-0 transition-transform duration-500 relative -mr-16">
                <div className="h-4 flex items-center space-x-1 pb-2 border-b border-slate-800/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                <div className="pt-3 space-y-2 text-left">
                  <span className="text-[9px] font-black text-slate-500">KASA RAPORU</span>
                  <p className="text-xs font-black text-emerald-400">₺248.910,20</p>
                  <div className="w-full bg-slate-850 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 w-4/5 h-full rounded-full" />
                  </div>
                  <div className="pt-2 flex justify-between text-[8px] font-bold text-slate-400">
                    <span>Tahsilat Oranı</span>
                    <span>%80</span>
                  </div>
                </div>
              </div>

              {/* Main Laptop View (Center) */}
              <div className="w-full max-w-2xl bg-[#0d1620] rounded-3xl p-3 sm:p-5 border border-slate-700/60 shadow-[0_0_50px_rgba(59,130,246,0.15)] z-20 transition-all duration-300">
                <div className="h-5 flex items-center space-x-1.5 pb-3 border-b border-slate-850">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-500 font-mono tracking-widest pl-2">bulut.koprusoft.com.tr/panel</span>
                </div>
                {/* Simulated dashboard charts */}
                <div className="pt-4 space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-left">
                    <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-850/80">
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Toplam Satış</p>
                      <h4 className="text-sm sm:text-base font-black text-white pt-1">₺1.248.500</h4>
                      <span className="text-[8px] font-bold text-emerald-400">+12% Bu Ay</span>
                    </div>
                    <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-850/80">
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Ödemeler</p>
                      <h4 className="text-sm sm:text-base font-black text-rose-400 pt-1">₺340.120</h4>
                      <span className="text-[8px] font-bold text-rose-400">-4% Giderler</span>
                    </div>
                    <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-850/80">
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Net Kâr</p>
                      <h4 className="text-sm sm:text-base font-black text-brand-accent pt-1">₺908.380</h4>
                      <span className="text-[8px] font-bold text-brand-accent">%100 Komisyonsuz</span>
                    </div>
                  </div>
                  {/* Graphic bars simulation */}
                  <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-850 text-left space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-slate-300">Aylık Gelir Dağılım Grafiği (Yıl 2026)</span>
                      <span className="text-[8px] font-bold text-slate-500 bg-slate-800 px-2 py-0.5 rounded">Bulut Güncel</span>
                    </div>
                    <div className="flex items-end justify-between h-20 pt-2 px-4 gap-2">
                      <div className="bg-brand-blue/30 hover:bg-brand-blue w-full h-[30%] rounded-t-md transition-all cursor-pointer" />
                      <div className="bg-brand-blue/30 hover:bg-brand-blue w-full h-[45%] rounded-t-md transition-all cursor-pointer" />
                      <div className="bg-brand-blue/30 hover:bg-brand-blue w-full h-[60%] rounded-t-md transition-all cursor-pointer" />
                      <div className="bg-brand-blue/30 hover:bg-brand-blue w-full h-[50%] rounded-t-md transition-all cursor-pointer" />
                      <div className="bg-brand-blue/30 hover:bg-brand-blue w-full h-[85%] rounded-t-md transition-all cursor-pointer" />
                      <div className="bg-brand-accent w-full h-[95%] rounded-t-md transition-all cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Phone Screen Mockup (Front-Right) */}
              <div className="w-56 bg-[#091118] rounded-[32px] p-2.5 border-4 border-slate-700 shadow-2xl shrink-0 rotate-3 hover:rotate-0 transition-transform duration-500 relative -ml-16 z-30">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                </div>
                <div className="pt-4 space-y-3 text-left px-2 bg-slate-950 rounded-[24px] h-[280px] overflow-hidden flex flex-col justify-between py-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] text-slate-400 font-bold">KöprüCloud Cep</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="bg-slate-900 p-2 rounded-xl border border-slate-850">
                      <p className="text-[8px] text-slate-500 font-bold">KART LİMİTİ</p>
                      <p className="text-xs font-black text-white">₺48.000 / ₺50.000</p>
                    </div>
                  </div>
                  <div className="bg-brand-blue/10 border border-brand-blue/20 p-2 rounded-xl text-center text-[9px] font-bold text-brand-accent">
                    Ödeme Bekleyen 3 Fatura Var
                  </div>
                  <button className="w-full py-1.5 bg-brand-blue rounded-lg text-[9px] font-bold text-white text-center">
                    Hızlı İşlem Yap
                  </button>
                </div>
              </div>

            </div>

            {/* Apple & Play Store buttons */}
            <div className="flex items-center justify-center gap-4 pt-10">
              <span className="text-slate-400 text-xs font-bold mr-2">Mobil Uygulamayı İndirin:</span>
              <div className="flex gap-2">
                <div className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-slate-800 transition-colors">
                  <Smartphone className="w-4 h-4 text-slate-300" />
                  <div className="text-left leading-none">
                    <span className="text-[8px] font-bold text-slate-500 block">Download on the</span>
                    <span className="text-xs font-black text-white">App Store</span>
                  </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-slate-800 transition-colors">
                  <Smartphone className="w-4 h-4 text-slate-300" />
                  <div className="text-left leading-none">
                    <span className="text-[8px] font-bold text-slate-500 block">Get it on</span>
                    <span className="text-xs font-black text-white">Google Play</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: OCTOCLOUD CORE FEATURES (6 Grid Cards as in image) */}
      <section id="ozellikler" className="py-24 bg-[#070e14] border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              KöprüCloud Ön Muhasebe Programı ile Tüm İşlemlerinizi <br />
              <span className="text-brand-blue">Kolayca Yönetin</span>
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              KöprüCloud, işletmenizin büyümesine katkı sağlayan güçlü bir ön muhasebe çözümüdür. Kullanıcı dostu arayüzü ve gelişmiş özellikleriyle muhasebe süreçlerinizi kolaylaştırır ve verimliliğinizi arttırır.
            </p>
          </div>

          {/* 6 Feature grid matching image precisely */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1 */}
            <div className="bg-[#0b131b] border border-slate-850 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-brand-blue/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 text-brand-blue flex items-center justify-center">
                <Globe className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-brand-blue transition-colors">
                B2B Müşteri Bilgi Portalı
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Müşterilerinizin kendi siparişlerini, ekstrelerini ve ödeme durumlarını web üzerinden anlık olarak izleyebileceği kurumsal B2B entegre portal yapısı.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0b131b] border border-slate-850 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-brand-blue/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 text-brand-blue flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-brand-blue transition-colors">
                Cari Takibi
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tüm müşterilerinizin ve tedarikçilerinizin borç, alacak ve bakiye durumlarını, risk limitlerini tek ekrandan gecikme faizi olmadan yönetin.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0b131b] border border-slate-850 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-brand-blue/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 text-brand-blue flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-brand-blue transition-colors">
                Online Tahsilat
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tüm banka sanal POS entegrasyonları ile müşterilerinize tek tıkla güvenli ödeme linki gönderin, tahsilatlarınızı saniyeler içinde tamamlayın.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0b131b] border border-slate-850 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-brand-blue/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 text-brand-blue flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-brand-blue transition-colors">
                e-Ticaret Entegrasyonu
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Kendi web siteniz ve pazaryerlerindeki siparişlerinizin faturalarını tek tıkla e-Fatura olarak oluşturun, stoklarınızı otomatik güncelleyin.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#0b131b] border border-slate-850 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-brand-blue/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 text-brand-blue flex items-center justify-center">
                <Building className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-brand-blue transition-colors">
                Banka Entegrasyonu
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tüm bankalardaki ticari hesap hareketlerinizin otomatik olarak cari hesaplara işlenmesini sağlayın. Banka banka gezmeye son verin.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#0b131b] border border-slate-850 p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:border-brand-blue/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 text-brand-blue flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-brand-blue transition-colors">
                Mali Durum Raporu
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Geleceğe yönelik nakit akış tahminleri, kâr/zarar durum raporları ve KDV analiz tabloları ile finansal kararlarınızı verilerle yönlendirin.
              </p>
            </div>

          </div>

          <div className="text-center pt-10">
            <button 
              onClick={() => onOpenDemo("KöprüCloud Özellik Talebi")}
              className="px-6 py-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold rounded-xl uppercase tracking-wider transition-all cursor-pointer"
            >
              Tüm Özellikleri İncele
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 3: SPLIT INTERACTIVE SECTION (e-Fatura / e-İrsaliye / e-Arşiv as in image) */}
      <section id="entegrasyonlar" className="py-24 bg-[#091118] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left side circular mock diagram/visualizer */}
            <div className="flex justify-center relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-brand-blue/5 blur-2xl rounded-full" />
                <Laptop className="w-20 h-20 text-brand-blue absolute z-10" />
                
                {/* Rotating SVG badges around center */}
                <div className="absolute w-full h-full animate-spin-slow flex items-center justify-center pointer-events-none">
                  <div className="absolute top-4 bg-[#0b131b] border border-slate-700 px-3 py-1 rounded-full text-[10px] font-extrabold text-brand-accent shadow">
                    e-Fatura
                  </div>
                  <div className="absolute bottom-4 bg-[#0b131b] border border-slate-700 px-3 py-1 rounded-full text-[10px] font-extrabold text-brand-accent shadow">
                    e-İrsaliye
                  </div>
                  <div className="absolute left-2 bg-[#0b131b] border border-slate-700 px-3 py-1 rounded-full text-[10px] font-extrabold text-brand-accent shadow">
                    e-Arşiv
                  </div>
                  <div className="absolute right-2 bg-[#0b131b] border border-slate-700 px-3 py-1 rounded-full text-[10px] font-extrabold text-brand-accent shadow">
                    GİB Onay
                  </div>
                </div>
              </div>
            </div>

            {/* Right side copy content block */}
            <div className="space-y-6 text-left">
              <span className="text-xs font-black text-brand-accent bg-blue-900/30 px-3 py-1 rounded-lg uppercase tracking-wide border border-blue-800">
                GİB Özel Entegrasyon Güvencesi
              </span>
              <h3 className="text-3xl font-extrabold text-white font-display leading-tight">
                e-Fatura / e-İrsaliye / e-Arşiv <br />
                Entegrasyonu
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                KöprüCloud bulut tabanlı ön muhasebe programı ile e-faturalarınızı, e-irsaliyelerinizi dijital ortamda hızlıca oluşturun, e-Arşiv ile maliyetlerinizi azaltın. Faturalarınız yasal olarak 10 yıl boyunca bulut sunucularımızda güvenle saklanır.
              </p>
              
              <div className="space-y-2 text-xs font-bold text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Saniyeler içinde doğrudan GİB portalına iletim</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Müşterilere otomatik SMS ve E-Posta bildirimi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Faturadan tek tıkla e-İrsaliye dönüştürme</span>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => onOpenDemo("KöprüCloud e-Dönüşüm Entegrasyonu Detay")}
                  className="px-6 py-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold rounded-xl uppercase tracking-wider transition-all cursor-pointer"
                >
                  Detaylı Bilgi
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: GÖREV YÖNETİMİ (Task Management split preview as in image) */}
      <section id="gorev-yonetimi" className="py-24 bg-[#070e14] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black text-brand-accent">Süreç Takip Otomasyonu</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Görev Yönetimi
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              İş performansınızı aklınıza gelen her şeyi deneyerek arttıramazsınız. Ekip yönetimi sürekli raporlama ve düzenli iş akışı gerektirir. KöprüCloud'un bu özelliğini çok seveceksiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Desktop and mobile Task board mockups */}
            <div className="space-y-4">
              <div className="bg-[#0b131b] border border-slate-850 p-5 rounded-2xl text-left space-y-3 shadow-lg">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-300">Ekip Görev Panosu</span>
                  <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-[9px] font-bold text-amber-500 rounded">Aktif</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-850 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-slate-200">Aylık KDV Beyannamesi Onayı</p>
                      <span className="text-[9px] text-slate-500">Mali Müşavir Ataması</span>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-400 text-[9px] font-black rounded">Tamamlandı</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-850 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-slate-200">B2B Portal Altyapı Entegrasyonu</p>
                      <span className="text-[9px] text-slate-500">Yazılım Ekibi Ataması</span>
                    </div>
                    <span className="px-2 py-0.5 bg-blue-500/15 text-blue-400 text-[9px] font-black rounded">Yürüyor</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-left">
              <h4 className="text-2xl font-bold text-white font-display">
                KöprüCloud'un Bu Özelliğini Çok Seveceksiniz
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Muhasebe süreçlerinizi sadece kaydetmekle kalmayın, işinizi yürüten ekibin görev atamalarını da program içerisinden tek ekranda takip edin. Hangi çalışanınız hangi iş üzerinde ne kadar zaman harcıyor, geciken beyannameler ve fatura mutabakatları hangileri anında görün.
              </p>
              <div>
                <button 
                  onClick={() => onOpenDemo("KöprüCloud Görev Yönetimi Detay")}
                  className="px-6 py-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold rounded-xl uppercase tracking-wider transition-all cursor-pointer"
                >
                  Detaylı Bilgi
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: EASY INVOICE DESIGN (Kolay Kullanımlı Fatura Tasarımı as in image) */}
      <section id="tasarim" className="py-24 bg-[#091118] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Kolay Kullanımlı Fatura Tasarımı
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              KöprüCloud ile faturanızı kolayca oluşturup ardından faturanızı yazdırabilirsiniz. Sürükle bırak editör ile tasarım yapmak saniyeler alır.
            </p>
          </div>

          {/* Graphical Invoice creator mock */}
          <div className="max-w-4xl mx-auto bg-[#0b131b] border border-slate-800 p-6 sm:p-8 rounded-3xl text-left shadow-2xl relative">
            <div className="absolute top-4 right-4 text-[10px] font-bold text-brand-accent bg-blue-950 px-2 py-0.5 rounded border border-blue-900">
              Sürükle-Bırak Tasarım Şablonu
            </div>

            <div className="border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-6 bg-[#070e14]">
              {/* Invoice header info */}
              <div className="flex flex-col sm:flex-row justify-between border-b border-slate-850 pb-4 gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">SATICI BİLGİLERİ</span>
                  <p className="text-sm font-bold text-white">KÖPRÜ SOFT YAZILIM A.Ş.</p>
                  <p className="text-[10px] text-slate-400">Maslak, İstanbul • Tel: 0850 441 00 20</p>
                </div>
                <div className="text-left sm:text-right space-y-1">
                  <h4 className="text-base font-black text-white">SATIŞ FATURASI</h4>
                  <p className="text-[10px] text-slate-500">Tarih: 22.09.2026 • Fatura No: KPR20260001</p>
                </div>
              </div>

              {/* Invoice table preview */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-bold text-slate-400">
                  <thead className="bg-[#0b131b] text-slate-300">
                    <tr>
                      <th className="p-2 rounded-l-lg">Ürün Açıklaması</th>
                      <th className="p-2">Miktar</th>
                      <th className="p-2">Fiyat</th>
                      <th className="p-2">KDV</th>
                      <th className="p-2 rounded-r-lg text-right">Tutar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850">
                    <tr>
                      <td className="p-2 text-white">KöprüCloud Bulut ERP Lisansı (Yıllık)</td>
                      <td className="p-2">1 Adet</td>
                      <td className="p-2">₺12.000,00</td>
                      <td className="p-2">%20</td>
                      <td className="p-2 text-right text-white">₺14.400,00</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-white">100.000 e-Dönüşüm Kontörü Aktivasyonu</td>
                      <td className="p-2">1 Adet</td>
                      <td className="p-2">₺0,00</td>
                      <td className="p-2">%20</td>
                      <td className="p-2 text-right text-emerald-400">HEDİYE</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Total amounts */}
              <div className="border-t border-slate-850 pt-4 flex justify-end">
                <div className="w-64 space-y-1.5 text-xs font-bold">
                  <div className="flex justify-between text-slate-500">
                    <span>Ara Toplam:</span>
                    <span>₺12.000,00</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Hesaplanan KDV (%20):</span>
                    <span>₺2.400,00</span>
                  </div>
                  <div className="flex justify-between text-white text-sm border-t border-slate-800 pt-1.5">
                    <span>Toplam Genel Tutar:</span>
                    <span className="text-brand-accent">₺14.400,00</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: CLIENT REVIEWS (Mutlu Müşteri Yorumları as in image) */}
      <section id="yorumlar" className="py-24 bg-[#070e14] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Mutlu Müşteri Yorumları
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              Mutlu Müşterilerimizin yaşadığı olumlu deneyimler, ürünümüzün gücünü ve etkinliğini gözler önüne seriyor. İşte, KöprüCloud ile tanışan bazı müşterilerimizin değerlendirmeleri ve başarı hikayeleri. Siz de bu mutlu müşterilerden biri olmak için daha fazla beklemeyin!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, index) => (
              <div 
                key={index}
                className="bg-[#0b131b] border border-slate-850 p-8 rounded-2xl flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300 relative group"
              >
                {/* Quote Icon decorative */}
                <div className="absolute top-4 right-4 text-slate-800 text-4xl font-serif pointer-events-none group-hover:text-brand-blue/10 transition-colors">
                  ”
                </div>

                <div className="space-y-4">
                  <h5 className="text-xs font-black text-brand-accent uppercase tracking-wider">
                    {t.company}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-850 flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-xs font-extrabold text-white">{t.author}</p>
                    <p className="text-[10px] text-slate-500 font-bold">{t.role}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-black text-brand-blue">
                    KS
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: MOBİL UYGULAMA DESTEĞİ (as in image) */}
      <section id="mobil" className="py-24 bg-[#091118] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            
            {/* Left side Phone mockups */}
            <div className="flex justify-center relative">
              <div className="w-64 bg-[#091118] rounded-[40px] p-3 border-4 border-slate-700 shadow-2xl relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full" />
                <div className="pt-4 bg-slate-950 rounded-[32px] overflow-hidden h-[360px] p-4 flex flex-col justify-between">
                  <div className="space-y-2 text-left">
                    <p className="text-[10px] font-bold text-slate-500">KÖPRÜCLOUD MOBİL</p>
                    <h5 className="text-sm font-black text-white">Hoş Geldiniz</h5>
                    <div className="w-full h-[1px] bg-slate-850" />
                    <div className="bg-slate-900 p-2 rounded-xl text-[10px] space-y-1">
                      <p className="text-slate-500">Cari Bakiye:</p>
                      <p className="text-xs font-black text-brand-accent">₺120.450,20</p>
                    </div>
                  </div>
                  <div className="bg-brand-blue py-2 rounded-xl text-center text-xs font-black text-white cursor-pointer">
                    Giriş Yap
                  </div>
                </div>
              </div>
            </div>

            {/* Right side content with badges */}
            <div className="space-y-6 text-left">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-wide">Mobil Özgürlük</span>
              <h3 className="text-3xl font-extrabold text-white font-display">
                Mobil Uygulama Desteği
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                KöprüCloud Android ve iOS mobil uygulama desteği sunmaktadır. Ofise bağlı kalmadan, yolda, sahada veya evinizde tüm finansal süreçlerinizi saniyeler içinde cep telefonunuzdan yönetebilirsiniz.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-800 transition-colors">
                  <Smartphone className="w-5 h-5 text-slate-300" />
                  <div className="text-left leading-none">
                    <span className="text-[9px] font-bold text-slate-500 block">Download on the</span>
                    <span className="text-sm font-black text-white">App Store</span>
                  </div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-800 transition-colors">
                  <Smartphone className="w-5 h-5 text-slate-300" />
                  <div className="text-left leading-none">
                    <span className="text-[9px] font-bold text-slate-500 block">Get it on</span>
                    <span className="text-sm font-black text-white">Google Play</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: REFERANSLAR (as in image) */}
      <section id="referanslar" className="py-16 bg-[#070e14] border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest">GÜVENİLİR REFERANSLARIMIZ</h5>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-60 hover:opacity-100 transition-opacity">
            {references.map((r, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800/60 px-6 py-3.5 rounded-xl font-display font-black text-slate-400 text-sm hover:text-brand-blue transition-colors cursor-default"
              >
                {r.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Landing Page Footer */}
      <footer className="py-12 bg-[#050a0f] text-center text-xs text-slate-500 space-y-4">
        <p>© 2026 Köprü Soft Kurumsal Yazılım A.Ş. • KöprüCloud Tüm hakları saklıdır.</p>
        <div className="flex justify-center space-x-4">
          <button onClick={onBackToCorporate} className="hover:text-white transition-colors cursor-pointer">Ana Kurumsal Web Sitesi</button>
          <span>•</span>
          <a href="#ozellikler" className="hover:text-white transition-colors">Gizlilik Sözleşmesi</a>
          <span>•</span>
          <a href="#ozellikler" className="hover:text-white transition-colors">Bulut SLA Koşulları</a>
        </div>
      </footer>

    </div>
  );
}
