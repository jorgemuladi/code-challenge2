import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row mt-16 mb-16">
      <div />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">About Hilink</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Hilink is dedicated to transforming the way people experience outdoor
          adventures. Our mission is to connect nature enthusiasts with the
          world's most breathtaking locations, making every journey safe,
          memorable, and accessible.
        </p>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative p-1 rounded-3xl bg-white/50 bg-clip-padding">
          <Image
            src="/about-hero.jpg"
            alt="About Hilink"
            width={600}
            height={400}
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
