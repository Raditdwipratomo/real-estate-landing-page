import logo1 from "../../assets/company-logos/logo-1.png";
import logo2 from "../../assets/company-logos/logo-2.png";
import logo3 from "../../assets/company-logos/logo-3.png";
import logo4 from "../../assets/company-logos/logo-4.png";
import logo5 from "../../assets/company-logos/logo-5.png";
import logo6 from "../../assets/company-logos/logo-6.png";

const LogoList = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 my-14 p-5">
        {logos.map((logo) => {
            return(
                <div key={logo}>
                    <img src={logo} alt="logo" />
                </div>
            )
        })}
    </div>
  );
};
export default LogoList;
