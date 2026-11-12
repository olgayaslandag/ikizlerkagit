import type { Metadata } from "next";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "İkizler Kağıt gizlilik politikası: kişisel verilerin toplanması, işlenmesi, saklanması, paylaşılması ve kullanıcı hakları hakkında bilgilendirme.",
  alternates: { canonical: "/gizlilik-politikasi/" },
  openGraph: {
    title: "Gizlilik Politikası",
    description:
      "İkizler Kağıt gizlilik politikası: kişisel verilerin toplanması, işlenmesi, saklanması, paylaşılması ve kullanıcı hakları hakkında bilgilendirme.",
    url: "/gizlilik-politikasi/",
    siteName: "İkizler Kağıt",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/assets/img/hero/hero02.webp", width: 1600, height: 900, alt: "Gizlilik Politikası" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gizlilik Politikası",
    description:
      "İkizler Kağıt gizlilik politikası: kişisel verilerin toplanması, işlenmesi, saklanması, paylaşılması ve kullanıcı hakları hakkında bilgilendirme.",
    images: ["/assets/img/hero/hero02.webp"],
  },
};

export const revalidate = 3600;

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section className="kvkk-section section-space" id="gizlilik" style={{ marginTop: "var(--header-height)" }}>
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow green">KURUMSAL</p>
                <h1>Gizlilik Politikası</h1>
              </div>
            </div>
            <div className="kvkk-content mt-4">
              <p>
                İkizler Kağıt olarak, web sitemizi ziyaret eden kullanıcıların
                gizliliğine önem veriyoruz. Bu Gizlilik Politikası, sitemiz
                üzerinden toplanan kişisel verilerin hangi amaçlarla işlendiğini,
                nasıl korunduğunu ve haklarınızı açıklamaktadır.
              </p>

              <h2>1. Toplanan Kişisel Veriler</h2>
              <p>
                İletişim formları, e-posta veya telefon aracılığıyla tarafımıza
                ilettiğiniz ad, soyad, e-posta adresi, telefon numarası ve şirket
                bilgileri gibi veriler toplanabilmektedir. Ayrıca site kullanım
                istatistikleri (IP adresi, tarayıcı türü, ziyaret edilen sayfalar)
                anonim olarak kaydedilebilir.
              </p>

              <h2>2. Verilerin İşlenme Amacı</h2>
              <p>
                Toplanan veriler; taleplerinizi yanıtlamak, hizmet sunmak,
                sözleşme süreçlerini yürütmek, yasal yükümlülükleri yerine
                getirmek ve kullanıcı deneyimini iyileştirmek amacıyla
                işlenmektedir.
              </p>

              <h2>3. Verilerin Paylaşılması</h2>
              <p>
                Kişisel verileriniz, yasal zorunluluklar ve hizmet
                sağlayıcılarımız ile gerekli paylaşımlar dışında üçüncü
                taraflarla paylaşılmamaktadır. Verileriniz hiçbir koşulda
                ticari amaçla satılmaz.
              </p>

              <h2>4. Veri Güvenliği</h2>
              <p>
                Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari
                önlemler alınmaktadır. Yetkisiz erişim, kayıp veya ifşa
                risklerine karşı koruma sağlanmaktadır.
              </p>

              <h2>5. Saklama Süresi</h2>
              <p>
                Kişisel veriler, işleme amacının gerektirdiği süre boyunca ve
                yasal saklama süreleri dikkate alınarak muhafaza edilir; süresi
                dolan veriler silinir, yok edilir veya anonim hale getirilir.
              </p>

              <h2>6. Çerezler</h2>
              <p>
                Web sitemizde kullanıcı deneyimini iyileştirmek amacıyla çerezler
                kullanılmaktadır. Çerez türleri ve yönetimi hakkında detaylı
                bilgi için{" "}
                <a href="/cerez-politikasi/">Çerez Politikası</a> sayfamızı
                inceleyebilirsiniz.
              </p>

              <h2>7. Haklarınız</h2>
              <p>
                6698 sayılı KVKK kapsamında verilerinize erişim, düzeltme, silme
                ve itiraz etme haklarına sahipsiniz. Bu haklarınızı kullanmak için
                info@ikizlerkagit.com.tr adresine başvurabilirsiniz.
              </p>

              <h2>8. Politika Değişiklikleri</h2>
              <p>
                Bu Gizlilik Politikası, gerekli görüldüğünde güncellenebilir.
                Güncellemeler bu sayfada yayımlanır ve yürürlüğe girer.
              </p>

              <h2>9. İletişim</h2>
              <p>
                Gizlilik ile ilgili sorularınız için info@ikizlerkagit.com.tr
                adresinden bize ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FooterContainer />
    </>
  );
}