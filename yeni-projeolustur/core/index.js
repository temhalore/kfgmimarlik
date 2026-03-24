// Ana giriş dosyası: header, footer, içerik ve i18n fonksiyonlarını burada import edip başlatacağız
import { headerYukle } from './header.js';
import { footerYukle } from './footer.js';
import { icerikYukle } from './content.js';
import { ceviriGetir } from './i18n.js';
import { veriGetir } from './ortak.js';

// Örnek başlatıcı fonksiyon
function siteyiBaslat(dil = 'tr', sayfa = 'ana-sayfa') {
  // Menü ve i18n verilerini yükle
  veriGetir('../data/menuler.json').then(menuJson => {
    veriGetir('../data/i18n.json').then(i18nJson => {
      headerYukle(dil, menuJson);
      footerYukle(dil);
      icerikYukle(sayfa, dil);
      // ...gerekirse diğer başlatıcı işlemler...
    });
  });
}

// siteyiBaslat(); // Geliştirme/test için çağrılabilir

export { siteyiBaslat };