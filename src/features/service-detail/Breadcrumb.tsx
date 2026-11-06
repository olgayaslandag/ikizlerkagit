import Link from "next/link";

/**
 * Breadcrumb Bileşeni (server component)
 *
 * / Anasayfa / Hizmetlerimiz / <title> navigasyonu üretir.
 * Başlık prop olarak gelir; "use client" ve usePathname kullanılmaz,
 * böylece statik export uyumu korunur.
 */
interface BreadcrumbProps {
  title: string;
}

export default function Breadcrumb({ title }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Yol izi">
      <div className="container">
        <ol className="breadcrumb-list d-flex flex-wrap align-items-center gap-2 list-unstyled m-0 p-0">
          <li className="breadcrumb-item">
            <Link href="/" className="text-decoration-none text-muted small">
              Anasayfa
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/hizmetler/" className="text-decoration-none text-muted small">
              Hizmetlerimiz
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <span className="fw-semibold small">{title}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
