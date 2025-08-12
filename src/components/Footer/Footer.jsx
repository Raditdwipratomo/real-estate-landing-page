import footerLogo from "../../assets/footer_logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-screen-2xl px-20 pb-8 pt-48 bg-black text-white flex justify-center items-center flex-col">
      <div className="grid lg:grid-cols-5 grid-cols-1 sm:grid-cols-2 pb-16 gap-5">
        <div className="flex gap-5 flex-col col-span-2">
          <div className="flex gap-5 items-center">
            <img src={footerLogo} alt="footer_logo" className="w-4" />
            <p className="font-bold">Monks Estate</p>
          </div>
          <div>
            <p className="text-[11px] w-[280px] ">
              We are your personal real estate navigator, guiding you to your
              dream property with expert advice.
            </p>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Email"
              className="py-1 px-2  bg-transparent border border-[#ff5b28] w-[60%] placeholder:text-xs placeholder:flex items-center h-10 justify-center focus:outline-none focus:border-2 focus:rounded transition-colors duration-300 ease"
            />
            <button className="text-white hover:text-[#ff5b28] py-2 px-5  border transition-transform transform hover:scale-105 border-[#ff5b28] flex gap-3 items-center lg:text-xs">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs font-extralight">Links</p>
          </div>
          <div>
            <ul className="flex flex-col gap-3 text-xs font-light">
              <li className="hover:text-[#ff5b28]">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-[#ff5b28]">
                <a href="#properties">Properties</a>
              </li>
              <li className="hover:text-[#ff5b28]">
                <a href="#detail">Property Details</a>
              </li>
              <li className="hover:text-[#ff5b28]">
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs font-extralight">Information</p>
          </div>
          <div>
            <ul className="flex flex-col gap-3 text-xs font-light">
              <li className="hover:text-[#ff5b28]">
                <a href="#contact">Contact Us</a>
              </li>
              <li className="hover:text-[#ff5b28]">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="hover:text-[#ff5b28]">
                <a href="#detail">FAQ</a>
              </li>
              <li className="hover:text-[#ff5b28]">
                <a href="#blog">404</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs font-extralight">Contact</p>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-xs font-light">
              <li className="hover:text-[#ff5b28]">
                <a href="#about">+012 345-67890</a>
              </li>
              <li className="hover:text-[#ff5b28]">
                <a href="#properties">hello@design.co.id</a>
              </li>
              <li className="flex gap-4">
                <FaFacebookF className="border w-6 h-6 p-[4px] hover:bg-[#ff3c00] hover:border-none" />
                <FaInstagram className="border w-6 h-6 p-[4px] hover:bg-[#ff3c00] hover:border-none" />
                <FaPinterestP className="border w-6 h-6 p-[4px] hover:bg-[#ff3c00] hover:border-none" />
                <FaTwitter className="border w-6 h-6 p-[4px] hover:bg-[#ff3c00] hover:border-none" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[99%] bg-gray-300 h-[1px] rounded-sm mb-5"></div>
        <p className="text-xs mt-3">2024 ©Design Monks. All rights reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
