import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300",
      className
    )}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-primary p-3 bg-accent rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
