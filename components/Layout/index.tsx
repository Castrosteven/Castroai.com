import { FC, useState } from "react";
import Footer from "../Footer";
import Navbar from "../NavBar";

const Layout: FC = ({ children }) => {
  return (
    <div className="h-screen ">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
