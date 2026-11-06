import Link from "next/link";

export default function PaletteSection() {
  return (
    <section className="palette-banner reveal" id="palet">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="reveal">
          <p className="eyebrow">İKİZLER PALET</p>
          <h2>
            Paletin
            <br />
            İkinci Hayatı.
          </h2>
          <p>
            Farklı ölçülerde ikinci el ahşap palet alım
            <br />
            ve satım çözümleri ile lojistik süreçlerinize
            <br />
            değer katıyoruz.
          </p>
          <Link className="button button-outline-light" href="/hizmetler/palet-hizmeti/">
            Palet Ürünlerini İncele <i className="bi bi-arrow-right" />
          </Link>
        </div>
        <div className="banner-note reveal">
          DAHA FAZLA KULLAN
          <br />
          DAHA AZ TÜKET.
          <span />
        </div>
      </div>
    </section>
  );
}
