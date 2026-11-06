import type { Metadata } from "next";

import Link from "next/link";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Hakkımızda — İkizler Kağıt",
  description:
    "1998'den bu yana geri dönüşüm ve atık yönetimi alanında hizmet veren İkizler Kağıt: tarihçemiz, vizyonumuz, misyonumuz, tesisimiz ve sertifikalarımız.",
  alternates: { canonical: "/kurumsal/" },
};

export const revalidate = 3600;

export default function KurumsalPage() {
  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section className="about section-space reveal" id="hakkimizda" style={{ marginTop: "var(--header-height)" }}>
          <div className="container">
            <p className="eyebrow green">HAKKIMIZDA</p>
            <h1>İkizler Kağıt</h1>
            <p className="services-page-lead">
              1998 yılından bu yana geri dönüşüm sektöründe edindiğimiz deneyim ile güçlü altyapımızla
              atıkları ekonomiye kazandırıyor, daha temiz bir çevre için çalışıyoruz.
            </p>
          </div>
        </section>

        <section className="section-space reveal" id="vizyon">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <p className="eyebrow green">VİZYONUMUZ</p>
                <h2>Sürdürülebilir bir gelecek için öncü olmak.</h2>
                <p>
                  Atık yönetiminde en ileri teknolojileri kullanarak, çevreye duyarlı ve ekonomik değer
                  yaratan çözümlerle sektörde örnek firma olmak.
                </p>
              </div>
              <div className="col-lg-6">
                <p className="eyebrow green">MİSYONUMUZ</p>
                <h2>Atıkları değere dönüştürmek.</h2>
                <p>
                  Müşterilerimizin atık yönetimi süreçlerini uçtan uca yöneterek, çevresel etkiyi azaltan
                  ve ekonomiye katkı sağlayan hizmetler sunmak.
                </p>
              </div>
            </div>
            <Link className="outline-link mt-3" href="/kurumsal/surdurulebilirlik/">
              Sürdürülebilirlik <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </section>

        <section className="section-space reveal" id="tesis" style={{ background: "var(--soft)" }}>
          <div className="container">
            <p className="eyebrow green">TESİSİMİZ</p>
            <h2>Modern geri dönüşüm tesisi</h2>
            <p className="services-page-lead">
              Ayrıştırma bantları, presleme hatları ve lisanslı geri kazanım ortaklıklarıyla donatılmış
              tesisimizde atıklar türlerine göre ayrıştırılır, preslenir ve geri kazanıma hazırlanır.
            </p>
          </div>
        </section>

      </main>
      <FooterContainer />
      <ScrollReveal />
    </>
  );
}