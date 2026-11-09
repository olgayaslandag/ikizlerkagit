"use client";

import { useEffect, useState, useCallback, useRef } from "react";

interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
}

function collectGroup(group: string): LightboxItem[] {
  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>(`[data-lightbox][data-lightbox-group="${CSS.escape(group)}"]`)
  );
  return nodes.map((node) => {
    const img = node.querySelector("img");
    return {
      src: node.getAttribute("data-lightbox-src") || node.getAttribute("href") || img?.getAttribute("src") || "",
      alt: node.getAttribute("data-lightbox-alt") || img?.getAttribute("alt") || "",
      caption: node.getAttribute("data-lightbox-caption") || undefined,
    };
  }).filter((item) => item.src);
}

export default function Lightbox() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const close = useCallback(() => {
    setOpen(false);
    if (triggerRef.current) triggerRef.current.focus();
  }, []);

  const next = useCallback(() => setIndex((i) => (items.length ? (i + 1) % items.length : i)), [items.length]);
  const prev = useCallback(() => setIndex((i) => (items.length ? (i - 1 + items.length) % items.length : i)), [items.length]);

  useEffect(() => {
    if (!mounted) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest?.("[data-lightbox]") as HTMLElement | null;
      if (!trigger) return;
      e.preventDefault();
      const group = trigger.getAttribute("data-lightbox-group") || "default";
      const collected = collectGroup(group);
      const clickedSrc =
        trigger.getAttribute("data-lightbox-src") ||
        trigger.getAttribute("href") ||
        trigger.querySelector("img")?.getAttribute("src") ||
        "";
      const idx = Math.max(0, collected.findIndex((it) => it.src === clickedSrc));
      triggerRef.current = trigger;
      setItems(collected.length ? collected : [{ src: clickedSrc, alt: trigger.getAttribute("data-lightbox-alt") || "", caption: trigger.getAttribute("data-lightbox-caption") || undefined }]);
      setIndex(idx);
      setOpen(true);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [mounted]);

  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement> | KeyboardEvent) => {

    if (e.key === "Escape") { e.preventDefault(); close(); }
    else if (e.key === "ArrowRight" || e.key === "Right") { e.preventDefault(); next(); }
    else if (e.key === "ArrowLeft" || e.key === "Left") { e.preventDefault(); prev(); }
    else if (e.key === "Tab") {
      const overlay = overlayRef.current;
      if (!overlay) return;
      const focusables = overlay.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }, [close, next, prev]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // document-level listener (fallback)
    const onDocKey = (e: KeyboardEvent) => handleKeyDown(e);
    document.addEventListener("keydown", onDocKey);
    // Move focus to the close button for keyboard accessibility
    setTimeout(() => {
      const closeBtn = overlayRef.current?.querySelector<HTMLButtonElement>(".lightbox-close");
      closeBtn?.focus();
    }, 50);
    return () => {
      document.removeEventListener("keydown", onDocKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, items.length, handleKeyDown]);

  // swipe support
  useEffect(() => {
    if (!open) return;
    let startX = 0;
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) prev(); else next();
      }
    };
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [open, next, prev]);

  // preload neighbors
  useEffect(() => {
    if (!open || items.length < 2) return;
    const prevIdx = (index - 1 + items.length) % items.length;
    const nextIdx = (index + 1) % items.length;
    [items[prevIdx]?.src, items[nextIdx]?.src].forEach((s) => {
      if (s) { const img = new window.Image(); img.src = s; }
    });
  }, [open, index, items]);

  if (!mounted || !open || items.length === 0) return null;

  const current = items[index];

  return (
    <div ref={overlayRef} tabIndex={-1} className="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Fotoğraf görüntüleyici" onClick={close} onKeyDown={handleKeyDown}>
      <button type="button" className="lightbox-close" aria-label="Kapat" ref={closeBtnRef} onClick={(e) => { e.stopPropagation(); close(); }}>
        <i className="bi bi-x-lg" aria-hidden="true" />
      </button>
      {items.length > 1 && (
        <>
          <button type="button" className="lightbox-nav lightbox-nav-prev" aria-label="Önceki fotoğraf" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <i className="bi bi-chevron-left" aria-hidden="true" />
          </button>
          <button type="button" className="lightbox-nav lightbox-nav-next" aria-label="Sonraki fotoğraf" onClick={(e) => { e.stopPropagation(); next(); }}>
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
        </>
      )}
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="lightbox-image" src={current.src} alt={current.alt} />
      </figure>
      <div className="lightbox-meta" onClick={(e) => e.stopPropagation()}>
        {items.length > 1 && <span className="lightbox-counter">{index + 1} / {items.length}</span>}
        {(current.caption || current.alt) && (
          <figcaption className="lightbox-caption">{current.caption || current.alt}</figcaption>
        )}
      </div>
    </div>
  );
}
