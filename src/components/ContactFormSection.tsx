"use client";

/**
 * İletişim formu bölümü — açık zeminli, ayrı blok.
 * CTA bandının (final-cta) hemen altında; kurumsal iletişim bilgileri,
 * form ve harita burada yer alır.
 */

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactFormSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [ad, setAd] = useState("");
  const [eposta, setEposta] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [website, setWebsite] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ad, eposta, mesaj, website }),
      });
      if (res.ok) {
        setStatus("success");
        setAd("");
        setEposta("");
        setMesaj("");
        setWebsite("");
      } else {
        setStatus("error");
        let msg = "Bir hata oluştu.";
        try {
          const data = (await res.json()) as { error?: string };
          if (data?.error) msg = data.error;
        } catch {
          // ignore
        }
        setErrorMessage(msg);
      }
    } catch {
      setStatus("error");
      setErrorMessage("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  };

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
                  Selahaddin Eyyubi Mah.3151.Sok.No:7-9 Esenyurt/İstanbul
                </span>
              </span>
              <span className="contact-info-card">
                <i className="bi bi-map" />
                <span>
                  <small>Hizmet Bölgemiz</small>
                  İstanbul ve Tekirdağ
                </span>
              </span>
              <span className="contact-info-card">
                <i className="bi bi-clock" />
                <span>
                  <small>Çalışma Saatleri</small>
                  Pzt–Cmt 08:00–18:00
                </span>
              </span>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="ad"
                    className="form-control"
                    placeholder="Adınız Soyadınız"
                    aria-label="Adınız Soyadınız"
                    required
                    value={ad}
                    onChange={(e) => setAd(e.target.value)}
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
                    value={eposta}
                    onChange={(e) => setEposta(e.target.value)}
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
                    value={mesaj}
                    onChange={(e) => setMesaj(e.target.value)}
                  />
                </div>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
                />
                <div className="col-12">
                  <button
                    type="submit"
                    className="button button-green"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Gönderiliyor…" : (
                      <>
                        Teklif Al <i className="bi bi-arrow-up-right" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {status === "success" && (
              <div aria-live="polite" style={{ color: "green" }} className="mt-2">
                Mesajınız alındı. En kısa sürede dönüş yapacağız.
              </div>
            )}
            {status === "error" && (
              <div role="alert" style={{ color: "red" }} className="mt-2">
                {errorMessage}
              </div>
            )}

            <div className="contact-map mt-4">
              <iframe
                title="İkizler Kağıt konum"
                src="https://www.google.com/maps?q=Selahaddin+Eyyubi+Mah.+3151.+Sok.+No:7-9+Esenyurt/İstanbul&output=embed"
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
