import type { Service, ServiceContent } from "@/lib/api-types";
import Breadcrumb from "./Breadcrumb";
import ServiceDetailHero from "./ServiceDetailHero";
import ServiceFeatures from "./ServiceFeatures";
import ServiceSteps from "./ServiceSteps";
import ServiceFaq from "./ServiceFaq";
import RelatedServices from "./RelatedServices";
import ServiceCta from "./ServiceCta";

/**
 * Service Detail Component
 *
 * Bir service'ın detay sayfasını tüm bölümleriyle gösterir.
 * API'den gelen zengin içerik (content prop'u) ile service verisini
 * (service + tüm hizmetler) birleştirir.
 * Bölümler editoryal sırayla render edilir; her bölüme .reveal sarıcı ile
 * scroll animasyonu eklenir (ScrollReveal layout'ta yüklenir).
 */
interface ServiceDetailProps {
  service: Service;
  content?: ServiceContent | null;
  allServices: Service[];
}

export default function ServiceDetail({ service, content, allServices }: ServiceDetailProps) {
  return (
    <div className="service-detail-page-content">
      {/* Breadcrumb */}
      <Breadcrumb title={service.title} />

      {/* Hero — görselsiz editoryal başlık + sticky künye */}
      <div className="reveal">
        <ServiceDetailHero service={service} hero={content?.hero} />
      </div>

      {/* Özellikler (avantajlar) */}
      {content?.features && content.features.length > 0 && (
        <div className="reveal">
          <ServiceFeatures features={content.features} />
        </div>
      )}

      {/* Süreç adımları (zaman çizelgesi, #surec anchoru) */}
      {content?.steps && content.steps.length > 0 && (
        <div className="reveal">
          <ServiceSteps steps={content.steps} />
        </div>
      )}

      {/* SSS akordeonu */}
      {content?.faq && content.faq.length > 0 && (
        <div className="reveal">
          <ServiceFaq faq={content.faq} />
        </div>
      )}

      {/* İlişkili hizmetler */}
      {content?.relatedSlugs && content.relatedSlugs.length > 0 && (
        <div className="reveal">
          <RelatedServices relatedSlugs={content.relatedSlugs} services={allServices} />
        </div>
      )}

      {/* Çağrı eylemi (CTA) */}
      <div className="reveal">
        <ServiceCta />
      </div>
    </div>
  );
}
