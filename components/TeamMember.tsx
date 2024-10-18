import { TeamMemberType } from "@/types";
import Image from "next/image";

const TeamMember = ({ name, email, picture }: TeamMemberType) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden">
      <Image
        src={picture.large}
        alt={name.first}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="bold-20 mb-2">{`${name.first} ${name.last}`}</h3>
        <p className="regular-16 text-gray-30">{email}</p>
      </div>
    </div>
  );
};

export default TeamMember;
