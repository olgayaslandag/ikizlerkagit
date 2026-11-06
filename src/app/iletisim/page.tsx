import type { Metadata } from "next";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import ContactFormSection from "@/components/ContactFormSection";
import ContactSection from "@/components/ContactSection";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "İkizler Kağıt ile iletişime geçin: telefon, e-posta, adres ve çalışma saatlerimiz, teklif formu ve tesis konumumuz. Atık yönetimi, evrak imha ve palet çözümleri için bize ulaşın.",
  alternates: { canonical: "/iletisim/" },
  openGraph: {
    title: "İletişim",
    description:
      "İkizler Kağıt ile iletişime geçin: telefon, e-posta, adres ve çalışma saatlerimiz, teklif formu ve tesis konumumuz. Atık yönetimi, evrak imha ve palet çözümleri için bize ulaşın.",
    url: "/iletisim/",
    siteName: "İkizler Kağıt",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/assets/img/hero/hero02.webp",
        width: 1600,
        height: 900,
        alt: "İletişim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim",
    description:
      "İkizler Kağıt ile iletişime geçin: telefon, e-posta, adres ve çalışma saatlerimiz, teklif formu ve tesis konumumuz. Atık yönetimi, evrak imha ve palet çözümleri için bize ulaşın.",
    images: ["/assets/img/hero/hero02.webp"],
  },
};

export const revalidate = 3600;

export default function IletisimPage() {
  return (
    <>
      <SiteHeaderContainer />
      <main>
        <section style={{ marginTop: "var(--header-height)" }}>
          <ContactFormSection />
        </section>
        <ContactSection />
      </main>
      <FooterContainer />
      <ScrollReveal />
    </>
  );
}
