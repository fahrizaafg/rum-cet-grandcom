export type Category = 
  | 'Gantungan Kunci'
  | 'Merchandise'
  | 'Alat Tulis & Kantor'
  | 'Promosi & Event'
  | 'Jasa Cetak'
  | 'Lainnya';

export interface Dimensions {
  width: number;
  height: number;
  unit: 'cm' | 'm' | 'mm';
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  dimensions?: Dimensions;
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
  dimensions?: Dimensions;
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
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
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
        "id": "print-sign-new-006",
        "name": "20x9cm Custom",
        "dimensions": {
          "width": 20,
          "height": 9,
          "unit": "cm"
        },
        "price": 36000
      },
      {
        "id": "print-sign-new-004",
        "name": "30x10cm Custom",
        "dimensions": {
          "width": 30,
          "height": 10,
          "unit": "cm"
        },
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
    "dimensions": {
      "width": 100,
      "height": 100,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 32.9,
      "height": 48.3,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 21.5,
      "height": 33,
      "unit": "cm"
    }
  },
  {
    "id": "office-new-014",
    "name": "Amplop Putih 23x11cm",
    "dimensions": {
      "width": 23,
      "height": 11,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 100,
      "height": 200,
      "unit": "cm"
    },
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "FileText",
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
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
    "dimensions": {
      "width": 10.5,
      "height": 14.8,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "brosur-a4",
    "name": "Brosur A4",
    "dimensions": {
      "width": 21,
      "height": 29.7,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "brosur-bifold-a5",
    "name": "Brosur Bifold A5",
    "dimensions": {
      "width": 14.8,
      "height": 21,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "brosur-trifold-a4",
    "name": "Brosur Trifold A4",
    "dimensions": {
      "width": 21,
      "height": 29.7,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-new-047",
    "name": "Canvas Glossy M2",
    "category": "Jasa Cetak",
    "description": "Cetak Canvas Glossy M2 berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 200.000",
    "basePrice": 200000,
    "dimensions": {
      "width": 100,
      "height": 100,
      "unit": "cm"
    },
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
        "id": "frame-new-001",
        "name": "20.3x25.4cm",
        "dimensions": {
          "width": 20.3,
          "height": 25.4,
          "unit": "cm"
        },
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
    "dimensions": {
      "width": 32.9,
      "height": 48.3,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 10,
      "height": 21,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 9,
      "height": 20,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 14.8,
      "height": 21,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
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
        "name": "A2",
        "price": 300000,
        "dimensions": {
          "width": 42,
          "height": 59.4,
          "unit": "cm"
        }
      },
      {
        "id": "print-new-039",
        "name": "A3",
        "price": 160000,
        "dimensions": {
          "width": 29.7,
          "height": 42,
          "unit": "cm"
        }
      },
      {
        "id": "print-new-038",
        "name": "A4",
        "price": 100000,
        "dimensions": {
          "width": 21,
          "height": 29.7,
          "unit": "cm"
        }
      },
      {
        "id": "print-new-037",
        "name": "A5",
        "price": 80000,
        "dimensions": {
          "width": 14.8,
          "height": 21,
          "unit": "cm"
        }
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
    "dimensions": {
      "width": 100,
      "height": 300,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-new-022",
    "name": "HVS 100gsm COLOR A3+",
    "dimensions": {
      "width": 32.9,
      "height": 48.3,
      "unit": "cm"
    },
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
        "dimensions": {
          "width": 21,
          "height": 29.7,
          "unit": "cm"
        },
        "price": 1500
      },
      {
        "id": "print-new-025",
        "name": "F4",
        "price": 2000,
        "dimensions": {
          "width": 21.5,
          "height": 33,
          "unit": "cm"
        }
      }
    ]
  },
  {
    "id": "promo-new-003",
    "name": "ID Card Akrilik Yoyo",
    "dimensions": {
      "width": 8.56,
      "height": 5.4,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "textile-new-008",
    "name": "Kain Canvas Polyester",
    "category": "Jasa Cetak",
    "description": "Produk Kain Canvas Polyester berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Rp 65.000",
    "basePrice": 65000,
    "dimensions": {
      "width": 100,
      "height": 100,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 100,
      "height": 100,
      "unit": "cm"
    },
    "features": [
      "Kualitas Terjamin",
      "Harga Bersaing",
      "Pengerjaan Rapi"
    ],
    "iconName": "Shirt",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "textile-new-006",
    "name": "Kain Voal Ultrafine",
    "category": "Jasa Cetak",
    "description": "Produk Kain Voal Ultrafine berkualitas terbaik. Solusi cetak profesional untuk Anda.",
    "priceSimulated": "Rp 65.000",
    "basePrice": 65000,
    "dimensions": {
      "width": 110,
      "height": 110,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400"
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
        "id": "promo-new-022",
        "name": "Dinding A3 Lembaran",
        "dimensions": {
          "width": 29.7,
          "height": 42,
          "unit": "cm"
        },
        "price": 5000
      },
      {
        "id": "promo-new-024",
        "name": "Meja A5 - AP260",
        "dimensions": {
          "width": 14.8,
          "height": 21,
          "unit": "cm"
        },
        "price": 25000
      },
      {
        "id": "promo-new-023",
        "name": "Meja A6 - AP260",
        "dimensions": {
          "width": 10.5,
          "height": 14.8,
          "unit": "cm"
        },
        "price": 15000
      }
    ]
  },
  {
    "id": "kalkir-a3",
    "name": "Kalkir A3",
    "dimensions": {
      "width": 29.7,
      "height": 42,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-new-014",
    "name": "Kalkir A4 BW",
    "dimensions": {
      "width": 21,
      "height": 29.7,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 9,
      "height": 5.5,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400"
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
    "dimensions": {
      "width": 32.9,
      "height": 48.3,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "print-sign-new-013",
    "name": "Menu A3 AP260 - Laminating",
    "dimensions": {
      "width": 29.7,
      "height": 42,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 21,
      "height": 29.7,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 21,
      "height": 29.7,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 25,
      "height": 40,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 8,
      "height": 9.5,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 8,
      "height": 9.5,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 8,
      "height": 9.5,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "atk-001",
    "name": "Notes A5 Custom",
    "dimensions": {
      "width": 14.8,
      "height": 21,
      "unit": "cm"
    },
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
        "dimensions": {
          "width": 30,
          "height": 4,
          "unit": "cm"
        },
        "price": 600
      },
      {
        "id": "flyer-brosur-new-010",
        "name": "43x7cm",
        "dimensions": {
          "width": 43,
          "height": 7,
          "unit": "cm"
        },
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
    "dimensions": {
      "width": 10.2,
      "height": 15.2,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "poster-a3-plus-art",
    "name": "Poster A3 plus Art",
    "dimensions": {
      "width": 29.7,
      "height": 42,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
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
        "dimensions": {
          "width": 29.7,
          "height": 42,
          "unit": "cm"
        },
        "price": 300000
      },
      {
        "id": "print-new-051",
        "name": "10 mm A4",
        "dimensions": {
          "width": 21,
          "height": 29.7,
          "unit": "cm"
        },
        "price": 200000
      },
      {
        "id": "print-new-056",
        "name": "3 mm A2",
        "price": 350000,
        "dimensions": {
          "width": 42,
          "height": 59.4,
          "unit": "cm"
        }
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "merch-new-017",
    "name": "Print Kaos DTF A4 -A5 LENGAN PANJANG",
    "dimensions": {
      "width": 21,
      "height": 29.7,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400"
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
    "dimensions": {
      "width": 20,
      "height": 14,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 60,
      "height": 160,
      "unit": "cm"
    },
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
        "dimensions": {
          "width": 60,
          "height": 160,
          "unit": "cm"
        },
        "price": 250000
      },
      {
        "id": "Flag-009",
        "name": "ALBATROS 80x200",
        "dimensions": {
          "width": 80,
          "height": 200,
          "unit": "cm"
        },
        "price": 300000
      },
      {
        "id": "Flag-013",
        "name": "ALBATROS Laminasi Dop 85x200",
        "dimensions": {
          "width": 85,
          "height": 200,
          "unit": "cm"
        },
        "price": 350000
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
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
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
        "name": "7x17cm",
        "dimensions": {
          "width": 7,
          "height": 17,
          "unit": "cm"
        },
        "price": 2980
      },
      {
        "id": "print-new-043",
        "name": "8x18cm",
        "dimensions": {
          "width": 8,
          "height": 18,
          "unit": "cm"
        },
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
    "dimensions": {
      "width": 300,
      "height": 100,
      "unit": "cm"
    },
    "features": [
      "Kualitas Terbaik",
      "Harga Kompetitif",
      "Proses Cepat"
    ],
    "iconName": "Presentation",
    "image": "banner-new"
  },
  {
    "id": "Flag-003",
    "name": "Spanduk Banner Umbul-umbul Kain",
    "category": "Promosi & Event",
    "description": "Cetak Spanduk Banner Umbul-umbul Kain berkualitas tinggi. Hasil tajam, awet, dan profesional.",
    "priceSimulated": "Rp 45.000",
    "basePrice": 45000,
    "dimensions": {
      "width": 90,
      "height": 400,
      "unit": "cm"
    },
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
    "dimensions": {
      "width": 8,
      "height": 12,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=400"
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
    "dimensions": {
      "width": 32.9,
      "height": 48.3,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
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
        "dimensions": {
          "width": 29.7,
          "height": 42,
          "unit": "cm"
        },
        "price": 21000
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
        "dimensions": {
          "width": 3,
          "height": 3,
          "unit": "cm"
        },
        "price": 250
      },
      {
        "id": "stiker-new-055",
        "name": "4x4cm",
        "dimensions": {
          "width": 4,
          "height": 4,
          "unit": "cm"
        },
        "price": 400
      },
      {
        "id": "stiker-new-053",
        "name": "5X5cm",
        "dimensions": {
          "width": 5,
          "height": 5,
          "unit": "cm"
        },
        "price": 500
      },
      {
        "id": "stiker-new-054",
        "name": "6x6cm",
        "dimensions": {
          "width": 6,
          "height": 6,
          "unit": "cm"
        },
        "price": 750
      },
      {
        "id": "stiker-new-052",
        "name": "7x7cm",
        "dimensions": {
          "width": 7,
          "height": 7,
          "unit": "cm"
        },
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
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
  },
  {
    "id": "stiker-mirror-a3",
    "name": "Stiker Mirror A3",
    "dimensions": {
      "width": 29.7,
      "height": 42,
      "unit": "cm"
    },
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
        "price": 120000,
        "dimensions": {
          "width": 42,
          "height": 59.4,
          "unit": "cm"
        }
      },
      {
        "id": "stiker-new-007",
        "name": "flektive Print UV A3",
        "dimensions": {
          "width": 29.7,
          "height": 42,
          "unit": "cm"
        },
        "price": 60000
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
        "dimensions": {
          "width": 14.8,
          "height": 21,
          "unit": "cm"
        },
        "price": 8750
      },
      {
        "id": "stiker-new-045",
        "name": "Vinyl A6 Kisscut",
        "dimensions": {
          "width": 10.5,
          "height": 14.8,
          "unit": "cm"
        },
        "price": 4400
      }
    ]
  },
  {
    "id": "stiker-silver-a3",
    "name": "STIKER SILVER A3+",
    "dimensions": {
      "width": 32.9,
      "height": 48.3,
      "unit": "cm"
    },
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
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
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
        "id": "stiker-new-019",
        "name": "Tinta Putih A3+",
        "dimensions": {
          "width": 29.7,
          "height": 42,
          "unit": "cm"
        },
        "price": 20000
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
        "dimensions": {
          "width": 29.7,
          "height": 42,
          "unit": "cm"
        },
        "price": 15000
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
    "image": "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
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
        "id": "promo-new-010",
        "name": "ID Card",
        "dimensions": {
          "width": 8.56,
          "height": 5.4,
          "unit": "cm"
        },
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
    "dimensions": {
      "width": 5,
      "height": 5,
      "unit": "cm"
    },
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
        "dimensions": {
          "width": 14.8,
          "height": 21,
          "unit": "cm"
        },
        "price": 9000
      },
      {
        "id": "print-new-029",
        "name": "/ Table Tent Segitiga A6",
        "dimensions": {
          "width": 10.5,
          "height": 14.8,
          "unit": "cm"
        },
        "price": 7000
      },
      {
        "id": "print-new-030",
        "name": "Akrilik + Print A4",
        "dimensions": {
          "width": 21,
          "height": 29.7,
          "unit": "cm"
        },
        "price": 95000
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
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=400"
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
    "image": "banner-new"
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
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400"
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
    "image": "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400"
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
    "dimensions": {
      "width": 60,
      "height": 160,
      "unit": "cm"
    },
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
        "price": 190000,
        "dimensions": {
          "width": 120,
          "height": 160,
          "unit": "cm"
        }
      },
      {
        "id": "Flag-017",
        "name": "60x160 Albatross",
        "price": 100000,
        "dimensions": {
          "width": 60,
          "height": 160,
          "unit": "cm"
        }
      }
    ]
  },
  {
    "id": "promo-new-001",
    "name": "Yoyo Id Card Logo Resin",
    "dimensions": {
      "width": 8.56,
      "height": 5.4,
      "unit": "cm"
    },
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
