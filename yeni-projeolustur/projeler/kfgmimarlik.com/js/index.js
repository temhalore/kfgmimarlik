import { htmlInclude } from './include.js';
import { veriGetir } from './utils.js';

async function sayfaYukle(sayfa = 'ana-sayfa', dil = 'tr') {
  await htmlInclude('#header', 'pages/header.html');
  await htmlInclude('#footer', 'pages/footer.html');
  await htmlInclude('#content', `pages/${sayfa}.html`);
  await menuYerlestir(dil);
  menuyeDinleyiciEkle(dil);
}

async function menuYerlestir(dil = 'tr') {
  const menuJson = await veriGetir('data/menuler.json');
  const i18nJson = await veriGetir('data/i18n.json');
  const nav = document.querySelector('.nav-menu');
  if (!nav) return;
  nav.innerHTML = menuJson.menuler.map(item => `<li><a href="#" data-sayfa="${item.anahtar}">${i18nJson[dil][item.anahtar]}</a></li>`).join('');
}

function menuyeDinleyiciEkle(dil = 'tr') {
  const nav = document.querySelector('.nav-menu');
  if (!nav) return;
  nav.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.dataset.sayfa) {
      e.preventDefault();
      const sayfa = e.target.dataset.sayfa;
      htmlInclude('#content', `pages/${sayfa}.html`);
    }
  });
}

sayfaYukle();
