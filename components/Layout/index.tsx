import { FC, useState } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import Script from "next/script";

const Layout: FC = ({ children }) => {
  return (
    <div className=" ">
      <Navbar />
      <main className="">{children}</main>
      <Script
        async
        id="slcLiveChat"
        src="https://widget.sonetel.com/SonetelWidget.min.js"
        data-account-id="207850791"
      ></Script>
      <Footer />
    </div>
  );
};
export default Layout;
