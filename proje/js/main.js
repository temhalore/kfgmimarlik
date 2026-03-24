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

// Sayfa başlığı ve meta taglerini dinamik ayarla
function setPageMeta({ title, description, keywords, ogImage }) {
  document.title = title || '';
  setOrUpdateMeta('description', description || '');
  setOrUpdateMeta('keywords', keywords || '');
  setOrUpdateMeta('og:title', title || '', true);
  setOrUpdateMeta('og:description', description || '', true);
  setOrUpdateMeta('og:image', ogImage || '', true);
}

function setOrUpdateMeta(name, content, isProperty = false) {
  let selector = isProperty ? `meta[property='${name}']` : `meta[name='${name}']`;
  let meta = document.head.querySelector(selector);
  if (!content) return;
  if (!meta) {
    meta = document.createElement('meta');
    if (isProperty) meta.setAttribute('property', name);
    else meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
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
    loadJSON('../data/kurumsal.json'),
    loadJSON('../data/menu.json'),
    loadJSON('../data/slider.json'),
    loadJSON('../data/galeri.json')
  ]).then(([i18nData, kurumsalData, menuData, sliderData, galeriData]) => {
    i18n = i18nData;
    // Sayfa adı tespiti (örnek: anasayfa, kurumsal, hizmetler, projeler, iletisim)
    const path = window.location.pathname;
    let pageKey = 'anasayfa';
    if (path.includes('kurumsal')) pageKey = 'hakkimizda';
    else if (path.includes('hizmetler')) pageKey = 'hizmetler';
    else if (path.includes('projeler')) pageKey = 'projeler';
    else if (path.includes('iletisim')) pageKey = 'iletisim';

    // Meta ve başlıkları ayarla
    setPageMeta({
      title: i18n.sayfaBasliklari?.[lang]?.[pageKey] || 'KFG Mimarlık',
      description: kurumsalData[lang]?.aciklama || '',
      keywords: 'mimarlık, architecture, proje, tasarım, inşaat, KFG',
      ogImage: '../assets/placeholder.jpg'
    });

    // Menü dinamik yükle
    if (document.getElementById('mainNav') && menuData?.[lang]) {
      document.getElementById('mainNav').innerHTML = menuData[lang].map(item => `<a class="nav-link" href="../pages/${item.link}">${item.baslik}</a>`).join('');
    }

    // Slider dinamik yükle
    if (document.getElementById('sliderItems') && sliderData?.[lang]) {
      document.getElementById('sliderItems').innerHTML = sliderData[lang].map((item, i) => `
        <div class="carousel-item${i===0?' active':''}">
          <img src="${item.gorsel}" class="d-block w-100" alt="${item.baslik}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${item.baslik}</h5>
            <p>${item.aciklama}</p>
          </div>
        </div>
      `).join('');
    }

    // Galeri dinamik yükle
    if (document.getElementById('galleryItems') && galeriData?.[lang]) {
      document.getElementById('galleryItems').innerHTML = galeriData[lang].map(item => `
        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <img src="${item.gorsel}" class="card-img-top" alt="${item.baslik}">
            <div class="card-body"><h5 class="card-title">${item.baslik}</h5></div>
          </div>
        </div>
      `).join('');
    }

    // Kurumsal içerik örneği
    if (document.getElementById('kurumsal')) {
      document.getElementById('kurumsal').innerHTML = `<h2>${i18n.sayfaBasliklari?.[lang]?.[pageKey] || 'Kurumsal'}</h2><p>${kurumsalData[lang]?.aciklama || ''}</p>`;
    }
    // Diğer içerikler burada dinamik olarak eklenebilir
  });
});

// Menü dinamik yükleme (örnek)
// ...devamı panel ve diğer içeriklerle genişletilecek...
