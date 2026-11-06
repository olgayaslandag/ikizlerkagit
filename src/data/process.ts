export interface ProcessStep {
  number: string;
  image: string;
  alt: string;
  title: string;
  text: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    image: "/assets/img/services/ambalaj-toplama.webp",
    alt: "Tesis deposunda kaynağında toplanmış karton ve kağıt ambalaj atık yığını",
    title: "Toplama",
    text: "Atıkları kaynağında toplarız.",
  },
  {
    number: "02",
    image: "/assets/img/services/talep-bazli-toplama.webp",
    alt: "Toplama aracına yüklenen atık kasa ve balyalar",
    title: "Taşıma",
    text: "Güvenli şekilde tesisimize ulaştırırız.",
  },
  {
    number: "03",
    image: "/assets/img/services/ayristirma-presleme.webp",
    alt: "Presleme hattındaki balya makinesi ve preslenmiş atık balyaları",
    title: "Ayrıştırma",
    text: "Modern tesisimizde türlerine göre ayırırız.",
  },
  {
    number: "04",
    image: "/assets/img/process/geri-kazanim.webp",
    alt: "Geri kazanılmış temiz kağıt ruloları ve yuvarlanmış kağıt tüpleri yığını",
    title: "Geri Kazanım",
    text: "Atıkları ekonomiye kazandırırız.",
  },
];
