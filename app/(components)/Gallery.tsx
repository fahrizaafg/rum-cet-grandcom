import ProductIcon from './ProductIcon';

const galleryItems = [
  { id: 1, title: 'Undangan Pernikahan Mewah', category: 'Undangan', iconName: 'Mail' },
  { id: 2, title: 'Spanduk Event Besar', category: 'Spanduk', iconName: 'Flag' },
  { id: 3, title: 'Kartu Nama Elegan', category: 'Kartu Nama', iconName: 'CreditCard' },
  { id: 4, title: 'Brosur Lipat Tiga', category: 'Brosur', iconName: 'FileText' },
  { id: 5, title: 'Stempel Perusahaan', category: 'Stempel', iconName: 'Stamp' },
  { id: 6, title: 'Poster A3 Full Color', category: 'Poster', iconName: 'Image' },
];

export default function Gallery() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 aspect-square bg-white border border-transparent hover:border-gray-100">
            
            {/* Icon Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 group-hover:bg-orange-50 transition-colors duration-500">
              <div className="bg-white p-6 rounded-2xl shadow-sm text-slate-400 group-hover:text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <ProductIcon iconName={item.iconName} className="w-16 h-16" />
              </div>
            </div>

            {/* Overlay Info */}
            <div className="absolute inset-x-0 bottom-0 p-6">
               <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-sm translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-slate-900 text-lg font-bold text-center mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                </h3>
                <p className="text-slate-500 text-xs font-bold text-center uppercase tracking-wide">
                    {item.category}
                </p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
