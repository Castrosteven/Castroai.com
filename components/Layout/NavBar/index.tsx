import Logo from "../../../assets/logo.svg";
import Hamburger from "./hamburger.svg";
import Link from "next/link";
import { useApp } from "../../../context/AppContext";
import { useCallback, useEffect, useState } from "react";
const NavBar = () => {
  const { companyInfo } = useApp();
  const [nav, setNav] = useState(false);
  let menuItems = [
    { name: "ABOUT US", path: "#about", logo: "" },
    { name: "SERVICES", path: "#services", logo: "" },
  ];
  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      if (!nav) {
        setNav(true);
      }
    } else {
      if (nav) {
        setNav(false);
      }
    }
  }, [nav]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`${
        nav
          ? "fixed bg-gray-800 transition duration-500 ease-in-out text-white "
          : "absolute bg-transparent text-gray-800 "
      }  h-20 top-0 left-0 z-50 w-full`}
    >
      <div className="container h-full mx-auto flex items-center justify-between p-5   max-w-7xl">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer ">
            <Logo />
            <div className=" flex flex-col items-center brand">
              <span
                style={{ fontSize: 22, lineHeight: 1.2 }}
                className="font-BroLink"
              >
                {companyInfo && companyInfo.name}
              </span>
              <span style={{ fontSize: 12 }} className="">
                {companyInfo && companyInfo.branding}
              </span>
            </div>
          </div>
        </Link>

        <ul className={`hidden md:flex  items-center space-x-6`}>
          {menuItems.map((item, index) => {
            const { name, path } = item;
            return (
              <li key={index}>
                <Link href={`${path}`}>{name}</Link>
              </li>
            );
          })}
          {companyInfo && (
            <Link
              href={`tel:${companyInfo.phoneNumber}`}
              passHref
              style={{
                backgroundColor: "#F36B1C",
              }}
              className="p-2 text-white rounded-md font-semibold"
            >
              Call now
            </Link>
          )}
        </ul>
        <button className="md:hidden ">
          <Hamburger />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
