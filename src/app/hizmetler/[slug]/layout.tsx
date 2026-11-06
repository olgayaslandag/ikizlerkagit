import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Service Detay Sayfası Layout
 *
 * SiteHeaderContainer ve FooterContainer ile sarmalanmış detay sayfası layout'u.
 * Root layout (html/body, Preloader, global stiller) bunu sarmalar;
 * burada yalnızca sayfa iskeleti kurulur.
 * ScrollReveal: bölümlerdeki .reveal sınıflarına giriş animasyonu ekler.
 */
export default function ServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeaderContainer />
      <main className="service-detail-page">{children}</main>
      <FooterContainer />
      <ScrollReveal />
    </>
  );
}
