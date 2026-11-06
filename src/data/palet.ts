/**
 * İkizler Palet — Tanıtım Sayfası İçeriği
 *
 * /palet/ sayfasında kullanılan tüm Türkçe metinler.
 * Tesis tanıtımına odaklanır; palet ölçüsü listesi içermez.
 * Sürdürülebilirlik vurgusu: paletin ikinci hayatı, daha fazla kullan daha az tüket.
 */

export interface PaletHero {
  eyebrow: string;
  title: string;
  lead: string;
  intro: string[];
}

export interface PaletAbout {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface PaletTesisGalleryItem {
  src: string;
  alt: string;
}

export interface PaletTesis {
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  gallery: PaletTesisGalleryItem[];
}

export interface PaletServiceItem {
  title: string;
  text: string;
}

export interface PaletStep {
  number: string;
  title: string;
  text: string;
}

export interface PaletCta {
  eyebrow: string;
  title: string;
  text: string;
  buttonLabel: string;
}

export interface PaletSeo {
  title: string;
  description: string;
  keywords: string;
}

export interface PaletContent {
  hero: PaletHero;
  about: PaletAbout;
  tesis: PaletTesis;
  services: PaletServiceItem[];
  process: PaletStep[];
  cta: PaletCta;
  seo: PaletSeo;
}

export const PALET: PaletContent = {
  hero: {
    eyebrow: "İKİZLER PALET",
    title: "Paletin İkinci Hayatı",
    lead: "İkinci el ahşap paletlerin alım, satım, onarım ve revizyonuyla lojistik süreçlerinize değer katıyoruz.",
    intro: [
      "İkizler Palet, İkizler Kağıt'ın palet tesisidir. 1998'den bu yana geri dönüşüm ve atık yönetimi alanında edindiğimiz deneyimi, ahşap paletin ikinci hayatına taşıyoruz.",
      "Lojistik, depolama ve üretim işletmelerinin ihtiyaç duyduğu ölçü ve kalitede paletleri; onarım, revizyon ve ısıl işlem (ISPM 15) süreçleriyle kullanıma hazır hale getiriyoruz.",
      "Daha fazla kullan, daha az tüket: her onarılan palet, yeni bir paletin üretilmesi için gereken ağacı ve enerjiyi korur.",
    ],
  },
  about: {
    eyebrow: "BİZ KİMİZ",
    title: "İkizler Palet Nedir?",
    paragraphs: [
      "İkizler Palet, İkizler Kağıt'ın palet alım-satım ve yenileme tesisidir. Sektördeki köklü deneyimimizi, ahşap paletin yeniden kullanımı ve onarımı üzerine kuruyoruz.",
      "Biz; lojistik, depolama ve üretim işletmelerinin palet ihtiyacını, ikinci el paletlerle karşılayan bir çözüm ortağıyız. Atık olarak görülen paleti, yeniden kullanılabilir bir varlığa dönüştürüyoruz.",
      "Her işlemimizde kalite, güvenlik ve izlenebilirlik önceliğimizdir; müşterilerimize güvenilir ve sürdürülebilir palet çözümleri sunuyoruz.",
    ],
  },
  tesis: {
    eyebrow: "TESİSİMİZ",
    title: "Palet Tesisi Sahası",
    lead: "Esenyurt/İstanbul'daki sahamızda paletler; alım, ayrıştırma, onarım, revizyon ve ısıl işlem süreçlerinden geçerek kullanıma hazır hale getirilir.",
    paragraphs: [
      "Palet tesisimiz, ikinci el ahşap paletlerin toplanıp değerlendirildiği, onarıldığı ve yeniden kullanıma sunulduğu bir sahadır. Paletler burada tür ve durumlarına göre ayrıştırılır.",
      "Sahamızda onarım ve revizyon işlemleri; paletin taşıma yükünü güvenle kaldırabileceği teknik koşullara uygun şekilde yapılır. Isıl işlem (ISPM 15) gerektiren paletler, yetkili kuruluş aracılığıyla işlenir.",
      "Kapasitemiz ve saha düzenimiz, işletmelerin palet ihtiyacını düzenli ve planlı şekilde karşılamaya imkan verir; kalite kontrol her palet için uygulanır.",
    ],
    image: "/assets/img/palet/palet-tesis-saha.webp",
    imageAlt: "İkizler Palet tesisi — kapalı depo ve açık saha",
    gallery: [
      {
        src: "/assets/img/palet/palet-envanter-istif.webp",
        alt: "Depo içinde damgalı ahşap palet istifleri",
      },
      {
        src: "/assets/img/palet/palet-saha-forklift.webp",
        alt: "Palet tesisi sahasında forklift ile palet taşıma",
      },
      {
        src: "/assets/img/palet/palet-saha-konteyner.webp",
        alt: "İkizler Kağıt etiketli konteyner ve palet sahası",
      },
    ],
  },
  services: [
    {
      title: "Alım",
      text: "Kullanılmış ve ikinci el ahşap paletleri, durumlarına göre değerlendirip sahamıza alıyoruz. Paletin ikinci hayatına burada başlıyoruz.",
    },
    {
      title: "Satım",
      text: "Onarılmış ve kullanıma hazır paletleri, işletmelerin ihtiyaç duyduğu ölçü ve adette tedarik ediyoruz.",
    },
    {
      title: "Onarım",
      text: "Hasarlı paletleri; kırık tahtalar, çiviler ve bağlantı elemanları yenilenerek güvenli taşıma koşullarına getiriyoruz.",
    },
    {
      title: "Revizyon",
      text: "Mevcut paletleri, talep edilen ölçü ve kullanım senaryolarına uygun şekilde yeniden düzenliyoruz.",
    },
    {
      title: "Isıl İşlem",
      text: "İhracat ve özel kullanımlar için gerekli paletlerde ısıl işlem (ISPM 15), yetkili ve belgeli kuruluş aracılığıyla uygulanır.",
    },
  ],
  process: [
    {
      number: "01",
      title: "Palet Envanteri",
      text: "Sahamıza gelen paletler; adet, ölçü ve durumlarına göre envantere alınır. Onarım gereksinimi belirlenir.",
    },
    {
      number: "02",
      title: "Karar (Alım/Satım/Revizyon)",
      text: "Paletin durumuna göre alım, satım veya onarım-revizyon kararı verilir; en verimli kullanım yolu seçilir.",
    },
    {
      number: "03",
      title: "Onarım ve Revizyon",
      text: "Hasarlı paletler onarılır; talep edilen ölçülere dönüştürülür. Palet taşıma yükünü güvenle kaldırır hale gelir.",
    },
    {
      number: "04",
      title: "Isıl İşlem ve Teslim",
      text: "Gerekli paletlere yetkili kuruluşça ısıl işlem uygulanır; kalite kontrol sonrası teslim edilir.",
    },
  ],
  cta: {
    eyebrow: "ÇÖZÜM TALEP ET",
    title: "Palet ihtiyacınızı birlikte planlayalım",
    text: "İşletmenizin palet ihtiyacını, ikinci el ve onarılmış palet çözümlerimizle karşılayalım. Çözüm talebinizi bize iletin.",
    buttonLabel: "Çözüm Talep Et",
  },
  seo: {
    title: "İkizler Palet — İkinci El Ahşap Palet Alım, Satım, Onarım ve Revizyon | İkizler Kağıt",
    description:
      "İkizler Palet; ikinci el ahşap palet alım-satım, onarım, revizyon ve ısıl işlem (ISPM 15) hizmetleriyle lojistik ve depolama işletmelerine sürdürülebilir palet çözümleri sunar.",
    keywords:
      "ikizler palet, ikinci el palet, ahşap palet, palet onarım, palet revizyon, ısıl işlem, ISPM 15, palet alım satım, Esenyurt palet",
  },
};