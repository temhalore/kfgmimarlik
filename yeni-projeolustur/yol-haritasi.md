# Tema Dönüşüm Yol Haritası

## 1. Core Yapının Oluşturulması
- Header, footer ve content için temel dosyaların hazırlanması
- Ortak fonksiyonlar ve bileşenlerin yazılması
- Dil desteği (i18n) için altyapının kurulması

## 2. Statik Temadan Aktarım
- Header ve footer'ın dinamikleştirilmesi
- Menülerin json dosyasına alınması
- Sayfa içeriklerinin json dosyalarına aktarılması
- Ortak css/js dosyalarının core'da toplanması
- Görsel ve medya dosyalarının assets'e taşınması

## 3. Sayfa Sayfa Tema Giydirme
- Her sayfa için ilgili json ve içeriklerin hazırlanması
- Gerekli js/css/html kodlarının core yapısına uygun şekilde alınması
- Proje bazlı klasörlerde tema giydirme işlemlerinin yapılması

## 4. Test ve Son Kontroller
- Tüm sayfaların dinamik çalıştığının kontrolü
- Dil desteği ve içeriklerin doğruluğunun test edilmesi

---

## 5. index.html Statik Referans Güncelleme ve Bölme Hazırlığı (2026-03-25)
- index.html dosyasındaki tüm <link> ve <script> referansları assets/ klasörüne göre güncellendi.
- Tüm görsel, favicon, logo ve arka plan görsellerinin assets/wp-content/uploads/sites/2/2023/05/ altında olduğu doğrulandı.
- Elementor ve Google Fonts CSS dosyalarının assets/wp-content/uploads/sites/2/elementor/css/ ve google-fonts/css/ altında olduğu doğrulandı.
- Eksik asset dosyası bulunmadı.
- Bu güncellemeler, ileride index.html dosyasını header, content ve footer olarak bölmek için temel teşkil edecek şekilde yapıldı.
- Bir sonraki adımda, index.html dosyasındaki bölümler (header, content, footer) net olarak ayrıştırılacak ve her bir bölüm için hangi referansların ve kod bloklarının bulunacağı belirlenecek.

Her adımda bu yol haritası güncellenecek ve detaylandırılacaktır.