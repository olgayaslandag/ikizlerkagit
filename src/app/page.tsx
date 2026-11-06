import { getFeaturedServiceSlugs, getNewsList, getServicesList } from "@/lib/api";
import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PaletteSection from "@/components/PaletteSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import ContactFormSection from "@/components/ContactFormSection";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";

// PAGES_REVALIDATE (@/lib/api) ile aynı değer; Next.js segment config'te literal zorunlu.
export const revalidate = 600;

export default async function HomePage() {
  const [news, services, featuredSlugs] = await Promise.all([
    getNewsList(),
    getServicesList(),
    getFeaturedServiceSlugs(),
  ]);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "İkizler Kağıt",
    url: "https://ikizlerkagit.com.tr",
    logo: "https://ikizlerkagit.com.tr/assets/img/ikizler_logo.png",
    telephone: "+902128861090",
    email: "info@ikizlerkagit.com.tr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Esenyurt",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    sameAs: [
      "https://www.facebook.com/ikizlerkagitcomtr",
      "https://www.instagram.com/ikizlerkagit/",
      "https://twitter.com/ikizlerkagit",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "İkizler Kağıt",
    url: "https://ikizlerkagit.com.tr",
    inLanguage: "tr-TR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <SiteHeaderContainer />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection services={services} featuredSlugs={featuredSlugs} />
        <ProcessSection />
        <PaletteSection />
        <NewsSection news={news} />
        <ContactSection />
        <ContactFormSection />
      </main>
      <FooterContainer />
      <ScrollReveal />
    </>
  );
}
