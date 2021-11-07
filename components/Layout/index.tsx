import { FC, useState } from "react";
import Navbar from "../NavBar";

const Layout: FC = ({ children }) => {
  return (
    <div className="h-screen">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
