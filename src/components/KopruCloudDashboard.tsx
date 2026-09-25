import { useState } from 'react';
import { 
  BarChart3, 
  FileText, 
  Users, 
  Wallet, 
  Boxes, 
  ArrowLeft, 
  Plus, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  Building, 
  QrCode, 
  CheckCircle, 
  Printer, 
  Download, 
  Trash2, 
  Search, 
  Sparkles,
  RefreshCw,
  Eye,
  LogOut,
  BadgeAlert,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import KopruSoftLogo from './KopruSoftLogo';

interface KopruCloudDashboardProps {
  onExit: () => void;
  onBackToCorporate: () => void;
}

interface Invoice {
  id: string;
  invoiceNo: string;
  clientName: string;
  description: string;
  amount: number;
  vatRate: number;
  total: number;
  date: string;
  status: 'GİB Onaylandı' | 'İmzada' | 'Taslak' | 'Reddedildi';
  type: string;
}

interface Client {
  id: string;
  name: string;
  taxOffice: string;
  taxNo: string;
  phone: string;
  balance: number; // Positive means debt, negative credit
}

interface BankAccount {
  name: string;
  accountNo: string;
  balance: number;
  currency: string;
}

export default function KopruCloudDashboard({ onExit, onBackToCorporate }: KopruCloudDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'invoices' | 'clients' | 'banks' | 'inventory'>('overview');
  
  // Real dynamic states for full simulation
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: 'INV-2026-0012',
      invoiceNo: 'KPR202600000012',
      clientName: 'Hasalp İnşaat Taah. Tic. Ltd. Şti.',
      description: 'Hizmet Bedeli ve Özel Entegrasyon Entegrasyon Paketi',
      amount: 120800,
      vatRate: 20,
      total: 144960,
      date: '23.09.2026',
      status: 'GİB Onaylandı',
      type: 'Satış'
    },
    {
      id: 'INV-2026-0011',
      invoiceNo: 'KPR202600000011',
      clientName: 'Tekstape Teflobant Termo Plastik Ltd.',
      description: 'Donanım Entegrasyonu & Akıllı Barkod Okuyucu Modülü',
      amount: 70830,
      vatRate: 20,
      total: 84996,
      date: '21.09.2026',
      status: 'GİB Onaylandı',
      type: 'Satış'
    },
    {
      id: 'INV-2026-0010',
      invoiceNo: 'KPR202600000010',
      clientName: 'Uyumplast Ambalaj San. Tic. Ltd. Şti.',
      description: 'Bulut Yedekleme & Server SLA Yenileme',
      amount: 93330,
      vatRate: 20,
      total: 111996,
      date: '18.09.2026',
      status: 'GİB Onaylandı',
      type: 'Satış'
    }
  ]);

  const [clients, setClients] = useState<Client[]>([
    {
      id: 'C-01',
      name: 'Hasalp İnşaat Taah. Tic. Ltd. Şti.',
      taxOffice: 'Göztepe Vergi Dairesi',
      taxNo: '4560128931',
      phone: '0216 441 55 12',
      balance: 144960
    },
    {
      id: 'C-02',
      name: 'Tekstape Teflobant Termo Plastik Ltd.',
      taxOffice: 'İkitelli Vergi Dairesi',
      taxNo: '7891230456',
      phone: '0212 654 88 99',
      balance: 84996
    },
    {
      id: 'C-03',
      name: 'Uyumplast Ambalaj San. Tic. Ltd. Şti.',
      taxOffice: 'Tuzla Vergi Dairesi',
      taxNo: '3210984576',
      phone: '0216 394 11 22',
      balance: 111996
    }
  ]);

  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    { name: 'Garanti BBVA Ticari Hesap', accountNo: 'TR45 0006 2000 1234 5678 9012 34', balance: 412850, currency: 'TL' },
    { name: 'Vakıfbank Kurumsal TL', accountNo: 'TR12 0001 5000 9876 5432 1098 76', balance: 285900, currency: 'TL' },
    { name: 'Merkez Ofis Kasası (TR Kasa)', accountNo: 'KASA-01', balance: 42100, currency: 'TL' }
  ]);

  const [inventory, setInventory] = useState([
    { id: 'STK-01', name: 'Bulut Entegrasyon Yıllık Lisans', type: 'Hizmet', price: 12000, stock: '∞', code: 'SRV-01' },
    { id: 'STK-02', name: 'e-Fatura Kontör Paketi (5000 Adet)', type: 'Kontör', price: 4500, stock: 124, code: 'KTR-5K' },
    { id: 'STK-03', name: 'KöprüCloud Akıllı Terminal', type: 'Cihaz', price: 18000, stock: 45, code: 'HW-TERM' }
  ]);

  // Invoice creator form states
  const [newInvClient, setNewInvClient] = useState(clients[0]?.name || '');
  const [newInvDesc, setNewInvDesc] = useState('');
  const [newInvAmount, setNewInvAmount] = useState<number>(0);
  const [newInvVat, setNewInvVat] = useState<number>(20);
  const [newInvType, setNewInvType] = useState('Satış');
  const [isSubmittingInvoice, setIsSubmittingInvoice] = useState(false);

  // Client creator form states
  const [newClientName, setNewClientName] = useState('');
  const [newClientOffice, setNewClientOffice] = useState('');
  const [newClientNo, setNewClientNo] = useState('');
  const [newClientPhone, setNewClientPhone] = useState('');
  const [newClientBalance, setNewClientBalance] = useState<number>(0);
  const [showAddClientForm, setShowAddClientForm] = useState(false);

  // XML / Print Preview modal state
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  // AI Assistant Analysis State
  const [aiInsight, setAiInsight] = useState<string>('Analiz edilmeye hazır. KöprüCloud AI Asistanı şirket verilerini okuyarak e-Dönüşüm kârlılığınızı ve nakit akışınızı optimize etmenizi sağlar.');
  const [aiLoading, setAiLoading] = useState(false);

  // Calculations
  const totalSalesSum = invoices.reduce((sum, inv) => sum + inv.total, 0);
  const unpaidTotal = clients.reduce((sum, cl) => sum + Math.max(0, cl.balance), 0);
  const totalCashSum = bankAccounts.reduce((sum, acc) => sum + acc.balance, 0);

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInvDesc || newInvAmount <= 0) {
      alert('Lütfen açıklama girin ve tutarı sıfırdan büyük belirtin!');
      return;
    }

    setIsSubmittingInvoice(true);

    // Simulate GİB signing delays
    setTimeout(() => {
      const vatAmount = (newInvAmount * newInvVat) / 100;
      const totalAmount = newInvAmount + vatAmount;
      const formattedDate = new Date().toLocaleDateString('tr-TR');
      const customId = `INV-2026-00${invoices.length + 10}`;
      const serialNo = `KPR2026000000${invoices.length + 10}`;

      const createdInvoice: Invoice = {
        id: customId,
        invoiceNo: serialNo,
        clientName: newInvClient,
        description: newInvDesc,
        amount: newInvAmount,
        vatRate: newInvVat,
        total: totalAmount,
        date: formattedDate,
        status: 'GİB Onaylandı',
        type: newInvType
      };

      setInvoices([createdInvoice, ...invoices]);

      // Update Client balance too
      setClients(prevClients => 
        prevClients.map(c => 
          c.name === newInvClient 
            ? { ...c, balance: c.balance + totalAmount } 
            : c
        )
      );

      // Clean up form
      setNewInvDesc('');
      setNewInvAmount(0);
      setIsSubmittingInvoice(false);
    }, 1200);
  };

  const handleCreateClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName) {
      alert('Şirket unvanı zorunludur!');
      return;
    }

    const createdClient: Client = {
      id: `C-0${clients.length + 1}`,
      name: newClientName,
      taxOffice: newClientOffice || 'Marmara Vergi Dairesi',
      taxNo: newClientNo || '1111111111',
      phone: newClientPhone || '0212 000 00 00',
      balance: newClientBalance
    };

    setClients([...clients, createdClient]);
    
    // Clear state
    setNewClientName('');
    setNewClientOffice('');
    setNewClientNo('');
    setNewClientPhone('');
    setNewClientBalance(0);
    setShowAddClientForm(false);
  };

  const triggerAiAnalysis = () => {
    setAiLoading(true);
    setTimeout(() => {
      setAiLoading(false);
      setAiInsight(
        `📊 KÖPRÜCLOUD AI RAPORU (Eylül 2026):
• Toplam e-Fatura hacminiz geçen aya göre %18,3 arttı. GİB onaylı e-Faturalarda hata oranı %0,0.
• Nakit Akışı Riski: Carilerinizde biriken ${unpaidTotal.toLocaleString('tr-TR')} TL alacağın tahsilat süresi ortalama 14 gün. Hasalp İnşaat ile online tahsilat entegrasyonu başlatarak bu süreyi 3 güne indirebilirsiniz.
• Kağıt Tasarrufu: KöprüCloud e-Dönüşüm altyapısı sayesinde bu ay 14,800 adet A4 kağıt tasarrufu sağladınız. Karbon salınımı azaltımına katkınız için teşekkürler!`
      );
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#070e14] text-slate-100 font-sans flex flex-col xl:flex-row antialiased selection:bg-brand-blue selection:text-white">
      
      {/* LEFT SIDEBAR PANEL */}
      <aside className="w-full xl:w-72 bg-[#091119] border-b xl:border-b-0 xl:border-r border-slate-800/80 p-5 flex flex-col justify-between flex-shrink-0">
        <div className="space-y-6">
          
          {/* Brand Logo Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
            <div className="flex items-center gap-2">
              <KopruSoftLogo variant="dark" iconSize="h-8 w-8" showText={false} />
              <div>
                <h2 className="font-display font-extrabold text-white text-xs tracking-tight uppercase leading-none">
                  Köprü<span className="text-brand-blue">Cloud</span>
                </h2>
                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">BULUT ERP v2.6</p>
              </div>
            </div>
            <span className="bg-emerald-500/10 text-emerald-400 text-[9px] px-2 py-0.5 rounded-full border border-emerald-500/20 font-bold tracking-wider animate-pulse flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              GİB AKTİF
            </span>
          </div>

          {/* Connected Workspace */}
          <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800/50 space-y-1">
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Aktif Kurum / Bayi</p>
            <p className="text-xs font-black text-white truncate">KÖPRÜ SOFT YAZILIM A.Ş.</p>
            <p className="text-[10px] text-brand-blue font-bold tracking-tight">Müşteri No: #4410020</p>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1.5">
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest px-2.5 pb-1">MENÜ MODÜLLERİ</p>
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'overview' 
                  ? 'bg-brand-blue text-white shadow-lg shadow-blue-950/40' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BarChart3 className="w-4 h-4" />
                <span>Mali Genel Bakış</span>
              </div>
              <TrendingUp className="w-3 h-3 text-brand-accent" />
            </button>

            <button
              onClick={() => setActiveTab('invoices')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'invoices' 
                  ? 'bg-brand-blue text-white shadow-lg shadow-blue-950/40' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4" />
                <span>e-Fatura & Satış</span>
              </div>
              <span className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-black">{invoices.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('clients')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'clients' 
                  ? 'bg-brand-blue text-white shadow-lg shadow-blue-950/40' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4" />
                <span>Cari Hesap Takibi</span>
              </div>
              <span className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-black">{clients.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('banks')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'banks' 
                  ? 'bg-brand-blue text-white shadow-lg shadow-blue-950/40' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Wallet className="w-4 h-4" />
                <span>Kasa & Bankalar</span>
              </div>
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            </button>

            <button
              onClick={() => setActiveTab('inventory')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'inventory' 
                  ? 'bg-brand-blue text-white shadow-lg shadow-blue-950/40' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Boxes className="w-4 h-4" />
                <span>Ürün & Stok Kartı</span>
              </div>
            </button>
          </nav>
        </div>

        {/* BOTTOM PANEL CONTROLS */}
        <div className="pt-6 border-t border-slate-800/60 space-y-3.5">
          <div className="text-[10px] text-slate-500 font-bold space-y-1 px-1">
            <p>Erişim: <span className="text-slate-300">Güvenli Deneme Hesabı</span></p>
            <p>Kalan Süre: <span className="text-brand-accent font-black">29 Gün</span></p>
          </div>
          
          <div className="flex flex-col gap-2">
            <button
              onClick={onExit}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-black transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Ürün Tanıtımına Dön</span>
            </button>
            <button
              onClick={onBackToCorporate}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy/80 text-brand-accent text-xs font-black transition-all cursor-pointer border border-blue-900/40"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Ana Siteden Çık</span>
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN DOCKING WORKSPACE CONTENT AREA */}
      <main className="flex-grow p-4 sm:p-6 lg:p-8 space-y-6 overflow-y-auto">
        
        {/* Dynamic Warning Header for Live Simulation */}
        <div className="bg-blue-500/10 rounded-2xl p-4 border border-brand-blue/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue text-lg flex-shrink-0 mt-0.5">
              🎉
            </div>
            <div>
              <h3 className="text-sm font-black text-white">KöprüCloud Canlı Etkileşimli Ön Muhasebe Demosu</h3>
              <p className="text-xs text-slate-400 mt-1">
                Şu an <span className="text-brand-accent font-bold">bulut.koprusoft.com.tr</span> alt alan adındaki uygulamanın **birebir çalışan arayüzünü** test etmektesiniz. Fatura ekleyebilir, yeni cari kartlar oluşturabilir ve fatura şablonu yazdırabilirsiniz!
              </p>
            </div>
          </div>
          <button
            onClick={onExit}
            className="px-4 py-2 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-extrabold text-xs transition-all cursor-pointer whitespace-nowrap"
          >
            SaaS Slayt Tanıtımına Geç
          </button>
        </div>

        {/* FINANCIAL SUMMARY MATRICES CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-[#091119] border border-slate-800/60 rounded-2xl p-5 space-y-2 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 translate-x-3 translate-y-3 opacity-5 text-brand-blue font-black text-6xl">📊</div>
            <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">TOPLAM FATURALANAN</p>
            <h3 className="text-xl sm:text-2xl font-black text-white">{totalSalesSum.toLocaleString('tr-TR')} TL</h3>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold">
              <TrendingUp className="w-3 h-3" />
              <span>GİB Entegre Akış</span>
            </div>
          </div>

          <div className="bg-[#091119] border border-slate-800/60 rounded-2xl p-5 space-y-2 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 translate-x-3 translate-y-3 opacity-5 text-brand-blue font-black text-6xl">👥</div>
            <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">TOPLAM CARİ ALACAKLAR</p>
            <h3 className="text-xl sm:text-2xl font-black text-amber-400">{unpaidTotal.toLocaleString('tr-TR')} TL</h3>
            <p className="text-[10px] text-slate-400">Toplam {clients.length} aktif cari borcu</p>
          </div>

          <div className="bg-[#091119] border border-slate-800/60 rounded-2xl p-5 space-y-2 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 translate-x-3 translate-y-3 opacity-5 text-brand-blue font-black text-6xl">🏦</div>
            <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">KASA & BANKA BAKİYE</p>
            <h3 className="text-xl sm:text-2xl font-black text-emerald-400">{totalCashSum.toLocaleString('tr-TR')} TL</h3>
            <p className="text-[10px] text-slate-400">2 Banka Entegre, 1 Merkez Kasa</p>
          </div>

          <div className="bg-[#091119] border border-slate-800/60 rounded-2xl p-5 space-y-2 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 translate-x-3 translate-y-3 opacity-5 text-brand-blue font-black text-6xl">🧾</div>
            <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">GİB E-FATURA SAYISI</p>
            <h3 className="text-xl sm:text-2xl font-black text-white">{invoices.length} Giden</h3>
            <span className="bg-emerald-500/10 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded font-black">Sıfır Hata Oranı</span>
          </div>

        </div>

        {/* TAB CONTENTS INTERACTIVITY SWITCHER */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: MALI GENEL BAKIŞ (OVERVIEW) */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Visual mini-bar chart widget */}
                <div className="lg:col-span-2 bg-[#091119] border border-slate-800/60 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider">Aylık Fatura & Ciro Hacmi</h4>
                      <p className="text-[10px] text-slate-500">2026 yılı 3. çeyrek finansal dökümü</p>
                    </div>
                    <span className="bg-slate-800 text-slate-400 text-[10px] px-2.5 py-1 rounded-xl font-bold">GİB Canlı Çekim</span>
                  </div>

                  <div className="h-44 flex items-end gap-5 pt-6 pb-2 px-4 border-b border-slate-800/50">
                    <div className="w-full flex flex-col items-center gap-2">
                      <div className="w-full bg-slate-800 rounded-t-lg h-14 hover:bg-brand-blue transition-all cursor-pointer relative group">
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-[9px] text-white px-1.5 py-0.5 rounded font-bold hidden group-hover:block whitespace-nowrap">85,000 TL</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold">Haziran</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-2">
                      <div className="w-full bg-slate-800 rounded-t-lg h-24 hover:bg-brand-blue transition-all cursor-pointer relative group">
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-[9px] text-white px-1.5 py-0.5 rounded font-bold hidden group-hover:block whitespace-nowrap">140,000 TL</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold">Temmuz</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-2">
                      <div className="w-full bg-slate-800 rounded-t-lg h-28 hover:bg-brand-blue transition-all cursor-pointer relative group">
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-[9px] text-white px-1.5 py-0.5 rounded font-bold hidden group-hover:block whitespace-nowrap">198,000 TL</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-bold">Ağustos</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-2 text-brand-blue">
                      <div className="w-full bg-brand-blue rounded-t-lg h-40 hover:bg-brand-blue-hover transition-all cursor-pointer relative group shadow-lg shadow-blue-950/40">
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-brand-navy text-[9px] text-brand-accent px-1.5 py-0.5 rounded font-bold block whitespace-nowrap">{totalSalesSum.toLocaleString('tr-TR')} TL</span>
                      </div>
                      <span className="text-[10px] text-white font-black">Eylül (Aktif)</span>
                    </div>
                  </div>
                </div>

                {/* AI Assistant Insight widget */}
                <div className="bg-gradient-to-br from-brand-navy/60 to-slate-900 border border-brand-blue/25 rounded-2xl p-5 space-y-4 relative overflow-hidden">
                  <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-10 text-brand-blue">
                    <Sparkles className="w-24 h-24 text-brand-accent" />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-blue-500/10 text-brand-accent rounded-lg border border-blue-500/20">
                      <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider">KöprüCloud AI Finans Asistanı</h4>
                      <p className="text-[9px] text-brand-accent font-bold uppercase tracking-widest">Akıllı Akış Algoritması</p>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed font-medium bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                    {aiInsight}
                  </p>

                  <button
                    onClick={triggerAiAnalysis}
                    disabled={aiLoading}
                    className="w-full py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-black text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-950/50 cursor-pointer disabled:opacity-40"
                  >
                    {aiLoading ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Mali Bilgiler Hesaplanıyor...</span>
                      </>
                    ) : (
                      <>
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Akıllı Muhasebe Analizi Yap</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

              {/* Transactions list */}
              <div className="bg-[#091119] border border-slate-800/60 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/50">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Son Yapılan e-Fatura & Giden İşlemler</h4>
                  <span className="text-[10px] text-slate-500 font-bold">Kayıtlı: {invoices.length} fatura</span>
                </div>

                <div className="space-y-2.5">
                  {invoices.map((inv) => (
                    <div 
                      key={inv.id}
                      className="bg-[#070e14] border border-slate-800/50 hover:border-slate-700 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-brand-blue flex items-center justify-center font-black">
                          🧾
                        </div>
                        <div>
                          <p className="text-xs font-black text-white">{inv.clientName}</p>
                          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-semibold mt-0.5">
                            <span>No: {inv.invoiceNo}</span>
                            <span>•</span>
                            <span>{inv.date}</span>
                            <span>•</span>
                            <span className="text-slate-400 truncate max-w-xs">{inv.description}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="text-right">
                          <p className="text-xs font-black text-emerald-400">{inv.total.toLocaleString('tr-TR')} TL</p>
                          <p className="text-[9px] text-slate-500">Matrah: {inv.amount.toLocaleString('tr-TR')} TL (+%{inv.vatRate} KDV)</p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2.5 py-1 rounded-lg border border-emerald-500/20 font-bold">
                            {inv.status}
                          </span>
                          <button
                            onClick={() => setSelectedInvoice(inv)}
                            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white cursor-pointer border border-slate-800"
                            title="e-Fatura Görüntüle"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 2: E-FATURA & SATIŞ (INVOICES) */}
          {activeTab === 'invoices' && (
            <motion.div
              key="invoices"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              
              {/* Add invoice form */}
              <div className="bg-[#091119] border border-slate-800/60 rounded-2xl p-5 space-y-4 h-fit">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800/50">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-brand-blue flex items-center justify-center font-bold">🧾</div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">Hızlı GİB e-Fatura Oluştur</h4>
                    <p className="text-[9px] text-slate-500">İmzalanıp GİB portalına gönderilir</p>
                  </div>
                </div>

                <form onSubmit={handleCreateInvoice} className="space-y-3.5">
                  
                  {/* Select Customer */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Müşteri / Cari Seç</label>
                    <select
                      value={newInvClient}
                      onChange={(e) => setNewInvClient(e.target.value)}
                      className="w-full p-2.5 bg-slate-900 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-blue text-xs text-white"
                    >
                      {clients.map(c => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Fatura Satır Açıklaması</label>
                    <input
                      type="text"
                      required
                      value={newInvDesc}
                      onChange={(e) => setNewInvDesc(e.target.value)}
                      placeholder="Örn: 2026 Yıllık Muhasebe Yazılım Lisansı"
                      className="w-full p-2.5 bg-slate-900 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-blue text-xs text-white"
                    />
                  </div>

                  {/* Net Amount & VAT */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Matrah (KDV Hariç) TL</label>
                      <input
                        type="number"
                        required
                        value={newInvAmount || ''}
                        onChange={(e) => setNewInvAmount(Number(e.target.value))}
                        placeholder="Örn: 4500"
                        className="w-full p-2.5 bg-slate-900 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-blue text-xs text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">KDV Oranı (%)</label>
                      <select
                        value={newInvVat}
                        onChange={(e) => setNewInvVat(Number(e.target.value))}
                        className="w-full p-2.5 bg-slate-900 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-blue text-xs text-white"
                      >
                        <option value={20}>%20 Standart</option>
                        <option value={10}>%10 İndirimli</option>
                        <option value={1}>%1 Temel Gıda</option>
                        <option value={0}>%0 KDV Muaf</option>
                      </select>
                    </div>
                  </div>

                  {/* Fatura Tipi */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">e-Fatura Senaryosu</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setNewInvType('Satış')}
                        className={`py-2 rounded-lg text-[10px] font-extrabold uppercase border cursor-pointer transition-all ${
                          newInvType === 'Satış' 
                            ? 'bg-blue-500/10 text-brand-blue border-brand-blue' 
                            : 'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        TEMEL FATURA
                      </button>
                      <button
                        type="button"
                        onClick={() => setNewInvType('Ticari')}
                        className={`py-2 rounded-lg text-[10px] font-extrabold uppercase border cursor-pointer transition-all ${
                          newInvType === 'Ticari' 
                            ? 'bg-blue-500/10 text-brand-blue border-brand-blue' 
                            : 'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        TİCARİ FATURA
                      </button>
                    </div>
                  </div>

                  {/* Submit Button with loader simulation */}
                  <button
                    type="submit"
                    disabled={isSubmittingInvoice}
                    className="w-full py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-blue-950/40 disabled:opacity-50"
                  >
                    {isSubmittingInvoice ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Mali Mühür İmzalanıyor...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Fatura Oluştur & GİB Gönder</span>
                      </>
                    )}
                  </button>

                </form>
              </div>

              {/* Invoices list and print commands */}
              <div className="lg:col-span-2 bg-[#091119] border border-slate-800/60 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Kesilen e-Faturalar Listesi</h4>
                  <span className="text-[10px] text-brand-accent font-bold">Toplam Giden: {totalSalesSum.toLocaleString('tr-TR')} TL</span>
                </div>

                <div className="space-y-3.5">
                  {invoices.map((inv) => {
                    const vatAmount = (inv.amount * inv.vatRate) / 100;
                    return (
                      <div 
                        key={inv.id}
                        className="p-4 bg-slate-900/40 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-slate-700 transition-all"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-white">{inv.clientName}</span>
                            <span className="bg-slate-800 text-[8px] text-slate-400 px-1.5 py-0.5 rounded font-black">{inv.type}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 font-semibold">{inv.description}</p>
                          <div className="flex flex-wrap items-center gap-2.5 text-[9px] text-slate-500 font-bold pt-1">
                            <span>Fatura No: {inv.invoiceNo}</span>
                            <span>•</span>
                            <span>Tarih: {inv.date}</span>
                            <span>•</span>
                            <span>KDV: {inv.vatRate}%</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-slate-800 pt-2.5 sm:pt-0">
                          <div className="text-right">
                            <p className="text-xs font-black text-white">{inv.total.toLocaleString('tr-TR')} TL</p>
                            <p className="text-[9px] text-slate-500">Matrah: {inv.amount.toLocaleString('tr-TR')} TL</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="bg-emerald-500/10 text-emerald-400 text-[9px] px-2 py-0.5 rounded border border-emerald-500/20 font-black">
                              {inv.status}
                            </span>
                            <button
                              onClick={() => setSelectedInvoice(inv)}
                              className="px-2.5 py-1.5 bg-brand-blue text-white font-extrabold text-[10px] rounded-lg transition-all hover:bg-brand-blue-hover cursor-pointer"
                            >
                              Görüntüle / Yazdır
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 3: CARİ HESAP TAKİBİ (CLIENTS) */}
          {activeTab === 'clients' && (
            <motion.div
              key="clients"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              
              {/* Header block with actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#091119] border border-slate-800/60 p-4 rounded-2xl">
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Müşteri & Cari Hesap Kartları</h4>
                  <p className="text-[10px] text-slate-500">Sınırsız cari hesap kartı ekleyip borç/alacak takibi yapabilirsiniz.</p>
                </div>
                <button
                  onClick={() => setShowAddClientForm(!showAddClientForm)}
                  className="px-4 py-2 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-blue-950/40"
                >
                  <Plus className="w-4 h-4" />
                  <span>Yeni Cari Kart Ekle</span>
                </button>
              </div>

              {/* Add Client Form (Dropdown Panel) */}
              {showAddClientForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-[#091119] border border-slate-800/60 rounded-2xl p-5 overflow-hidden"
                >
                  <h4 className="text-xs font-black text-white uppercase tracking-wider pb-3 border-b border-slate-800/50 mb-4">Yeni Cari Hesap Kartı Detayları</h4>
                  <form onSubmit={handleCreateClient} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Şirket Unvanı</label>
                      <input
                        type="text"
                        required
                        value={newClientName}
                        onChange={(e) => setNewClientName(e.target.value)}
                        placeholder="Örn: Yeni Bilgi Teknolojileri A.Ş."
                        className="w-full p-2.5 bg-slate-900 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-blue text-xs text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Vergi Dairesi</label>
                      <input
                        type="text"
                        value={newClientOffice}
                        onChange={(e) => setNewClientOffice(e.target.value)}
                        placeholder="Örn: Kadıköy V.D."
                        className="w-full p-2.5 bg-slate-900 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-blue text-xs text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Vergi / TC Kimlik No</label>
                      <input
                        type="text"
                        maxLength={11}
                        value={newClientNo}
                        onChange={(e) => setNewClientNo(e.target.value)}
                        placeholder="Örn: 9988776655"
                        className="w-full p-2.5 bg-slate-900 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-blue text-xs text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">İletişim Telefonu</label>
                      <input
                        type="text"
                        value={newClientPhone}
                        onChange={(e) => setNewClientPhone(e.target.value)}
                        placeholder="Örn: 0212 555 12 34"
                        className="w-full p-2.5 bg-slate-900 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-blue text-xs text-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Açılış Bakiyesi (Borç) TL</label>
                      <input
                        type="number"
                        value={newClientBalance || ''}
                        onChange={(e) => setNewClientBalance(Number(e.target.value))}
                        placeholder="Örn: 15000"
                        className="w-full p-2.5 bg-slate-900 rounded-xl border border-slate-800 focus:outline-none focus:border-brand-blue text-xs text-white"
                      />
                    </div>
                    <div className="flex items-end pt-2">
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-black uppercase transition-all cursor-pointer"
                      >
                        Cari Kartı Kaydet
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Clients Table */}
              <div className="bg-[#091119] border border-slate-800/60 rounded-2xl p-5 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                        <th className="pb-3.5 pl-2">Müşteri / Şirket Unvanı</th>
                        <th className="pb-3.5">Vergi Dairesi / No</th>
                        <th className="pb-3.5">Telefon</th>
                        <th className="pb-3.5 text-right">Mali Durum</th>
                        <th className="pb-3.5 text-right pr-2">İşlem</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {clients.map((c) => (
                        <tr key={c.id} className="hover:bg-slate-900/40 transition-colors">
                          <td className="py-4 pl-2 font-black text-white">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-slate-400">
                                {c.name.charAt(0)}
                              </div>
                              <span>{c.name}</span>
                            </div>
                          </td>
                          <td className="py-4 text-slate-300 font-medium">
                            <p>{c.taxOffice}</p>
                            <p className="text-[10px] text-slate-500 font-bold mt-0.5">VKN: {c.taxNo}</p>
                          </td>
                          <td className="py-4 text-slate-400 font-medium">{c.phone}</td>
                          <td className="py-4 text-right">
                            <span className={`font-black text-xs ${c.balance > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                              {c.balance.toLocaleString('tr-TR')} TL
                            </span>
                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                              {c.balance > 0 ? 'Borçlu' : 'Alacaklı'}
                            </p>
                          </td>
                          <td className="py-4 text-right pr-2">
                            <button
                              onClick={() => {
                                setNewInvClient(c.name);
                                setActiveTab('invoices');
                              }}
                              className="px-2.5 py-1 bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700 text-[10px] font-extrabold cursor-pointer transition-all"
                            >
                              Fatura Kes
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 4: KASA & BANKA (BANKS) */}
          {activeTab === 'banks' && (
            <motion.div
              key="banks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              
              <div className="bg-[#091119] border border-slate-800/60 rounded-2xl p-5 space-y-4">
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Entegre Bankalar & Ofis Kasaları</h4>
                  <p className="text-[10px] text-slate-500">API entegrasyonu ile banka hesap hareketleriniz 5 dakikada bir otomatik güncellenir.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {bankAccounts.map((acc, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#070e14] border border-slate-800/80 p-4 rounded-2xl space-y-3 hover:border-slate-700 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="bg-slate-800 text-[10px] font-bold text-slate-400 px-2 py-0.5 rounded-lg border border-slate-700">
                          {acc.accountNo === 'KASA-01' ? 'Fiziki Kasa' : 'Banka Entegre 🟢'}
                        </span>
                        <span className="text-slate-500 font-display font-black">TL</span>
                      </div>
                      
                      <div>
                        <p className="text-xs font-black text-white truncate">{acc.name}</p>
                        <p className="text-[9px] text-slate-500 font-medium truncate mt-0.5">{acc.accountNo}</p>
                      </div>

                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Net Bakiye</span>
                        <span className="text-sm font-black text-emerald-400">{acc.balance.toLocaleString('tr-TR')} TL</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Online payment simulation panel */}
              <div className="bg-[#091119] border border-slate-800/60 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg flex-shrink-0">
                    💳
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">KöprüCloud Online Sanal POS Tahsilat</h4>
                    <p className="text-[10px] text-slate-500">Müşterilerinize fatura ile gönderdiğiniz ödeme linki sayesinde anında tahsilat yapın.</p>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left space-y-1">
                    <p className="text-xs font-bold text-slate-300">Bu Ay Yapılan Sanal POS Tahsilatı</p>
                    <p className="text-xl font-black text-emerald-400">48,900 TL</p>
                  </div>
                  <button
                    onClick={() => alert('Sanal POS kurulum adımları için lütfen 0850 441 00 20 hattından kurumsal uzmanımızla görüşün.')}
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs rounded-xl transition-all cursor-pointer"
                  >
                    Sanal POS Başvurusu Yap
                  </button>
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 5: ÜRÜN & STOK KARTI (INVENTORY) */}
          {activeTab === 'inventory' && (
            <motion.div
              key="inventory"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              
              <div className="bg-[#091119] border border-slate-800/60 rounded-2xl p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">Kayıtlı Hizmet & Ürün Stok Listesi</h4>
                    <p className="text-[10px] text-slate-500">Faturalarınızda satır kalemi olarak seçeceğiniz stokları buradan yönetin.</p>
                  </div>
                  <button
                    onClick={() => {
                      const newName = prompt('Ürün veya Hizmet Adı girin:');
                      const newPrice = Number(prompt('Birim Satış Fiyatı (KDV Hariç) girin:'));
                      if (newName && newPrice > 0) {
                        setInventory([...inventory, {
                          id: `STK-0${inventory.length + 1}`,
                          name: newName,
                          type: 'Hizmet',
                          price: newPrice,
                          stock: '∞',
                          code: `SRV-0${inventory.length + 1}`
                        }]);
                      }
                    }}
                    className="px-4.5 py-2 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-xl text-xs font-black flex items-center gap-1.5 cursor-pointer transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Hizmet/Ürün Tanımla</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {inventory.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-[#070e14] border border-slate-800 rounded-2xl p-4.5 space-y-3 hover:border-slate-700 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-brand-blue bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 uppercase tracking-wider">
                          {item.type}
                        </span>
                        <span className="text-[10px] text-slate-500 font-bold">{item.code}</span>
                      </div>

                      <div>
                        <h5 className="text-xs font-black text-white">{item.name}</h5>
                        <p className="text-[10px] text-slate-500 mt-0.5">Mevcut Stok: <span className="text-slate-300 font-black">{item.stock}</span></p>
                      </div>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Birim Fiyatı</span>
                        <span className="font-black text-white">{item.price.toLocaleString('tr-TR')} TL</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </main>

      {/* DETAILED e-FATURA XML PRINT LAYOUT MODAL */}
      <AnimatePresence>
        {selectedInvoice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInvoice(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* XML Fatura View Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white text-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-y-auto max-h-[90vh] space-y-6"
            >
              
              {/* Official GİB XML Fatura Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-5 border-b-2 border-slate-900 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center font-bold text-white text-base">
                    GİB
                  </div>
                  <div>
                    <h3 className="font-serif font-black text-base uppercase tracking-tight text-slate-900">E-FATURA</h3>
                    <p className="text-[9px] text-slate-500 font-extrabold uppercase tracking-widest">TÜRKİYE CUMHURİYETİ GELİR İDARESİ BAŞKANLIĞI</p>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs space-y-0.5">
                  <p className="font-black text-slate-900">Fatura No: <span className="font-mono text-brand-blue">{selectedInvoice.invoiceNo}</span></p>
                  <p className="font-bold text-slate-600">Fatura Tarihi: {selectedInvoice.date}</p>
                  <p className="font-bold text-slate-600">ETTN: 4a123f5e-128a-4933-87bf-{selectedInvoice.id.toLowerCase()}</p>
                </div>
              </div>

              {/* Sender & Receiver block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-800">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1.5">
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-wider">MÜKELLEF (SATICI)</p>
                  <p className="font-black text-slate-900">KÖPRÜ SOFT KURUMSAL YAZILIM ANONİM ŞİRKETİ</p>
                  <p className="text-slate-600">Mevlana Mah. Akdeniz Cad. No:14 K:4 No:11 Ataşehir / İstanbul</p>
                  <p className="text-slate-600">Vergi Dairesi: Kozyatağı • VKN: 4410020123</p>
                  <p className="text-slate-600">Mersis No: 0567-0891-2300-0012</p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1.5">
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-wider">ALICI (MÜŞTERİ)</p>
                  <p className="font-black text-slate-900">{selectedInvoice.clientName}</p>
                  <p className="text-slate-600">Vergi Mükellefi Bilgileri Sistemden Çekilmiştir</p>
                  <p className="text-slate-600">Senaryo: {selectedInvoice.type} e-Fatura</p>
                </div>
              </div>

              {/* Invoice lines table */}
              <div className="border border-slate-300 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 font-black uppercase text-[10px] border-b border-slate-300">
                      <th className="py-2.5 pl-3">Satır Kalem Tanımı</th>
                      <th className="py-2.5">KDV Oranı</th>
                      <th className="py-2.5 text-right">Birim Fiyat</th>
                      <th className="py-2.5 text-right pr-3">KDV Dahil Toplam</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-800 font-medium">
                    <tr>
                      <td className="py-3.5 pl-3 font-black text-slate-900">
                        {selectedInvoice.description}
                      </td>
                      <td className="py-3.5">%{selectedInvoice.vatRate} KDV</td>
                      <td className="py-3.5 text-right font-mono">{selectedInvoice.amount.toLocaleString('tr-TR')} TL</td>
                      <td className="py-3.5 text-right font-mono font-black text-slate-900 pr-3">{selectedInvoice.total.toLocaleString('tr-TR')} TL</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Totals split and QR section */}
              <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 pt-2 border-t border-slate-200">
                
                {/* Visual verification GİB QR block */}
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  <QrCode className="w-14 h-14 text-slate-800" />
                  <div className="text-[10px] text-slate-500 space-y-0.5">
                    <p className="font-black text-slate-700">Gelir İdaresi Doğrulama</p>
                    <p>Güvenli Hash: sha256_kcloud_gib2026</p>
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.5 rounded font-black mt-1">E-İmzalıdır</span>
                  </div>
                </div>

                {/* Calculation breakdown values */}
                <div className="w-full sm:w-64 text-right text-xs space-y-1.5 font-bold text-slate-700">
                  <div className="flex justify-between">
                    <span>Mal Hizmet Tutarı (Matrah):</span>
                    <span className="font-mono">{selectedInvoice.amount.toLocaleString('tr-TR')} TL</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hesaplanan KDV (%{selectedInvoice.vatRate}):</span>
                    <span className="font-mono text-slate-900">{((selectedInvoice.amount * selectedInvoice.vatRate) / 100).toLocaleString('tr-TR')} TL</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-300 pt-1.5 text-sm text-slate-950 font-black">
                    <span>Ödenecek Toplam Tutar:</span>
                    <span className="font-mono text-brand-blue">{selectedInvoice.total.toLocaleString('tr-TR')} TL</span>
                  </div>
                </div>

              </div>

              {/* Action operations buttons */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    alert('Yazıcı çıktısı hazırlanıyor...');
                    window.print();
                  }}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Faturayı Yazdır</span>
                </button>
                <button
                  onClick={() => alert('Resmi UBL-XML e-Fatura dosyası indirildi (kcloud_sign.xml)')}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>UBL-XML İndir</span>
                </button>
                <button
                  onClick={() => setSelectedInvoice(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs cursor-pointer text-center"
                >
                  Kapat
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
