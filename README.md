# 🌉 KöprüSoft & KöprüCloud — VDS Kurulum ve Aktivasyon Kılavuzu

Bu kılavuz, KöprüSoft kurumsal web uygulamasını ve KöprüCloud bulut ön muhasebe ön yüzünü bir **VDS (Sanal Sunucu - Virtual Dedicated Server)** üzerinde nasıl derleyeceğinizi, kuracağınızı, aktif hale getireceğinizi ve 7/24 kesintisiz çalışacak şekilde nasıl yayına alacağınızı (Linux ve Windows Server için ayrı ayrı) adım adım açıklamaktadır.

---

## 📋 Gereksinimler (Prerequisites)

Başlamadan önce VDS sunucunuzda aşağıdaki araçların kurulu olduğundan emin olun:
1. **Node.js** (Sürüm 18 veya üzeri - LTS sürümü önerilir)
2. **npm** (Node Paket Yöneticisi)
3. **Web Sunucusu:**
   * **Linux VDS için:** Nginx (Önerilen) veya Apache
   * **Windows VDS için:** Internet Information Services (IIS)
4. **SSL Sertifikası:** Let's Encrypt Certbot (Güvenli HTTPS bağlantısı için)

---

## 🐧 YÖNTEM 1: Linux VDS Kurulumu (Ubuntu / Debian) — [ÖNERİLEN]

Linux VDS üzerinde **Nginx** ile yüksek performanslı ve ters projeksiyonlu (SPA destekli) kurulum en güvenli ve en kararlı yöntemdir.

### Adım 1: Sunucu Paketlerinin Güncellenmesi ve Node.js Kurulumu

SSH ile VDS sunucunuza bağlanın ve aşağıdaki komutları sırasıyla çalıştırarak sistemi güncelleyin, ardından Node.js LTS sürümünü kurun:

```bash
# Sistem paketlerini güncelle
sudo apt update && sudo apt upgrade -y

# NodeSource reposu aracılığıyla Node.js 20 LTS kurun
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Kurulumları doğrulayın
node -v
npm -v
```

### Adım 2: Gerekli Sunucu Yardımcılarını ve Nginx'i Kurma

```bash
# Nginx ve Git kurulumu
sudo apt install nginx git -y

# Nginx'in otomatik başlamasını etkinleştirin ve başlatın
sudo systemctl enable nginx
sudo systemctl start nginx
```

### Adım 3: Projeyi Sunucuya Çekme ve Derleme (Build)

Projeyi sunucunun web kök dizinine yerleştirelim ve optimize edilmiş üretim kodunu (`production build`) derleyelim:

```bash
# Proje için dizin oluşturun ve yetkilendirin
sudo mkdir -p /var/www/köprusoft
sudo chown -R $USER:$USER /var/www/köprusoft

# Proje dosyalarınızı bu dizine yükleyin/kopyalayın veya Git ile çekin:
# git clone <repo-url> /var/www/köprusoft

# Proje dizinine geçiş yapın
cd /var/www/köprusoft

# Bağımlılıkları yükleyin
npm install

# Projeyi yayına hazır hale getirmek için optimize ederek derleyin
npm run build
```
*Bu komutun başarıyla tamamlanmasının ardından, `/var/www/köprusoft/dist` dizini altında ultra hızlı, statik ve SEO dostu HTML/CSS/JS dosyaları (`dist` klasörü) oluşacaktır.*

### Adım 4: Nginx Sunucu Bloklarını (Vhost) Yapılandırma

SPA (Single Page Application) yönlendirmelerinin (Router / Derin Linkler) düzgün çalışabilmesi için Nginx yapılandırması kritik öneme sahiptir. Yeni bir Nginx yapılandırma dosyası oluşturun:

```bash
sudo nano /etc/nginx/sites-available/köprusoft
```

Aşağıdaki yapılandırmayı kendinize göre düzenleyerek (alan adınızı girerek) yapıştırın:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name koprusoft.com.tr bulut.koprusoft.com.tr; # Kendi domainlerinizi yazın

    root /var/www/köprusoft/dist;
    index index.html;

    # Gelişmiş sıkıştırma (Gzip) ayarları ile yüksek hız ve SEO dostu performans
    gzip on;
    gzip_vary on;
    gzip_min_length 10240;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml application/javascript;
    gzip_disable "MSIE [1-6]\.";

    # React Router ve alt sayfalar için yönlendirme kuralı (Çok Önemli)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Statik dosyalar için tarayıcı önbellekleme (Performans için)
    location ~* \.(?:ico|css|js|gif|jpe?g|png|svg|woff2?|eot|ttf|otf)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public, max-age=15552000, immutable";
    }

    error_log  /var/log/nginx/köprusoft_error.log;
    access_log /var/log/nginx/köprusoft_access.log;
}
```

Yapılandırmayı kaydedip çıkın (`Ctrl+O`, `Enter`, `Ctrl+X`). Ardından siteyi aktif edin:

```bash
# Yapılandırmayı etkinleştirin
sudo ln -s /etc/nginx/sites-available/köprusoft /etc/nginx/sites-enabled/

# Varsayılan Nginx yapılandırmasını devredışı bırakın (gerekliyse)
sudo rm /etc/nginx/sites-enabled/default

# Nginx yapılandırma doğruluğunu test edin
sudo nginx -t

# Nginx'i yeniden başlatın
sudo systemctl restart nginx
```

### Adım 5: Let's Encrypt ile Ücretsiz SSL (HTTPS) Aktivasyonu

Google SEO uyumluluğu ve veri güvenliği için SSL sertifikası zorunludur:

```bash
# Certbot ve Nginx eklentisini kurun
sudo apt install certbot python3-certbot-nginx -y

# Domainleriniz için otomatik SSL sertifikası alın ve kurun
sudo certbot --nginx -d koprusoft.com.tr -d bulut.koprusoft.com.tr
```
*Gelen yönlendirme sorusunda "2"yi seçerek tüm HTTP trafiğini otomatik olarak HTTPS'e güvenle yönlendirin.*

---

## 🪟 YÖNTEM 2: Windows Server VDS Kurulumu (IIS)

Eğer VDS sunucunuzda Windows Server işletim sistemi çalışıyorsa, kurulumu **IIS (Internet Information Services)** üzerinde gerçekleştirebilirsiniz.

### Adım 1: Gerekli Araçların Kurulması
1. Windows için **Node.js LTS** yükleyicisini indirin ve kurun.
2. Windows Server Panelinizden **IIS** rolünü etkinleştirin.
3. IIS üzerinde URL yönlendirmelerinin çalışabilmesi için **IIS URL Rewrite Module** aracını kurun (İndirme adresi: https://www.iis.net/downloads/microsoft/url-rewrite).

### Adım 2: Projeyi Derleme
Komut İstemi (`cmd`) veya PowerShell açarak proje dizinine gidin:

```cmd
cd C:\inetpub\wwwroot\köprusoft
npm install
npm run build
```

### Adım 3: IIS Sitesi Ekleme ve `web.config` Ayarları
1. **IIS Manager** uygulamasını açın.
2. Sol menüden **Sites** sekmesine sağ tıklayarak **Add Website** deyin.
3. **Physical Path** olarak projenin içindeki derlenen `dist` klasörünü seçin: `C:\inetpub\wwwroot\köprusoft\dist`
4. Hostname alanına alan adınızı yazın.
5. React Router'ın Windows üzerinde derin yönlendirme (sayfa yenilendiğinde 404 hatası vermemesi) yapabilmesi için `C:\inetpub\wwwroot\köprusoft\dist` klasörünün içine yeni bir **`web.config`** dosyası oluşturun ve şu kodları yapıştırın:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React SPA Wildcard Route" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_DIRNAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="index.html" />
        </rule>
      </rules>
    </rewrite>
    <staticContent>
      <mimeMap fileExtension=".woff" mimeType="application/font-woff" />
      <mimeMap fileExtension=".woff2" mimeType="application/font-woff2" />
    </staticContent>
  </system.webServer>
</configuration>
```

---

## ⚡ YÖNTEM 3: PM2 & Node.js ile Hızlı Port Tabanlı Yayına Alma

Eğer doğrudan Nginx/IIS yapılandırması yerine Node.js sunucusunu arka planda PM2 (Process Manager) ile hızlıca çalıştırıp port üzerinden test etmek isterseniz bu yöntemi uygulayabilirsiniz.

```bash
# Global olarak PM2 paket yöneticisini kurun
sudo npm install -g pm2

# Proje dizinine gidin
cd /var/www/köprusoft

# Uygulamayı PM2 üzerinden arka planda 3000 portunda başlatın
pm2 start "npm run preview" --name "köprusoft-app"

# PM2'nin sunucu yeniden başladığında otomatik çalışmasını aktif edin
pm2 startup
pm2 save
```

### PM2 Kullanışlı Komutlar:

* **Durum kontrolü:** `pm2 status`
* **Logları anlık izleme:** `pm2 logs köprusoft-app`
* **Yeniden başlatma:** `pm2 restart köprusoft-app`
* **Durdurma:** `pm2 stop köprusoft-app`

---

## 🔍 SEO ve Performans İpuçları (VDS Özel)

1. **B2B / Subdomain Entegrasyonu:** `bulut.koprusoft.com.tr` ve ana kurumsal sitenin DNS kayıtlarının (A Record) VDS sunucunuzun IP adresine yönlendirildiğinden emin olun.
2. **Önbellek (Cache) Yönetimi:** Nginx yapılandırmasındaki statik dosya önbellekleme ayarları sayesinde Google PageSpeed Insights skorunuzu %98+ seviyesinde tutabilirsiniz.
3. **Log Takibi:** Herhangi bir erişim veya sistem hatasında `/var/log/nginx/köprusoft_error.log` dosyasını inceleyin.

---

## 🛠️ Sık Karşılaşılan Hataların Çözümü (Troubleshooting)

### 1. ⚠️ `npm error code ERESOLVE` / `Could not resolve dependency` Hatası

Vite v8 ve Tailwind v4 paketlerinin en güncel versiyonları, bazı durumlarda `esbuild` sürümleriyle peer dependency (akran bağımlılığı) uyarısı verebilir. Bu sorunu çözmek için:

* **Yöntem A (Önerilen):** Proje `package.json` dosyasında `esbuild` sürümünü direkt Vite v8 uyumlu `"^0.28.0"` sürümüne güncelledik. Dosyaları sunucunuzda güncelleyip tekrar temiz kurulum yapın:
  ```bash
  npm install
  ```
* **Yöntem B (Zorla / Çakışmayı Atlayarak Kurulum):** Eğer sunucu NPM önbelleği nedeniyle hala uyarı alıyorsanız, çakışmayı yok sayarak temiz kurulum yapmak için şu komutları kullanın:
  ```bash
  # Akran bağımlılık kontrolünü atlayarak kararlı kurulum yapar (En Kolay Çözüm)
  npm install --legacy-peer-deps
  
  # Veya çakışmaları zorlayarak kurar
  npm install --force
  ```
* **Yöntem C (Kurulum Sonrası Derleme):** Paketler kurulduktan sonra yayına almak için tekrar derleyin:
  ```bash
  npm run build
  ```
