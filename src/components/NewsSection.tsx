import Image from "next/image";

const NEWS = [
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=85",
    alt: "Çocuklarla çevre eğitimi",
    date: "12 Eylül 2024",
    title: "Sıfır Atık İçin Okullarda Bilgilendirme Çalışmalarımız",
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=85",
    alt: "Geri dönüşüm kamyonu",
    date: "5 Eylül 2024",
    title: "Esenyurt’ta Geri Dönüşüm Farkındalık Etkinliği",
  },
  {
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=85",
    alt: "Depo içi",
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
            <p className="eyebrow">BİZDEN HABERLER</p>
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
