import { 
  Key, 
  Gift, 
  Tag, 
  Coffee, 
  CupSoda, 
  Flame, 
  Fan, 
  ShoppingBag, 
  HardHat, 
  Shirt, 
  Notebook, 
  Calendar, 
  CalendarDays, 
  Mail, 
  Scissors, 
  CreditCard, 
  Package, 
  Box,
  Stamp,
  FileText,
  Image as ImageIcon,
  Flag,
  LucideIcon
} from 'lucide-react';

interface ProductIconProps {
  iconName: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Key,
  Gift,
  Tag,
  Coffee,
  CupSoda,
  Flame,
  Fan,
  ShoppingBag,
  HardHat,
  Shirt,
  Notebook,
  Calendar,
  CalendarDays,
  Mail,
  Scissors,
  CreditCard,
  Package,
  Box,
  Stamp,
  FileText,
  Image: ImageIcon,
  Flag
};

export default function ProductIcon({ iconName, className = "w-6 h-6" }: ProductIconProps) {
  const IconComponent = iconMap[iconName] || Box; // Default to Box if not found

  return <IconComponent className={className} />;
}
