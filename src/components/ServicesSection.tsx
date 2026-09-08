import Image from "next/image";

const SERVICES = [
  {
    image:
      "https://images.unsplash.com/photo-1756628920837-8d603a9ddded?auto=format&fit=crop&w=700&q=85",
    alt: "Karton ve ambalaj atıkları",
    title: "Ambalaj Atığı Toplama",
    text: "Kağıt, karton, plastik, metal, cam ve diğer ambalaj atıklarını kaynağında topluyoruz.",
  },
  {
    image: "https://images.unsplash.com/photo-1725677187724-a492e46cd672?auto=format&fit=crop&w=700&q=85",
    alt: "Güvenli evrak ve arşiv imha",
    title: "Güvenli Evrak ve Arşiv İmha",
    text: "Gizli belge ve arşivlerinizi güvenle imha ediyor, doğaya kazandırıyoruz.",
  },
  {
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=700&q=85",
    alt: "Kurumsal atık yönetimi",
    title: "Kurumsal Atık Yönetimi",
    text: "Belediyeler, kamu kurumları ve işletmeler için özel çözümler sunuyoruz.",
  },
  {
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85",
    alt: "Yeşil yaprak",
    title: "Çevre Danışmanlığı",
    text: "Sıfır atık, belgelendirme ve eğitim süreçlerinizde yanınızdayız.",
  },
];

export default function ServicesSection() {
  return (
    <section className="services section-space reveal" id="hizmetler">
      <div className="container">
        <div className="section-heading d-flex justify-content-between align-items-end">
          <div>
             <p className="eyebrow green">HİZMETLERİMİZ</p>
            <h2>
              Değeri olan her atık,
              <br />
              doğru yere ulaşır.
            </h2>
          </div>
          <a className="text-link" href="#iletisim">
            Tüm Hizmetler <i className="bi bi-arrow-right" />
          </a>
        </div>
        <div className="row mt-3 g-3">
          {SERVICES.map((service) => (
            <article className="col-12 col-sm-6 col-lg-3 service-card reveal" key={service.title}>
              <div className="card-inner">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={700}
                  height={700}
                />
                <div className="card-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#iletisim">
                    Detaylı Bilgi <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
