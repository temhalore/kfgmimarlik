# KFG Mimarlık Kurumsal Web Sitesi Proje Planı

## 1. Genel Hedefler
- Modern, kurumsal ve şık bir mimarlık sitesi
- SEO uyumlu, hızlı ve mobil uyumlu
- Tüm içerik ve görselleri kolayca yönetilebilir (panel veya JSON ile)
- Renk teması ve fontlar merkezi bir dosyadan kolayca değiştirilebilir
- Sonradan tema entegresine uygun, modüler yapı
- Tüm resimler ve içerikler ayrı klasörlerde, kolayca güncellenebilir

## 2. Ana Klasör Yapısı
```
proje/
  assets/           # Tüm görseller ve medya dosyaları
  css/              # Tema ve stil dosyaları
  js/               # Gerekli scriptler
  data/             # İçerik, görsel ve i18n JSON dosyaları
  pages/            # Tüm sayfa HTML dosyaları (her sayfa sadece content)
  component/        # Ortak bileşenler (header, footer, dil seçici vb.)
  panel/            # (Opsiyonel) Basit içerik/görsel yönetim paneli
  tema/             # Sonradan entegre edilecek tema dosyaları
  README.md         # Proje açıklaması ve kullanım notları
  maintece.md       # Bakım ve değişiklik geçmişi
```

## 3. Sayfa Listesi ve İçerik
- Anasayfa (Kurumsal tanıtım, öne çıkan projeler, iletişim)
- Hakkımızda
- Hizmetlerimiz
- Projeler (galeri ve detay sayfaları)
- Ekip
- Blog/Haberler
- İletişim (harita, form, iletişim bilgileri)
- (Opsiyonel) Referanslar, Sertifikalar, İş Ortakları

## 4. Temel Özellikler
  - Responsive (mobil/tablet/masaüstü)
  - SEO meta tagleri ve yapılandırılmış veri
  - Tüm metin, başlık ve görselleri JSON veya panelden yönetebilme
  - Renk ve font teması tek dosyadan değiştirilebilir
  - Her sayfa için ayrı görsel klasörü
  - Kolay tema değişimi için modüler HTML/CSS yapısı
  - Header ve footer component olarak ayrı dosyalarda, her sayfada dinamik olarak eklenir
  - Tüm sayfa içerikleri, başlıklar, butonlar, menüler vs. i18n JSON dosyasından gelir
  - i18n desteği: Türkçe (tr) ve İngilizce (en) dilleri, varsayılan dil Türkçe
  - i18n anahtarları ve enumlar Türkçe isimlendirilir, içerik ve başlıklar ayrı enumlarda tutulur

## 5. Tasarım ve Tema
- https://themes.pixelwars.org/archy/demo-01/home-02/ adresindeki temaya mümkün olduğunca benzer
- Modern, sade, bol beyaz alan, büyük başlıklar, kaliteli görseller
- Ana renkler ve fontlar değiştirilebilir olacak
- Tüm ikonlar ve görseller assets/ klasöründe tutulacak

## 6. Teknoloji Seçimi
- SEO öncelikli: Statik HTML + JS + JSON (veya Next.js/Angular Universal gibi SSR destekli framework, tercihe göre)
- İlk sürümde statik HTML + JS + JSON ile başlanacak, sonradan framework entegrasyonu kolay olacak

7. Adım Adım Yol Haritası
1. Klasör yapısını oluştur
2. Ana tema renk ve font dosyasını hazırla (css/theme.css)
3. assets/ klasörüne örnek görselleri ve ikonları ekle
4. data/ klasörüne örnek içerik ve i18n JSON dosyalarını ekle (kurumsal, ekip, projeler, iletişim, i18n vs.)
5. component/ klasöründe header, footer, dil seçici gibi ortak bileşenleri oluştur
6. pages/ klasöründe temel sayfa şablonlarını oluştur (her sayfa sadece content, header/footer dinamik eklenir)
7. Her sayfada içerik, başlık ve görselleri i18n ve içerik JSON'dan dinamik olarak çek (JS ile)
8. SEO meta tagleri ve başlıkları her sayfada dinamikleştir
9. Panel/ klasöründe basit bir içerik/görsel yönetim arayüzü hazırla (isteğe bağlı)
10. Tema klasörüne örnek tema dosyalarını ekle
11. Tüm yapıyı README.md ve maintece.md ile dokümante et

## 8. Sonraki Adımlar
- Onaydan sonra klasör ve temel dosyaları oluşturup, örnek içerik ve şablonlarla projeyi başlatacağım.
- Sonraki isteklerinizde maintece.md üzerinden değişiklik ve bakım kaydı tutacağım.

---

Onayınızı alırsam, adım adım projeyi başlatacağım ve her adımda size bilgi vereceğim.
