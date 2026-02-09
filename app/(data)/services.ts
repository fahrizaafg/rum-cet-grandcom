import { Printer, Image, CreditCard, BookOpen, PenTool, Stamp } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Cetak Undangan',
    description: 'Undangan pernikahan, khitanan, dan acara lainnya dengan desain eksklusif dan bahan berkualitas.',
    icon: BookOpen,
  },
  {
    id: '2',
    title: 'Spanduk & Banner',
    description: 'Cetak spanduk dan banner berbagai ukuran dengan hasil warna yang tajam dan tahan lama.',
    icon: Image,
  },
  {
    id: '3',
    title: 'Kartu Nama',
    description: 'Kartu nama profesional untuk meningkatkan branding bisnis Anda. Tersedia berbagai pilihan kertas.',
    icon: CreditCard,
  },
  {
    id: '4',
    title: 'Stempel',
    description: 'Pembuatan stempel otomatis dan kayu dengan proses cepat dan hasil yang presisi.',
    icon: Stamp,
  },
  {
    id: '5',
    title: 'Brosur & Flyer',
    description: 'Media promosi efektif dengan cetakan full color yang menarik perhatian pelanggan.',
    icon: Printer,
  },
  {
    id: '6',
    title: 'Desain Grafis',
    description: 'Layanan jasa desain grafis untuk logo, poster, dan kebutuhan visual branding lainnya.',
    icon: PenTool,
  },
];
