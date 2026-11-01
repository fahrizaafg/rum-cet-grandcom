import type { Metadata } from "next";

/**
 * Halaman /links hanya kumpulan tautan (link-in-bio), bukan halaman jualan.
 * Sengaja tidak diindeks supaya tidak bersaing dengan beranda di hasil pencarian.
 */
export const metadata: Metadata = {
  title: "Tautan",
  description: "Semua tautan Rumah Cetak Grandcom: WhatsApp, Instagram, Shopee, dan lokasi toko.",
  alternates: { canonical: "/links" },
  robots: { index: false, follow: true },
};

export default function LinksLayout({ children }: { children: React.ReactNode }) {
  return children;
}