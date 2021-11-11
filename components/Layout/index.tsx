import { FC, useState } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout: FC = ({ children }) => {
  return (
    <div className=" ">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
