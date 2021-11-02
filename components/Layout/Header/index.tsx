import Image from "next/image";
import NavBar from "../../NavBar";
import Logo from "../../../assets/logo.svg";
import Brand from "../../../assets/brand.svg";

import Button from "../../Button";

const Header = ({ navbarOpen }: { navbarOpen: boolean }) => {
  return (
    <div className="flex flex-row justify-between p-2 fixed bg-white w-full h-14 shadow-lg z-50">
      <div className="flex flex-row items-center justify-start">
        <Logo />
        <Brand />
      </div>
      {/* Nav */}
    </div>
  );
};
export default Header;
