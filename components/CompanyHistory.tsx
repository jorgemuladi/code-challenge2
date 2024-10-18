const CompanyHistory = () => {
  return (
    <section className="padding-container max-container py-24">
      <h2 className="bold-40 mb-10">Our Journey</h2>
      <div className="flex flex-col gap-10">
        <HistoryItem
          year="2015"
          title="The Beginning"
          description="Hilink was founded with a vision to make outdoor adventures more accessible and enjoyable for everyone."
        />
        <HistoryItem
          year="2018"
          title="Expansion"
          description="We expanded our services to cover more locations and introduced new features to enhance user experience."
        />
        <HistoryItem
          year="2021"
          title="Global Reach"
          description="Hilink became a global platform, connecting adventurers with destinations worldwide."
        />
        <HistoryItem
          year="2024"
          title="Innovation"
          description="We continue to innovate, introducing AI-powered recommendations and virtual reality previews of destinations."
        />
      </div>
    </section>
  );
};

const HistoryItem = ({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col md:flex-row gap-4 md:gap-10">
    <h3 className="bold-32 text-green-50 md:w-1/4">{year}</h3>
    <div className="md:w-3/4">
      <h4 className="bold-20 mb-2">{title}</h4>
      <p className="regular-16 text-gray-30">{description}</p>
    </div>
  </div>
);

export default CompanyHistory;
