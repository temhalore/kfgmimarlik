# KFG Mimarlık — Google Index ve Harita Yol Haritası

## 1. Google Search Console’a Site Ekleme (Indexleme için)

1. https://search.google.com/search-console adresine Google hesabınızla giriş yapın.
2. “Mülk ekle” veya “Add property” butonuna tıklayın.
3. “Alan adı” (Domain) seçeneğini seçin, `kfgmimarlik.com` yazın, “Devam” deyin.
4. Size bir TXT doğrulama kaydı verecek. Örnek:
   - **Adı (Name/Host):** @ veya kfgmimarlik.com
   - **Değeri (Value):** google-site-verification=KZzKJtMEUWcnzdcPClb-qdqBLAMLDSFL-a7ggGQzGVs
   - **Kayıt Türü:** TXT
5. Natro DNS paneline girin → **TXT kayıtları** bölümünde “Yeni Kayıt (TXT)” seçin.
   - **Adı/Key/Host:** @ veya kfgmimarlik.com (bazı panellerde boş bırakılır, bazılarında @ yazılır)
   - **Değeri/Data:** google-site-verification=KZzKJtMEUWcnzdcPClb-qdqBLAMLDSFL-a7ggGQzGVs
6. Kaydedin. DNS yayılımı için 5-60 dakika bekleyin.
7. Google Search Console’da “Doğrula” butonuna basın.

---

## 2. Google My Business (Google Haritalar) Kaydı

1. https://www.google.com/business/ adresine gidin, Google hesabınızla giriş yapın.
2. “İşletme Profili Oluştur” veya “Profilinizi Yönetin” butonuna tıklayın.
3. Firma adınızı ve adresinizi girin.
4. Kategori olarak “Mimarlık Ofisi” veya uygun bir kategori seçin.
5. Telefon, web sitesi (kfgmimarlik.com), çalışma saatleri gibi bilgileri doldurun.
6. Google, adresinizi doğrulamak için genellikle posta ile bir kod gönderir. O kodu aldıktan sonra panele girip doğrulama işlemini tamamlayın.
7. Profiliniz onaylanınca Google Haritalar’da görünür olursunuz.

---

## 3. SEO için Temel Ayarlar

- index.html dosyanıza `<title>`, `<meta name="description">`, `<meta name="robots" content="index, follow">` ekleyin.
- Sosyal medya ve iletişim bilgilerinizi açıkça belirtin.
- Responsive (mobil uyumlu) olduğundan emin olun.

---

### Şu anki adım: Search Console TXT kaydını Natro DNS’e ekleme
- **Kayıt Türü:** TXT
- **Adı/Key/Host:** @ veya kfgmimarlik.com (veya boş bırakın)
- **Değeri/Data:** google-site-verification=KZzKJtMEUWcnzdcPClb-qdqBLAMLDSFL-a7ggGQzGVs

Kaydı ekledikten sonra bana haber ver, bir sonraki adıma geçelim.