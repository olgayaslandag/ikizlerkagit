"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // window.load yerine DOMContentLoaded/readyState kullanılır;
    // ağır kaynakların (görsel vb.) yüklenmesini beklemeden arayüz görünür olur.
    const markLoaded = () => setLoaded(true);

    if (document.readyState === "complete" || document.readyState === "interactive") {
      // DOM parse edildiyse hemen gizle; küçük bir gecikme ile yumuşak geçiş.
      const id = window.setTimeout(markLoaded, 150);
      return () => window.clearTimeout(id);
    }

    const onReady = () => markLoaded();
    document.addEventListener("DOMContentLoaded", onReady);
    return () => document.removeEventListener("DOMContentLoaded", onReady);
  }, []);

  return (
    <>
      <div className={`preloader${loaded ? " preloader--hidden" : ""}`} aria-hidden={loaded}>
        <div className="preloader-inner">
          <Image
            src="/assets/img/ikizler_logo.png"
            alt="İkizler Kağıt"
            width={1062}
            height={293}
            priority
            className="preloader-logo"
          />
        </div>
      </div>
      {/* JS kapalıyken preloader'ı gizle */}
      <noscript>
        <style>{`.preloader{display:none !important;}`}</style>
      </noscript>
    </>
  );
}
