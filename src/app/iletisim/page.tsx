import type { Metadata } from "next";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import ContactFormSection from "@/components/ContactFormSection";
import ContactSection from "@/components/ContactSection";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "İletişim — İkizler Kağıt",
  description:
    "İkizler Kağıt ile iletişime geçin: telefon, e-posta, adres ve çalışma saatlerimiz, teklif formu ve tesis konumumuz. Atık yönetimi, evrak imha ve palet çözümleri için bize ulaşın.",
  alternates: { canonical: "/iletisim/" },
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
