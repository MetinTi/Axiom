# Axiom — geliştirme geçmişi (günlük notlar)

> Amaç: Her günün sonunda kısa kayıt — ne eklendi / değişti / deploy / görev durumu.  
> Kaynak kural: kök `AGENTS.md` → *Operational cadence*.

---

## 2026-06-19

- **AI & Chatbot Entegrasyonu (Axis/Corvis):** Ana sayfa sağdaki hero görseli kaldırılarak yerine interaktif yapay zeka asistanı yerleştirildi. Asistanın arkasına tüm site içeriğine ve Axiom metodolojisine göre akıllıca yanıt üretebilen gerçek bir AI dil modeli entegre edildi. Chatbot kabarcığı ve girdi alanları Axiom'un koyu-mor ve neon-sarı temasına göre uyarlandı.
- **Çoklu Dil Altyapısı (TR/EN):** Header menüdeki eski "konuşalım" butonu kaldırıldı ve yerine 🇹🇷 TR ve 🇬🇧 EN bayrak ikonları yerleştirildi. Bayrak yanlarındaki TR ve EN metinlerinin okunabilirliği için neon sarı vurgu rengi uygulandı. Sitenin tüm sayfaları İngilizceye çevrilerek `/en/` alt dizininde yayına alındı.
- **Metin Revizyonu**: Sitede yer alan "Kurumsal eğitimleri Newfound Creative Academy çatısı altında sürdürüyorum" ifadesi "Axiom Yapay Zeka & Yetkinlik Platformu" olarak güncellendi.
- **Yasal Metinler & Linkler**: Sitenin altbilgi (footer) alanındaki butonlar temizlenerek yerine iki dilde yasal sözleşme sayfaları entegre edildi:
  - Türkçe: `kullanim-kosullari.html` ve `gizlilik-politikasi.html`
  - İngilizce: `en/terms-of-use.html` ve `en/privacy-policy.html`
- **Kurumsal Blog Makaleleri**: Toplam 6 yeni detaylı makale HTML sayfası yazılarak blog listelerine bağlandı.
- **Yapay Zeka Görsel Üretimi (Blog Assets)**: Üç adet özgün ve yüksek çözünürlüklü fütüristik illüstrasyon üretildi:
  - Sales × AI: `assets/blog_sales_ai.png`
  - Leadership × AI: `assets/blog_leadership_ai.png`
  - Prompt Engineering: `assets/blog_prompt_engineering.png`
  Blog listeleme sayfalarına (`blog.html` ve `en/blog.html`) bu görseller küçük resim (thumbnail) olarak entegre edildi.
- **Makale Alıntı Blokları Düzenleme (Squeeze Fix)**: Makale içindeki alıntı kutularının dikey olarak daralması ve metnin tek tek kelimeler halinde aşağı akması sorunu giderildi. `index.css` dosyasına yeni `.article-quote` sınıfı eklendi ve HTML sayfalarındaki eski `.variable-card` kullanımları bu yeni sınıfla değiştirilerek düzgün wrapping (2-3 satırda yatay akış) sağlandı.
- **Ana Sayfa Buton Yönlendirmeleri**: Ana sayfa hero alanındaki eylem butonlarının hedefleri güncellendi:
  - "Hemen Başla" / "Start Now" -> `programlar.html`
  - "Daha Fazla Bilgi Al" / "Learn More" -> `iletisim.html`
- **Mobil & Desktop Menü ve JavaScript Hata Düzeltmesi**: `app.js` dosyasında chatbot kodunun en altında bulunan sözdizimi (syntax) hatası giderildi. Bu hata JavaScript dosyasının tüm sayfalarda kilitlenmesine neden oluyordu.
- **Önbellek Atlattırma (Cache Busting)**: Tarayıcıların eski JavaScript dosyasını önbellekten yüklemesini önlemek için tüm `.html` dosyalarındaki `app.js` referansı `app.js?v=12` olarak güncellendi.
- **Alt Sayfaların Kurtarılması**: Sürüm güncellemeleri yapılırken yerel olarak içi boşalan 19 adet alt sayfa (programlar, dna, blog, iletişim vb.), Firebase Hosting'in sürüm geçmişindeki bir önceki sağlam yedekten geri çekilerek kurtarıldı.
- **Deploy**: Tüm hata düzeltmeleri ve kurtarma işlemlerinin ardından site test edildi ve `axiom-competence.web.app` adresine son güncel haliyle Firebase Hosting aracılığıyla başarıyla canlıya alındı.
