export interface DocumentSection {
  id: string;
  title: string;
  category: 'legal' | 'corporate' | 'solutions' | 'e-trans' | 'partners' | 'careers';
  categoryLabel: string;
  subtitle: string;
  content: string[];
}

export const DOCUMENT_PORTAL_DATA: Record<string, DocumentSection> = {
  // --- LEGAL ---
  'kvkk': {
    id: 'kvkk',
    title: 'KVKK Aydınlatma Metni',
    category: 'legal',
    categoryLabel: 'Yasal Uyum',
    subtitle: 'Kişisel Verilerin Korunması Kanunu Kapsamında Bilgilendirme',
    content: [
      'Köprü Soft Kurumsal Yazılım Çözümleri A.Ş. ("Şirket") olarak, müşterilerimizin, iş ortaklarımızın ve çalışanlarımızın kişisel verilerinin korunmasına büyük önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla hareket etmekteyiz.',
      'Kişisel verileriniz, kurumsal ERP lisanslama süreçlerinin yürütülmesi, GİB e-Dönüşüm aktivasyonlarının tamamlanması, çağrı merkezi hizmetlerimizin sağlanması, siber güvenlik altyapımızın sürdürülmesi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.',
      'Verileriniz, KVKK 5. ve 6. maddelerinde belirtilen yasal şartlar çerçevesinde şifrelenmiş veri iletim hatları (SSL/TLS) üzerinden güvenli Türkiye merkezli sunucularımızda saklanmaktadır. Kişisel verilerinizin yetkisiz erişimlerden korunması için çift faktörlü doğrulama (MFA) ve ISO 27001 Bilgi Güvenliği Standartları en üst düzeyde uygulanmaktadır.',
      'Kişisel veri sahipleri olarak kanunun 11. maddesinde belirtilen; verilerinizin işlenip işlenmediğini öğrenme, işlenme amacına uygun kullanılıp kullanılmadığını sorma ve düzeltme talep etme haklarınızı info@koprusoft.com.tr adresi üzerinden yazılı başvuru ile her zaman kullanabilirsiniz.'
    ]
  },
  'cerez': {
    id: 'cerez',
    title: 'Gizlilik ve Çerez Politikası',
    category: 'legal',
    categoryLabel: 'Yasal Uyum',
    subtitle: 'Güvenli Çevrimiçi Gezinme ve Çerez Politikası Bilgilendirmesi',
    content: [
      'Bu politika, Köprü Soft kurumsal web platformunu ziyaret eden kullanıcıların gizlilik haklarını korumak amacıyla hazırlanmıştır. Platformumuzda kullanıcı deneyimini iyileştirmek, sistem performansını analiz etmek ve siber güvenlik bütünlüğünü korumak adına birinci taraf ve üçüncü taraf çerezler kullanılmaktadır.',
      'Çerezler (Cookies), tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük veri dosyalarıdır. Köprü Soft web sitesinde kullanılan çerezler, kişisel kimlik bilgilerini depolamaz veya sisteminize zararlı kodlar bulaştırmaz. 2026 yılı güncel siber güvenlik altyapımız uyarınca, tüm çerez verileri şifrelenmiş olarak iletilmektedir.',
      'Tercihlerinize göre çerez ayarlarını değiştirmek veya çerezleri tamamen silmek için tarayıcınızın ayarlar menüsünü kullanabilirsiniz. Zorunlu çerezlerin devre dışı bırakılması durumunda, web sitemizin bazı dinamik fonksiyonları (örneğin e-Dönüşüm hesaplama modülleri veya canlı yardım asistanı) kısıtlı çalışabilir.'
    ]
  },
  'bilgi': {
    id: 'bilgi',
    title: 'Bilgi Toplumu Hizmetleri',
    category: 'legal',
    categoryLabel: 'Yasal Uyum',
    subtitle: 'TTK Madde 1524 Gereğince Şeffaflık ve Kurumsal Bilgiler',
    content: [
      'Türk Ticaret Kanunu (TTK) Madde 1524 ve ilgili yönetmelikler uyarınca, Köprü Soft Kurumsal Yazılım ve Bilişim Teknolojileri A.Ş. şirketine ait yasal bilgiler aşağıda kamuoyunun bilgisine sunulmuştur:',
      'Şirket Ünvanı: Köprü Soft Kurumsal Yazılım ve Bilişim Teknolojileri A.Ş.',
      'Merkez Adresi: Maslak Mah. Büyükdere Cad. No: 182 KÖPRÜ Plaza Sarıyer / İstanbul',
      'Ticaret Sicil No: İstanbul - 948274-0 / MERSİS No: 0524-0982-1048-0021',
      'Vergi Dairesi ve Numarası: Maslak V.D. - 5240982104',
      'Taahhüt Edilen ve Ödenen Sermaye: 25.000.000,00 TL',
      'Yönetim Kurulu Başkanı: Dr. Selim Köprülü',
      'Denetçi Bilgileri: Kurumsal Bağımsız Denetim ve Yeminli Mali Müşavirlik A.Ş.'
    ]
  },

  // --- CORPORATE ---
  'hakkimizda': {
    id: 'hakkimizda',
    title: 'Hakkımızda',
    category: 'corporate',
    categoryLabel: 'Kurumsal',
    subtitle: 'Köprü Soft Kurumsal Yazılım ve Bilişim Teknolojileri A.Ş.',
    content: [
      'Köprü Soft, Türkiye genelinde kurumsal yazılım, bulut ERP mimarisi ve e-Dönüşüm teknolojileri üreten lider bir teknoloji şirketidir. Kurulduğumuz günden bu yana, her ölçekten işletmenin iş süreçlerini dijitalleştirerek global pazarda rekabet güçlerini artırmayı hedefliyoruz.',
      'Ar-Ge odaklı yapımız ve uzman mühendis kadromuz ile finans, üretim, perakende, lojistik ve sağlık gibi birçok farklı sektöre özel anahtar teslim yazılım projeleri geliştiriyoruz.',
      'Yıl 2026 itibarıyla, 110.000\'i aşkın mutlu kurumsal müşterimiz, 1.200\'ün üzerinde sertifikalı çözüm ortağımız ve Maslak Merkez Ofisimiz başta olmak üzere 3 farklı Ar-Ge yerleşkemizde geliştirdiğimiz yerli teknolojileri 45\'ten fazla ülkeye ihraç etmenin haklı gururunu yaşıyoruz.'
    ]
  },
  'misyon': {
    id: 'misyon',
    title: 'Vizyon & Misyon',
    category: 'corporate',
    categoryLabel: 'Kurumsal',
    subtitle: 'Geleceğe Uzanan Güçlü Dijital Köprüler Kuruyoruz',
    content: [
      'Misyonumuz: İşletmelerin kurumsal süreçlerini karmaşadan arındırıp, yapay zekâ ve bulut tabanlı modern yazılım çözümleriyle %100 dijitalleştirmek; verimliliklerini maksimum seviyeye çıkararak sürdürülebilir büyümelerine öncülük etmektir.',
      'Vizyonumuz: Türkiye\'den çıkan en güçlü yerli kurumsal yazılım omurgası olarak, 2026 ve sonraki yıllarda global pazarda ilk 10 ERP markasından biri haline gelmek ve dünya genelinde işletmeleri siber güvenlikli, komisyonsuz ve engelsiz e-ticaret çözümleriyle buluşturmaktır.'
    ]
  },
  'arge': {
    id: 'arge',
    title: 'Ar-Ge Merkezleri',
    category: 'corporate',
    categoryLabel: 'Kurumsal',
    subtitle: 'Teknolojinin Üretildiği İnovasyon Üslerimiz',
    content: [
      'Köprü Soft, Sanayi ve Teknoloji Bakanlığı onaylı 3 büyük Ar-Ge Yerleşkesinde faaliyet göstermektedir. Ar-Ge çalışmalarımızın temelini yapay zekâ destekli ERP analitiği, büyük veri işleme süreçleri ve blockchain tabanlı e-Dönüşüm güvenliği oluşturmaktadır.',
      'Ar-Ge 1 (Maslak Genel Merkez Yerleşkesi): Finansal entegrasyonlar, siber güvenlik protokolleri ve e-Ticaret altyapılarının tasarlandığı ana merkezimizdir.',
      'Ar-Ge 2 (İTÜ Teknokent Yerleşkesi): Bulut ERP (SaaS) sistemleri, mobil saha satış yazılımları ve makine öğrenmesi algoritmaları üzerinde çalışmaktadır.',
      'Ar-Ge 3 (Yıldız Teknopark Yerleşkesi): IoT destekli MRP (üretim planlama) sistemleri, akıllı fabrika otomasyon modülleri ve kurye-restoran entegrasyon sistemlerini üretmektedir.'
    ]
  },
  'oduller': {
    id: 'oduller',
    title: 'Ödüllerimiz',
    category: 'corporate',
    categoryLabel: 'Kurumsal',
    subtitle: 'Başarısı Tescillenmiş Yerli Yazılım Gücü',
    content: [
      'Yıllar boyunca geliştirdiğimiz yenilikçi teknolojiler ve e-Dönüşüm projeleri, ulusal ve uluslararası bağımsız kuruluşlar tarafından prestijli ödüllerle taçlandırılmıştır:',
      '• Yılın En Başarılı Kurumsal Yazılım Markası (Bilişim 500 Ödülleri)',
      '• En Yenilikçi e-Dönüşüm Entegratörü Altın Ödülü',
      '• Ar-Ge İnovasyon Öncüsü Ödülü (Sanayi ve Teknoloji Bakanlığı)',
      '• Global İhracat Başarı Ödülü (Yazılım Sanayicileri Derneği - YASAD)',
      'Her ödül, Köprü Soft ekibi ve bizi tercih eden 110.000+ kurumsal işletme için yeni bir motivasyon kaynağıdır.'
    ]
  },
  'basin': {
    id: 'basin',
    title: 'Basında Biz',
    category: 'corporate',
    categoryLabel: 'Kurumsal',
    subtitle: 'Ulusal ve Sektörel Medyada Köprü Soft Haberleri',
    content: [
      'Köprü Soft\'un başarı hikayeleri, yeni ürün lansmanları ve teknoloji vizyonu önde gelen medya organlarında geniş yer bulmaktadır:',
      '• "Yerli ERP Devinden 2026 Siber Güvenlik Hamlesi" (Dünya Gazetesi)',
      '• "Köprü Soft\'tan e-Ticaret Sektöründe Devrim: Ömür Boyu Sıfır Komisyon" (Capital Dergisi)',
      '• "GİB Entegrasyonunda %99.99 Kesintisiz Hizmet Veren Entegratör" (Hürriyet Teknoloji)',
      'Basın bültenlerimize, güncel röportajlarımıza ve kurumsal logolarımıza ulaşmak için basın kiti sayfamızdan detayları indirebilirsiniz.'
    ]
  },
  'sorumluluk': {
    id: 'sorumluluk',
    title: 'Sosyal Sorumluluk',
    category: 'corporate',
    categoryLabel: 'Kurumsal',
    subtitle: 'Teknolojiyle Geleceğe ve Topluma Katkı Sağlıyoruz',
    content: [
      'Köprü Soft olarak, sadece kod yazmıyor; daha yeşil, daha adil ve eğitimde fırsat eşitliği sunan bir gelecek için çalışıyoruz.',
      '1. Köprü Soft Akademi Ormanı: Kestiğimiz her e-Fatura ve e-Arşiv faturanın doğaya katkısı olarak, TEMA Vakfı iş birliğiyle her yıl binlerce fidanı toprakla buluşturuyoruz.',
      '2. Kodlama Sınır Tanımaz: Anadolu\'daki köy okullarında bilgisayar sınıfları kuruyor, çocuklara temel kodlama ve algoritma eğitimleri sağlıyoruz.',
      '3. Üniversite İş Birlikleri: Genç mühendis adaylarına ücretsiz ERP ve SQL eğitimleri sunarak sektöre kalifiye insan kaynağı yetiştiriyoruz.'
    ]
  },

  // --- SOLUTIONS ---
  'erp-std': {
    id: 'erp-std',
    title: 'Köprü ERP Standard',
    category: 'solutions',
    categoryLabel: 'Çözümler',
    subtitle: 'KOBİ\'ler İçin Tasarlanmış Hızlı ve Güçlü ERP',
    content: [
      'Köprü ERP Standard, büyüme aşamasındaki KOBİ\'lerin finans, stok, cari hesap, çek-senet, satın alma ve e-Dönüşüm süreçlerini tek merkezden yönetmesini sağlayan kompakt ve kullanımı kolay bir çözümdür.',
      'Kolay kurulum ve kullanıcı dostu arayüzü sayesinde ekibiniz sisteme hızlıca adapte olur. Sunucu yatırımı gerektirmeyen KöprüCloud altyapısı ile verileriniz her an yedekli ve güvendedir.',
      'Stok limiti uyarıları, cari bakiye limitleri ve otomatik mutabakat modülleriyle risklerinizi minimize eder, nakit akışınızı kontrol altında tutarsınız.'
    ]
  },
  'erp-ent': {
    id: 'erp-ent',
    title: 'Köprü ERP Enterprise',
    category: 'solutions',
    categoryLabel: 'Çözümler',
    subtitle: 'Büyük Ölçekli Şirketler İçin Esnek ve Ölçeklenebilir ERP',
    content: [
      'Köprü ERP Enterprise; çoklu şube yapısına sahip, konsolide finansal raporlamaya ihtiyaç duyan ve holding yapısındaki büyük ölçekli şirketlerin tüm iş süreçlerini orkestre eden amiral gemisi platformumuzdur.',
      'Dinamik süreç tasarımcısı, esnek bütçe yönetimi, gelişmiş dış ticaret süreçleri ve uluslararası muhasebe standartları (UFRS) ile tam uyumludur.',
      'API katmanı sayesinde dış sistemlerle çift yönlü haberleşebilir, şirketinizin iş kurallarını sisteme tam olarak entegre edebilirsiniz.'
    ]
  },
  'mrp-uretim': {
    id: 'mrp-uretim',
    title: 'Köprü MRP Üretim',
    category: 'solutions',
    categoryLabel: 'Çözümler',
    subtitle: 'İleri Seviye Fabrika ve Üretim Planlama Çözümü',
    content: [
      'Üretim yapan işletmelerin hammadde tedarikinden nihai mamul sevkiyatına kadar olan tüm süreçleri kontrol etmesini sağlayan akıllı MRP modülümüzdür.',
      'Çok seviyeli ürün ağaçları (Reçeteler), iş istasyonu (Workstation) tanımları, makine kapasite planlaması ve iş gücü verimlilik analizleri ile fire oranlarınızı düşürür ve kârlılığınızı artırır.',
      'Anlık üretim takip paneli, fason takip modülü ve kalite kontrol istasyonlarıyla fabrikada gerçekleşen her hareketi gerçek zamanlı izleyebilirsiniz.'
    ]
  },
  'on-muhasebe': {
    id: 'on-muhasebe',
    title: 'Köprü Ön Muhasebe',
    category: 'solutions',
    categoryLabel: 'Çözümler',
    subtitle: 'Hızlı Fatura, Cari ve Kasa Takibi',
    content: [
      'Köprü Ön Muhasebe, karmaşık muhasebe terimleriyle uğraşmak istemeyen esnaf, girişimci ve küçük işletmeler için tasarlanmış web tabanlı ön muhasebe yazılımıdır.',
      'Gelen-giden faturalarınızı kesin, müşteri ödemelerini girin, kasa/banka bakiyelerinizi anlık izleyin ve geciken alacaklarınız için otomatik hatırlatma bildirimleri gönderin.',
      'Mali müşavirinizle tam entegre çalışan yapısıyla, dönem sonlarında evrak toplama derdini tamamen ortadan kaldırır.'
    ]
  },
  'mobil-satis': {
    id: 'mobil-satis',
    title: 'Mobil Satış ve Depo',
    category: 'solutions',
    categoryLabel: 'Çözümler',
    subtitle: 'Sahada ve Depoda Kusursuz Taşınabilir Çözümler',
    content: [
      'Saha satış ekiplerinizin (Sıcak/Soğuk satış) ve depo personelinizin el terminalleri, tabletler veya akıllı telefonlar üzerinden sisteme bağlanmasını sağlayan mobil uygulamalarımızdır.',
      'Sahada anlık sipariş alma, barkod okutarak depo sayımı, şubeler arası ürün transferi ve mobil yazıcı entegrasyonu ile yerinde fatura basımı saniyeler içinde tamamlanır.',
      'İnternet bağlantısının olmadığı durumlarda çevrimdışı (offline) çalışabilen özel veritabanı mimarisi, sahadaki operasyonlarınızın asla kesintiye uğramamasını sağlar.'
    ]
  },
  'restoran-adisyon': {
    id: 'restoran-adisyon',
    title: 'Restoran ve Adisyon',
    category: 'solutions',
    categoryLabel: 'Çözümler',
    subtitle: 'Hızlı Adisyon, Masa Planı ve Kurye Otomasyonu',
    content: [
      'Restoranlar, kafeler, pastaneler ve hızlı tüketim işletmeleri için geliştirilmiş dokunmatik POS ve adisyon yönetim yazılımıdır.',
      'Özelleştirilebilir masa planı, el terminali ile masada sipariş alma, mutfak ekranı (KDS) entegrasyonu ve paket servis süreçlerinde Yemeksepeti, Trendyol, Getir entegrasyonları tek ekranda toplanır.',
      'Anlık ciro raporları, hammadde reçete takibiyle porsiyon fire analizleri ve kurye performans takipleri restoranınızın kontrolünü size teslim eder.'
    ]
  },

  // --- E-TRANSFORMATION ---
  'e-fatura-ent': {
    id: 'e-fatura-ent',
    title: 'e-Fatura Entegratörü',
    category: 'e-trans',
    categoryLabel: 'e-Dönüşüm',
    subtitle: 'GİB Özel Entegratör Güvencesiyle e-Fatura',
    content: [
      'Köprü Soft, Gelir İdaresi Başkanlığı (GİB) lisanslı yetkili özel entegratördür. e-Fatura sistemimiz, faturalarınızı saniyeler içinde GİB standartlarında alıcıya ulaştırır.',
      'Faturalama süreçlerinizi hızlandırarak kağıt, baskı, zarf ve kargo maliyetlerinizi tamamen ortadan kaldırır. Gelen e-faturalarınız ERP sisteminize otomatik işlenir, muhasebe kayıtları otomatik oluşur.',
      'Yıllık bazda milyarlarca liralık fatura trafiğini, en üst düzey siber güvenlik katmanları ve %99.99 çalışma süresiyle sorunsuz bir şekilde yönetiyoruz.'
    ]
  },
  'e-arsiv-fat': {
    id: 'e-arsiv-fat',
    title: 'e-Arşiv Fatura',
    category: 'e-trans',
    categoryLabel: 'e-Dönüşüm',
    subtitle: 'Nihai Tüketicilere Dijital Fatura Gönderimi',
    content: [
      'e-Arşiv Fatura çözümü, e-Fatura mükellefi olmayan müşterilerinize ve nihai tüketicilere elektronik ortamda fatura düzenlemenizi ve göndermenizi sağlar.',
      'Oluşturulan faturalar müşterilerinizin e-posta adreslerine veya SMS olarak cep telefonlarına anında iletilir. Yasal 10 yıl saklama güvencesi Köprü Soft sunucularında ücretsiz sağlanmaktadır.',
      'Matbu fatura koçanları, arşiv odaları ve geçmişe dönük fatura arama zahmetleri tarih olur. Tek tıkla sorgulama ekranlarından tüm geçmiş faturalarınıza saniyeler içinde erişebilirsiniz.'
    ]
  },
  'e-irsaliye-sis': {
    id: 'e-irsaliye-sis',
    title: 'e-İrsaliye',
    category: 'e-trans',
    categoryLabel: 'e-Dönüşüm',
    subtitle: 'Lojistikte Dijital İrsaliye Dönemi',
    content: [
      'Taşıma ve sevk irsaliyelerinin kağıt yerine tamamen dijital olarak düzenlendiği, gönderildiği ve saklandığı Gelir İdaresi Başkanlığı onaylı güvenli e-Dönüşüm modülümüzdür.',
      'Yol denetimlerinde barkod veya karekod okutularak denetim personeline saniyeler içinde yasal kontrol imkanı sunar. Araç yola çıkmadan önce düzenlenen e-irsaliye, nakliye operasyonlarınızı hızlandırır.',
      'Alıcının irsaliyeyi kısmen veya tamamen kabul/reddetme durumları, sistem üzerinden anlık olarak izlenerek eksik veya hasarlı ürün süreçleri kontrol altında tutulur.'
    ]
  },
  'e-defter-sak': {
    id: 'e-defter-sak',
    title: 'e-Defter Saklama',
    category: 'e-trans',
    categoryLabel: 'e-Dönüşüm',
    subtitle: 'Yasal Defterlerin Güvenli Dijital Berat Gönderimi',
    content: [
      'Köprü Soft e-Defter modülü, Yevmiye ve Kebir defterlerinizi GİB standartlarında hazırlar, berat dosyalarını oluşturur ve otomatik olarak Gelir İdaresi Başkanlığı sistemlerine iletir.',
      'Yasal olarak tutulması zorunlu olan bu defterler, Köprü Soft yedekleme altyapısıyla şifreli bulut sunucularımızda 10 yıl boyunca siber saldırılara ve veri kayıplarına karşı koruma altında saklanır.',
      'Kurumsal denetim veya ibraz durumlarında, yasal onaylı defterlerinize portal üzerinden anında ulaşabilir ve güvenle paylaşabilirsiniz.'
    ]
  },
  'e-mustahsil-mak': {
    id: 'e-mustahsil-mak',
    title: 'e-Müstahsil Makbuzu',
    category: 'e-trans',
    categoryLabel: 'e-Dönüşüm',
    subtitle: 'Tarım Alımlarında Dijital Kolaylık',
    content: [
      'Defter tutmayan çiftçilerden yapılan tarım ve hayvancılık ürünleri alımlarında, kağıt müstahsil makbuzu kesme zorunluluğunu ortadan kaldıran çözümdür.',
      'Vergi dairesi bildirimleri, stopaj hesaplamaları ve üretici ödemeleri elektronik ortamda hatasız olarak gerçekleştirilir.',
      'Çevrimdışı çalışabilme yeteneği sayesinde kırsal alanlarda, internetin çekmediği tarla veya çiftlik şartlarında bile makbuz düzenleyebilir, internete eriştiğiniz anda GİB entegrasyonunu tamamlayabilirsiniz.'
    ]
  },
  'gib-takvim': {
    id: 'gib-takvim',
    title: 'GİB Mevzuat Takvimi',
    category: 'e-trans',
    categoryLabel: 'e-Dönüşüm',
    subtitle: 'Regülasyon Değişiklikleri ve Önemli Vergi Günleri',
    content: [
      'Mali mevzuat, tebliğler ve e-Dönüşüm geçiş zorunlulukları Gelir İdaresi Başkanlığı tarafından sürekli olarak güncellenmektedir. Köprü Soft Mevzuat Takvimi ile hiçbir kritik tarihi kaçırmazsınız.',
      'Sistemimiz, şirketinizin cirosuna ve faaliyet alanına göre hangi e-Dönüşüm modüllerine geçmeniz gerektiğini analiz eder ve geçiş tarihlerinden aylar önce sizi otomatik uyarır.',
      'Aylık KDV, Muhtasar, e-Defter berat yükleme günleri gibi mali takvimin en önemli tarihlerini içeren interaktif panelimizle muhasebe departmanınız her zaman yasal takvime tam uyum sağlar.'
    ]
  },

  // --- PARTNERSHIP ---
  'bayilik': {
    id: 'bayilik',
    title: 'Bayilik Başvurusu',
    category: 'partners',
    categoryLabel: 'İş Ortaklığı',
    subtitle: 'Köprü Soft Geniş Çözüm Ortaklığı Ailesine Katılın',
    content: [
      'Türkiye genelindeki en güçlü yerli kurumsal yazılım ailesine katılarak kazancınızı artırın! Köprü Soft Bayilik Modeli, yüksek kâr marjları ve sürekli yinelenen gelir imkanı sunmaktadır.',
      'Mevcut portföyünüzdeki kurumsal şirketlere Köprü ERP, e-Dönüşüm ve KöprüCommerce komisyonsuz e-ticaret çözümlerini sunarak işinizi büyütün. Bayilerimize yerinde eğitimler, kurumsal pazarlama materyalleri ve özel teknik destek hatları sunulmaktadır.',
      'Başvuru kriterlerini incelemek ve bölge temsilcimizle görüşmek için bayilik formumuzu doldurabilir, saniyeler içinde iş ortaklığı sürecini başlatabilirsiniz.'
    ]
  },
  'ortak-giris': {
    id: 'ortak-giris',
    title: 'Çözüm Ortağı Girişi',
    category: 'partners',
    categoryLabel: 'İş Ortaklığı',
    subtitle: 'Partner Portal - Çözüm Ortakları Yönetim Masası',
    content: [
      'Değerli Çözüm Ortaklarımız, bu portal üzerinden müşteri lisans takipleri, e-Dönüşüm kontör yüklemeleri, yeni bayi siparişleri ve teknik destek taleplerinizi tek merkezden yönetebilirsiniz.',
      '2026 kurumsal güvenlik protokollerimiz kapsamında, Partner Portal girişleri iki adımlı doğrulama (2FA) ve SMS onayı ile şifrelenmiştir. Portal üzerinden satış kotalarınızı, bayi performans analizlerinizi ve hak ettiğiniz prim dağılımlarını anlık izleyebilirsiniz.',
      'Giriş sorunları veya şifre sıfırlama işlemleri için lütfen Bayi Koordinatörlüğümüz (0850 441 00 20) ile irtibata geçiniz.'
    ]
  },
  'sertifikasyon': {
    id: 'sertifikasyon',
    title: 'Sertifikasyon Programı',
    category: 'partners',
    categoryLabel: 'İş Ortaklığı',
    subtitle: 'Uluslararası Geçerliliğe Sahip Köprü Soft Uzmanlık Sertifikası',
    content: [
      'Köprü Soft Sertifikasyon Programı, yazılımcıların, sistem analistlerinin ve mali danışmanların Köprü Soft ürünleri üzerinde profesyonel düzeyde uyarlama ve kurulum yapabilmesini belgelendirir.',
      'Programı başarıyla tamamlayan adaylar "Köprü Certified ERP Consultant" (Sertifikalı ERP Danışmanı) ünvanını kazanarak geniş çözüm ortağı ağımızda ve kurumsal müşterilerimizde yüksek iş imkanına sahip olurlar.',
      'Eğitimler online akademi portalımız üzerinden yürütülmekte olup, dönem sonlarında yapılan yazılı ve uygulamalı sınavlarla sertifikasyon süreci tamamlanmaktadır.'
    ]
  },
  'api-portal': {
    id: 'api-portal',
    title: 'Yazılımcı API Portalı',
    category: 'partners',
    categoryLabel: 'İş Ortaklığı',
    subtitle: 'Köprü Soft OpenAPI - Entegrasyon Kılavuzları',
    content: [
      'Köprü Soft OpenAPI mimarisi, harici yazılımların, e-ticaret sitelerinin ve IoT donanımlarının Köprü ERP ve e-Dönüşüm veritabanlarıyla çift yönlü ve gerçek zamanlı haberleşmesini sağlar.',
      'API portalımızda RESTful endpoint yapısı, JSON veri şemaları, Webhook mekanizmaları ve SDK kütüphaneleri (C#, Node.js, Python, PHP) eksiksiz olarak belgelenmiştir.',
      '2026 güvenlik güncellemeleri kapsamında API istekleri JWT (JSON Web Token) ve IP kısıtlama yetkilendirmesiyle en üst düzey siber güvenlik standartlarında korunmaktadır.'
    ]
  },
  'akademi': {
    id: 'akademi',
    title: 'Partner Akademisi',
    category: 'partners',
    categoryLabel: 'İş Ortaklığı',
    subtitle: 'İş Ortaklarımız İçin Sürekli Eğitim ve Gelişim Platformu',
    content: [
      'Partner Akademisi, sadece teknik kurulumları değil, satış teknikleri, GİB mevzuat eğitimleri ve müşteri ilişkileri yönetimini kapsayan geniş bir gelişim programıdır.',
      'Her hafta düzenlenen canlı webinar eğitimleriyle çözüm ortaklarımızın güncel regülasyonlar ve yeni ürün özellikleri hakkında eksiksiz bilgiye sahip olması sağlanır.',
      'Akademi kütüphanemizde yer alan binlerce makale, video rehber ve sunum dosyası işinizi sahadayken de hızlandırmak için 7/24 erişime açıktır.'
    ]
  },

  // --- CAREERS & SUPPORT ---
  'teknik-destek': {
    id: 'teknik-destek',
    title: 'Teknik Destek Masası',
    category: 'careers',
    categoryLabel: 'Destek & Kariyer',
    subtitle: '7/24 Kesintisiz Teknik Destek ve Hizmet Seviyesi (SLA)',
    content: [
      'Köprü Soft müşterileri, iş süreçlerinin kesintiye uğramaması için en üst düzeyde destek hizmeti alırlar. Teknik Destek Masamız, 0850 441 00 20 numaralı hattımız ve destek@koprusoft.com.tr e-posta adresi üzerinden 7/24 aktiftir.',
      'Tüm destek talepleri kurumsal yardım masası (Help Desk) yazılımımızda biletlenir (Ticket) ve SLA sürelerimiz kapsamında en geç 15 dakika içinde ilk müdahale uzman mühendislerimizce gerçekleştirilir.',
      'Ayrıca uzaktan bağlantı araçlarıyla yerinde müdahale gerektirmeyen tüm sistem ayarları dakikalar içinde tamamlanır.'
    ]
  },
  'kilavuzlar': {
    id: 'kilavuzlar',
    title: 'Kullanım Kılavuzları',
    category: 'careers',
    categoryLabel: 'Destek & Kariyer',
    subtitle: 'Köprü Soft Ürünleri Adım Adım Kullanım Dokümanları',
    content: [
      'Ürünlerimizin tüm modüllerine ait detaylı kullanım kılavuzlarına bu bölümden erişebilirsiniz. Kılavuzlarımız, ekran görüntüleri, akış şemaları ve adım adım yönergelerle hazırlanmıştır.',
      '• Köprü ERP Stok ve Cari Kart Tanımlama Kılavuzu',
      '• KöprüCommerce Sanal POS ve Kargo Kurulum Entegrasyon Kitapçığı',
      '• GİB e-Fatura İlk Geçiş ve Aktivasyon Kılavuzu',
      'Arama çubuğunu kullanarak takıldığınız ekran ismini yazıp ilgili kılavuza ve çözüm yollarına saniyeler içinde ulaşabilirsiniz.'
    ]
  },
  'videolar': {
    id: 'videolar',
    title: 'Video Eğitimler',
    category: 'careers',
    categoryLabel: 'Destek & Kariyer',
    subtitle: 'Görsel ve Uygulamalı Eğitim Akademisi',
    content: [
      'Yazılı dokümanların yanı sıra, uzman eğitmenlerimiz tarafından hazırlanan yüksek çözünürlüklü video eğitim serilerimizle ürünlerimizi en ince detayına kadar öğrenebilirsiniz:',
      '• e-Fatura Tasarımı Nasıl Yapılır? (10 Dakika)',
      '• Köprü MRP ile Üretim Reçetesi Oluşturma (15 Dakika)',
      '• KöprüCommerce Komisyonsuz Mağaza Entegrasyonu (12 Dakika)',
      'Eğitim videolarımız, temel düzeyden ileri düzey sistem yöneticiliğine kadar modüler seviyelerde hazırlanmıştır.'
    ]
  },
  'ik-pozisyon': {
    id: 'ik-pozisyon',
    title: 'Açık Pozisyonlar (İK)',
    category: 'careers',
    categoryLabel: 'Destek & Kariyer',
    subtitle: 'Köprü Soft Geleceğin Teknolojisini Üreten Ekibe Katılın',
    content: [
      'Köprü Soft, sürekli gelişen, Ar-Ge odaklı ve dinamik yapısıyla Türkiye\'nin en çok tercih edilen teknoloji işveren markalarından biridir. Bizimle birlikte geleceğin kurumsal yazılım mimarilerini yazmak ister misiniz?',
      'Aktif Açık Pozisyonlarımız:',
      '1. Senior Full-Stack Developer (Maslak / Hibrit) - React & Node.js uzmanı, siber güvenlik deneyimli.',
      '2. ERP Implementasyon Mühendisi (İstanbul / Saha) - Endüstri Mühendisi, müşteri süreç analizleri.',
      '3. e-Dönüşüm Veritabanı Uzmanı (Maslak) - MS SQL / PostgreSQL veritabanı optimizasyonu, büyük veri.',
      '4. Kurumsal Satış Temsilcisi (Ankara / Bölge) - KOBİ ve Enterprise düzey portföy yönetimi.',
      'Özgeçmişinizi cv@koprusoft.com.tr adresine ileterek genel başvuru yapabilirsiniz.'
    ]
  },
  'staj': {
    id: 'staj',
    title: 'Staj Olanakları',
    category: 'careers',
    categoryLabel: 'Destek & Kariyer',
    subtitle: 'Geleceğin Mühendisleri Köprü Soft Yaz Kampında Yetişiyor',
    content: [
      'Köprü Soft Staj Programı, üniversitelerin Bilgisayar Mühendisliği, Yazılım Mühendisliği ve Endüstri Mühendisliği bölümlerinde okuyan 3. ve 4. sınıf öğrencilerine gerçek bir Ar-Ge projesinde yer alma fırsatı sunar.',
      'Her stajyerimize kıdemli bir yazılım mimarımız mentor olarak atanır. Stajyerlerimiz sadece gözlem yapmaz; bulut sistemleri, yapay zekâ entegrasyonları ve e-Ticaret modülleri üzerinde aktif kod yazar ve katkı sağlarlar.',
      'Başarılı stajyerlerimizin staj sonrasında tam zamanlı işe alım oranları %78 seviyesindedir. Başvurular her yıl Mart - Nisan aylarında kurumsal web sitemiz üzerinden kabul edilmektedir.'
    ]
  }
};
