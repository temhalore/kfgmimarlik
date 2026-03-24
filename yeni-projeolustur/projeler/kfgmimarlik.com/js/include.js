// Basit HTML include fonksiyonu
export async function htmlInclude(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  const resp = await fetch(url);
  const html = await resp.text();
  el.innerHTML = html;
}
