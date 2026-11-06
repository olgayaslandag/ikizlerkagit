import { getServicesList } from "@/lib/api";
import Footer from "@/components/Footer";

/**
 * Footer Container (server component)
 *
 * Hizmet listesini REST API üzerinden çeker (build'de API'ye ulaşılamazsa
 * JSON fallback devreye girer) ve Footer'a prop olarak iletir.
 */
export default async function FooterContainer() {
  const services = await getServicesList();
  return <Footer services={services} />;
}
