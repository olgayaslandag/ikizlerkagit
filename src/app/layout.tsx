import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Preloader from "@/components/Preloader";

const manrope = localFont({
  src: [{ path: "./fonts/manrope.woff2", weight: "200 800", style: "normal" }],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ikizlerkagit.com.tr"),
  title: "İkizler Kağıt | Dönüşüm Burada Başlar",
  description: "İkizler Kağıt geri dönüşüm ve atık yönetimi çözümleri.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "İkizler Kağıt | Dönüşüm Burada Başlar",
    description: "İkizler Kağıt geri dönüşüm ve atık yönetimi çözümleri.",
    url: "https://ikizlerkagit.com.tr",
    siteName: "İkizler Kağıt",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/assets/img/hero/hero01.webp", width: 1600, height: 900, alt: "İkizler Kağıt" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "İkizler Kağıt | Dönüşüm Burada Başlar",
    description: "İkizler Kağıt geri dönüşüm ve atık yönetimi çözümleri.",
    images: ["/assets/img/hero/hero01.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
