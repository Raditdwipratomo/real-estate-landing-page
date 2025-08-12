import imagesAgent from "../../assets/real-estate-agent.png";
import starVectorIcon from "../../assets/start-vector.png";

const EstateService = () => {
  const datas = [
    {
      number: 1,
      title: "Buy a home",
      description:
        "Find your ideal home effortlessly with our expert guidance & extensive property listings, ensuring a smooth and satisfying home-buying experience.",
    },
    {
      number: 2,
      title: "Rent a home",
      description:
        "Find your perfect rental home with ease. Our service offers personalized options and expert support to help you secure a comfortable and ideal living space.",
    },
    {
      number: 3,
      title: "Property management",
      description:
        "Expert property management to handle maintenance, tenant relations, and financials, ensuring your property runs smoothly and remains profitable.",
    },
  ];
  return (
    <section className="bg-[#FDF3EE] my-5" id="about">
      <div className="max-w-screen-2xl lg:mx-[135px] m-2">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:py-24 gap-10 lg:gap-20 mt-5">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="lg:text-4xl text-2xl font-bold">
              Discover the range of real estate{" "}
              <span className="text-brand">services</span> we offer
            </h2>
            <div className="mt-4 lg:mt-10 justify-center lg:justify-start">
              <img
                src={imagesAgent}
                alt="agent"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative flex justify-center mb-3 lg:mb-10">
              <img src={starVectorIcon} alt="" />
            </div>

            <div className="flex items-start lg:mb-6 flex-col mt-4 gap-5">
              {datas.map((data) => {
                return (
                  <div key={data} className="space-x-12">
                    <h3 className="lg:text-4xl font-bold">{data.number}</h3>
                    <div className="max-w-md mt-[-15px]">
                      <h4 className="lg:text-2xl font-bold">{data.title}</h4>
                      <p className="text-lg">{data.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EstateService;
