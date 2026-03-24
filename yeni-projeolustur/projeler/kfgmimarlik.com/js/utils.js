export async function veriGetir(dosyaYolu) {
  const yanit = await fetch(dosyaYolu);
  return await yanit.json();
}
