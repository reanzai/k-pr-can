import { useState, useEffect } from 'react';
import { 
  Phone, 
  Headset, 
  Globe, 
  User, 
  Menu, 
  X, 
  CheckCircle2, 
  ShieldAlert,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Server,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import KopruSoftLogo from './KopruSoftLogo';

interface NavbarProps {
  onOpenDemo: (campaignName?: string) => void;
  onToggleSubdomain?: () => void;
}

export default function Navbar({ onOpenDemo, onToggleSubdomain }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'TR' | 'EN'>('TR');
  const [noticeMessage, setNoticeMessage] = useState<string | null>(null);
  
  // Interactive Login Portal States
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState<'kurumsal' | 'bulut' | 'bayi'>('kurumsal');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#0b1b29] text-[11px] text-slate-300 border-b border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href="tel:08504410020" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              <span className="font-semibold">0850 441 00 20</span>
            </a>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <Headset className="w-3.5 h-3.5 text-brand-accent" />
              <span>7/24 Teknik Destek & Çağrı Merkezi</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-emerald-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold">GİB e-Dönüşüm Sistemleri Aktif</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-4 divide-x divide-slate-700">
            <div className="flex items-center space-x-3 text-slate-300 pr-1">
              <a href="#bayi" className="hover:text-white transition-colors flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                Çözüm Ortağı Girişi
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a href="#portal" className="hover:text-white transition-colors hidden sm:flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                Bulut Portal
              </a>
            </div>
            <div className="pl-4 flex items-center gap-2">
              <button 
                onClick={() => setLang('TR')}
                className={`font-bold hover:text-white transition-colors ${lang === 'TR' ? 'text-brand-accent' : 'text-slate-400'}`}
              >
                TR
              </button>
              <span className="text-slate-600">|</span>
              <button 
                onClick={() => setLang('EN')}
                className={`font-bold hover:text-white transition-colors ${lang === 'EN' ? 'text-brand-accent' : 'text-slate-400'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar Header */}
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'border-b border-slate-100 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex-shrink-0 transition-transform hover:opacity-95">
              <KopruSoftLogo variant="light" />
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden xl:flex items-center space-x-6 text-[14px] font-bold text-slate-700">
              <a href="#kurumsal" className="hover:text-brand-blue transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all hover:after:w-full">Kurumsal</a>
              <a href="#moduller" className="hover:text-brand-blue transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all hover:after:w-full">ERP & Ticari</a>
              <a href="#e-donusum" className="hover:text-brand-blue transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all hover:after:w-full">e-Dönüşüm</a>
              <a href="#hizmetler" className="hover:text-brand-blue transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all hover:after:w-full">Hizmetler</a>
              <a href="#sektorel" className="hover:text-brand-blue transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all hover:after:w-full">Sektörel</a>
              <a href="#mobil-bulut" className="hover:text-brand-blue transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all hover:after:w-full">Mobil & Bulut</a>
              <a href="#kampanyalar" className="hover:text-brand-blue transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all hover:after:w-full">Fırsatları Keşfet</a>
              <a href="#iletisim" className="hover:text-brand-blue transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all hover:after:w-full">İletişim</a>
              {onToggleSubdomain && (
                <button 
                  onClick={onToggleSubdomain}
                  className="text-brand-blue hover:text-brand-blue-hover font-extrabold text-[11px] transition-all duration-300 flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100/80 px-2.5 py-1 rounded-lg border border-blue-100 cursor-pointer animate-pulse"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>bulut.koprusoft.com.tr</span>
                </button>
              )}
            </nav>

            {/* Header Actions */}
            <div className="hidden sm:flex items-center space-x-3">
              <button 
                onClick={() => onOpenDemo("Genel Kurumsal Çözüm")}
                className="px-4 py-2 rounded-lg border border-brand-blue text-brand-blue hover:bg-blue-50 font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm cursor-pointer"
              >
                Demo Talebi
              </button>
              <button 
                onClick={() => {
                  setLoginError('');
                  setLoginSuccess(false);
                  setEmail('');
                  setPassword('');
                  setLoginModalOpen(true);
                }}
                className="px-4.5 py-2 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-brand-blue/20 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5" />
                <span>Müşteri Girişi</span>
              </button>
            </div>

            {/* Mobile hamburger menu toggle */}
            <div className="xl:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-brand-blue focus:outline-none"
                aria-label="Menüyü Aç"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 shadow-lg py-4 px-6 space-y-4 absolute left-0 right-0 top-full">
            <div className="flex flex-col space-y-3 font-semibold text-slate-700">
              <a href="#kurumsal" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-blue py-1 transition-colors">Kurumsal</a>
              <a href="#moduller" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-blue py-1 transition-colors">ERP & Ticari</a>
              <a href="#e-donusum" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-blue py-1 transition-colors">e-Dönüşüm</a>
              <a href="#hizmetler" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-blue py-1 transition-colors">Hizmetler</a>
              <a href="#sektorel" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-blue py-1 transition-colors">Sektörel</a>
              <a href="#mobil-bulut" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-blue py-1 transition-colors">Mobil & Bulut</a>
              <a href="#kampanyalar" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-blue py-1 transition-colors">Fırsatları Keşfet</a>
              <a href="#iletisim" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-blue py-1 transition-colors">İletişim</a>
              {onToggleSubdomain && (
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onToggleSubdomain();
                  }}
                  className="w-full text-left text-brand-blue hover:text-brand-blue-hover font-black py-2.5 border-t border-b border-blue-50/60 flex items-center gap-2 cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  <span>bulut.koprusoft.com.tr (Bulut Görünümü)</span>
                </button>
              )}
            </div>
            
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo("Genel Kurumsal Çözüm");
                }}
                className="w-full text-center px-4 py-2.5 rounded-lg border border-brand-blue text-brand-blue hover:bg-blue-50 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Demo Talebi
              </button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setLoginError('');
                  setLoginSuccess(false);
                  setEmail('');
                  setPassword('');
                  setLoginModalOpen(true);
                }}
                className="w-full text-center px-4 py-2.5 rounded-lg bg-brand-blue text-white hover:bg-brand-blue-hover font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-brand-blue/10 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <User className="w-3.5 h-3.5" />
                <span>Müşteri Girişi</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Corporate Notification Modal */}
      <AnimatePresence>
        {noticeMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNoticeMessage(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            
            {/* Content box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 overflow-hidden text-xs text-slate-600 space-y-4"
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-5 h-5 text-brand-blue animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">Sistem Bilgilendirmesi</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Güvenli Bağlantı Portalı</p>
                </div>
              </div>
              
              <p className="leading-relaxed font-medium">
                {noticeMessage}
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Hızlı Destek Hattı</p>
                  <p className="text-xs font-bold text-slate-800">0850 441 00 20 (7/24 Aktif)</p>
                </div>
              </div>
              
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    setNoticeMessage(null);
                    onOpenDemo("Müşteri Portalı Erken Erişim Talebi");
                  }}
                  className="px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-brand-blue font-bold tracking-wide transition-all cursor-pointer"
                >
                  Bizi Arayın
                </button>
                <button
                  onClick={() => setNoticeMessage(null)}
                  className="px-4 py-2 rounded-lg bg-brand-navy hover:bg-slate-900 text-white font-bold tracking-wide transition-all cursor-pointer"
                >
                  Anladım, Kapat
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Interactive Müşteri Giriş Portalı Modal */}
        {loginModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with sophisticated blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isSubmitting) setLoginModalOpen(false);
              }}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
            />
            
            {/* Premium unified Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-white rounded-[32px] max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200/60 overflow-hidden text-xs text-slate-600"
            >
              {/* Sleek top colored ribbon accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-blue-500" />
              
              {/* Close Button */}
              {!isSubmitting && !loginSuccess && (
                <button 
                  onClick={() => setLoginModalOpen(false)}
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-all cursor-pointer"
                  aria-label="Kapat"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              {loginSuccess ? (
                /* Success Animated View */
                <div className="py-8 text-center space-y-5">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto border border-emerald-100 shadow-md"
                  >
                    <ShieldCheck className="w-9 h-9" />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-slate-900 font-display">Doğrulama Başarılı</h3>
                    <p className="text-slate-500 font-medium max-w-xs mx-auto">
                      Güvenli {loginType === 'bulut' ? 'KöprüCloud Bulut ERP' : loginType === 'kurumsal' ? 'Kurumsal Yönetim' : 'B2B Bayi'} sistemine başarıyla doğrulandınız.
                    </p>
                    <p className="text-[10px] text-brand-blue font-black tracking-widest uppercase animate-pulse pt-2">
                      Sisteme yönlendiriliyorsunuz...
                    </p>
                  </div>

                  <button 
                    onClick={() => {
                      setLoginModalOpen(false);
                      setLoginSuccess(false);
                    }}
                    className="px-8 py-3 bg-[#091520] hover:bg-slate-900 text-white font-extrabold rounded-xl transition-all shadow-md cursor-pointer text-xs uppercase tracking-wider"
                  >
                    Panele Bağlan
                  </button>
                </div>
              ) : (
                /* Main Login Form View */
                <div className="space-y-6">
                  {/* Centered Brand Lockup */}
                  <div className="text-center space-y-2.5 pb-2">
                    <div className="inline-flex bg-slate-50 p-2.5 rounded-2xl border border-slate-100 shadow-sm justify-center items-center">
                      <KopruSoftLogo showText={false} iconSize="h-11 w-11" variant="light" />
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 font-display tracking-tight">Sistem Giriş Portalı</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">KöprüSoft Kurumsal Güvenli Sunucu</p>
                    </div>
                  </div>

                  {/* Physical Style Segmented Selector Tabs */}
                  <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200/60">
                    <button
                      type="button"
                      onClick={() => {
                        setLoginType('kurumsal');
                        setLoginError('');
                      }}
                      className={`py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                        loginType === 'kurumsal' 
                          ? 'bg-white text-brand-blue shadow-sm' 
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Kurumsal
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLoginType('bulut');
                        setLoginError('');
                      }}
                      className={`py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                        loginType === 'bulut' 
                          ? 'bg-white text-brand-blue shadow-sm' 
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      KöprüCloud
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLoginType('bayi');
                        setLoginError('');
                      }}
                      className={`py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                        loginType === 'bayi' 
                          ? 'bg-white text-brand-blue shadow-sm' 
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      B2B Bayi
                    </button>
                  </div>

                  {/* Dark Secure notification banner for MFA security updates */}
                  <div className="bg-[#091520] rounded-2xl p-4 border border-slate-800 flex gap-3 text-slate-300 text-[11px] leading-relaxed font-medium text-left">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5 animate-pulse" />
                    <div>
                      <span className="font-bold text-white block">İki Adımlı Doğrulama (2FA):</span>
                      Güvenliğiniz için giriş sonrası sisteme kayıtlı telefonunuza anlık SMS onay kodu gönderilecektir.
                    </div>
                  </div>

                  {/* Error Alert */}
                  {loginError && (
                    <div className="bg-rose-50 text-rose-700 text-[11px] font-bold p-3 rounded-xl border border-rose-100/80 text-left">
                      ⚠️ {loginError}
                    </div>
                  )}

                  {/* Credentials Form */}
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if (!email) {
                      setLoginError('Lütfen e-posta adresinizi veya müşteri numaranızı girin.');
                      return;
                    }
                    if (!password) {
                      setLoginError('Lütfen parolanızı girin.');
                      return;
                    }
                    setLoginError('');
                    setIsSubmitting(true);
                    setTimeout(() => {
                      setIsSubmitting(false);
                      setLoginSuccess(true);
                    }, 1400);
                  }} className="space-y-4 text-left">
                    
                    {/* Username or Email Input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                        E-posta Adresi / Müşteri No
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ornek@koprusoft.com.tr"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue bg-slate-50 focus:bg-white text-xs text-slate-800 font-semibold transition-all"
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                          Giriş Parolası
                        </label>
                        <a href="#sifremi-unuttum" className="text-[10px] text-brand-blue hover:underline font-bold">
                          Şifremi Unuttum?
                        </a>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue bg-slate-50 focus:bg-white text-xs text-slate-800 font-semibold transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Quick Demo Pre-fill option */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setEmail('demo@koprusoft.com.tr');
                          setPassword('Sifre123_Kopru');
                          setLoginError('');
                        }}
                        className="w-full text-center py-2 bg-blue-50/50 hover:bg-blue-50 text-brand-blue text-[10px] font-extrabold rounded-xl border border-blue-100 transition-all cursor-pointer"
                      >
                        💡 Hızlı Test Bilgilerini Otomatik Doldur
                      </button>
                    </div>

                    {/* Submit Login Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-extrabold tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-brand-blue/15 hover:scale-[1.01] active:scale-98 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Kimlik Doğrulanıyor...</span>
                        </>
                      ) : (
                        <>
                          <span>Güvenli Sistem Girişi</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
