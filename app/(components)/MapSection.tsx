'use client';

import { MapPin, ExternalLink } from 'lucide-react';

export default function MapSection() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Jl.+Moch.+Toha+Gg.+Pa+Iri+No.5c,+Karasak,+Kec.+Astanaanyar,+Kota+Bandung,+Jawa+Barat+40243";

  return (
    <div className="flex flex-col h-full w-full">
      {/* Map Container */}
      <div className="relative w-full flex-1 min-h-[400px] rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-slate-100 group hover:shadow-xl transition-shadow duration-500">
        <iframe
          src="https://maps.google.com/maps?q=Jl.+Moch.+Toha+Gg.+Pa+Iri+No.5c,+Karasak,+Kec.+Astanaanyar,+Kota+Bandung,+Jawa+Barat+40243&t=&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Rumah Cetak Grandom"
          className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Action Button */}
      <div className="mt-4 flex justify-end">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 hover:text-primary hover:border-primary hover:bg-orange-50 transition-all shadow-sm group"
        >
          <MapPin className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
          Buka di Google Maps
          <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-50" />
        </a>
      </div>
    </div>
  );
}
