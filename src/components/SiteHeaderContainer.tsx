import { getServicesList } from "@/lib/api";
import SiteHeader from "@/components/SiteHeader";

/**
 * Site Header Container (server component)
 *
 * Hizmet listesini REST API üzerinden çeker (build'de API'ye ulaşılamazsa
 * JSON fallback devreye girer) ve client SiteHeader'a prop olarak iletir.
 */
export default async function SiteHeaderContainer() {
  const services = await getServicesList();
  return <SiteHeader services={services} />;
}
