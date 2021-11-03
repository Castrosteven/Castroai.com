import Image from "next/image";
import NavBar from "../../NavBar";
import Logo from "../../../assets/logo.svg";
import Brand from "../../../assets/brand.svg";

import Button from "../../Button";

const Header = ({ navbarOpen }: { navbarOpen: boolean }) => {
  return (
    <div className="flex flex-row justify-between p-2 fixed top-0 bg-white w-full h-14 shadow-lg z-50 inset-x-0">
      <div className="flex flex-row items-center justify-between container">
        <div className="flex items-center">
          <Logo />
          <Brand />
        </div>
        <NavBar />
      </div>
    </div>
  );
};
export default Header;
