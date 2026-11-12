import type { Metadata } from "next";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "İkizler Kağıt çerez politikası: sitede kullanılan çerez türleri, amaçları ve çerez tercihlerinizi yönetme yöntemleri.",
  alternates: { canonical: "/cerez-politikasi/" },
  openGraph: {
    title: "Çerez Politikası",
    description:
      "İkizler Kağıt çerez politikası: sitede kullanılan çerez türleri, amaçları ve çerez tercihlerinizi yönetme yöntemleri.",
    url: "/cerez-politikasi/",
    siteName: "İkizler Kağıt",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/assets/img/hero/hero02.webp", width: 1600, height: 900, alt: "Çerez Politikası" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Çerez Politikası",
    description:
      "İkizler Kağıt çerez politikası: sitede kullanılan çerez türleri, amaçları ve çerez tercihlerinizi yönetme yöntemleri.",
    images: ["/assets/img/hero/hero02.webp"],
  },
};

export const revalidate = 3600;

export default function CerezPolitikasiPage() {
  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section className="kvkk-section section-space" id="cerez" style={{ marginTop: "var(--header-height)" }}>
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow green">KURUMSAL</p>
                <h1>Çerez Politikası</h1>
              </div>
            </div>
            <div className="kvkk-content mt-4">
              <p>
                Bu Çerez Politikası, ikizlerkagit.com.tr web sitesinde çerezlerin
                nasıl kullanıldığını, hangi tür çerezlerin kullanıldığını ve
                çerez tercihlerinizi nasıl yönetebileceğinizi açıklamaktadır.
              </p>

              <h2>1. Çerez Nedir?</h2>
              <p>
                Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız
                aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır.
                Çerezler, sitenin doğru çalışması, güvenliğinin sağlanması ve
                kullanıcı deneyiminin iyileştirilmesi için kullanılır.
              </p>

              <h2>2. Kullanılan Çerez Türleri</h2>
              <h3>Zorunlu Çerezler</h3>
              <p>
                Sitenin güvenli ve doğru şekilde çalışması için gereklidir.
                Bu çerezler olmadan site hizmetleri sağlanamaz.
              </p>
              <h3>İşlevsel Çerezler</h3>
              <p>
                Tercihlerinizin (dil, bölge vb.) hatırlanmasını sağlar ve daha
                kişiselleştirilmiş bir deneyim sunar.
              </p>
              <h3>Performans ve Analitik Çerezler</h3>
              <p>
                Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı
                olur; sayfa görüntülenme sayıları ve trafik kaynakları gibi
                istatistikler toplanır. Bu veriler anonim olarak işlenir.
              </p>

              <h2>3. Çerez Tercihlerinizi Yönetme</h2>
              <p>
                Siteye ilk girişinizde gösterilen çerez onay kutusu ile
                tercihinizi belirtebilirsiniz. &quot;Onaylıyorum&quot; seçeneği
                ile çerez kullanımını kabul eder, &quot;Reddediyorum&quot; seçeneği
                ile zorunlu olmayan çerezleri reddedersiniz. Tercihinizi
                tarayıcınızın ayarlarından veya çerezleri temizleyerek de
                değiştirebilirsiniz.
              </p>

              <h2>4. Üçüncü Taraf Çerezler</h2>
              <p>
                Sitemizde kullanılan bazı hizmet sağlayıcılar (analitik
                araçlar vb.) kendi çerezlerini yerleştirebilir. Bu çerezler
                ilgili sağlayıcının kendi politikalarına tabidir.
              </p>

              <h2>5. Politika Güncellemeleri</h2>
              <p>
                Bu Çerez Politikası gerekli görüldüğünde güncellenebilir.
                Güncellemeler bu sayfada yayımlanır.
              </p>

              <h2>6. İletişim</h2>
              <p>
                Çerezler ile ilgili sorularınız için info@ikizlerkagit.com.tr
                adresinden bize ulaşabilirsiniz. Daha fazla bilgi için{" "}
                <a href="/gizlilik-politikasi/">Gizlilik Politikası</a> ve{" "}
                <a href="/kvkk/">KVKK Aydınlatma Metni</a> sayfalarımızı da
                inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterContainer />
    </>
  );
}