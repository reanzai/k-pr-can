import { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Phone, Check, Clock, Globe, ArrowRight } from 'lucide-react';
import KopruSoftLogo from './KopruSoftLogo';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCampaign: string;
}

export default function DemoRequestModal({ isOpen, onClose, selectedCampaign }: DemoRequestModalProps) {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [solution, setSolution] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [kvkkAccepted, setKvkkAccepted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Custom select states
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [solutionDropdownOpen, setSolutionDropdownOpen] = useState(false);

  // Sync selected campaign when modal opens
  useEffect(() => {
    if (isOpen) {
      setSolution(selectedCampaign || 'Genel Kurumsal Çözüm');
      setSuccess(false);
      setLoading(false);
      setErrors({});
      setKvkkAccepted(false);
      setCityDropdownOpen(false);
      setSolutionDropdownOpen(false);
      setCitySearch('');
    }
  }, [isOpen, selectedCampaign]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Ad Soyad alanı zorunludur.';
    if (!companyName.trim()) newErrors.companyName = 'Şirket Ünvanı zorunludur.';
    
    if (!phone.trim()) {
      newErrors.phone = 'Telefon numarası zorunludur.';
    } else if (!/^[0-9+() \-]{9,16}$/.test(phone)) {
      newErrors.phone = 'Lütfen geçerli bir telefon numarası girin.';
    }
    
    if (!email.trim()) {
      newErrors.email = 'E-Posta adresi zorunludur.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Lütfen geçerli bir e-posta adresi girin.';
    }
    
    if (!city) newErrors.city = 'Kurulum yapılacak şehri seçiniz.';
    
    if (!kvkkAccepted) {
      newErrors.kvkk = 'KVKK aydınlatma metnini onaylamanız gerekmektedir.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate enterprise database save and CRM lead creation
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Generate a realistic tracking ticket code
      const randomTicket = 'KS-' + Math.floor(100000 + Math.random() * 900000);
      setTrackingCode(randomTicket);
      
      // Clear inputs
      setFullName('');
      setCompanyName('');
      setPhone('');
      setEmail('');
      setCity('');
      setNotes('');
      setKvkkAccepted(false);
    }, 1500);
  };

  // 81 Turkish Cities in alphabetical order
  const TURKISH_CITIES_81 = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin', 'Aydın',
    'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı',
    'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
    'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul',
    'İzmir', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya',
    'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu',
    'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli',
    'Şanlıurfa', 'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale',
    'Batman', 'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
  ];

  const SOLUTIONS_LIST = [
    'Genel Kurumsal Çözüm',
    'Köprü ERP',
    'Köprü MRP',
    'Köprü CRM',
    'Köprü HRM',
    'Muhasebe & Finans',
    'Bulut Yazılımlar',
    'KöprüCloud Geçiş Paketi (%30 İndirim)',
    '100.000 Kontör + e-İmza Kampanyası'
  ];

  // Localized Turkish lowercase filter for accurate search indexing
  const filteredCities = TURKISH_CITIES_81.filter((c) =>
    c.toLocaleLowerCase('tr-TR').includes(citySearch.toLocaleLowerCase('tr-TR'))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Smooth Dark overlay backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Split Layout Modal Container */}
      <div className="bg-white rounded-[32px] w-full max-w-4xl shadow-2xl border border-slate-200/80 overflow-hidden relative z-10 transition-all duration-300 flex flex-col md:flex-row h-auto max-h-[90vh] md:max-h-[680px]">
        
        {/* Left Column: Premium Corporate Briefing Board */}
        <div className="md:w-5/12 bg-[#091520] p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-slate-800">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-3xl rounded-full pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            {/* Logo Wordmark header */}
            <div className="flex items-center gap-3">
              <div className="bg-slate-900/80 p-2.5 rounded-2xl border border-slate-800 shadow-inner flex items-center justify-center">
                <KopruSoftLogo showText={false} iconSize="h-10 w-10" variant="dark" />
              </div>
              <div>
                <h4 className="font-display font-black text-sm tracking-wider uppercase text-slate-100">KöprüSoft</h4>
                <p className="text-[10px] text-brand-blue font-bold tracking-widest uppercase">Geçiş Portalı</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-display font-extrabold tracking-tight leading-tight text-white">
                Kurumsal Dijital <br />
                Dönüşüm Başvurusu
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                İşletmenizi modern e-Dönüşüm, bulut ön muhasebe ve entegre ERP altyapısıyla tanıştırmak için ilk adımı güvenle atın.
              </p>
            </div>

            {/* Premium proof bullets (no emoji slop, neat typographical inline structure) */}
            <div className="space-y-4 pt-4 border-t border-slate-800/60">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-950 border border-brand-blue/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-brand-accent" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-200">30 Dakikada e-Fatura Aktivasyonu</p>
                  <p className="text-[10px] text-slate-500 font-medium">Mali mühür ve GİB geçişleriniz uzman Ar-Ge ekibimizce yapılır.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-950 border border-brand-blue/30 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-200">GİB Özel Entegratör Güvencesi</p>
                  <p className="text-[10px] text-slate-500 font-medium">%100 Gelir İdaresi Başkanlığı onaylı yüksek hızlı güvenli sunucular.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-950 border border-brand-blue/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3 h-3 text-brand-accent" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-200">Dedicated Teknik Destek</p>
                  <p className="text-[10px] text-slate-500 font-medium">Telefon, canlı chat ve yerinde birebir kullanıcı eğitimi desteği.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Symmetrical footer info with tabular numbers */}
          <div className="pt-6 border-t border-slate-800/60 space-y-2 text-left relative z-10 hidden md:block">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-blue shrink-0" />
              <div className="leading-none">
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Hızlı Destek Hattı</p>
                <p className="text-xs font-mono font-bold text-slate-200 mt-0.5 tracking-wide">0850 441 00 20</p>
              </div>
            </div>
            <p className="text-[9px] text-slate-500 font-medium">
              © 2026 KöprüSoft Kurumsal Yazılım Teknolojileri A.Ş. Tüm hakları saklıdır.
            </p>
          </div>
        </div>

        {/* Right Column: Clean Premium Input Form / Success Screen */}
        <div className="md:w-7/12 bg-white flex flex-col justify-between overflow-y-auto relative h-full">
          
          {/* Header toolbar */}
          <div className="px-6 pt-6 pb-2 flex justify-between items-center bg-white sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-blue" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono">GİB-GÜVENLİ-TALEP</span>
            </div>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all p-2 rounded-full cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="px-6 pb-6 pt-2 flex-grow">
            {success ? (
              /* High fidelity Success Screen with strict tabular data */
              <div className="py-10 text-center space-y-6 max-w-md mx-auto">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto border border-emerald-100 shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-xl font-extrabold text-slate-900 font-display">Talebiniz Kaydedildi</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Kurumsal CRM entegrasyon sistemimiz talebinizi başarıyla doğruladı. Satış teknik mühendisimiz en geç <strong className="text-brand-blue">15 dakika içerisinde</strong> belirtmiş olduğunuz iletişim numaralarından geri dönüş sağlayacaktır.
                  </p>
                </div>

                {/* Symmetrical clean receipt container */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-left space-y-3">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider text-center border-b border-slate-200 pb-2">Geçiş İşlem Detayları</p>
                  
                  <div className="grid grid-cols-2 gap-y-2 text-xs font-medium">
                    <span className="text-slate-400">Takip Kodu:</span>
                    <span className="text-right font-mono font-bold text-slate-800">{trackingCode}</span>
                    
                    <span className="text-slate-400">İşlem Statüsü:</span>
                    <span className="text-right text-emerald-600 font-bold">Kuyruğa Eklendi</span>
                    
                    <span className="text-slate-400">Öncelik Derecesi:</span>
                    <span className="text-right text-brand-blue font-bold">Yüksek (VIP)</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-8 py-3 bg-[#091520] hover:bg-slate-900 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Kapat
                  </button>
                </div>
              </div>
            ) : (
              /* Clean Premium Form */
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Form Heading & Pitch */}
                <div className="space-y-1 mb-2">
                  <h3 className="text-lg font-display font-extrabold text-slate-900">Talep Bilgileri</h3>
                  <p className="text-slate-400 text-[11px] font-medium leading-normal">
                    Lütfen aşağıdaki alanları eksiksiz doldurunuz. Yıldızlı (*) alanlar zorunludur.
                  </p>
                </div>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full name input */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Ad Soyad *</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-200 text-xs font-semibold ${errors.fullName ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200'}`}
                      placeholder="Örn: Ahmet Yılmaz"
                    />
                    {errors.fullName && <p className="text-[10px] text-rose-500 font-semibold">{errors.fullName}</p>}
                  </div>

                  {/* Company name input */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Şirket Ünvanı *</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-200 text-xs font-semibold ${errors.companyName ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200'}`}
                      placeholder="Örn: Limitless Teknoloji A.Ş."
                    />
                    {errors.companyName && <p className="text-[10px] text-rose-500 font-semibold">{errors.companyName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Telephone */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Telefon Numarası *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-200 text-xs font-semibold ${errors.phone ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200'}`}
                      placeholder="Örn: 0555 123 45 67"
                    />
                    {errors.phone && <p className="text-[10px] text-rose-500 font-semibold">{errors.phone}</p>}
                  </div>

                  {/* E-mail */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">E-Posta Adresi *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-200 text-xs font-semibold ${errors.email ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200'}`}
                      placeholder="Örn: info@sirketiniz.com"
                    />
                    {errors.email && <p className="text-[10px] text-rose-500 font-semibold">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Selected Solution (Premium Custom Dropdown with Logo) */}
                  <div className="space-y-1.5 text-left relative">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">İlgilenilen Çözüm</label>
                    
                    {/* Outside click handler overlay */}
                    {solutionDropdownOpen && (
                      <div className="fixed inset-0 z-20" onClick={() => setSolutionDropdownOpen(false)} />
                    )}

                    <div className="relative z-30">
                      <button
                        type="button"
                        onClick={() => {
                          setSolutionDropdownOpen(!solutionDropdownOpen);
                          setCityDropdownOpen(false);
                        }}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-850 text-left focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-200 text-xs font-bold flex items-center justify-between gap-2 cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <KopruSoftLogo showText={false} iconSize="h-4.5 w-4.5" variant="light" />
                          <span className="text-slate-800 font-bold truncate">{solution || 'Seçiniz...'}</span>
                        </div>
                        <svg className={`fill-current h-3 w-3 text-slate-500 transition-transform ${solutionDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </button>

                      {/* Solutions list dropdown panel */}
                      {solutionDropdownOpen && (
                        <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl z-40 overflow-hidden max-h-60 overflow-y-auto divide-y divide-slate-50">
                          {SOLUTIONS_LIST.map((s) => {
                            const isSelected = solution === s;
                            return (
                              <button
                                key={s}
                                type="button"
                                onClick={() => {
                                  setSolution(s);
                                  setSolutionDropdownOpen(false);
                                }}
                                className={`w-full px-4 py-2.5 text-left text-xs font-bold hover:bg-blue-50/80 hover:text-brand-blue flex items-center justify-between gap-2 transition-colors ${isSelected ? 'bg-blue-50 text-brand-blue' : 'text-slate-700'}`}
                              >
                                <span className="truncate">{s}</span>
                                <div className="flex items-center gap-1.5 shrink-0">
                                  <KopruSoftLogo showText={false} iconSize="h-4 w-4" variant="light" />
                                  {isSelected && (
                                    <span className="text-[8px] font-black text-brand-blue uppercase tracking-widest font-mono">AKTİF</span>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Kurulum Şehri (81 Cities Custom Dropdown with Logo) */}
                  <div className="space-y-1.5 text-left relative">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Kurulum Yapılacak Şehir *</label>
                    
                    {/* Outside click handler overlay */}
                    {cityDropdownOpen && (
                      <div className="fixed inset-0 z-20" onClick={() => setCityDropdownOpen(false)} />
                    )}

                    <div className="relative z-30">
                      <button
                        type="button"
                        onClick={() => {
                          setCityDropdownOpen(!cityDropdownOpen);
                          setSolutionDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-850 text-left focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-200 text-xs font-bold flex items-center justify-between gap-2 cursor-pointer ${errors.city ? 'border-rose-500 bg-rose-50/50' : 'border-slate-200'}`}
                      >
                        <div className="flex items-center gap-2">
                          {city ? (
                            <>
                              <KopruSoftLogo showText={false} iconSize="h-4.5 w-4.5" variant="light" />
                              <span className="text-slate-800 font-bold">{city}</span>
                            </>
                          ) : (
                            <span className="text-slate-400 font-medium">Seçiniz...</span>
                          )}
                        </div>
                        <svg className={`fill-current h-3 w-3 text-slate-500 transition-transform ${cityDropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </button>

                      {/* Dropdown panel for 81 Turkish cities */}
                      {cityDropdownOpen && (
                        <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-2xl shadow-xl z-40 overflow-hidden flex flex-col max-h-60">
                          {/* Search bar inside the dropdown list */}
                          <div className="p-2.5 border-b border-slate-100 bg-slate-50 flex-shrink-0">
                            <input
                              type="text"
                              value={citySearch}
                              onChange={(e) => setCitySearch(e.target.value)}
                              placeholder="81 ili filtreleyin..."
                              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                          
                          {/* Scrollable list items */}
                          <div className="overflow-y-auto flex-grow divide-y divide-slate-50">
                            {filteredCities.length === 0 ? (
                              <div className="p-4 text-center text-slate-400 text-[10px] font-bold">
                                Şehir bulunamadı
                              </div>
                            ) : (
                              filteredCities.map((c) => {
                                const isSelected = city === c;
                                return (
                                  <button
                                    key={c}
                                    type="button"
                                    onClick={() => {
                                      setCity(c);
                                      setCityDropdownOpen(false);
                                      setCitySearch('');
                                    }}
                                    className={`w-full px-4 py-2.5 text-left text-xs font-bold hover:bg-blue-50/80 hover:text-brand-blue flex items-center justify-between gap-2 transition-colors ${isSelected ? 'bg-blue-50 text-brand-blue' : 'text-slate-700'}`}
                                  >
                                    <span>{c}</span>
                                    <div className="flex items-center gap-1.5 shrink-0">
                                      <KopruSoftLogo showText={false} iconSize="h-4 w-4" variant="light" />
                                      {isSelected && (
                                        <span className="text-[8px] font-black text-brand-blue uppercase tracking-widest font-mono">SEÇİLDİ</span>
                                      )}
                                    </div>
                                  </button>
                                );
                              })
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    {errors.city && <p className="text-[10px] text-rose-500 font-semibold">{errors.city}</p>}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Ek Açıklamalar / Notlar</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 focus:border-brand-blue transition-all duration-200 h-16 resize-none font-medium"
                    placeholder="Varsa işletmenizin özel ihtiyaçlarını veya sorularınızı yazınız..."
                  />
                </div>

                {/* Active Interactive KVKK Consent Agreement */}
                <div className="space-y-1 text-left pt-1">
                  <label className="relative flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={kvkkAccepted}
                      onChange={(e) => setKvkkAccepted(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-4.5 h-4.5 bg-slate-50 border border-slate-200 rounded flex items-center justify-center shrink-0 mt-0.5 peer-checked:bg-brand-blue peer-checked:border-brand-blue transition-colors">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                    </div>
                    <span className="text-[10px] text-slate-500 leading-normal font-medium">
                      KöprüSoft Kurumsal Yazılım A.Ş. ile paylaştığım kişisel verilerimin <strong className="text-slate-700">KVKK Aydınlatma Metni</strong> kapsamında işlenmesini, analiz edilmesini ve tarafımla iletişim kurulmasını onaylıyorum. *
                    </span>
                  </label>
                  {errors.kvkk && <p className="text-[10px] text-rose-500 font-semibold pl-7">{errors.kvkk}</p>}
                </div>

                {/* Submit CTA with beautiful button micro-interactions */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold rounded-xl shadow-lg shadow-brand-blue/15 flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-wider disabled:opacity-50 cursor-pointer active:scale-98"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Talebiniz Kaydediliyor...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Başvuruyu Tamamla</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
