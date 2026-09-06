import Image from "next/image";

const FOOTER_COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Kurumsal",
    links: [
      { href: "#kurumsal", label: "Hakkımızda" },
      { href: "#kurumsal", label: "Vizyon & Misyon" },
      { href: "#kurumsal", label: "Tesisimiz" },
      { href: "#kurumsal", label: "Referanslarımız" },
      { href: "#cozum-ortaklarimiz", label: "Çözüm Ortaklarımız" },
    ],
  },
  {
    title: "Hizmetlerimiz",
    links: [
      { href: "#hizmetler", label: "Ambalaj Atığı" },
      { href: "#hizmetler", label: "Güvenli Evrak İmha" },
      { href: "#hizmetler", label: "Kurumsal Atık Yönetimi" },
      { href: "#hizmetler", label: "Çevre Danışmanlığı" },
    ],
  },
  {
    title: "İkizler Palet",
    links: [
      { href: "#palet", label: "Palet Ürünlerimiz" },
      { href: "#palet", label: "Alım & Satım" },
      { href: "#palet", label: "Palet Ölçüleri" },
    ],
  },
  {
    title: "Sürdürülebilirlik",
    links: [
      { href: "#surec", label: "Sıfır Atık" },
      { href: "#surec", label: "Çevreye Katkımız" },
      { href: "#surec", label: "Sosyal Sorumluluk" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <a className="brand" href="#anasayfa">
              <Image
                src="/assets/img/ikizler_logo.png"
                alt="İkizler Kağıt"
                className="brand-img"
                width={1062}
                height={293}
              />
            </a>
            <p className="footer-brand-text">
              Geri dönüşüm ve atık yönetiminde sürdürülebilir çözümler.
            </p>
            <div className="socials">
              <a href="#iletisim" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
              <a href="#iletisim" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="#iletisim" aria-label="Briefcase">
                <i className="bi bi-briefcase" />
              </a>
            </div>
          </div>
          {FOOTER_COLUMNS.map((column) => (
            <div className="col-6 col-lg" key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
          <div className="col-lg-2">
            <h4>İletişim</h4>
            <a href="tel:+902126725410">
              <i className="bi bi-telephone" /> +90 212 672 54 10
            </a>
            <a href="mailto:info@ikizlerkagit.com.tr">
              <i className="bi bi-envelope" /> info@ikizlerkagit.com.tr
            </a>
            <a href="#iletisim">
              <i className="bi bi-geo-alt" /> Esenyurt, İstanbul
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} İkizler Kağıt. Tüm hakları saklıdır.</span>
          <span>Gizlilik Politikası　|　Kullanım Şartları</span>
        </div>
      </div>
    </footer>
  );
}
