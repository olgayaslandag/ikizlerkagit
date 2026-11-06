import type { Metadata } from "next";
import Link from "next/link";

import SiteHeaderContainer from "@/components/SiteHeaderContainer";
import FooterContainer from "@/components/FooterContainer";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa bulunamadı.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeaderContainer />
      <main style={{ marginTop: "var(--header-height)", minHeight: "60vh" }}>
        <section className="section-space">
          <div className="container text-center">
            <p className="eyebrow green">404</p>
            <h1>Sayfa bulunamadı</h1>
            <p className="services-page-lead mx-auto">
              Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
            </p>
            <Link className="button button-green mt-3" href="/">
              Ana Sayfaya Dön <i className="bi bi-arrow-up-right" />
            </Link>
          </div>
        </section>
      </main>
      <FooterContainer />
    </>
  );
}