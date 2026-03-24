export function ceviriGetir(anahtar, dil, i18nJson) {
  return i18nJson[dil]?.[anahtar] || anahtar;
}
