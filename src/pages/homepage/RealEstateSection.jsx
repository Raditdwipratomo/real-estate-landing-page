import { IoMdArrowRoundUp } from "react-icons/io";

const RealEstateSection = () => {
  const items = [
    {
      count: "200+",
      label: "Modern\nProperties",
    },
    {
      count: "12+",
      label: "Years of\nExperience",
    },
    {
      count: "98%",
      label: "Client\nSatisfaction",
    },
    {
      count: "20+",
      label: "Award\nWinning",
    },
  ];

  return (
    <section id="properties" className="max-w-screen-2xl p-7 my-7 lg:my-12">
      <div className="bg-white w-100 flex flex-col items-center">
        {/* left section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-[90%] mt-[100px]">
          <div className="space-y-6">
            <div className="max-w-md">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                Building dreams into stunning real estate
              </h1>
            </div>
            <div className="max-w-md">
              <p>
                We take pride in our track record of excellence and innovation
                in the real estate industry. Here’s a glimpse of our notable
                achievements.
              </p>
            </div>
            <div className="mt-7 lg:mt-12">
              <button className="text-[#0f0e0e] hover:text-[#ff5b28] px-6 py-3 border-2 transition-transform transform hover:scale-105 border-[#ff5b28] flex gap-2 items-center text-sm lg:text-balance">
                More About Us<IoMdArrowRoundUp className="scale-125 rotate-[45deg]" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {items.map((section, index) => {
              return (
                <div
                  className="bg-orange-50 p-6 text-start rounded-lg shadow-md"
                  key={index}
                >
                  <h1 className="text-lg lg:text-3xl font-bold text-gray-800">
                    {section.count}
                  </h1>
                  <p className="text-gray-700 mt-2 whitespace-pre-line">
                    {section.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Section  */}
    </section>
  );
};
export default RealEstateSection;
