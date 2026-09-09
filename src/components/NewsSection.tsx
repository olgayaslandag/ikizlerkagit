import Image from "next/image";

const NEWS = [
  {
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=500&q=85",
    alt: "Okulda geri dönüşüm eğitimi",
    date: "12 Eylül 2024",
    title: "Sıfır Atık İçin Okullarda Bilgilendirme Çalışmalarımız",
  },
  {
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=85",
    alt: "Geri dönüşüm farkındalık etkinliği",
    date: "5 Eylül 2024",
    title: "Esenyurt'ta Geri Dönüşüm Farkındalık Etkinliği",
  },
  {
    image: "/assets/img/slider02.png",
    alt: "Tesisimizde yeni ayrıştırma hattı",
    date: "19 Temmuz 2024",
    title: "Tesisimizde Yeni Ayrıştırma Hattı Devrede",
  },
];

export default function NewsSection() {
  return (
    <section className="news section-space reveal" id="haberler">
      <div className="container">
        <div className="section-heading d-flex justify-content-between align-items-end">
          <div>
             <p className="eyebrow green">BİZDEN HABERLER</p>
            <h2>Güncel Gelişmeler</h2>
          </div>
          <a className="text-link" href="#haberler">
            Tüm Haberler <i className="bi bi-arrow-right" />
          </a>
        </div>
        <div className="row g-4 mt-2">
          {NEWS.map((item) => (
            <article className="col-lg-4 news-card reveal" key={item.title}>
              <Image
                src={item.image}
                alt={item.alt}
                width={500}
                height={375}
              />
              <div>
                <small>{item.date}</small>
                <h3>{item.title}</h3>
              </div>
              <a href="#haberler" aria-label="Haberi oku">
                <i className="bi bi-arrow-up-right" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
