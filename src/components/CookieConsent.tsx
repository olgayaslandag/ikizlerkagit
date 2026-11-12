"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ikizler_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      if (!value) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const decide = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  return (
    <aside className="cookie-consent" role="dialog" aria-label="Çerez bildirimi">
      <div className="cookie-consent-inner">
        <div className="cookie-consent-content">
          <div className="cookie-consent-icon" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 12.5a8.5 8.5 0 1 1-9-9 3.5 3.5 0 0 0 9 9Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="8.5" cy="13" r="1" fill="currentColor" />
              <circle cx="12" cy="17" r="1" fill="currentColor" />
              <circle cx="14" cy="9" r="1" fill="currentColor" />
            </svg>
          </div>
          <div>
            <strong>Çerezleri kullanıyoruz</strong>
            <p>
              Sitemizin güvenli ve doğru şekilde çalışması için gerekli çerezleri
              kullanıyoruz.{" "}
              <Link href="/gizlilik-politikasi/">Gizlilik Politikası</Link>{" "}
              hakkında bilgi alabilirsiniz.
            </p>
          </div>
        </div>
        <div className="cookie-consent-actions">
          <button
            type="button"
            className="cookie-consent-reject"
            onClick={() => decide("rejected")}
          >
            Reddediyorum
          </button>
          <button
            type="button"
            className="cookie-consent-accept"
            onClick={() => decide("accepted")}
          >
            Onaylıyorum
          </button>
        </div>
      </div>
    </aside>
  );
}