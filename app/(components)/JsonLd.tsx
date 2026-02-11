export default function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rumah Cetak Grandcom",
    "url": "https://rumah-cetak-grandcom.vercel.app",
    "logo": "https://rumah-cetak-grandcom.vercel.app/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-896-7710-4929",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": "Indonesian"
    },
    "sameAs": [
      "https://instagram.com/rumah_cetak_grandcom",
      "https://shopee.co.id/rumahcetak_grandcom"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Moch. Toha Gg. Pa Iri No.5c, Karasak, Kec. Astanaanyar",
      "addressLocality": "Kota Bandung",
      "addressRegion": "Jawa Barat",
      "postalCode": "40243",
      "addressCountry": "ID"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}
