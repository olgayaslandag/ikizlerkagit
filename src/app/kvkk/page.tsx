import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export default function KvkkPage() {
  return (
    <>
      <SiteHeader />
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
                Web sitemizde kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanılmaktadır. Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz.
              </p>

              <h2>7. İletişim</h2>
              <p>
                KVKK ve kişisel verileriniz ile ilgili sorularınız için info@ikizlerkagit.com.tr adresinden bize ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
