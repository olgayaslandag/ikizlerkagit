const PARTNERS = [
  {
    logo: "https://www.freelogovectors.net/wp-content/uploads/2022/01/ibb_istanbul-buyuksehir-belediyesi-logo-freelogovectors.net_.png",
    alt: "İstanbul Büyükşehir Belediyesi",
  },
  {
    logo: "https://scontent.fteq3-5.fna.fbcdn.net/v/t39.30808-6/486834138_1090326353134632_7059983703995841444_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s960x960&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Oxk41Kw3JRYQ7kNvwFhZ9_X&_nc_oc=Adq3QMzWcFwt5sgPn2MhRTN8FlbP3sYjLe2TMOUH8U_okaqUMxMpvTANDeHQttFsg8I&_nc_zt=23&_nc_ht=scontent.fteq3-5.fna&_nc_gid=xSZtvmKcGCJQw57gPjfo9A&_nc_ss=7b289&oh=00_AQJK8lWjh10Nlh_Pvpt49z1j3ZL4OtsCrb7GlPaaMJs7dw&oe=6AA33993",
    alt: "Esenyurt Belediyesi",
  },
  {
    logo: "https://vectorseek.com/wp-content/uploads/2023/09/Sifir-Atik-Logo-Vector.svg-.png",
    alt: "Sıfır Atık",
  },
  {
    logo: "https://cdn.brandfetch.io/idEHh66CH-/w/283/h/99/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1781608023387",
    alt: "Milli Eğitim Bakanlığı",
  },
  {
    logo: "https://commons.wikimedia.org/wiki/Special:FilePath/%C4%B0stanbul_%C3%9Cniversitesi_Logo.svg",
    alt: "İstanbul Üniversitesi",
  },
];

export default function PartnersSection() {
  return (
    <section className="solutions-partners section-space reveal" id="cozum-ortaklarimiz">
      <div className="container">
        <div className="section-heading">
          <div>
             <p className="eyebrow green">İŞ BİRLİĞİ</p>
            <h2>Çözüm Ortaklarımız</h2>
            <p className="section-subtitle">
              Güvenilir ortaklarımızla birlikte, geri dönüşümde sürdürülebilir değer yaratıyoruz.
            </p>
          </div>
        </div>
        <div className="partners-grid">
          {PARTNERS.map((partner) => (
            <div className="partner-card reveal" key={partner.alt}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="partner-logo" src={partner.logo} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
