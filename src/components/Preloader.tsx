"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => setLoaded(true);
    if (document.readyState === "complete") {
      setLoaded(true);
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <div className={`preloader${loaded ? " preloader--hidden" : ""}`}>
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
  );
}
