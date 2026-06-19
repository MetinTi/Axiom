# Axiom — Backlog

> **Kural (kesin):** Buradaki hiçbir madde silinmeyecek; hepsi bilgi olarak kalacak. Yapılanlar işaretlenip (ör. ~~üstü çizili~~, `DONE`, tarih) **listede kalmaya devam edecek** — metin budanmayacak.

> Son güncelleme: 2026-06-19 (Günün geliştirme hedefleri, alıntı kutuları dikey hizalama düzeltmesi, ana sayfa hero buton yönlendirmeleri, Firebase deploy tamamlandı)

---

## 1. Faz Geliştirmeleri — Axiom Entegrasyon & İçerik Yapılandırması

| # | Madde | Not |
| --- | --- | --- |
| TF1 | ~~**Corvis AI Chatbot Entegrasyonu**~~ **DONE 2026-06-19** | Ana sayfa sağdaki büyük görsel yerine Corvis AI robotunun entegrasyonu, tüm site içeriğine cevap verecek şekilde ayarlanması. |
| TF2 | ~~**Yapay Zeka Beyin Altyapısı (Gerçek AI)**~~ **DONE 2026-06-19** | Chatbot asistanının arkasına gerçek bir AI modelinin bağlanarak daha akıllı yanıtlar vermesinin sağlanması. |
| TF3 | ~~**Metin Güncellemeleri**~~ **DONE 2026-06-19** | Sitedeki "Kurumsal eğitimleri Newfound Creative Academy çatısı altında sürdürüyorum" metninin "Axiom Yapay Zeka & Yetkinlik Platformu" olarak güncellenmesi. |
| TF4 | ~~**Çoklu Dil Desteği (TR/EN Switcher)**~~ **DONE 2026-06-19** | Header menüdeki "konuşalım" butonunun kaldırılarak yerine TR ve EN bayraklarının (ve etiketlerinin) eklenmesi, sitenin İngilizce sürümünün yapılması. |
| TF5 | ~~**Yasal Sayfalar ve Alt Bilgi (Footer) Güncellemesi**~~ **DONE 2026-06-19** | Sitenin altındaki butonların kaldırılıp yerine "Terms of Use" ve "Privacy Policy" bağlantılarının eklenmesi, iki dilde metinlerin yazılıp sayfalanması. |
| TF6 | ~~**Dil Etiketlerinin Okunabilirlik Ayarı**~~ **DONE 2026-06-19** | Bayrak ikonlarının yanındaki TR ve EN yazılarının renginin neon sarı yapılarak okunabilirliğin artırılması. |
| TF7 | ~~**Kurumsal Blog Makaleleri (2 Dilde)**~~ **DONE 2026-06-19** | Blog sayfasındaki 3 adet makalenin hem Türkçe hem İngilizce olarak yazılması (Toplam 6 sayfa). |
| TF8 | ~~**Makaleler İçin AI Görselleri**~~ **DONE 2026-06-19** | 3 makale konusuyla ilgili (Sales × AI, Leadership × AI, Prompt Engineering) özel görsel üretilmesi ve listeleme sayfalarına küçük resim (thumbnail) olarak bağlanması. |
| TF9 | ~~**Alıntı Kutularındaki Dikey Sıkışma Sorununun Giderilmesi**~~ **DONE 2026-06-19** | Makaleler içindeki alıntı bloklarının dikey olarak daralarak kelime kelime aşağı akmasını önlemek için, `.variable-card` yerine özel `.article-quote` sınıfının CSS'e eklenmesi ve HTML'lerin güncellenmesi. |
| TF10 | ~~**Ana Sayfa Hero Butonlarının Yönlendirilmesi**~~ **DONE 2026-06-19** | "Hemen Başla" butonunun `programlar.html` sayfasına; "Daha Fazla Bilgi Al" butonunun ise `iletisim.html` sayfasına yönlendirilmesi. |
| TF11 | ~~**Canlıya Alma (Firebase Deploy)**~~ **DONE 2026-06-19** | Tüm bu geliştirmelerin `axiom-competence.web.app` adresine Firebase Hosting ile canlıya alınması. |
| TF12 | ~~**JavaScript Hata Düzeltmesi & Sayfa Kurtarma**~~ **DONE 2026-06-19** | `app.js` sözdizimi hatasının giderilmesi, önbellek sorunu için `v=12` versiyonlama yapılması ve alt sayfaların kurtarılması. |


---

## 2. Gelecek Geliştirmeler & Yol Haritası (Backlog Adayları)

| # | Madde | Önem Derecesi | Not |
| --- | --- | --- | --- |
| F2-1 | **Diğer Dillerin Entegrasyonu (DE, ES, FR)** | [P2] | `AGENTS.md` kuralı doğrultusunda Almanca, İspanyolca ve Fransızca dil varyantlarının oluşturulması. |
| F2-2 | **Dynamic L10n JSON Altyapısı** | [P3] | Statik HTML'lerin çoklu dile dönüştürülmesi yerine, Next.js veya next-intl altyapısına geçişin planlanması. |
| F2-3 | **Yapay Zeka Simülasyon Ekranı (Interactive)** | [P2] | DNA sayfasında veya programlarda kullanıcının kendi yetkinliklerini test edebileceği mini bir AI simülatörü. |
