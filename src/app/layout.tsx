import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Preloader from "@/components/Preloader";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "İkizler Kağıt | Dönüşüm Burada Başlar",
  description: "İkizler Kağıt geri dönüşüm ve atık yönetimi çözümleri.",
  icons: {
    icon: "/assets/img/ikizler_logo.png",
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
