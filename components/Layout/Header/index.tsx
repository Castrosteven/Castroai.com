import Image from "next/image";
import NavBar from "../../NavBar";
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
    <nav className="fixed w-full x-30 top-0 bg-white text-black z-50">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="flex items-center pl-4">
          <Logo />
          {/* <div className="flex flex-col text-center">
            <span className="font-BroLink">castroai</span>
            <span className="text-xs">Software Development Company</span>
          </div> */}
          <Brand />
        </div>

        <div className="pr-4 lg:hidden block">
          <button onClick={() => setNavBarOpen((value) => !value)}>
            <Hamburger />
          </button>
        </div>

        <div
          className={`${
            navBarOpen ? "" : "hidden"
          } w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`}
        >
          <ul className="flex-1 justify-end items-center lg:flex ">
            {menuItems.map((item) => {
              return (
                <li className="mr-3" key={item.name}>
                  <a
                    className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    href=""
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}

            <Button>Call us</Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
