import { FC, useState } from "react";
import Footer from "../Footer";
import Navbar from "../NavBar";

const Layout: FC = ({ children }) => {
  return (
    <div className="h-screen ">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
