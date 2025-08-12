import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import arrowIcon from "../../assets/arrow.png";
import { IoMdArrowRoundUp } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#properties", label: "Properties" },
    { href: "#blog", label: "Blog" },
  ];

  const handleClicks = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const linkClasses = (link) => {
    return link === activeLink
      ? "text-brand font-bold hover:text-[#ff5b28]"
      : "text-[#0F0e0e] hover:text-[#ff5b28]";
  };

  return (
    <nav className="bg-white left-0 fixed top-0 right-0 z-[9999] px-14 shadow-sm">
      <div className="max-w-screen-2xl mx-auto py-4 px-5 flex justify-between items-center">
        <a href="/">
          <img src="/logo.png" alt="logo" className="w-28" />
        </a>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoMdClose className="text-2xl text-brand" />
            ) : (
              <MdMenu className="text-2xl text-brand" />
            )}
          </button>
        </div>

        <div className="hidden lg:block">
          <nav className="">
            <ul className="flex items-center gap-8">
              {navItems.map((link) => {
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => handleClicks(link.href)}
                      className={`${linkClasses(link.href)}`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="hidden lg:block hover:text-[#ff5b28]">
          <button className="px-4 py-2 border-2 rounded border-[#ff5b28]">
            <a href="https://www.whatsapp.com/" className="flex gap-3">
              Contact Us
              <span className="mt-1">
                <IoMdArrowRoundUp className="scale-125 rotate-[45deg]" />
              </span>
            </a>
          </button>
        </div>

        {isMenuOpen && 
          <div className="fixed top-0 left-0 right-0 mt-20 border py-8 bg-white shadow-md z-50">
            <nav className="">
              <ul className="flex flex-col items-center gap-8">
                {navItems.map((link) => {
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                      onClick={() => handleClicks(link.href)}
                        className={`${linkClasses(link.href)}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        }
      </div>
    </nav>
  );
};
export default Header;
