import type { MetadataRoute } from "next";

const SITE_URL = "https://grandcom.biz.id";

/**
 * Daftar halaman yang boleh diindeks mesin pencari.
 * /links sengaja tidak dimasukkan: isinya hanya kumpulan tautan, bukan halaman jualan.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/produk`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/layanan`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/kontak`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/galeri`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}