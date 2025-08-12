import { IoMdArrowRoundUp } from "react-icons/io";
import cityImage from "../../assets/city-background.png";

const Rectangle = ({classname}) => {
  return (
    <div className={classname}>
      <div className="grid md:grid-cols-2 grid-cols-1 w-[1100px] bg-orange-100 px-6 py-8">
        <div>
          <h2 className="font-bold text-3xl lg:text-4xl max-md:w-[400px] ">
            Find your <span className="text-[#ff5b28]">dream home</span> today!
          </h2>
          <p className="tracking-tight text-xs w-[350px] mt-4">
            Discover the perfect property tailored to your needs and preferences
            with our expert guidance.
          </p>
          <div className="mt-4">
            <button className="text-[#0f0e0e] hover:text-[#ff5b28] px-6 py-3 border-2 transition-transform transform hover:scale-105 border-[#ff5b28] flex gap-3 mt-16 items-center text-sm lg:text-balance">
              <a href="https://www.whatsapp.com/">Contact Us</a>
              <IoMdArrowRoundUp className="scale-125 rotate-[45deg]" />
            </button>
          </div>
        </div>
        <div>
          <img src={cityImage} alt="" width={600} height={200} />
        </div>
      </div>
    </div>
  );
};
export default Rectangle;
