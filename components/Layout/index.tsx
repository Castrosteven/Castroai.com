import { FC, useState } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import Background from "../../assets/background.png";
const Layout: FC = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(require("../../assets/background.png"))`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <Navbar />
      <main className={``}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
