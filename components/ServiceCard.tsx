import { ServiceType } from "@/types";
import Image from "next/image";

const ServiceCard = ({ name, description, icon }: ServiceType) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 flex items-start gap-4">
      <Image src={icon} alt={name} width={40} height={40} />
      <div>
        <h3 className="bold-20 mb-2">{name}</h3>
        <p className="regular-16 text-gray-30">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
