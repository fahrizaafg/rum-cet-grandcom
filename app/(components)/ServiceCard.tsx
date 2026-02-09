import { Service } from '../(data)/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-start group border border-transparent hover:border-gray-100">
      <div className="bg-orange-50 p-4 rounded-xl mb-6 group-hover:bg-primary transition-colors duration-500">
        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
      </div>
      <h3 className="text-xl font-extrabold text-slate-900 mb-3">{service.title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
    </div>
  );
}
