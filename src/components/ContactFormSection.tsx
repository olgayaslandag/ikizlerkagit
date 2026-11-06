/**
 * İletişim formu bölümü — açık zeminli, ayrı blok.
 * CTA bandının (final-cta) hemen altında; kurumsal iletişim bilgileri,
 * form ve harita burada yer alır.
 */
export default function ContactFormSection() {
  return (
    <section className="contact-block section-space" id="iletisim-form">
      <div className="container">
        <p className="eyebrow green">İLETİŞİM</p>
        <h2>Bize Ulaşın</h2>
        <p className="services-page-lead">
          Formu doldurun, ekibimiz en kısa sürede size dönüş yapsın.
        </p>

        <div className="row g-4 mt-2">
          <div className="col-lg-5">
            <div className="contact-info-list">
              <a className="contact-info-card" href="tel:+902128861090">
                <i className="bi bi-telephone" />
                <span>
                  <small>Telefon</small>
                  +90 212 886 10 90
                </span>
              </a>
              <a className="contact-info-card" href="mailto:info@ikizlerkagit.com.tr">
                <i className="bi bi-envelope" />
                <span>
                  <small>E-posta</small>
                  info@ikizlerkagit.com.tr
                </span>
              </a>
              <span className="contact-info-card">
                <i className="bi bi-geo-alt" />
                <span>
                  <small>Adres</small>
                  Esenyurt, İstanbul
                </span>
              </span>
              <span className="contact-info-card">
                <i className="bi bi-clock" />
                <span>
                  <small>Çalışma Saatleri</small>
                  Pzt–Cum 08:00–18:00
                </span>
              </span>
            </div>
          </div>

          <div className="col-lg-7">
            <form
              className="contact-form"
              action="mailto:info@ikizlerkagit.com.tr"
              method="post"
              encType="text/plain"
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="ad"
                    className="form-control"
                    placeholder="Adınız Soyadınız"
                    aria-label="Adınız Soyadınız"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="eposta"
                    className="form-control"
                    placeholder="E-posta Adresiniz"
                    aria-label="E-posta Adresiniz"
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="mesaj"
                    className="form-control"
                    rows={5}
                    placeholder="Mesajınız"
                    aria-label="Mesajınız"
                    required
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="button button-green">
                    Teklif Al <i className="bi bi-arrow-up-right" />
                  </button>
                </div>
              </div>
            </form>

            <div className="contact-map mt-4">
              <iframe
                title="İkizler Kağıt konum"
                src="https://www.google.com/maps?q=Esenyurt,+İstanbul&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}