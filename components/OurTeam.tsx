import Image from "next/image";

const OurTeam = () => {
  return (
    <section className="padding-container max-container py-16 bg-gray-10 my-10">
      <h2 className="bold-40 mb-10 text-center">Meet Our Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <TeamMember
          name="John Doe"
          position="CEO & Co-founder"
          image="/team-member-1.jpg"
        />
        <TeamMember
          name="Jane Smith"
          position="CTO & Co-founder"
          image="/team-member-2.jpg"
        />
        <TeamMember
          name="Mike Johnson"
          position="Head of Operations"
          image="/team-member-3.jpg"
        />
      </div>
    </section>
  );
};

const TeamMember = ({
  name,
  position,
  image,
}: {
  name: string;
  position: string;
  image: string;
}) => (
  <div className="flex flex-col items-center">
    <Image
      src={image}
      alt={name}
      width={200}
      height={200}
      className="rounded-full mb-4"
    />
    <h3 className="bold-20 mb-2">{name}</h3>
    <p className="regular-16 text-gray-30">{position}</p>
  </div>
);

export default OurTeam;
