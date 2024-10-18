import { ProductType } from "@/types";
import Image from "next/image";

const ProductCard = ({ name, description, price, image }: ProductType) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="bold-20 mb-2">{name}</h3>
        <p className="regular-16 text-gray-30 mb-4">{description}</p>
        <p className="bold-18 text-green-50">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
