import type { Metadata } from "next";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "İkizler Kağıt'in KVKK aydınlatma metni: toplanan kişisel veriler, işleme amaçları, paylaşım koşulları, veri güvenliği önlemleri, haklarınız ve çerez politikası.",
  alternates: {
    canonical: "/kvkk/",
  },
  openGraph: {
    title: "KVKK Aydınlatma Metni",
    description:
      "İkizler Kağıt'in KVKK aydınlatma metni: toplanan kişisel veriler, işleme amaçları, paylaşım koşulları, veri güvenliği önlemleri, haklarınız ve çerez politikası.",
    url: "/kvkk/",
    siteName: "İkizler Kağıt",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/assets/img/hero/hero02.webp",
        width: 1600,
        height: 900,
        alt: "KVKK Aydınlatma Metni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KVKK Aydınlatma Metni",
    description:
      "İkizler Kağıt'in KVKK aydınlatma metni: toplanan kişisel veriler, işleme amaçları, paylaşım koşulları, veri güvenliği önlemleri, haklarınız ve çerez politikası.",
    images: ["/assets/img/hero/hero02.webp"],
  },
};

export const revalidate = 3600;

export default function KvkkPage() {
  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section className="kvkk-section section-space" id="kvkk">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow green">KURUMSAL</p>
                <h1>KVKK Aydınlatma Metni</h1>
              </div>
            </div>
            <div className="kvkk-content mt-4">
              <h2>1. Toplanan Kişisel Veriler</h2>
              <p>
                İkizler Kağıt olarak, hizmetlerimizi sunmak amacıyla ad, soyad, e-posta adresi, telefon numarası ve şirket bilgileri gibi kişisel verilerinizi topluyoruz.
              </p>

              <h2>2. Kişisel Verilerin Kullanım Amacı</h2>
              <p>
                Toplanan kişisel veriler, size hizmet sunmak, taleplerinizi yanıtlamak, sözleşme süreçlerini yürütmek ve yasal yükümlülüklerimizi yerine getirmek amacıyla işlenmektedir.
              </p>

              <h2>3. Kişisel Verilerin Paylaşılması</h2>
              <p>
                Kişisel verileriniz, yasal zorunluluklar ve hizmet sağlayıcılarımız ile gerekli paylaşımlar dışında üçüncü taraflarla paylaşılmamaktadır.
              </p>

              <h2>4. Veri Güvenliği</h2>
              <p>
                Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari önlemler almaktayız. Verileriniz yetkisiz erişim, kayıp veya ifşa riskine karşı korunmaktadır.
              </p>

              <h2>5. KVKK Kapsamında Haklarınız</h2>
              <p>
                KVKK kapsamında verilerinize erişim, düzeltme, silme ve itiraz etme haklarına sahipsiniz. Bu haklarınızı kullanmak için info@ikizlerkagit.com.tr adresine başvurabilirsiniz.
              </p>

              <h2>6. Çerez Politikası</h2>
              <p>
                Web sitemizde kullanıcı deneyimini iyileştirmek amacıyla çerez kullanılmamaktadır; yalnızca temel oturum çerezleri (varsa) tarayıcınızda saklanır. Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz.
              </p>

              <h2>7. İletişim</h2>
              <p>
                KVKK ve kişisel verileriniz ile ilgili sorularınız için info@ikizlerkagit.com.tr adresinden bize ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterContainer />
    </>
  );
}
