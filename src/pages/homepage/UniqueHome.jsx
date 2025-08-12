import img1 from "../../assets/property/card-1.png";
import img2 from "../../assets/property/card-2.png";
import img3 from "../../assets/property/card-3.png";
import img4 from "../../assets/property/card-4.png";
import img5 from "../../assets/property/card-5.png";
import img6 from "../../assets/property/card-6.png";
import { IoMdArrowRoundUp } from "react-icons/io";

const UniqueHome = () => {
  const allProperty = [
    {
      id: 1,
      name: "Luxury waterfront",
      price: "$235,000",
      detail: "505 Oceanview Avenue, Miami, FL",
      beds: 4,
      baths: 4,
      sqft: "4,500 Sqft",
      src: img1,
    },
    {
      id: 2,
      name: "Lakeside retreat",
      price: "$625,000",
      detail: "789 Lake Road, Greenfield, MI",
      beds: 3,
      baths: 2,
      sqft: "3,200 Sqft",
      src: img2,
    },
    {
      id: 3,
      name: "Charming cottage",
      price: "$845,000",
      detail: "101 Oak Lane, Milltown, OR",
      beds: 5,
      baths: 3,
      sqft: "2,800 Sqft",
      src: img3,
    },
    {
      id: 4,
      name: "Grandview haven",
      price: "$540,000",
      detail: "202 Ridge Drive, Beverly Hills, CA",
      beds: 4,
      baths: 3,
      sqft: "4,100 Sqft",
      src: img4,
    },
    {
      id: 5,
      name: "Sunny view manor",
      price: "$430,000",
      detail: "123 Maple Street, Sunnyvale, CA",
      beds: 3,
      baths: 2,
      sqft: "2,900 Sqft",
      src: img5,
    },
    {
      id: 6,
      name: "Ocean breeze villa",
      price: "$420,000",
      detail: "456 Elm Avenue, Downtown, NY",
      beds: 4,
      baths: 3,
      sqft: "3,500 Sqft",
      src: img6,
    },
  ];
  return (
    <div id="detail" className="bg-white py-28 mb-10">
      <div className="max-w-screen-2xl container px-5 flex flex-col items-center lg:mx-5 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Find your home with unique{" "}
            <span className="text-brand">preferences</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="mt-4 tracking-tight">
              Explore a curated selection of homes designed to match your unique
              preferences, making it effortless to find the ideal property that
              perfectly fits your lifestyle and needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProperty.map((property) => {
            return (
              <div
                className={
                  property.id === 2
                    ? "relative overflow-hidden lg:mt-14"
                    : property.id === 5
                    ? "relative overflow-hidden lg:mt-14"
                    : "relative overflow-hidden"
                }
              >
                <img
                  src={property.src}
                  alt="property"
                  className="w-full object-cover transition-all duration-200 hover:scale-105 ease mb-3"
                />
                <div className="flex justify-between">
                  <p className="font-bold">{property.name}</p>
                  <h3 className="font-bold">{property.price}</h3>
                </div>
                  <p className="text-xs text-gray-500">{property.detail}</p>
              </div>
            );
          })}
        </div>
        <div>
          <button className="text-[#0f0e0e] hover:text-[#ff5b28] px-6 py-3 border-2 transition-transform transform hover:scale-105 border-[#ff5b28] flex gap-3 mt-16 items-center text-sm lg:text-balance">
            View All Properties<IoMdArrowRoundUp className="scale-125 rotate-[45deg]" />
            
          </button>
        </div>
      </div>
    </div>
  );
};
export default UniqueHome;
