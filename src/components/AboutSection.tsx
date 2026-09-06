import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about section-space" id="kurumsal">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-4 reveal">
            <p className="eyebrow">HAKKIMIZDA</p>
            <h2>
              Tecrübemizle <em>daha temiz</em>
              <br />
              bir gelecek.
            </h2>
            <p>
              İkizler Kağıt, 1998 yılından bu yana geri dönüşüm sektöründe edindiği deneyim ile güçlü
              altyapısıyla, atıkları ekonomiye kazandırıyor, daha temiz bir çevre için çalışıyor.
            </p>
            <a href="#iletisim" className="outline-link">
              Hakkımızda <i className="bi bi-arrow-right" />
            </a>
          </div>
          <div className="col-lg-5">
            <Image
              className="about-image reveal"
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1100&q=85"
              alt="Geri dönüşüm tesisinde üretim hattı"
              width={1100}
              height={733}
            />
          </div>
          <div className="col-lg-3 stats reveal">
            <div className="stats-inner">
              <div>
                <strong>25+</strong>
                <span>Yıllık Deneyim</span>
              </div>
              <div>
                <strong>1000+</strong>
                <span>Kurumsal Müşteri</span>
              </div>
              <div>
                <strong>50.000+</strong>
                <span>Ton / Yıl Geri Kazanılan Atık</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
