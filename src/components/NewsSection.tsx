import Image from "next/image";

const NEWS = [
  {
    image: "https://ikizlerkagit.com.tr/wp-content/uploads/2021/03/IMG-20200214-WA0009-768x576.jpg",
    alt: "Çatalca Belediyesi Bölge Çalışmaları",
    date: "10 Mart 2021",
    title: "Çatalca Belediyesi Bölge Çalışmaları",
    link: "https://ikizlerkagit.com.tr/catalca-belediyesi-bolge-calismalari.html",
  },
  {
    image: "https://ikizlerkagit.com.tr/wp-content/uploads/2020/11/paletlik_15-768x576.jpg",
    alt: "Palet Tesisimiz",
    date: "30 Kasım 2020",
    title: "Palet Tesisimiz",
    link: "https://ikizlerkagit.com.tr/palet-tesisimiz.html",
  },
  {
    image: "https://ikizlerkagit.com.tr/wp-content/uploads/2020/07/catalca_08-768x576.jpg",
    alt: "Çatalca Belediyesi'nde öğrencilere etkinlik",
    date: "8 Temmuz 2020",
    title: "Çatalca Belediyesi'nde İlköğretim ve Ortaöğretim Öğrencilerine Etkinlik Düzenledik",
    link: "https://ikizlerkagit.com.tr/catalca-belediyesinde-ilkogretim-ve-ortaogretim-ogrencilerine-etkinlik-duzenledik.html",
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
          <a className="text-link" href="https://ikizlerkagit.com.tr/kategori/etkinlikler" target="_blank" rel="noopener">
            Tüm Haberler <i className="bi bi-arrow-right" />
          </a>
        </div>
        <div className="row g-4 mt-2">
          {NEWS.map((item) => (
            <article className="col-lg-4 news-card reveal" key={item.link}>
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
              <a href={item.link} target="_blank" rel="noopener" aria-label="Haberi oku">
                <i className="bi bi-arrow-up-right" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
