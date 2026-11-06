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
];
