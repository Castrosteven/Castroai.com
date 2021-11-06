import Image from "next/image";

import Logo from "../../../assets/logo.svg";
import Brand from "../../../assets/brand.svg";
import Hamburger from "../Header/hamburger.svg";
import Button from "../../Button";
import { useState } from "react";

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const menuItems = [
    { name: "Projects", path: "", logo: "" },
    { name: "About us", path: "", logo: "" },
    { name: "Services", path: "", logo: "" },
    { name: "Blog", path: "", logo: "" },
  ];

  return (
    <div className="h-20  fixed top-0 left-0 z-50 w-full ">
      <div className="container h-full mx-auto flex items-center justify-between p-5 md:p-0 text-white">
        <div className="flex items-center">
          <div className="bg-white p-1 rounded-full">
            <Logo />
          </div>
          <div className="text-white flex flex-col items-center brand">
            <span className="font-BroLink text-2xl ">castroai</span>
            <span className="text-xs">Software Development Company</span>
          </div>
        </div>
        <ul className="hidden md:flex  items-center space-x-6">
          {menuItems.map((item, index) => {
            const { name, path } = item;
            return (
              <li key={index}>
                <a href={`${path}`}> {name} </a>
              </li>
            );
          })}
          <Button>Contact Us</Button>
        </ul>
        <button className="md:hidden ">
          <Hamburger />
        </button>
      </div>
    </div>
  );
};
export default Header;
