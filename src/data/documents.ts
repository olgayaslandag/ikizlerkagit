export interface DocumentItem {
  title: string;
  description?: string;
  date?: string;        // örn. "Geçerlilik: 10.08.2024 – 10.08.2029"
  fileSrc: string;      // belge dosyası (jpg/pdf)
  previewSrc: string;   // kart önizlemesi
  fileType: "image" | "pdf";
}

export const DOCUMENTS: DocumentItem[] = [
  {
    title: "Çevre İzin ve Lisans Belgesi",
    date: "Geçerlilik: 10.08.2024 – 10.08.2029",
    fileSrc: "/assets/belgeler/cevre-izin-ve-lisans-belgesi.jpg",
    previewSrc: "/assets/belgeler/cevre-izin-ve-lisans-belgesi.jpg",
    fileType: "image",
  },
  {
    title: "Çevre Lisans Belgesi Üst Yazı",
    date: "Tarih: 10.08.2024",
    fileSrc: "/assets/belgeler/cevre-lisans-belgesi-ust-yazi.pdf",
    previewSrc: "/assets/belgeler/cevre-lisans-belgesi-ust-yazi-onizleme.jpg",
    fileType: "pdf",
  },
  {
    title: "ISO 15713:2009 Gizli Malzemelerin Güvenli İmhası Sertifikası",
    date: "Geçerlilik: 28.10.2021 – 27.10.2027",
    description:
      "DSR Certification tarafından denetlenen gizli malzemelerin güvenli imhası yönetim sistemimiz, ISO 15713:2009 standardına uygunluğu belgelendirir. Sertifika No: DCMS-24.10.309.",
    fileSrc: "/assets/belgeler/iso-15713.pdf",
    previewSrc: "/assets/belgeler/iso-15713-onizleme.jpg",
    fileType: "pdf",
  },
];
