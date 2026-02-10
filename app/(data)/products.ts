export type Category = 
  | 'Gantungan Kunci'
  | 'Merchandise'
  | 'Alat Tulis & Kantor'
  | 'Promosi & Event'
  | 'Jasa Cetak'
  | 'Lainnya';

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  priceSimulated: string;
  basePrice: number;
  features: string[];
  iconName: string;
  image: string;
  variants?: ProductVariant[];
}

export const products: Product[] = [
  {
    "id": "agenda-kulit",
    "name": "Agenda Kulit",
    "category": "Alat Tulis & Kantor",
    "description": "Produk Agenda Kulit 991 berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 35.000",
    "basePrice": 35000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Notebook",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "office-new-009",
        "name": "991",
        "price": 35000
      },
      {
        "id": "office-new-007",
        "name": "994",
        "price": 45000
      },
      {
        "id": "office-new-008",
        "name": "Double Cover",
        "price": 60000
      }
    ]
  },
  {
    "id": "agenda-memo-kayu-tali-ballpoint",
    "name": "Agenda Memo Kayu Tali + Ballpoint",
    "category": "Alat Tulis & Kantor",
    "description": "Produk Agenda Memo Kayu Tali + Ballpoint berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 30.000",
    "basePrice": 30000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Notebook",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "office-new-005",
        "name": "Standard",
        "price": 30000
      },
      {
        "id": "office-new-006",
        "name": "+ Dompet",
        "price": 32500
      }
    ]
  },
  {
    "id": "print-sign-new-010",
    "name": "Akrilik 2mm Warna - Flatbed",
    "category": "Jasa Cetak",
    "description": "Produk Akrilik 2mm Warna - Flatbed berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 300",
    "basePrice": 300,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Image",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "akrilik-sign",
    "name": "Akrilik Sign",
    "category": "Jasa Cetak",
    "description": "Produk Akrilik Sign 15cm Custom berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 36.000",
    "basePrice": 36000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Image",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-sign-new-005",
        "name": "15cm Custom",
        "price": 45000
      },
      {
        "id": "print-sign-new-006",
        "name": "20x9cm Custom",
        "price": 36000
      },
      {
        "id": "print-sign-new-004",
        "name": "30x10cm Custom",
        "price": 60000
      }
    ]
  },
  {
    "id": "print-new-031",
    "name": "Albatros Meteran",
    "category": "Jasa Cetak",
    "description": "Cetak Albatros Meteran berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 75.000",
    "basePrice": 75000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-new-019",
    "name": "Alkasia A3+",
    "category": "Jasa Cetak",
    "description": "Cetak Alkasia A3+ berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 5.000",
    "basePrice": 5000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "office-new-017",
    "name": "Amplop CD",
    "category": "Alat Tulis & Kantor",
    "description": "Produk Amplop CD berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 7.500",
    "basePrice": 7500,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Mail",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "amplop-f4",
    "name": "Amplop F4",
    "category": "Alat Tulis & Kantor",
    "description": "Produk Amplop F4 AP150gsm berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 3.800",
    "basePrice": 3800,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Mail",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "office-new-016",
        "name": "AP150gsm",
        "price": 4200
      },
      {
        "id": "office-new-015",
        "name": "HVS 100gsm",
        "price": 3800
      }
    ]
  },
  {
    "id": "office-new-014",
    "name": "Amplop Putih 23x11cm",
    "category": "Alat Tulis & Kantor",
    "description": "Produk Amplop Putih 23x11cm berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 1.500",
    "basePrice": 1500,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Mail",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "backlite",
    "name": "Backlite",
    "category": "Jasa Cetak",
    "description": "Cetak Backlite Indoor Duratrans berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 75.000",
    "basePrice": 75000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-033",
        "name": "Indoor Duratrans",
        "price": 150000
      },
      {
        "id": "print-new-032",
        "name": "Outdoor",
        "price": 75000
      }
    ]
  },
  {
    "id": "promo-new-002",
    "name": "Bag Tag Akrilik Luggage Tag",
    "category": "Promosi & Event",
    "description": "Produk Bag Tag Akrilik Luggage Tag berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 15.000",
    "basePrice": 15000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "office-new-001",
    "name": "Blocknote A6 - isi 40lembar polos",
    "category": "Alat Tulis & Kantor",
    "description": "Produk Blocknote A6 - isi 40lembar polos berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 6.000",
    "basePrice": 6000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Notebook",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "booklet-a",
    "name": "Booklet A",
    "category": "Alat Tulis & Kantor",
    "description": "Cetak Booklet A4 PORTRAIT - Isi Artpaper 150 Gsm berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 2.250",
    "basePrice": 2250,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Notebook",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-001",
        "name": "4 PORTRAIT - Isi Artpaper 150 Gsm",
        "price": 3500
      },
      {
        "id": "print-new-002",
        "name": "5 - Isi Artpaper 150 Gsm",
        "price": 2250
      }
    ]
  },
  {
    "id": "brosur-a4",
    "name": "Brosur A4",
    "category": "Jasa Cetak",
    "description": "Produk Brosur A4 Artpaper 150 gsm Kilat berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 750.000",
    "basePrice": 750000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-sign-new-026",
        "name": "Artpaper 150 gsm Kilat",
        "price": 875000
      },
      {
        "id": "print-sign-new-025",
        "name": "HVS 80 gsm Kilat",
        "price": 750000
      }
    ]
  },
  {
    "id": "brosur-bifold-a5",
    "name": "Brosur Bifold A5",
    "category": "Jasa Cetak",
    "description": "Produk Brosur Bifold A5 - Artpaper 150 berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Mulai Rp 2.000",
    "basePrice": 2000,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "flyer-brosur-new-007",
        "name": "Artpaper 150",
        "price": 3000
      },
      {
        "id": "flyer-brosur-new-008",
        "name": "HVS 80gsm",
        "price": 2000
      }
    ]
  },
  {
    "id": "brosur-trifold-a4",
    "name": "Brosur Trifold A4",
    "category": "Jasa Cetak",
    "description": "Produk Brosur Trifold A4 - Artpaper 150 berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Mulai Rp 2.000",
    "basePrice": 2000,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "flyer-brosur-new-005",
        "name": "Artpaper 150",
        "price": 3000
      },
      {
        "id": "flyer-brosur-new-006",
        "name": "HVS 80gsm",
        "price": 2000
      }
    ]
  },
  {
    "id": "print-new-047",
    "name": "Canvas Glossy M2",
    "category": "Jasa Cetak",
    "description": "Cetak Canvas Glossy M2 berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 200.000",
    "basePrice": 200000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "cetak-plus-frame",
    "name": "Cetak Plus Frame",
    "category": "Jasa Cetak",
    "description": "Produk Cetak Plus Frame 12R berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Mulai Rp 28.500",
    "basePrice": 28500,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "Image",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "frame-new-002",
        "name": "12R",
        "price": 46000
      },
      {
        "id": "frame-new-003",
        "name": "16R",
        "price": 125000
      },
      {
        "id": "frame-new-004",
        "name": "24R",
        "price": 230000
      },
      {
        "id": "frame-new-001",
        "name": "8R",
        "price": 28500
      }
    ]
  },
  {
    "id": "print-new-021",
    "name": "Constellation ST 280g",
    "category": "Jasa Cetak",
    "description": "Cetak Constellation ST 280g berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 10.000",
    "basePrice": 10000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "flyer-brosur-new-002",
    "name": "Flyer 10x21 cm - Ap150gsm",
    "category": "Jasa Cetak",
    "description": "Produk Flyer 10x21 cm - Ap150gsm berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Rp 850",
    "basePrice": 850,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "flyer-brosur-new-001",
    "name": "Flyer 9x20cm - HVS Kilat",
    "category": "Jasa Cetak",
    "description": "Produk Flyer 9x20cm - HVS Kilat berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Rp 250.000",
    "basePrice": 250000,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "flyer-a5-artpaper",
    "name": "Flyer A5 Artpaper",
    "category": "Jasa Cetak",
    "description": "Produk Flyer A5 Artpaper 150 gsm Kilat berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Mulai Rp 450.000",
    "basePrice": 450000,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "flyer-brosur-new-003",
        "name": "150 gsm Kilat",
        "price": 450000
      },
      {
        "id": "flyer-brosur-new-004",
        "name": "260 gsm Kilat",
        "price": 500000
      }
    ]
  },
  {
    "id": "print-new-045",
    "name": "FOOD PAIL",
    "category": "Lainnya",
    "description": "Cetak FOOD PAIL berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 3.500",
    "basePrice": 3500,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Package",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "frame-poster-akrilik-a",
    "name": "Frame Poster Akrilik A",
    "category": "Jasa Cetak",
    "description": "Cetak Frame Poster Akrilik A2 berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 80.000",
    "basePrice": 80000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Image",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-040",
        "name": "2",
        "price": 300000
      },
      {
        "id": "print-new-039",
        "name": "3",
        "price": 160000
      },
      {
        "id": "print-new-038",
        "name": "4",
        "price": 100000
      },
      {
        "id": "print-new-037",
        "name": "5",
        "price": 80000
      }
    ]
  },
  {
    "id": "print-new-034",
    "name": "Frontlite Jerman",
    "category": "Jasa Cetak",
    "description": "Cetak Frontlite Jerman berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 75.000",
    "basePrice": 75000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "gk-002",
    "name": "Ganci Cermin Custom",
    "category": "Gantungan Kunci",
    "description": "Souvenir unik multifungsi! Bagian depan desain custom, bagian belakang cermin yang praktis dibawa kemana saja. Pilihan tepat untuk souvenir pernikahan atau event kecantikan.",
    "priceSimulated": "Mulai Rp 4.000",
    "basePrice": 4000,
    "features": [
      "Ukuran 44mm & 58mm",
      "Laminasi Doff atau Glossy",
      "Fungsional & Estetik"
    ],
    "iconName": "Gift",
    "image": "https://images.unsplash.com/photo-1632515093554-15c03f193693?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "gk-003",
    "name": "Ganci Ekonomis",
    "category": "Gantungan Kunci",
    "description": "Solusi cerdas untuk kebutuhan promosi massal dengan budget terbatas. Tetap tampil profesional dengan kualitas cetak yang tajam.",
    "priceSimulated": "Mulai Rp 2.500",
    "basePrice": 2500,
    "features": [
      "Harga Sangat Terjangkau",
      "Opsi 1 Muka & 2 Muka",
      "Cocok untuk Giveaway Massal"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "gantungan-kunci",
    "name": "Gantungan Kunci",
    "category": "Gantungan Kunci",
    "description": "Cetak Gantungan Kunci Akrilik 1 Sisi berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 300",
    "basePrice": 300,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Key",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "merch-new-012",
        "name": "Akrilik 1 Sisi",
        "price": 400
      },
      {
        "id": "merch-new-011",
        "name": "Akrilik 2Sisi",
        "price": 400
      },
      {
        "id": "merch-new-008",
        "name": "Akrilik Grafir",
        "price": 300
      },
      {
        "id": "merch-new-001",
        "name": "Pembuka Botol",
        "price": 4500
      }
    ]
  },
  {
    "id": "gelang-tiket-lanyard",
    "name": "Gelang Tiket Lanyard",
    "category": "Promosi & Event",
    "description": "Produk Gelang Tiket Lanyard - Pita Satin berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 5.000",
    "basePrice": 5000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "promo-new-027",
        "name": "Pita Satin",
        "price": 5000
      },
      {
        "id": "promo-new-026",
        "name": "Tissue",
        "price": 7500
      }
    ]
  },
  {
    "id": "promo-002",
    "name": "Goodiebag Custom",
    "category": "Promosi & Event",
    "description": "Tas ramah lingkungan pengganti plastik yang reusable. Branding berjalan yang efektif setiap kali tas ini digunakan berbelanja.",
    "priceSimulated": "Mulai Rp 4.500",
    "basePrice": 4500,
    "features": [
      "Bahan Spunbond/Canvas",
      "Sablon Awet",
      "Kapasitas Besar"
    ],
    "iconName": "ShoppingBag",
    "image": "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "gravo-ply",
    "name": "Gravo Ply",
    "category": "Merchandise",
    "description": "Cetak Gravo Ply Grafir berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 5.000",
    "basePrice": 5000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Gift",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "merch-new-009",
        "name": "Grafir",
        "price": 5000
      },
      {
        "id": "merch-new-010",
        "name": "Print UV",
        "price": 20000
      }
    ]
  },
  {
    "id": "hang-tag",
    "name": "Hang Tag",
    "category": "Promosi & Event",
    "description": "Produk Hang Tag Bulat berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 920",
    "basePrice": 920,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "promo-new-005",
        "name": "Bulat",
        "price": 920
      },
      {
        "id": "promo-new-006",
        "name": "Kotak Laminasi",
        "price": 32000
      }
    ]
  },
  {
    "id": "print-new-022",
    "name": "HVS 100gsm COLOR A3+",
    "category": "Jasa Cetak",
    "description": "Cetak HVS 100gsm COLOR A3+ berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 2.500",
    "basePrice": 2500,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "hvs-color",
    "name": "HVS COLOR",
    "category": "Jasa Cetak",
    "description": "Cetak HVS COLOR A4 berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 1.500",
    "basePrice": 1500,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-026",
        "name": "A4",
        "price": 1500
      },
      {
        "id": "print-new-025",
        "name": "F4",
        "price": 2000
      }
    ]
  },
  {
    "id": "promo-new-003",
    "name": "ID Card Akrilik Yoyo",
    "category": "Promosi & Event",
    "description": "Produk ID Card Akrilik Yoyo berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 20.000",
    "basePrice": 20000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-sign-new-001",
    "name": "Jilid Ring",
    "category": "Jasa Cetak",
    "description": "Produk Jilid Ring berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 7.000",
    "basePrice": 7000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "jilid-ring-a",
    "name": "Jilid Ring A",
    "category": "Alat Tulis & Kantor",
    "description": "Cetak Jilid Ring A3 - Isi Artpaper 150 Gsm berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 7.300",
    "basePrice": 7300,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Notebook",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-007",
        "name": "3 - Isi Artpaper 150 Gsm",
        "price": 12000
      },
      {
        "id": "print-new-008",
        "name": "3 - Isi Artpaper 260 Gsm",
        "price": 12000
      },
      {
        "id": "print-new-005",
        "name": "3 - Isi HVS 80 Gsm BW",
        "price": 8000
      },
      {
        "id": "print-new-004",
        "name": "4 - Isi Artpaper 150 Gsm",
        "price": 9500
      },
      {
        "id": "print-new-003",
        "name": "4 - Isi Artpaper 260 Gsm",
        "price": 9500
      },
      {
        "id": "print-new-006",
        "name": "4 - Isi HVS 80 Gsm BW",
        "price": 7300
      }
    ]
  },
  {
    "id": "textile-new-008",
    "name": "Kain Canvas Polyester",
    "category": "Jasa Cetak",
    "description": "Produk Kain Canvas Polyester berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Rp 65.000",
    "basePrice": 65000,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "Shirt",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "kain-jersey",
    "name": "Kain Jersey",
    "category": "Jasa Cetak",
    "description": "Produk Kain Jersey Brazil berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Mulai Rp 65.000",
    "basePrice": 65000,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "Shirt",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "textile-new-009",
        "name": "Brazil",
        "price": 65000
      },
      {
        "id": "textile-new-007",
        "name": "Milano",
        "price": 65000
      }
    ]
  },
  {
    "id": "textile-new-006",
    "name": "Kain Voal Ultrafine",
    "category": "Jasa Cetak",
    "description": "Produk Kain Voal Ultrafine berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Rp 65.000",
    "basePrice": 65000,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "Shirt",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "kalender-d",
    "name": "Kalender D",
    "category": "Alat Tulis & Kantor",
    "description": "Kalender ukuran besar untuk visibilitas maksimal di dinding rumah atau kantor. Pilihan tepat untuk kampanye atau promosi akhir tahun.",
    "priceSimulated": "Mulai Rp 10.000",
    "basePrice": 10000,
    "features": [
      "Finishing Klep Seng",
      "Kertas Art Paper Glossy",
      "Tersedia Berbagai Ukuran"
    ],
    "iconName": "CalendarDays",
    "image": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "atk-003",
        "name": "inding",
        "price": 10000
      },
      {
        "id": "atk-002",
        "name": "uduk Mini",
        "price": 12000
      }
    ]
  },
  {
    "id": "kalender",
    "name": "Kalender",
    "category": "Promosi & Event",
    "description": "Produk Kalender Dinding 12 hal AP 260 berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 5.000",
    "basePrice": 5000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Calendar",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "promo-new-016",
        "name": "Dinding 12 hal AP 260",
        "price": 65000
      },
      {
        "id": "promo-new-019",
        "name": "Dinding 3 hal AP 260",
        "price": 20000
      },
      {
        "id": "promo-new-018",
        "name": "Dinding 4 Hal AP 260",
        "price": 25000
      },
      {
        "id": "promo-new-021",
        "name": "Dinding 5 Hal AP 260",
        "price": 30000
      },
      {
        "id": "promo-new-017",
        "name": "Dinding 6 Hal AP 260",
        "price": 35000
      },
      {
        "id": "promo-new-022",
        "name": "Dinding A3 Lembaran",
        "price": 5000
      },
      {
        "id": "promo-new-024",
        "name": "Meja A5 - AP260",
        "price": 25000
      },
      {
        "id": "promo-new-023",
        "name": "Meja A6 - AP260",
        "price": 15000
      },
      {
        "id": "promo-new-020",
        "name": "Meja Hardcover A5 - AP260",
        "price": 55000
      }
    ]
  },
  {
    "id": "kalkir-a3",
    "name": "Kalkir A3",
    "category": "Jasa Cetak",
    "description": "Cetak Kalkir A3 BW berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 3.000",
    "basePrice": 3000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-013",
        "name": "BW",
        "price": 3000
      },
      {
        "id": "print-new-010",
        "name": "Warna",
        "price": 5000
      }
    ]
  },
  {
    "id": "print-new-014",
    "name": "Kalkir A4 BW",
    "category": "Jasa Cetak",
    "description": "Cetak Kalkir A4 BW berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 1.000",
    "basePrice": 1000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "promo-004",
    "name": "Kaos Katun Combed 24s",
    "category": "Promosi & Event",
    "description": "Kaos dengan kenyamanan premium, menyerap keringat dan adem. Cocok untuk kaos kelas, gathering kantor, atau merchandise band.",
    "priceSimulated": "Mulai Rp 65.000",
    "basePrice": 65000,
    "features": [
      "Bahan 100% Cotton Combed 24s",
      "Sablon Polos atau Fullcolor",
      "Jahitan Rantai Standar Distro"
    ],
    "iconName": "Shirt",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "kartu-nama",
    "name": "Kartu Nama",
    "category": "Jasa Cetak",
    "description": "Cetak Kartu Nama  Rounded TIK Paper berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 20.000",
    "basePrice": 20000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "CreditCard",
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "card-new-015",
        "name": "Rounded TIK Paper",
        "price": 55000
      },
      {
        "id": "card-new-011",
        "name": "Alkasia",
        "price": 30000
      },
      {
        "id": "card-new-002",
        "name": "AP 310",
        "price": 40000
      },
      {
        "id": "card-new-003",
        "name": "AP 310 Laminasi",
        "price": 50000
      },
      {
        "id": "card-new-008",
        "name": "AP260  Tanpa Laminasi",
        "price": 20000
      },
      {
        "id": "card-new-016",
        "name": "AP260 + Spot UV",
        "price": 100000
      },
      {
        "id": "card-new-001",
        "name": "AP260 Laminasi",
        "price": 25000
      },
      {
        "id": "print-003",
        "name": "Bisnis",
        "price": 25000
      },
      {
        "id": "card-new-005",
        "name": "Concorde Putih",
        "price": 30000
      },
      {
        "id": "card-new-004",
        "name": "Linen",
        "price": 30000
      },
      {
        "id": "card-new-006",
        "name": "Rounded AP 260",
        "price": 55000
      },
      {
        "id": "card-new-013",
        "name": "Rounded AP 310",
        "price": 60000
      },
      {
        "id": "card-new-007",
        "name": "Rounded AP260 Laminasi",
        "price": 70000
      },
      {
        "id": "card-new-014",
        "name": "Rounded AP310 Laminasi",
        "price": 85000
      },
      {
        "id": "card-new-009",
        "name": "Rounded Jasmine",
        "price": 55000
      },
      {
        "id": "card-new-010",
        "name": "TIK Paper",
        "price": 30000
      },
      {
        "id": "card-new-012",
        "name": "Transparant Doff",
        "price": 150000
      }
    ]
  },
  {
    "id": "promo-001",
    "name": "Kipas Tangan Custom",
    "category": "Promosi & Event",
    "description": "Souvenir paling dicari saat acara outdoor! Desain custom pada kipas tangan yang kokoh, membuat tamu Anda tetap sejuk sekaligus mengingat brand Anda.",
    "priceSimulated": "Mulai Rp 5.000",
    "basePrice": 5000,
    "features": [
      "Model Reguler & Kerang",
      "Gagang Plastik Kuat",
      "Cetak 2 Sisi"
    ],
    "iconName": "Fan",
    "image": "https://images.unsplash.com/photo-1623938666427-e85567d54256?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "merch-003",
    "name": "Korek Api Custom",
    "category": "Merchandise",
    "description": "Media promosi efektif yang sering berpindah tangan, memperluas jangkauan brand Anda secara organik. Tersedia eceran maupun grosir.",
    "priceSimulated": "Mulai Rp 5.000",
    "basePrice": 5000,
    "features": [
      "Bisa Satuan",
      "Paket Grosir (50pcs) Lebih Murah",
      "Sticker Vinyl Tahan Air"
    ],
    "iconName": "Flame",
    "image": "https://images.unsplash.com/photo-1595244585141-86561f3640b3?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "promo-new-015",
    "name": "Label Pita 1 inch",
    "category": "Promosi & Event",
    "description": "Produk Label Pita 1 inch berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 90.000",
    "basePrice": 90000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "stiker-new-003",
    "name": "Label Stiker CD DVD",
    "category": "Jasa Cetak",
    "description": "Cetak Label Stiker CD DVD berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 12.500",
    "basePrice": 12500,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-new-018",
    "name": "Linen  A3+",
    "category": "Jasa Cetak",
    "description": "Cetak Linen  A3+ berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 5.000",
    "basePrice": 5000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "lunch-box-ivory-250-uk-l",
    "name": "Lunch Box Ivory 250 Uk L",
    "category": "Lainnya",
    "description": "Cetak Lunch Box Ivory 250 Uk L -Pakai Laminasi Dalam berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 2.215",
    "basePrice": 2215,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Package",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-042",
        "name": "Pakai Laminasi Dalam",
        "price": 2935
      },
      {
        "id": "print-new-041",
        "name": "Tanpa Laminasi",
        "price": 2215
      }
    ]
  },
  {
    "id": "print-new-035",
    "name": "Luster Meteran",
    "category": "Jasa Cetak",
    "description": "Cetak Luster Meteran berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 75.000",
    "basePrice": 75000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "medali-akrilik",
    "name": "Medali Akrilik",
    "category": "Merchandise",
    "description": "Cetak Medali Akrilik berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 20.000",
    "basePrice": 20000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Gift",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "merch-new-006",
        "name": "Standard",
        "price": 20000
      },
      {
        "id": "merch-new-007",
        "name": "Custom Tali",
        "price": 35000
      }
    ]
  },
  {
    "id": "print-sign-new-013",
    "name": "Menu A3 AP260 - Laminating",
    "category": "Jasa Cetak",
    "description": "Produk Menu A3 AP260 - Laminating berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 10.000",
    "basePrice": 10000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-sign-new-012",
    "name": "Menu A4 AP260 - Laminating",
    "category": "Jasa Cetak",
    "description": "Produk Menu A4 AP260 - Laminating berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 5.000",
    "basePrice": 5000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-sign-new-014",
    "name": "Menu A4 HVS 80 - Laminating",
    "category": "Jasa Cetak",
    "description": "Produk Menu A4 HVS 80 - Laminating berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 4.500",
    "basePrice": 4500,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "Flag-024",
    "name": "Mini X banner 25x40cm",
    "category": "Promosi & Event",
    "description": "Cetak Mini X banner 25x40cm berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 35.000",
    "basePrice": 35000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Presentation",
    "image": "banner-new"
  },
  {
    "id": "promo-new-004",
    "name": "Mouse Pad Full Print",
    "category": "Merchandise",
    "description": "Produk Mouse Pad Full Print berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 30.000",
    "basePrice": 30000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Gift",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "merch-new-003",
    "name": "Mug Bunglon",
    "category": "Merchandise",
    "description": "Cetak Mug Bunglon berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 45.000",
    "basePrice": 45000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Coffee",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "merch-001",
    "name": "Mug Custom Sublim",
    "category": "Merchandise",
    "description": "Nikmati kopi pagi dengan mug personal atau berikan hadiah yang tak terlupakan. Cetakan sublimasi menyatu dengan keramik, tahan lama dan aman dicuci.",
    "priceSimulated": "Rp 25.000",
    "basePrice": 25000,
    "features": [
      "Hasil Cetak Full Color Tajam",
      "Material Keramik SNI",
      "Tersedia Box Mug Eksklusif"
    ],
    "iconName": "Coffee",
    "image": "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "merch-new-002",
    "name": "Mug Putih Sublim",
    "category": "Merchandise",
    "description": "Cetak Mug Putih Sublim berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 17.500",
    "basePrice": 17500,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Coffee",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "promo-new-013",
    "name": "Name Tag Gravoply Resin",
    "category": "Promosi & Event",
    "description": "Produk Name Tag Gravoply Resin berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 20.000",
    "basePrice": 20000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-new-020",
    "name": "Nettuno Blanco Artico 280G",
    "category": "Jasa Cetak",
    "description": "Cetak Nettuno Blanco Artico 280G berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 10.000",
    "basePrice": 10000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "nota-ncr-a",
    "name": "Nota NCR A",
    "category": "Alat Tulis & Kantor",
    "description": "Produk Nota NCR A4 2Ply Cetak BW berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 7.900",
    "basePrice": 7900,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Notebook",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "office-new-020",
        "name": "4 2Ply Cetak BW",
        "price": 350000
      },
      {
        "id": "office-new-022",
        "name": "4 2Ply Cetak BW + nomerator",
        "price": 420000
      },
      {
        "id": "office-new-021",
        "name": "4 3Ply Cetak BW",
        "price": 400000
      },
      {
        "id": "office-new-023",
        "name": "4 3Ply Cetak BW+nomerator",
        "price": 450000
      },
      {
        "id": "office-new-025",
        "name": "4 3Ply Cetak Warna",
        "price": 600000
      },
      {
        "id": "office-new-024",
        "name": "4 3Ply Cetak Warna+nomerator",
        "price": 675000
      },
      {
        "id": "office-new-019",
        "name": "5 2Ply Cetak BW",
        "price": 19500
      },
      {
        "id": "office-new-018",
        "name": "6 2Ply Cetak 1 warna",
        "price": 7900
      }
    ]
  },
  {
    "id": "notebook",
    "name": "Notebook",
    "category": "Alat Tulis & Kantor",
    "description": "Produk Notebook Hardcover Bergaris - isi 100lembar berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 37.500",
    "basePrice": 37500,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Notebook",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "office-new-003",
        "name": "Hardcover Bergaris - isi 100lembar",
        "price": 55000
      },
      {
        "id": "office-new-002",
        "name": "Hardcover Polos - isi 100 lembar",
        "price": 43500
      },
      {
        "id": "office-new-004",
        "name": "Softcover Polos - isi 100 lembar",
        "price": 37500
      }
    ]
  },
  {
    "id": "atk-001",
    "name": "Notes A5 Custom",
    "category": "Alat Tulis & Kantor",
    "description": "Buku catatan profesional untuk seminar atau kebutuhan kantor. Desain cover custom mencerminkan identitas perusahaan Anda.",
    "priceSimulated": "Mulai Rp 15.000",
    "basePrice": 15000,
    "features": [
      "Isi 50 Lembar HVS",
      "Jilid Spiral Kawat / Lem",
      "Cover Art Carton Laminasi"
    ],
    "iconName": "Notebook",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "promo-new-014",
    "name": "Papan Nama Akrilik",
    "category": "Promosi & Event",
    "description": "Produk Papan Nama Akrilik berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 15.000",
    "basePrice": 15000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "paperbelt-ap150",
    "name": "Paperbelt Ap150",
    "category": "Jasa Cetak",
    "description": "Produk Paperbelt Ap150 - 30x4cm berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Mulai Rp 600",
    "basePrice": 600,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "flyer-brosur-new-009",
        "name": "30x4cm",
        "price": 600
      },
      {
        "id": "flyer-brosur-new-010",
        "name": "43x7cm",
        "price": 1250
      }
    ]
  },
  {
    "id": "merch-new-015",
    "name": "Payung Lipat Custom",
    "category": "Merchandise",
    "description": "Cetak Payung Lipat Custom berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 100.000",
    "basePrice": 100000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Gift",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "merch-new-016",
    "name": "Photo Akrilik 4R",
    "category": "Merchandise",
    "description": "Cetak Photo Akrilik 4R berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 65.000",
    "basePrice": 65000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Gift",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "merch-new-013",
    "name": "Pin Peniti Akrilik 2mm",
    "category": "Merchandise",
    "description": "Cetak Pin Peniti Akrilik 2mm berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 300",
    "basePrice": 300,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Gift",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "polyplex",
    "name": "POLYPLEX",
    "category": "Jasa Cetak",
    "description": "Cetak POLYPLEX 115 gsm berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 10.000",
    "basePrice": 10000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-024",
        "name": "115 gsm",
        "price": 10000
      },
      {
        "id": "print-new-023",
        "name": "275 gsm",
        "price": 15000
      }
    ]
  },
  {
    "id": "poster-a3-plus-art",
    "name": "Poster A3 plus Art",
    "category": "Jasa Cetak",
    "description": "Produk Poster A3 plus Art Carton 260 gsm berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 5.000",
    "basePrice": 5000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Image",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-sign-new-022",
        "name": "Carton 260 gsm",
        "price": 5000
      },
      {
        "id": "print-sign-new-021",
        "name": "Paper 150 gsm",
        "price": 5000
      }
    ]
  },
  {
    "id": "poster-albatros-a",
    "name": "Poster Albatros A",
    "category": "Jasa Cetak",
    "description": "Produk Poster Albatros A0 berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 40.000",
    "basePrice": 40000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Image",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-sign-new-019",
        "name": "0",
        "price": 75000
      },
      {
        "id": "print-sign-new-017",
        "name": "1",
        "price": 60000
      },
      {
        "id": "print-sign-new-015",
        "name": "2",
        "price": 40000
      }
    ]
  },
  {
    "id": "poster-luster-a",
    "name": "Poster Luster A",
    "category": "Jasa Cetak",
    "description": "Produk Poster Luster A0 berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 40.000",
    "basePrice": 40000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Image",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-sign-new-020",
        "name": "0",
        "price": 75000
      },
      {
        "id": "print-sign-new-018",
        "name": "1",
        "price": 60000
      },
      {
        "id": "print-sign-new-016",
        "name": "2",
        "price": 40000
      }
    ]
  },
  {
    "id": "print-akrilik-bening",
    "name": "Print Akrilik Bening",
    "category": "Jasa Cetak",
    "description": "Cetak Print Akrilik Bening 10 mm A3 berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 90.000",
    "basePrice": 90000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-055",
        "name": "10 mm A3",
        "price": 300000
      },
      {
        "id": "print-new-051",
        "name": "10 mm A4",
        "price": 200000
      },
      {
        "id": "print-new-052",
        "name": "2 mm A3",
        "price": 150000
      },
      {
        "id": "print-new-048",
        "name": "2 mm A4",
        "price": 90000
      },
      {
        "id": "print-new-056",
        "name": "3 mm A2",
        "price": 350000
      },
      {
        "id": "print-new-053",
        "name": "3 mm A3",
        "price": 170000
      },
      {
        "id": "print-new-049",
        "name": "3 mm A4",
        "price": 100000
      },
      {
        "id": "print-new-054",
        "name": "5 mm A3",
        "price": 200000
      },
      {
        "id": "print-new-050",
        "name": "5 mm A4",
        "price": 150000
      }
    ]
  },
  {
    "id": "promo-new-008",
    "name": "Print Custom USB CARD - Flashdisk 16 gb",
    "category": "Merchandise",
    "description": "Produk Print Custom USB CARD - Flashdisk 16 gb berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 75.000",
    "basePrice": 75000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Gift",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-kalkir-a",
    "name": "Print Kalkir A",
    "category": "Jasa Cetak",
    "description": "Cetak Print Kalkir A0  Hitam Putih berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 10.000",
    "basePrice": 10000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-012",
        "name": "0  Hitam Putih",
        "price": 20000
      },
      {
        "id": "print-new-015",
        "name": "0 Warna",
        "price": 65000
      },
      {
        "id": "print-new-011",
        "name": "1  Hitam Putih",
        "price": 15000
      },
      {
        "id": "print-new-016",
        "name": "1 Warna",
        "price": 45000
      },
      {
        "id": "print-new-009",
        "name": "2 Hitam Putih",
        "price": 10000
      },
      {
        "id": "print-new-017",
        "name": "2 Warna",
        "price": 25000
      }
    ]
  },
  {
    "id": "merch-new-017",
    "name": "Print Kaos DTF A4 -A5 LENGAN PANJANG",
    "category": "Promosi & Event",
    "description": "Cetak Print Kaos DTF A4 -A5 LENGAN PANJANG berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 85.000",
    "basePrice": 85000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Shirt",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-uv-akrilik",
    "name": "Print UV Akrilik",
    "category": "Jasa Cetak",
    "description": "Produk Print UV Akrilik 10mm Transparan berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 300",
    "basePrice": 300,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Image",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-sign-new-007",
        "name": "10mm Transparan",
        "price": 900
      },
      {
        "id": "print-sign-new-008",
        "name": "10mm Warna",
        "price": 1000
      },
      {
        "id": "print-sign-new-009",
        "name": "2mm Bening",
        "price": 300
      },
      {
        "id": "print-sign-new-003",
        "name": "3mm Transparant",
        "price": 400
      },
      {
        "id": "print-sign-new-002",
        "name": "3mm Warna",
        "price": 500
      }
    ]
  },
  {
    "id": "office-new-011",
    "name": "Pulpen Boss Tali",
    "category": "Alat Tulis & Kantor",
    "description": "Produk Pulpen Boss Tali berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 7.000",
    "basePrice": 7000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "pulpen-ca",
    "name": "Pulpen Ca",
    "category": "Alat Tulis & Kantor",
    "description": "Produk Pulpen Cabe berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 5.000",
    "basePrice": 5000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "office-new-010",
        "name": "be",
        "price": 5500
      },
      {
        "id": "office-new-013",
        "name": "rinex Kotak",
        "price": 5000
      }
    ]
  },
  {
    "id": "office-new-012",
    "name": "Pulpen Gepeng Print",
    "category": "Alat Tulis & Kantor",
    "description": "Produk Pulpen Gepeng Print berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 6.000",
    "basePrice": 6000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-sign-new-011",
    "name": "Puzzle Akrilik 20x14cm",
    "category": "Jasa Cetak",
    "description": "Produk Puzzle Akrilik 20x14cm berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 110.000",
    "basePrice": 110000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Image",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "roll-banner",
    "name": "Roll Banner",
    "category": "Promosi & Event",
    "description": "Cetak Roll Banner Albatros 60x160 berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 250.000",
    "basePrice": 250000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Presentation",
    "image": "banner-new",
    "variants": [
      {
        "id": "Flag-008",
        "name": "Albatros 60x160",
        "price": 250000
      },
      {
        "id": "Flag-009",
        "name": "ALBATROS 80x200",
        "price": 300000
      },
      {
        "id": "Flag-011",
        "name": "Albatros Laminasi Dop 60x160",
        "price": 300000
      },
      {
        "id": "Flag-013",
        "name": "ALBATROS Laminasi Dop 85x200",
        "price": 350000
      },
      {
        "id": "Flag-010",
        "name": "Albatros Laminasi Glossy 60x160",
        "price": 300000
      },
      {
        "id": "Flag-012",
        "name": "ALBATROS Laminasi Glossy 80x200",
        "price": 350000
      },
      {
        "id": "Flag-006",
        "name": "Jerman 60x160",
        "price": 250000
      },
      {
        "id": "Flag-007",
        "name": "Jerman 80x200",
        "price": 300000
      },
      {
        "id": "Flag-004",
        "name": "Luster 60x160",
        "price": 250000
      },
      {
        "id": "Flag-005",
        "name": "Luster 80x200",
        "price": 300000
      }
    ]
  },
  {
    "id": "sablon-dtf-a",
    "name": "Sablon DTF A",
    "category": "Jasa Cetak",
    "description": "Produk Sablon DTF A3 berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Mulai Rp 15.000",
    "basePrice": 15000,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "Shirt",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "textile-new-001",
        "name": "3",
        "price": 35000
      },
      {
        "id": "textile-new-002",
        "name": "4",
        "price": 25000
      },
      {
        "id": "textile-new-003",
        "name": "5",
        "price": 15000
      }
    ]
  },
  {
    "id": "merch-new-019",
    "name": "Sablon Topi Trucker",
    "category": "Promosi & Event",
    "description": "Cetak Sablon Topi Trucker berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 35.000",
    "basePrice": 35000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Shirt",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "snackbox-1",
    "name": "Snackbox 1",
    "category": "Lainnya",
    "description": "Cetak Snackbox 17x17x6.5 Duplex 250 berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 2.980",
    "basePrice": 2980,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Package",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-044",
        "name": "7x17x6.5 Duplex 250",
        "price": 2980
      },
      {
        "id": "print-new-043",
        "name": "8x18x7 Duplex 250",
        "price": 3000
      }
    ]
  },
  {
    "id": "gk-001",
    "name": "Souvenir Ganci Premium",
    "category": "Gantungan Kunci",
    "description": "Abadikan momen spesial atau logo brand Anda dalam gantungan kunci berkualitas tinggi. Tersedia dalam berbagai pilihan warna cerah yang menarik perhatian.",
    "priceSimulated": "Mulai Rp 3.500",
    "basePrice": 3500,
    "features": [
      "Tersedia 1 Muka & 2 Muka",
      "Pilihan Warna Beragam",
      "Ring Kuat & Tahan Karat"
    ],
    "iconName": "Key",
    "image": "https://images.unsplash.com/photo-1589365278144-96e387c53393?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "spanduk",
    "name": "Spanduk /",
    "category": "Promosi & Event",
    "description": "Cetak Spanduk /  Banner Flexi China 280 gsm Glossy berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 20.000",
    "basePrice": 20000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Presentation",
    "image": "banner-new",
    "variants": [
      {
        "id": "Flag-001",
        "name": "Banner Flexi China 280 gsm Glossy",
        "price": 20000
      },
      {
        "id": "Flag-002",
        "name": "Banner Flexi Korea 440 gsm Doff",
        "price": 30000
      }
    ]
  },
  {
    "id": "Flag-003",
    "name": "Spanduk Banner Umbul-umbul Kain",
    "category": "Promosi & Event",
    "description": "Cetak Spanduk Banner Umbul-umbul Kain berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 45.000",
    "basePrice": 45000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Presentation",
    "image": "banner-new"
  },
  {
    "id": "merch-new-018",
    "name": "Standee Figure Akrilik 8x12cm",
    "category": "Merchandise",
    "description": "Cetak Standee Figure Akrilik 8x12cm berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 45.000",
    "basePrice": 45000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Gift",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "sticker-hologram-cutting",
    "name": "Sticker HOLOGRAM + Cutting",
    "category": "Jasa Cetak",
    "description": "Produk Sticker HOLOGRAM + Cutting berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 150.000",
    "basePrice": 150000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Stamp",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-sign-new-023",
        "name": "Standard",
        "price": 150000
      },
      {
        "id": "print-sign-new-024",
        "name": "+ Laminasi",
        "price": 200000
      }
    ]
  },
  {
    "id": "print-new-046",
    "name": "Sticker Vinyl Glossy",
    "category": "Jasa Cetak",
    "description": "Cetak Sticker Vinyl Glossy berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 75.000",
    "basePrice": 75000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "stiker-new-020",
    "name": "Stiker 2 Sisi - Bulak Balik",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker 2 Sisi - Bulak Balik berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 45.000",
    "basePrice": 45000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "stiker-cromo-a3",
    "name": "STIKER CROMO A3+",
    "category": "Jasa Cetak",
    "description": "Cetak STIKER CROMO A3+ berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 7.500",
    "basePrice": 7500,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "stiker-new-022",
        "name": "Standard",
        "price": 7500
      },
      {
        "id": "stiker-new-027",
        "name": "CUTTING",
        "price": 17500
      },
      {
        "id": "stiker-new-030",
        "name": "LAMINASI",
        "price": 13500
      },
      {
        "id": "stiker-new-026",
        "name": "LAMINASI CUTTING",
        "price": 23500
      }
    ]
  },
  {
    "id": "print-002",
    "name": "Stiker Custom",
    "category": "Jasa Cetak",
    "description": "Label kemasan produk yang menaikkan nilai jual. Kami berikan layanan desain dan cutting gratis, siap tempel tanpa repot.",
    "priceSimulated": "Mulai Rp 150/pcs",
    "basePrice": 150,
    "features": [
      "Bahan Chromo/Vinyl/Transparan",
      "Free Design & Cutting (Kiss Cut)",
      "Tahan Air (Vinyl)"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "stiker-diecut",
    "name": "Stiker Diecut",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker Diecut Chromo berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 17.500",
    "basePrice": 17500,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "stiker-new-049",
        "name": "Chromo",
        "price": 17500
      },
      {
        "id": "stiker-new-050",
        "name": "Vinyl Laminasi Doff",
        "price": 31000
      },
      {
        "id": "stiker-new-048",
        "name": "Vinyl Laminasi GLossy",
        "price": 31000
      }
    ]
  },
  {
    "id": "stiker-new-047",
    "name": "Stiker DTF Label UV",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker DTF Label UV berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 75.000",
    "basePrice": 75000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "stiker-hologram",
    "name": "Stiker Hologram",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker Hologram  A3 UV berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 16.000",
    "basePrice": 16000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "stiker-new-001",
        "name": "A3 UV",
        "price": 21000
      },
      {
        "id": "stiker-new-051",
        "name": "A3+",
        "price": 16000
      }
    ]
  },
  {
    "id": "stiker-new-025",
    "name": "Stiker KACA/Mirror METERAN",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker KACA/Mirror METERAN berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 150.000",
    "basePrice": 150000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "stiker-label-cromo",
    "name": "Stiker Label Cromo",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker Label Cromo 3X3cm berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 250",
    "basePrice": 250,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "stiker-new-056",
        "name": "3X3cm",
        "price": 250
      },
      {
        "id": "stiker-new-055",
        "name": "4x4cm",
        "price": 400
      },
      {
        "id": "stiker-new-053",
        "name": "5X5cm",
        "price": 500
      },
      {
        "id": "stiker-new-054",
        "name": "6x6cm",
        "price": 750
      },
      {
        "id": "stiker-new-052",
        "name": "7x7cm",
        "price": 900
      }
    ]
  },
  {
    "id": "stiker-meteran",
    "name": "Stiker Meteran",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker Meteran Duratac Glossy berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 75.000",
    "basePrice": 75000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "stiker-new-009",
        "name": "Duratac Glossy",
        "price": 75000
      },
      {
        "id": "stiker-new-012",
        "name": "Duratac Glossy + Cutting",
        "price": 155000
      },
      {
        "id": "stiker-new-011",
        "name": "Duratac Glossy + Laminasi",
        "price": 125000
      },
      {
        "id": "stiker-new-013",
        "name": "Duratac Glossy + Laminasi + Cutting",
        "price": 125000
      },
      {
        "id": "stiker-new-006",
        "name": "Hologram",
        "price": 150000
      },
      {
        "id": "stiker-new-008",
        "name": "Hologram  T.PUTIH +WARNA",
        "price": 200000
      },
      {
        "id": "stiker-new-010",
        "name": "Vinyl UV + Cutting",
        "price": 105000
      },
      {
        "id": "stiker-new-015",
        "name": "Vinyl UV + Laminasi",
        "price": 125000
      },
      {
        "id": "stiker-new-016",
        "name": "Vinyl UV + Laminasi + Cutting",
        "price": 125000
      }
    ]
  },
  {
    "id": "stiker-new-021",
    "name": "Stiker Mirror A3",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker Mirror A3 berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 30.000",
    "basePrice": 30000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "stiker-new-004",
    "name": "Stiker Oneway Vision",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker Oneway Vision berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 100.000",
    "basePrice": 100000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "stiker-re",
    "name": "Stiker Re",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker Reflektive Print UV A2 berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 60.000",
    "basePrice": 60000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "stiker-new-017",
        "name": "flektive Print UV A2",
        "price": 120000
      },
      {
        "id": "stiker-new-007",
        "name": "flektive Print UV A3",
        "price": 60000
      },
      {
        "id": "stiker-new-044",
        "name": "sin Timbul",
        "price": 300000
      }
    ]
  },
  {
    "id": "stiker-sheet",
    "name": "Stiker Sheet",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker Sheet  Vinyl A5 Kisscut berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 3.500",
    "basePrice": 3500,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "stiker-new-046",
        "name": "Vinyl A5 Kisscut",
        "price": 8750
      },
      {
        "id": "stiker-new-045",
        "name": "Vinyl A6 Kisscut",
        "price": 4400
      },
      {
        "id": "stiker-new-042",
        "name": "Cromo Kisscut A5",
        "price": 7000
      },
      {
        "id": "stiker-new-043",
        "name": "Cromo Kisscut A6",
        "price": 3500
      }
    ]
  },
  {
    "id": "stiker-silver-a3",
    "name": "STIKER SILVER A3+",
    "category": "Jasa Cetak",
    "description": "Cetak STIKER SILVER A3+ CUTTING berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 21.000",
    "basePrice": 21000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "stiker-new-028",
        "name": "CUTTING",
        "price": 25000
      },
      {
        "id": "stiker-new-029",
        "name": "LAMINASI",
        "price": 21000
      },
      {
        "id": "stiker-new-023",
        "name": "LAMINASI CUTTING",
        "price": 31000
      }
    ]
  },
  {
    "id": "stiker-transparan",
    "name": "Stiker Transparan",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker Transparan - TINTA PUTIH + TINTA WARNA berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 20.000",
    "basePrice": 20000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "stiker-new-005",
        "name": "TINTA PUTIH + TINTA WARNA",
        "price": 125000
      },
      {
        "id": "stiker-new-019",
        "name": "Tinta Putih A3+",
        "price": 20000
      },
      {
        "id": "stiker-new-002",
        "name": "t Meteran",
        "price": 75000
      }
    ]
  },
  {
    "id": "stiker-vinil",
    "name": "STIKER VINIL",
    "category": "Jasa Cetak",
    "description": "Cetak STIKER VINIL DOP A3+ berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 15.000",
    "basePrice": 15000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "stiker-new-035",
        "name": "DOP A3+",
        "price": 15000
      },
      {
        "id": "stiker-new-037",
        "name": "DOP A3+ CUTTING",
        "price": 25000
      },
      {
        "id": "stiker-new-024",
        "name": "DOP A3+ LAMINASI",
        "price": 21000
      },
      {
        "id": "stiker-new-036",
        "name": "DOP A3+ LAMINASI CUTTING",
        "price": 31000
      },
      {
        "id": "stiker-new-038",
        "name": "GLOSSY A3+",
        "price": 15000
      },
      {
        "id": "stiker-new-039",
        "name": "GLOSSY A3+ CUTTING",
        "price": 25000
      },
      {
        "id": "stiker-new-040",
        "name": "GLOSSY A3+ LAMINASI",
        "price": 21000
      },
      {
        "id": "stiker-new-041",
        "name": "GLOSSY A3+ LAMINASI CUTTING",
        "price": 31000
      },
      {
        "id": "stiker-new-031",
        "name": "TRANSPARAN A3+",
        "price": 15000
      },
      {
        "id": "stiker-new-033",
        "name": "TRANSPARAN A3+ CUTTING",
        "price": 25000
      },
      {
        "id": "stiker-new-032",
        "name": "TRANSPARAN A3+ LAMINASI",
        "price": 21000
      },
      {
        "id": "stiker-new-034",
        "name": "TRANSPARAN A3+ LAMINASI CUTTING",
        "price": 31000
      }
    ]
  },
  {
    "id": "stiker-vinyl-meteran",
    "name": "Stiker Vinyl Meteran",
    "category": "Jasa Cetak",
    "description": "Cetak Stiker Vinyl Meteran berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 75.000",
    "basePrice": 75000,
    "features": [
      "Kualitas Cetak Tajam",
      "Material Tahan Lama",
      "Harga Bersaing"
    ],
    "iconName": "Scissors",
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "stiker-new-014",
        "name": "Standard",
        "price": 75000
      },
      {
        "id": "stiker-new-018",
        "name": "+ Spot UV Emboss",
        "price": 225000
      }
    ]
  },
  {
    "id": "sublimasi-jersey-lengan-p",
    "name": "Sublimasi Jersey Lengan P",
    "category": "Jasa Cetak",
    "description": "Produk Sublimasi Jersey Lengan Panjang berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Mulai Rp 80.000",
    "basePrice": 80000,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "Shirt",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "textile-new-004",
        "name": "anjang",
        "price": 95000
      },
      {
        "id": "textile-new-005",
        "name": "endek",
        "price": 80000
      }
    ]
  },
  {
    "id": "tali-lanyard",
    "name": "Tali Lanyard",
    "category": "Promosi & Event",
    "description": "Produk Tali Lanyard Double Hook berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 10.000",
    "basePrice": 10000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "promo-new-012",
        "name": "Double Hook",
        "price": 20000
      },
      {
        "id": "promo-new-009",
        "name": "Gantugan Kunci",
        "price": 10000
      },
      {
        "id": "promo-new-011",
        "name": "Gantugan Kunci Snaphook",
        "price": 15000
      },
      {
        "id": "promo-new-010",
        "name": "ID Card",
        "price": 15000
      }
    ]
  },
  {
    "id": "Flag-025",
    "name": "Tambah Mata Itik Banner Indoor",
    "category": "Promosi & Event",
    "description": "Cetak Tambah Mata Itik Banner Indoor berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 500",
    "basePrice": 500,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Presentation",
    "image": "banner-new"
  },
  {
    "id": "etc-001",
    "name": "Tambahan Packing Kayu",
    "category": "Lainnya",
    "description": "Perlindungan ekstra untuk pengiriman jarak jauh atau barang pecah belah. Pastikan pesanan Anda sampai dengan aman tanpa cacat.",
    "priceSimulated": "Menyesuaikan Ukuran",
    "basePrice": 0,
    "features": [
      "Kayu Kuat",
      "Melindungi Barang Pecah Belah",
      "Garansi Keamanan Pengiriman"
    ],
    "iconName": "Package",
    "image": "https://images.unsplash.com/photo-1566668380877-53e2e347f026?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "merch-new-014",
    "name": "Tempelan Kulkas Magnet 5x5cm Custom",
    "category": "Merchandise",
    "description": "Cetak Tempelan Kulkas Magnet 5x5cm Custom berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 13.500",
    "basePrice": 13500,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Gift",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "tent-card",
    "name": "Tent Card",
    "category": "Jasa Cetak",
    "description": "Cetak Tent Card / Table Tent Segitiga A5 berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 7.000",
    "basePrice": 7000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "print-new-028",
        "name": "/ Table Tent Segitiga A5",
        "price": 9000
      },
      {
        "id": "print-new-029",
        "name": "/ Table Tent Segitiga A6",
        "price": 7000
      },
      {
        "id": "print-new-030",
        "name": "Akrilik + Print A4",
        "price": 95000
      },
      {
        "id": "print-new-027",
        "name": "Akrilik + Print A5",
        "price": 60000
      }
    ]
  },
  {
    "id": "tiket-gelang",
    "name": "Tiket Gelang",
    "category": "Promosi & Event",
    "description": "Produk Tiket Gelang Kertas berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Mulai Rp 550",
    "basePrice": 550,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "promo-new-025",
        "name": "Kertas",
        "price": 550
      },
      {
        "id": "promo-new-028",
        "name": "Polyplex",
        "price": 700
      }
    ]
  },
  {
    "id": "promo-003",
    "name": "Topi Jaring (Trucker)",
    "category": "Promosi & Event",
    "description": "Lengkapi seragam panitia atau komunitas Anda dengan topi jaring yang trendy. Sirkulasi udara lancar, nyaman dipakai seharian.",
    "priceSimulated": "Mulai Rp 20.000",
    "basePrice": 20000,
    "features": [
      "Minimal Order 50pcs",
      "Sablon Polyflex/DTF",
      "Pengatur Ukuran Belakang"
    ],
    "iconName": "HardHat",
    "image": "https://images.unsplash.com/photo-1575428652377-a2697240dac5?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "tote-bag-canvas-natural",
    "name": "Tote Bag Canvas Natural",
    "category": "Merchandise",
    "description": "Cetak Tote Bag Canvas Natural Besar berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 40.000",
    "basePrice": 40000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Gift",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "merch-new-004",
        "name": "Besar",
        "price": 40000
      },
      {
        "id": "merch-new-005",
        "name": "Lanscape Tali Hitam",
        "price": 40000
      }
    ]
  },
  {
    "id": "tripod-banner-50x",
    "name": "Tripod Banner 50x",
    "category": "Promosi & Event",
    "description": "Cetak Tripod Banner 50x100cm 1 SISI berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 275.000",
    "basePrice": 275000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Presentation",
    "image": "banner-new",
    "variants": [
      {
        "id": "Flag-021",
        "name": "100cm 1 SISI",
        "price": 285000
      },
      {
        "id": "Flag-022",
        "name": "100cm 2SISI",
        "price": 385000
      },
      {
        "id": "Flag-020",
        "name": "85cm 1 SISI",
        "price": 275000
      },
      {
        "id": "Flag-023",
        "name": "85cm 2 SISI",
        "price": 375000
      }
    ]
  },
  {
    "id": "tumbler",
    "name": "Tumbler",
    "category": "Merchandise",
    "description": "Cetak Tumbler  Arizona Grafir berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 50.000",
    "basePrice": 50000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "CupSoda",
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "tumbler-new-014",
        "name": "Arizona Grafir",
        "price": 60000
      },
      {
        "id": "tumbler-new-006",
        "name": "Arizona Printing",
        "price": 60000
      },
      {
        "id": "tumbler-new-018",
        "name": "Canteen Grafir",
        "price": 50000
      },
      {
        "id": "tumbler-new-019",
        "name": "Canteen Printing",
        "price": 50000
      }
    ]
  },
  {
    "id": "tumbler-americano",
    "name": "Tumbler Americano",
    "category": "Merchandise",
    "description": "Cetak Tumbler Americano Grafir berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 55.000",
    "basePrice": 55000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "CupSoda",
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "tumbler-new-010",
        "name": "Grafir",
        "price": 55000
      },
      {
        "id": "tumbler-new-009",
        "name": "Printing",
        "price": 55000
      }
    ]
  },
  {
    "id": "tumbler-bowling",
    "name": "Tumbler Bowling",
    "category": "Merchandise",
    "description": "Cetak Tumbler Bowling Grafir berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 60.000",
    "basePrice": 60000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "CupSoda",
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "tumbler-new-015",
        "name": "Grafir",
        "price": 60000
      },
      {
        "id": "tumbler-new-007",
        "name": "Printing",
        "price": 60000
      }
    ]
  },
  {
    "id": "tumbler-c",
    "name": "Tumbler C",
    "category": "Merchandise",
    "description": "Cetak Tumbler CRUISER 900 Ml - Grafir berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 35.000",
    "basePrice": 35000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "CupSoda",
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "tumbler-new-016",
        "name": "RUISER 900 Ml - Grafir",
        "price": 50000
      },
      {
        "id": "tumbler-new-017",
        "name": "RUISER 900 Ml - PRINT",
        "price": 50000
      },
      {
        "id": "merch-002",
        "name": "ustom",
        "price": 35000
      }
    ]
  },
  {
    "id": "tumbler-new-008",
    "name": "Tumbler Elite",
    "category": "Merchandise",
    "description": "Cetak Tumbler Elite berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 60.000",
    "basePrice": 60000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "CupSoda",
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "tumbler-new-013",
    "name": "Tumbler Hook Travel Merah  Printing",
    "category": "Merchandise",
    "description": "Cetak Tumbler Hook Travel Merah  Printing berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 60.000",
    "basePrice": 60000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "CupSoda",
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "tumbler-new-001",
    "name": "Tumbler Insert",
    "category": "Merchandise",
    "description": "Cetak Tumbler Insert berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 25.000",
    "basePrice": 25000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "CupSoda",
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "tumbler-s",
    "name": "Tumbler S",
    "category": "Merchandise",
    "description": "Cetak Tumbler Sakura LED Temperature Grafir berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 30.000",
    "basePrice": 30000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "CupSoda",
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "tumbler-new-002",
        "name": "akura LED Temperature Grafir",
        "price": 50000
      },
      {
        "id": "tumbler-new-003",
        "name": "akura LED Temperature Print",
        "price": 50000
      },
      {
        "id": "tumbler-new-005",
        "name": "port Printing",
        "price": 30000
      }
    ]
  },
  {
    "id": "tumbler-tyisoo-classic-900-ml",
    "name": "Tumbler TYISOO Classic 900 Ml",
    "category": "Merchandise",
    "description": "Cetak Tumbler TYISOO Classic 900 Ml - Grafir berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 50.000",
    "basePrice": 50000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "CupSoda",
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400",
    "variants": [
      {
        "id": "tumbler-new-012",
        "name": "Grafir",
        "price": 50000
      },
      {
        "id": "tumbler-new-011",
        "name": "Print",
        "price": 50000
      }
    ]
  },
  {
    "id": "tumbler-new-004",
    "name": "Tumbler Vacum Set Printing",
    "category": "Merchandise",
    "description": "Cetak Tumbler Vacum Set Printing berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 45.000",
    "basePrice": 45000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "CupSoda",
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-001",
    "name": "Undangan Pernikahan",
    "category": "Jasa Cetak",
    "description": "Kabar bahagia layak disampaikan dengan indah. Kami bantu wujudkan undangan impian Anda dengan layanan desain gratis yang profesional.",
    "priceSimulated": "Mulai Rp 1.500",
    "basePrice": 1500,
    "features": [
      "Free Custom Design",
      "Banyak Pilihan Kertas",
      "Bonus Plastik & Label Nama"
    ],
    "iconName": "Mail",
    "image": "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-new-036",
    "name": "Wallpaper Linen",
    "category": "Jasa Cetak",
    "description": "Cetak Wallpaper Linen berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 100.000",
    "basePrice": 100000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "promo-new-007",
    "name": "Woobler Promosi",
    "category": "Promosi & Event",
    "description": "Produk Woobler Promosi berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 2.500",
    "basePrice": 2500,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "merch-pack-new-001",
    "name": "Work Essentials Pack",
    "category": "Merchandise",
    "description": "Produk Work Essentials Pack berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Rp 175.000",
    "basePrice": 175000,
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "Package",
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "x-banner",
    "name": "X Banner",
    "category": "Promosi & Event",
    "description": "Cetak X Banner 120x160 Luster berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Mulai Rp 65.000",
    "basePrice": 65000,
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Presentation",
    "image": "banner-new",
    "variants": [
      {
        "id": "Flag-018",
        "name": "120x160 Luster",
        "price": 190000
      },
      {
        "id": "Flag-017",
        "name": "60x160 Albatross",
        "price": 100000
      },
      {
        "id": "Flag-019",
        "name": "60x160 Albatross Laminasi",
        "price": 100000
      },
      {
        "id": "Flag-016",
        "name": "60x160 Frontlite Doff",
        "price": 65000
      },
      {
        "id": "Flag-015",
        "name": "60x160 Frontlite Jerman",
        "price": 100000
      },
      {
        "id": "Flag-014",
        "name": "60x160 Luster",
        "price": 100000
      }
    ]
  },
  {
    "id": "promo-new-001",
    "name": "Yoyo Id Card Logo Resin",
    "category": "Promosi & Event",
    "description": "Produk Yoyo Id Card Logo Resin berkualitas tinggi. Cocok untuk kebutuhan bisnis dan personal.",
    "priceSimulated": "Rp 7.000",
    "basePrice": 7000,
    "features": [
      "Kualitas Premium",
      "Harga Terbaik",
      "Pengerjaan Cepat"
    ],
    "iconName": "Tag",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  }
];
