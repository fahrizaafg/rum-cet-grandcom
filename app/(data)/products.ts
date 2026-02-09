export type Category = 
  | 'Gantungan Kunci'
  | 'Merchandise'
  | 'Alat Tulis & Kantor'
  | 'Promosi & Event'
  | 'Jasa Cetak'
  | 'Lainnya';

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
}

export const products: Product[] = [
  // Gantungan Kunci
  {
    id: 'gk-001',
    name: 'Souvenir Ganci Premium',
    category: 'Gantungan Kunci',
    description: 'Abadikan momen spesial atau logo brand Anda dalam gantungan kunci berkualitas tinggi. Tersedia dalam berbagai pilihan warna cerah yang menarik perhatian.',
    priceSimulated: 'Mulai Rp 3.500',
    basePrice: 3500,
    features: ['Tersedia 1 Muka & 2 Muka', 'Pilihan Warna Beragam', 'Ring Kuat & Tahan Karat'],
    iconName: 'Key',
    image: 'https://images.unsplash.com/photo-1589365278144-96e387c53393?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'gk-002',
    name: 'Ganci Cermin Custom',
    category: 'Gantungan Kunci',
    description: 'Souvenir unik multifungsi! Bagian depan desain custom, bagian belakang cermin yang praktis dibawa kemana saja. Pilihan tepat untuk souvenir pernikahan atau event kecantikan.',
    priceSimulated: 'Mulai Rp 4.000',
    basePrice: 4000,
    features: ['Ukuran 44mm & 58mm', 'Laminasi Doff atau Glossy', 'Fungsional & Estetik'],
    iconName: 'Gift',
    image: 'https://images.unsplash.com/photo-1632515093554-15c03f193693?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'gk-003',
    name: 'Ganci Ekonomis',
    category: 'Gantungan Kunci',
    description: 'Solusi cerdas untuk kebutuhan promosi massal dengan budget terbatas. Tetap tampil profesional dengan kualitas cetak yang tajam.',
    priceSimulated: 'Mulai Rp 2.500',
    basePrice: 2500,
    features: ['Harga Sangat Terjangkau', 'Opsi 1 Muka & 2 Muka', 'Cocok untuk Giveaway Massal'],
    iconName: 'Tag',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=400'
  },

  // Merchandise
  {
    id: 'merch-001',
    name: 'Mug Custom Sublim',
    category: 'Merchandise',
    description: 'Nikmati kopi pagi dengan mug personal atau berikan hadiah yang tak terlupakan. Cetakan sublimasi menyatu dengan keramik, tahan lama dan aman dicuci.',
    priceSimulated: 'Rp 25.000',
    basePrice: 25000,
    features: ['Hasil Cetak Full Color Tajam', 'Material Keramik SNI', 'Tersedia Box Mug Eksklusif'],
    iconName: 'Coffee',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'merch-002',
    name: 'Tumbler Custom',
    category: 'Merchandise',
    description: 'Botol minum stylish yang ramah lingkungan. Cetak logo perusahaan atau desain favorit Anda untuk menemani aktivitas sehari-hari.',
    priceSimulated: 'Mulai Rp 35.000',
    basePrice: 35000,
    features: ['Tahan Panas/Dingin (Tergantung Model)', 'Desain Ergonomis', 'Area Cetak Luas'],
    iconName: 'CupSoda',
    image: 'https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'merch-003',
    name: 'Korek Api Custom',
    category: 'Merchandise',
    description: 'Media promosi efektif yang sering berpindah tangan, memperluas jangkauan brand Anda secara organik. Tersedia eceran maupun grosir.',
    priceSimulated: 'Mulai Rp 5.000',
    basePrice: 5000,
    features: ['Bisa Satuan', 'Paket Grosir (50pcs) Lebih Murah', 'Sticker Vinyl Tahan Air'],
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1595244585141-86561f3640b3?auto=format&fit=crop&q=80&w=400'
  },

  // Promosi & Event
  {
    id: 'promo-001',
    name: 'Kipas Tangan Custom',
    category: 'Promosi & Event',
    description: 'Souvenir paling dicari saat acara outdoor! Desain custom pada kipas tangan yang kokoh, membuat tamu Anda tetap sejuk sekaligus mengingat brand Anda.',
    priceSimulated: 'Mulai Rp 5.000',
    basePrice: 5000,
    features: ['Model Reguler & Kerang', 'Gagang Plastik Kuat', 'Cetak 2 Sisi'],
    iconName: 'Fan',
    image: 'https://images.unsplash.com/photo-1623938666427-e85567d54256?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'promo-002',
    name: 'Goodiebag Custom',
    category: 'Promosi & Event',
    description: 'Tas ramah lingkungan pengganti plastik yang reusable. Branding berjalan yang efektif setiap kali tas ini digunakan berbelanja.',
    priceSimulated: 'Mulai Rp 4.500',
    basePrice: 4500,
    features: ['Bahan Spunbond/Canvas', 'Sablon Awet', 'Kapasitas Besar'],
    iconName: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'promo-003',
    name: 'Topi Jaring (Trucker)',
    category: 'Promosi & Event',
    description: 'Lengkapi seragam panitia atau komunitas Anda dengan topi jaring yang trendy. Sirkulasi udara lancar, nyaman dipakai seharian.',
    priceSimulated: 'Mulai Rp 20.000',
    basePrice: 20000,
    features: ['Minimal Order 50pcs', 'Sablon Polyflex/DTF', 'Pengatur Ukuran Belakang'],
    iconName: 'HardHat', // Using HardHat as generic hat or User
    image: 'https://images.unsplash.com/photo-1575428652377-a2697240dac5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'promo-004',
    name: 'Kaos Katun Combed 24s',
    category: 'Promosi & Event',
    description: 'Kaos dengan kenyamanan premium, menyerap keringat dan adem. Cocok untuk kaos kelas, gathering kantor, atau merchandise band.',
    priceSimulated: 'Mulai Rp 65.000',
    basePrice: 65000,
    features: ['Bahan 100% Cotton Combed 24s', 'Sablon Polos atau Fullcolor', 'Jahitan Rantai Standar Distro'],
    iconName: 'Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400'
  },

  // Alat Tulis & Kantor
  {
    id: 'atk-001',
    name: 'Notes A5 Custom',
    category: 'Alat Tulis & Kantor',
    description: 'Buku catatan profesional untuk seminar atau kebutuhan kantor. Desain cover custom mencerminkan identitas perusahaan Anda.',
    priceSimulated: 'Mulai Rp 15.000',
    basePrice: 15000,
    features: ['Isi 50 Lembar HVS', 'Jilid Spiral Kawat / Lem', 'Cover Art Carton Laminasi'],
    iconName: 'Notebook',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'atk-002',
    name: 'Kalender Duduk Mini',
    category: 'Alat Tulis & Kantor',
    description: 'Hiasi meja kerja dengan kalender estetik yang hemat tempat. Pengingat tanggal sekaligus pajangan brand yang dilihat setiap hari.',
    priceSimulated: 'Mulai Rp 12.000',
    basePrice: 12000,
    features: ['Ukuran Kompak', 'Dudukan Hardboard Kokoh', 'Desain Tiap Bulan Berbeda'],
    iconName: 'Calendar',
    image: 'https://images.unsplash.com/photo-1633515257379-597397371802?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'atk-003',
    name: 'Kalender Dinding',
    category: 'Alat Tulis & Kantor',
    description: 'Kalender ukuran besar untuk visibilitas maksimal di dinding rumah atau kantor. Pilihan tepat untuk kampanye atau promosi akhir tahun.',
    priceSimulated: 'Mulai Rp 10.000',
    basePrice: 10000,
    features: ['Finishing Klep Seng', 'Kertas Art Paper Glossy', 'Tersedia Berbagai Ukuran'],
    iconName: 'CalendarDays',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400'
  },

  // Jasa Cetak
  {
    id: 'print-001',
    name: 'Undangan Pernikahan',
    category: 'Jasa Cetak',
    description: 'Kabar bahagia layak disampaikan dengan indah. Kami bantu wujudkan undangan impian Anda dengan layanan desain gratis yang profesional.',
    priceSimulated: 'Mulai Rp 1.500',
    basePrice: 1500,
    features: ['Free Custom Design', 'Banyak Pilihan Kertas', 'Bonus Plastik & Label Nama'],
    iconName: 'Mail',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'print-002',
    name: 'Stiker Custom',
    category: 'Jasa Cetak',
    description: 'Label kemasan produk yang menaikkan nilai jual. Kami berikan layanan desain dan cutting gratis, siap tempel tanpa repot.',
    priceSimulated: 'Mulai Rp 150/pcs',
    basePrice: 150,
    features: ['Bahan Chromo/Vinyl/Transparan', 'Free Design & Cutting (Kiss Cut)', 'Tahan Air (Vinyl)'],
    iconName: 'Scissors',
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'print-003',
    name: 'Kartu Nama Bisnis',
    category: 'Jasa Cetak',
    description: 'Tinggalkan kesan pertama yang profesional saat networking. Kartu nama dengan potongan rapi dan warna akurat.',
    priceSimulated: 'Rp 25.000 / Box',
    basePrice: 25000,
    features: ['1 Box isi 100 lembar', 'Bahan Art Carton 260gsm', 'Opsi Laminasi Doff/Glossy'],
    iconName: 'CreditCard',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400'
  },

  // Lainnya
  {
    id: 'etc-001',
    name: 'Tambahan Packing Kayu',
    category: 'Lainnya',
    description: 'Perlindungan ekstra untuk pengiriman jarak jauh atau barang pecah belah. Pastikan pesanan Anda sampai dengan aman tanpa cacat.',
    priceSimulated: 'Menyesuaikan Ukuran',
    basePrice: 0,
    features: ['Kayu Kuat', 'Melindungi Barang Pecah Belah', 'Garansi Keamanan Pengiriman'],
    iconName: 'Package',
    image: 'https://images.unsplash.com/photo-1566668380877-53e2e347f026?auto=format&fit=crop&q=80&w=400'
  }
];
