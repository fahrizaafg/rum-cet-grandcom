import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau dihapus.
      </p>
      <Link
        href="/"
        className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors shadow-lg"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
