import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import DashboardShowcase from './components/DashboardShowcase';
import SavingsCalculator from './components/SavingsCalculator';
import EDonusumGrid from './components/EDonusumGrid';
import ServicesSection from './components/ServicesSection';
import ModulesGrid from './components/ModulesGrid';
import PromoOffers from './components/PromoOffers';
import SloganBanner from './components/SloganBanner';
import DemoRequestModal from './components/DemoRequestModal';
import DocumentPortalModal from './components/DocumentPortalModal';
import KopruCloudLanding from './components/KopruCloudLanding';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { MessageSquare, X, Send, Bot, Sparkles, HelpCircle, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState('Genel Kurumsal Çözüm');
  const [viewMode, setViewMode] = useState<'corporate' | 'subdomain'>('corporate');

  // Interactive Document Portal states
  const [docOpen, setDocOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  const handleOpenDoc = (docId: string) => {
    setSelectedDocId(docId);
    setDocOpen(true);
  };

  // Interactive Live Chat Assistant states
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Merhaba! Ben Köprü Soft Dijital Asistanı. Kurumsal Dönüşüm Kampanyamız, e-Fatura geçiş süreçleri veya Köprü ERP modüllerimiz hakkında sorularınızı yanıtlamaktan mutluluk duyarım. Nasıl yardımcı olabilirim?',
      time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleOpenDemo = (campaignName?: string) => {
    setSelectedCampaign(campaignName || 'Genel Kurumsal Çözüm');
    setDemoOpen(true);
  };

  const PRE_PROGRAMMED_QAS = [
    {
      q: 'e-Fatura geçiş süreci ne kadar sürer?',
      a: 'Köprü Soft ile GİB e-Fatura geçişiniz sadece 30 dakika sürer! Sizin adınıza mali mühür başvurusu, GİB aktivasyonu ve yerinde ücretsiz kullanıcı eğitimleri uzman ekiplerimizce aynı gün tamamlanır.'
    },
    {
      q: 'Kampanyadaki 50.000 Kontör hediyesi neleri kapsar?',
      a: 'Yeni geçiş yapan firmalara özel hediye edilen 50.000 kontör; e-Fatura, e-Arşiv, e-SMM ve e-Müstahsil makbuzu gönderimlerinizin tamamında yasal 10 yıl saklama garantisiyle birlikte tamamen ücretsiz olarak kullanılabilir.'
    },
    {
      q: 'Sistem yerel sunucuda mı yoksa bulutta mı çalışıyor?',
      a: 'Köprü ERP sistemimiz hibrit mimariye sahiptir. İster firmanıza ait yerel sunucularda (On-Premise), isterseniz hiçbir donanım yatırımı gerektirmeyen, %99.98 uptime garantili KöprüCloud bulut altyapımızda güvenle barındırabilirsiniz.'
    },
    {
      q: 'Fiyatlandırma ve lisanslama modelleri nasıldır?',
      a: 'İşletmenizin büyüklüğüne göre modüler lisanslama yapıyoruz. Sadece ihtiyacınız olan ERP modüllerini satın alarak ek maliyetlerden korunursunuz. Detaylı teklif için yukarıdaki "Demo Talebi" formunu doldurabilirsiniz.'
    }
  ];

  const handleQuestionClick = (question: string, answer: string) => {
    const timeString = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
    
    // Add user message
    const userMsg = { sender: 'user' as const, text: question, time: timeString };
    
    setChatMessages((prev) => [...prev, userMsg]);

    // Simulate bot response with a tiny delay
    setTimeout(() => {
      const botMsg = { sender: 'bot' as const, text: answer, time: timeString };
      setChatMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-blue selection:text-white antialiased flex flex-col justify-between">
      
      {viewMode === 'subdomain' ? (
        <KopruCloudLanding 
          onBackToCorporate={() => setViewMode('corporate')} 
          onOpenDemo={handleOpenDemo} 
        />
      ) : (
        <>
          {/* Top Navigation Bar */}
          <Navbar onOpenDemo={handleOpenDemo} onToggleSubdomain={() => setViewMode('subdomain')} />

          {/* Main Core View Modules */}
          <main className="flex-grow">
            
            {/* Responsive Interactive Hero Section */}
            <Hero onOpenDemo={handleOpenDemo} />

            {/* 12-Stat Corporate Verification Matrix */}
            <Stats />

            {/* Interactive browser-based ERP showcase console */}
            <DashboardShowcase />

            {/* Interactive GİB paper-saving dynamic savings calculator */}
            <SavingsCalculator onOpenDemo={handleOpenDemo} />

            {/* Gelir İdaresi Başkanlığı onaylı akıllı e-Dönüşüm modülleri grid */}
            <EDonusumGrid onOpenDemo={handleOpenDemo} />

            {/* Kurumsal web sitesi tasarımı, özel yazılım entegrasyonu ve bulut hizmetleri */}
            <ServicesSection onOpenDemo={handleOpenDemo} />

            {/* Slogan bridge emblem section + Abstract Tech Wave mesh panel */}
            <SloganBanner onOpenDemo={handleOpenDemo} />

            {/* Categorized and searchable product modules explorer */}
            <ModulesGrid onOpenDemo={handleOpenDemo} />

            {/* Dual Promotional campaigns cards */}
            <PromoOffers onOpenDemo={handleOpenDemo} />

          </main>

          {/* Corporate compliant responsive footer map */}
          <Footer onOpenDoc={handleOpenDoc} />
        </>
      )}

      {/* GDPR cookie consent slider notification */}
      <CookieBanner />

      {/* Live Enterprise lead capture pop-up modal */}
      <DemoRequestModal 
        isOpen={demoOpen} 
        onClose={() => setDemoOpen(false)} 
        selectedCampaign={selectedCampaign} 
      />

      {/* Interactive Document & Information Center Portal */}
      <DocumentPortalModal 
        isOpen={docOpen}
        onClose={() => setDocOpen(false)}
        selectedDocId={selectedDocId}
      />

      {/* INTERACTIVE CUSTOMER HELP CHATBOT WIDGET */}
      <div className="fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-80 sm:w-96 overflow-hidden flex flex-col mb-4 h-[420px]"
            >
              {/* Chat Title bar */}
              <div className="bg-brand-navy p-4 flex justify-between items-center text-white">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center border border-brand-accent/30 shadow-md">
                    <Bot className="w-4 h-4 text-brand-accent animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs font-display tracking-wider">Köprü Soft Dijital Rehber</h4>
                    <span className="text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                      Canlı Çevrimiçi
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setChatOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-lg"
                  aria-label="Kapat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Messages Frame Area */}
              <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50/50">
                {chatMessages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] rounded-2xl p-3 text-xs shadow-sm ${msg.sender === 'user' ? 'bg-brand-blue text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-200/80'}`}>
                      <p className="leading-relaxed font-medium">{msg.text}</p>
                      <span className={`block text-[8px] mt-1 text-right ${msg.sender === 'user' ? 'text-slate-200' : 'text-slate-400'}`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Preset FAQs selector bar for instant answer interaction */}
              <div className="p-3 bg-white border-t border-slate-100 space-y-1.5">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <HelpCircle className="w-3 h-3 text-brand-blue" />
                  <span>Sıkça Sorulan Sorular:</span>
                </p>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pb-1">
                  {PRE_PROGRAMMED_QAS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuestionClick(item.q, item.a)}
                      className="px-2.5 py-1 bg-slate-50 hover:bg-blue-50 text-[10px] text-slate-600 hover:text-brand-blue font-semibold border border-slate-200 hover:border-blue-100 rounded-lg text-left transition-all cursor-pointer"
                      type="button"
                    >
                      {item.q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer contact quick info */}
              <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-bold">
                <span className="flex items-center gap-1">
                  <PhoneCall className="w-3.5 h-3.5 text-brand-blue" />
                  <span>0850 441 00 20</span>
                </span>
                <button 
                  onClick={() => {
                    setChatOpen(false);
                    handleOpenDemo("Destek Asistanı Hızlı İrtibat");
                  }}
                  className="text-brand-blue hover:underline cursor-pointer"
                >
                  Sizi Arayalım
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glowing floating action button for opening chat */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className={`w-14 h-14 rounded-full text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer relative ${chatOpen ? 'bg-rose-500 hover:bg-rose-600' : 'bg-brand-blue hover:bg-brand-blue-hover'}`}
          aria-label="Destek Asistanını Aç"
        >
          {chatOpen ? (
            <X className="w-6 h-6 animate-spin-once" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              {/* Unread dot indicator notification pulse */}
              <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white animate-ping"></span>
              <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
