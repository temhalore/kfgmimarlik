// Ana JS: Component ve içerik yükleme, i18n, dinamik başlık/meta

// Basit yardımcı fonksiyonlar
function loadComponent(id, path) {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

function loadJSON(path) {
  return fetch(path).then(res => res.json());
}

// Sayfa başlığı ve meta dinamik ayarla
function setPageTitle(title) {
  document.title = title;
  // Diğer meta tagler de burada güncellenebilir
}

// i18n yükle
let i18n = {};
let lang = localStorage.getItem('lang') || 'tr';

function setLang(newLang) {
  lang = newLang;
  localStorage.setItem('lang', lang);
  location.reload();
}

// Componentleri yükle
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('header')) loadComponent('header', '../component/header.html');
  if (document.getElementById('footer')) loadComponent('footer', '../component/footer.html');
  if (document.getElementById('slider')) loadComponent('slider', '../component/slider.html');
  if (document.getElementById('galeri')) loadComponent('galeri', '../component/galeri.html');
  if (document.getElementById('video')) loadComponent('video', '../component/video.html');
  if (document.getElementById('iletisim')) loadComponent('iletisim', '../component/form.html');
  if (document.getElementById('harita')) loadComponent('harita', '../component/harita.html');

  // i18n ve içerik yükle
  Promise.all([
    loadJSON('../data/i18n.json'),
    loadJSON('../data/kurumsal.json')
  ]).then(([i18nData, kurumsalData]) => {
    i18n = i18nData;
    // Sayfa başlığı örneği
    setPageTitle(i18n[lang]?.page_title || 'KFG Mimarlık');
    // Kurumsal içerik örneği
    if (document.getElementById('kurumsal')) {
      document.getElementById('kurumsal').innerHTML = `<h2>${i18n[lang]?.about_title || 'Kurumsal'}</h2><p>${kurumsalData[lang]?.description || ''}</p>`;
    }
    // Diğer içerikler burada dinamik olarak eklenebilir
  });
});

// Menü dinamik yükleme (örnek)
// ...devamı panel ve diğer içeriklerle genişletilecek...
