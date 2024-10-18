import { ServiceType } from "@/types";
import Image from "next/image";

const ServiceCard = ({ name, description, icon }: ServiceType) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 flex items-start gap-4">
      {/* Icon with a rounded background */}
      <div className="rounded-full p-4 bg-green-50">
        <Image src={icon} alt={name} width={40} height={40} />
      </div>
      {/* Service details: name and description */}
      <div className="flex flex-col">
        <h3 className="bold-20 lg:bold-32">{name}</h3>
        <p className="regular-16 text-gray-30 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
