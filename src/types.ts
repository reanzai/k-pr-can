export interface SolutionModule {
  id: string;
  title: string;
  category: 'erp-mrp' | 'e-transformation' | 'mobile-cloud' | 'crm-hrm';
  description: string;
  longDescription: string;
  iconName: string; // lucide-react icon key
  badge?: string;
  features: string[];
}

export interface SectorSolution {
  name: string;
  icon: string;
  colorClass: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  logoText: string;
  content: string;
}

export const STATISTICS_DATA: StatItem[] = [
  { id: 'deneyim', value: '28', label: 'Yıllık Deneyim', iconName: 'CalendarCheck' },
  { id: 'arge', value: '3', label: 'Ar-Ge Yerleşkesi', iconName: 'Building2' },
  { id: 'ulke', value: '45+', label: 'Ülkede Yapılanma', iconName: 'Globe' },
  { id: 'ortak', value: '1.200+', label: 'Çözüm Ortağı', iconName: 'Users' },
  { id: 'sektor', value: '150+', label: 'Farklı Sektör', iconName: 'LayoutGrid' },
  { id: 'dil', value: '9', label: 'Dil Seçeneği', iconName: 'Languages' },
  { id: 'musteri', value: '110.000+', label: 'Mutlu Müşteri', iconName: 'Smile' },
  { id: 'egitim', value: '350+', label: 'Seminer & Eğitimler', iconName: 'GraduationCap' },
  { id: 'yapayzekas', value: '30+', label: 'Yapay Zekâ Botu', iconName: 'Cpu' },
  { id: 'odul', value: '85', label: 'Alınan Ödül', iconName: 'Trophy' },
  { id: 'isbirligi', value: '600+', label: 'Kurumsal İş Birliği', iconName: 'Workflow' },
  { id: 'uzman', value: '5.200+', label: 'Sertifikalı Uzman', iconName: 'UserCheck' }
];

export const SOLUTION_MODULES: SolutionModule[] = [
  {
    id: 'kopru-erp',
    title: 'Köprü ERP',
    category: 'erp-mrp',
    description: 'Her ölçekteki işletmenin kurumsal yapısını dijitalleştiren çoklu şube ve konsolide finans platformu.',
    longDescription: 'Köprü ERP, finans, muhasebe, satın alma, satış, stok ve depo yönetimini tek bir çatı altında birleştirir. Çoklu döviz desteği, esnek raporlama mimarisi ve konsolide finansal tablolar ile işletmenize tam kontrol sunar.',
    iconName: 'Network',
    badge: 'Popüler',
    features: ['Çoklu Şube & Depo Yönetimi', 'Konsolide Finans Raporlama', 'Dinamik Süreç Tasarımcısı', 'Gelişmiş Bütçe Planlama']
  },
  {
    id: 'kopru-mrp',
    title: 'Köprü MRP (Üretim)',
    category: 'erp-mrp',
    description: 'İleri seviye üretim yönetimi, reçete maliyetleme ve kapasite planlama yazılımı.',
    longDescription: 'Üretim süreçlerinizi anlık olarak izleyin. Hammaddeden mamul ürüne kadar her aşamada fire takibi, iş istasyonu optimizasyonu ve iş gücü verimlilik analizleri ile kârlılığınızı artırın.',
    iconName: 'Factory',
    features: ['Dinamik Reçete Yönetimi', 'Kapasite & Vardiya Planlama', 'Ürün Ağacı Maliyetlendirme', 'Makine Bakım Takip Modülü']
  },
  {
    id: 'kopru-crm',
    title: 'Köprü CRM',
    category: 'crm-hrm',
    description: 'Müşteri ilişkileri, potansiyel fırsat yönetimi ve teklif hazırlama yazılımı.',
    longDescription: 'Müşteri etkileşimlerinizi ve satış süreçlerinizi optimize edin. Potansiyel müşterilerden sıcak satışa giden tüm tüneli izleyerek teklifleri, sözleşmeleri ve müşteri memnuniyetini tek bir ekranda yönetin.',
    iconName: 'UserSquare2',
    features: ['Fırsat & Satış Hunisi Takibi', 'Otomatik Teklif Hazırlama', 'Aktivite & Görev Yönetimi', 'Müşteri Segmentasyon Analitiği']
  },
  {
    id: 'kopru-hrm',
    title: 'Köprü HRM (İnsan Kaynakları)',
    category: 'crm-hrm',
    description: 'İnsan kaynakları yönetimi, bordro, puantaj ve personel self-servis portalı.',
    longDescription: 'Şirketinizin en değerli varlığı olan insan kaynağını profesyonelce yönetin. İşe alımdan performansa, izin yönetiminden bordrolamaya kadar tüm süreçler mevzuata %100 uyumludur.',
    iconName: 'Contact2',
    features: ['Bordro & Puantaj Entegrasyonu', 'İzin & Masraf Talep Yönetimi', 'Performans Değerlendirme Sistemi', 'Personel Özlük Dosyası Arşivi']
  },
  {
    id: 'muhasebe-finans',
    title: 'Muhasebe & Finans',
    category: 'erp-mrp',
    description: 'Genel muhasebe, banka entegrasyonu, çek/senet ve risk kontrolü.',
    longDescription: 'Gelir-gider dengesini kontrol altında tutun. Otomatik banka ekstre çekimi, cari hesap takipleri, çek/senet işlemleri ve anlık nakit akış tabloları ile finansal kararlarınızı verilerle yönlendirin.',
    iconName: 'Calculator',
    features: ['Banka Ekstre Otomasyonu', 'Cari Hesap Yaşlandırma', 'Çek/Senet & Teminat Takibi', 'Mali Tablolar & Nakit Akışı']
  },
  {
    id: 'bulut-yazilim',
    title: 'Bulut Yazılımlar',
    category: 'mobile-cloud',
    description: 'Masaüstü bağımsızlığı getiren, her an her cihazdan erişilebilir bulut panelleri.',
    longDescription: 'Herhangi bir sunucu yatırımı veya lisans bedeli ödemeden, tarayıcı üzerinden tüm şirket verilerinize anında ulaşın. Yedekleme, güvenlik ve güncellemeler KöprüCloud güvencesiyle otomatik olarak yönetilir.',
    iconName: 'Cloud',
    badge: 'Bulut',
    features: ['%99.98 Kesintisiz Erişim', 'Otomatik Şifreli Yedekleme', 'Sıfır Altyapı Maliyeti', 'Kullanıcı Bazlı Yetkilendirme']
  },
  {
    id: 'kopru-ecommerce',
    title: 'KöprüCommerce (e-Ticaret)',
    category: 'mobile-cloud',
    description: 'Aracı komisyonları olmadan, ömür boyu sıfır komisyon ile kendi alan adınızda kurumsal e-ticaret platformu.',
    longDescription: 'Yüksek komisyon oranlarına son verin. KöprüCommerce, tüm banka sanal POS entegrasyonları, kargo entegrasyonları ve ulusal pazaryeri senkronizasyonları ile entegre gelir. Satış hacminiz ne olursa olsun, Köprü Soft sıfır komisyon ilkesiyle kârlılığınızı korur.',
    iconName: 'ShoppingBag',
    badge: 'Ömür Boyu Komisyonsuz',
    features: ['Ömür Boyu Sıfır Komisyon', 'Sanal POS & Kargo Entegrasyonu', 'Pazaryeri Çift Yönlü Senkron', 'SEO & Hızlı Arama Optimizasyonu']
  }
];

export const SECTOR_SOLUTIONS: SectorSolution[] = [
  { name: 'Restoran', icon: 'Utensils', colorClass: 'bg-rose-500 text-white', description: 'Adisyon, masa planı, sipariş takibi ve kurye yönetimi.' },
  { name: 'Akaryakıt', icon: 'Fuel', colorClass: 'bg-emerald-500 text-white', description: 'Pompa entegrasyonu, vardiya hesabı ve market otomasyonu.' },
  { name: 'Otel POS', icon: 'Bed', colorClass: 'bg-sky-500 text-white', description: 'Oda hesabı, ön büro entegrasyonu ve hızlı ödeme altyapısı.' },
  { name: 'Teknik', icon: 'Wrench', colorClass: 'bg-amber-500 text-white', description: 'Servis formu, garanti takibi ve yedek parça envanteri.' },
  { name: 'Medikal', icon: 'Pills', colorClass: 'bg-purple-600 text-white', description: 'Reçete takibi, hasta kartı ve ilaç stok yönetimi.' },
  { name: 'Market', icon: 'ShoppingBag', colorClass: 'bg-blue-600 text-white', description: 'Barkodlu hızlı satış, terazi entegrasyonu ve stok uyarıları.' }
];

export const WORKFLOW_TABS = [
  {
    id: 'egitim',
    title: 'Eğitim & Akademi',
    iconName: 'GraduationCap',
    colorTheme: 'from-[#0F2537] to-slate-800',
    dashboardTitle: 'Köprü Akademi ERP – Eğitim Yönetim Masası',
    subtitle: 'Öğrenci Kayıt, Sınıf Kapasiteleri ve Akademik Takvim',
    metric1: { label: 'Toplam Kayıtlı Öğrenci', value: '4,820', status: 'Sınıf Doluluk: %88', percent: 88, progressColor: 'bg-blue-500' },
    metric2: { label: 'Aktif Eğitmen Sayısı', value: '142 / 150', status: 'Atama Oranı: %94', percent: 94, progressColor: 'bg-emerald-500' }
  },
  {
    id: 'saglik',
    title: 'Sağlık & Medikal',
    iconName: 'HeartPulse',
    colorTheme: 'from-rose-950 to-slate-900',
    dashboardTitle: 'Köprü Medikal – Klinik ve Hasta Raporlama Paneli',
    subtitle: 'Randevu Trafiği, İlaç Stokları ve Poliklinik Yoğunluğu',
    metric1: { label: 'Günlük Poliklinik Muayene', value: '840 Hasta', status: 'Kapasite: %92 • Yoğun Gün', percent: 92, progressColor: 'bg-rose-500' },
    metric2: { label: 'Kritik İlaç/Aşı Stok Seviyesi', value: 'Güvenli', status: '62 Kritik Kalem Yedeklendi', percent: 100, progressColor: 'bg-teal-500' }
  },
  {
    id: 'uretim',
    title: 'Üretim & İmalat',
    iconName: 'Industry',
    colorTheme: 'from-slate-900 to-amber-950',
    dashboardTitle: 'Köprü MRP v25 – Fabrika Ana Üretim Ekranı',
    subtitle: 'Makine Parkuru, Hammadde Seviyesi ve Vardiya Verimliliği',
    metric1: { label: 'Hammadde ve Stok Durumu', value: '1.200 Ton', status: 'Kapasite: %78 • Kritik Stok Yok', percent: 78, progressColor: 'bg-amber-500' },
    metric2: { label: 'Günlük Sipariş Sevkiyatı', value: '184 / 200', status: 'Sevkiyat Başarısı: %92', percent: 92, progressColor: 'bg-emerald-500' }
  },
  {
    id: 'perakende',
    title: 'Perakende & Toptan',
    iconName: 'Shop',
    colorTheme: 'from-blue-950 to-[#0F2537]',
    dashboardTitle: 'Köprü Retail Hub – Çoklu Şube Mağaza Paneli',
    subtitle: 'Kasa Satışları, Mağaza Stokları ve Günlük Ciro Dağılımı',
    metric1: { label: 'Günlük Toplam Kasa Cirosu', value: '₺842,500', status: 'Hedef Gerçekleşme: %85', percent: 85, progressColor: 'bg-indigo-500' },
    metric2: { label: 'Merkez Depo Envanter Doluluk', value: '%64', status: 'Re-order limitleri güncellendi', percent: 64, progressColor: 'bg-sky-500' }
  }
];
