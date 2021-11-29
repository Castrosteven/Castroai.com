import { FC, useState } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import Script from "next/script";
import { useRouter } from "next/router";

const Layout: FC = ({ children }) => {
  const router = useRouter();
  const NotInHome: boolean = router.pathname !== "/";

  return (
    <div className=" ">
      <Navbar />
      <main className={` ${NotInHome ? "mt-20" : " "}`}>{children}</main>
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
