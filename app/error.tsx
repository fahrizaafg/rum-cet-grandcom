'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error ke layanan pelaporan error
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Oops! Terjadi Kesalahan</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Maaf, kami mengalami masalah saat memuat halaman ini. Silakan coba lagi nanti.
      </p>
      <button
        onClick={
          // Mencoba memulihkan dengan me-render ulang segmen
          () => reset()
        }
        className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors shadow-lg"
      >
        Coba Lagi
      </button>
    </div>
  );
}
