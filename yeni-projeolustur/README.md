# Dinamik Tema Dönüşüm Projesi

Bu proje, statik bir temayı dinamik ve çok dilli destekli bir yapıya dönüştürmek için hazırlanmıştır. Tüm içerikler, menüler, header, footer ve sayfa içerikleri JSON dosyalarından okunacaktır. Ortak kullanılan tüm bileşenler ve fonksiyonlar core klasöründe tutulacaktır.

## Klasör Yapısı
- core: Ortak bileşenler, fonksiyonlar, dil desteği
- assets: Tüm görseller, ikonlar, medya dosyaları
- data: Sayfa ve menü içerik JSON dosyaları, i18n dosyası
- projeler: Tema giydirme işlemleri için proje bazlı klasörler

## Genel Kurallar
- Tüm isimlendirmeler Türkçe olacak (JSON keyleri dahil)
- Her sayfanın içeriği ilgili JSON dosyasından okunacak
- Ortak CSS/JS dosyaları core'da toplanacak ve index'e import edilecek
- Menü, header, footer dinamik olacak
- Dil desteği olacak, i18n dosyası data klasöründe tutulacak
- Her sayfanın görsel ve medya yolları ilgili JSON'da olacak
- Tema giydirme işlemleri core referans alınarak projeler klasöründe yapılacak
