# Tema Kopyalama ve Giydirme Yol Haritası

## Amaç
- Dışarıdan indirilen temaların (ör: Pixelwars Archy) projemize kolayca entegre edilmesi, tüm HTML, CSS, JS ve görsellerin projenin modüler, dinamik ve panelden yönetilebilir yapısına uygun şekilde dönüştürülmesi.
- Gelecekte yeni temalar da aynı çatıya kolayca eklenebilmeli ve aktif tema seçilebilmeli.

## Yol Haritası

### 1. Tema Analizi ve Dosya Aktarımı
- İndirilen tema klasöründeki tüm HTML, CSS, JS ve görselleri /proje/tema/altına kopyala (ör: proje/tema/archy/).
- Temanın asset, css, js, img gibi tüm dosyalarını bozmadan taşı.
- .gitignore ile temalar/ klasörü repoya dahil edilmez.

### 2. Sayfa Eşleştirme ve Component Analizi
- Temadaki her sayfa (index, about, services, projects, news, contact) için projemizde karşılık gelen pages/ dosyasını belirle.
- Her sayfanın ana içerik, menü, header, footer, slider, galeri, form gibi componentlerini analiz et.
- Temadaki HTML yapısını, projenin component ve JSON tabanlı dinamik sistemine uygun şekilde böl.

### 3. HTML ve Component Dönüşümü
- Temadaki header, footer, menü, slider, galeri, form, proje kartı gibi yapıları ayrı component dosyalarına ayır.
- Her componenti projenin /component/ klasörüne taşı ve dinamik veriyle çalışacak şekilde düzenle.
- Statik içerikleri data/ klasöründeki ilgili JSON dosyalarına aktar.

### 4. CSS ve JS Entegrasyonu
- Temanın CSS ve JS dosyalarını /proje/tema/archy/ altına taşı.
- Gerekli olanları projenin ana yapısına import et (ör: tema seçimiyle birlikte ilgili CSS/JS yüklensin).
- Çakışan veya gereksiz CSS/JS kodlarını ayıkla.

### 5. Dinamik İçerik ve Panel Entegrasyonu
- Tüm sayfa içeriklerini (başlık, metin, görsel, menü, slider, galeri, projeler, haberler, iletişim vs.) JSON dosyalarına aktar.
- Panelden bu içeriklerin eklenip düzenlenmesini sağla.
- Panelde tema seçimi ve önizleme özelliği ekle.

### 6. Sayfa Yönlendirme ve SEO
- "Siteye Git" ile açılan sayfalar, yeni temanın görünümüne uygun şekilde açılır.
- SEO meta tagleri ve Open Graph verileri dinamik olarak güncellenir.

### 7. Test ve Son Rötuşlar
- Tüm sayfalar, componentler ve içerikler dinamik olarak çalışıyor mu test et.
- Eksik kalan veya statik kalan alanları tespit edip düzelt.
- Responsive ve mobil uyumluluk kontrolü yap.

## Eksiklikler ve Geliştirme Notları
- Şu an projenin iskeleti hazır, ancak tema giydirme için componentlerin ve JSON şemalarının temaya göre genişletilmesi gerekecek.
- Panel arayüzü sade, içerik ve component yönetimi için daha gelişmiş formlar ve görsel yükleme desteği eklenmeli.
- Çoklu tema desteği için tema seçici ve dinamik CSS/JS yükleme mekanizması eklenmeli.

## Onay Sonrası İlk Adımlar
1. Temadaki tüm dosyaları proje/tema/archy/ altına taşı.
2. Her sayfa için (anasayfa, hakkımızda, hizmetler, projeler, haberler, iletişim) component ve JSON eşleştirmesi yap.
3. Component ve içerik dönüşümüne adım adım başla.
