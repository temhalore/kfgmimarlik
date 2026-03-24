# Tema Kopyalama ve Giydirme Yol Haritası (Revize)

## Amaç
- HTTrack veya benzeri araçlarla indirilen temaların (ör: Pixelwars Archy) tüm dosyalarını (HTML, CSS, JS, img, font, vs.) bozulmadan proje/tema/archy/ altına kopyalamak.
- Her yeni tema için aynı iskelet ve panel kullanılacak, sadece tema klasörü değişecek.
- Panelden içerik eklenince, ilgili component ve JSON otomatik güncellenecek, tema hangi domain içinse o tema klasörüyle çalışacak.
- Tüm sayfalar (index, about, services, projects, news, contact) ve alt sayfalar, iç linkler, portfolyo detayları, popup’lar, JS fonksiyonları, görseller vs. eksiksiz uyarlanacak.
- Panelden tema seçimi, içerik yönetimi ve önizleme mümkün olacak.
- temalar/ klasörü .gitignore’da olacak, asla repoya eklenmeyecek.

## Yol Haritası

### 1. Tema Kopyalama
- HTTrack ile indirilen tema ve tüm dosyaları (HTML, CSS, JS, img, font, vs.) bozulmadan proje/tema/archy/ altına kopyalanır.
- temalar/ klasörü .gitignore’a eklenir, asla repoya eklenmez.

### 2. Sayfa ve Component Analizi
- Temadaki her ana ve alt sayfa (index, about, services, projects, news, contact, portfolyo detayları, popup’lar, iç linkler, JS fonksiyonları) tek tek incelenir.
- Her sayfa ve component, projenin pages/ ve component/ klasörlerine karşılık gelecek şekilde eşleştirilir.

### 3. HTML, CSS, JS ve Görsel Uyarlama
- Temadaki HTML yapısı, projenin dinamik component ve JSON tabanlı sistemine uygun şekilde bölünür.
- Statik içerikler ilgili JSON dosyalarına aktarılır.
- Gerekli CSS/JS dosyaları tema klasöründe tutulur, tema seçimine göre dinamik yüklenir.
- Çakışan/gereksiz kodlar ayıklanır.

### 4. Panel ve JSON Entegrasyonu
- Tüm içerikler (başlık, metin, görsel, menü, slider, galeri, projeler, haberler, iletişim, portfolyo detayları) JSON ve panelden yönetilebilir hale getirilir.
- Panelden içerik eklenince, ilgili component ve JSON otomatik güncellenir.
- Panelde tema seçimi ve önizleme özelliği eklenir.

### 5. Domain ve Tema Bağımsızlığı
- Her domain için ilgili tema klasörü kullanılır, panelden tema seçimiyle otomatik geçiş yapılabilir.
- Yeni tema eklemek için sadece tema klasörüne dosyalar kopyalanır, panel ve iskelet değişmeden çalışır.

### 6. SEO, Responsive ve Test
- Tüm sayfalarda SEO meta tagleri ve Open Graph verileri dinamik olur.
- Responsive ve erişilebilirlik kontrolleri yapılır.
- Tüm componentler ve içerikler dinamik çalışıyor mu test edilir.

## Eksiklikler ve Geliştirme Notları
- Component ve JSON şemaları temaya göre genişletilmeli.
- Panel arayüzü için gelişmiş formlar ve görsel yükleme desteği eklenmeli.
- Çoklu tema desteği için tema seçici ve dinamik CSS/JS yükleme mekanizması eklenmeli.

## Onay Sonrası İlk Adımlar
1. HTTrack ile alınan temanın tüm dosyalarını proje/tema/archy/ altına kopyala.
2. Temadaki her sayfa, alt sayfa, iç link, portfolyo detayları, popup, JS fonksiyonları ve görselleri analiz et.
3. Her sayfa ve componenti, projenin pages/ ve component/ klasörlerine karşılık gelecek şekilde eşleştir.
4. Statik içerikleri ilgili JSON dosyalarına aktar, dinamik component yapısını kur.
5. Panelden içerik ekleme, tema seçimi ve önizleme özelliklerini geliştir.
6. SEO, responsive ve erişilebilirlik kontrollerini yap.
7. Tüm entegrasyon adımlarını bu dosyada güncel tut.
