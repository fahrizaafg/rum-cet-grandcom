const SITE_URL = "https://grandcom.biz.id";

/**
 * Data terstruktur untuk Google.
 * LocalBusiness (turunan Organization) dipakai supaya Google tahu ini toko
 * sungguhan di Bandung, lengkap dengan alamat, telepon, dan jam buka.
 */
export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#toko`,
    name: "Rumah Cetak Grandcom",
    description:
      "Jasa percetakan dan digital printing di Bandung: undangan, stiker, kartu nama, spanduk, kalender, dan merchandise custom.",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    telephone: "+62-896-7710-4929",
    priceRange: "Rp",
    currenciesAccepted: "IDR",
    paymentAccepted: "Transfer bank, QRIS, tunai",
    areaServed: {
      "@type": "City",
      name: "Bandung",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Moch. Toha Gg. Pa Iri No.5c, Karasak",
      addressLocality: "Kota Bandung",
      addressRegion: "Jawa Barat",
      postalCode: "40243",
      addressCountry: "ID",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://instagram.com/rumah_cetak_grandcom",
      "https://shopee.co.id/rumahcetak_grandcom",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-896-7710-4929",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["id", "Indonesia"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}