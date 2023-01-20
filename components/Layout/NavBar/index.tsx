import React, { useCallback, useEffect } from "react";
import Logo from "../../../assets/logo.svg";
import Hamburger from "./hamburger.svg";
import Button from "../Button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useApp } from "../../../context/AppContext";

const NavBar = () => {
  const { companyInfo } = useApp();
  const router = useRouter();

  let menuItems = [
    { name: "ABOUT US", path: "#about", logo: "" },
    { name: "SERVICES", path: "#services", logo: "" },
    // { name: "BLOG", path: "/blog", logo: "" },
    // { name: "TECHNOLOGIES", path: "#tech", logo: "" },
  ];

  const NotInHome: boolean = router.pathname !== "/";

  if (router.pathname.includes("/blog")) {
    menuItems = [{ name: "BLOG", path: "/blog", logo: "" }];
  }

  const [nav, setNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const handleScroll = useCallback(() => {
    if (window.scrollY > 400) {
      if (!nav) {
        setNav(true);
      }
    } else {
      if (nav) {
        setNav(false);
      }
    }
  }, [nav]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header>
      <div className="container h-full mx-auto flex items-center justify-between p-5 text-gray-800  max-w-7xl">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer ">
            <Logo />
            <div className="text-gray-800 flex flex-col items-center brand">
              <span
                style={{ fontSize: 22, lineHeight: 1.2 }}
                className="font-BroLink"
              >
                {companyInfo && companyInfo.name}
              </span>
              <span style={{ fontSize: 12 }} className="">
                {companyInfo && companyInfo.branding}
              </span>
            </div>
          </div>
        </Link>

        <ul className={`hidden md:flex  items-center space-x-6`}>
          {menuItems.map((item, index) => {
            const { name, path } = item;
            return (
              <li key={index}>
                <Link href={`${path}`}>
                  <a>{name}</a>
                </Link>
              </li>
            );
          })}
          <Button>
            {companyInfo && (
              <Link href={`tel:${companyInfo.phoneNumber}`} passHref>
                <a href="">Call now</a>
              </Link>
            )}
          </Button>
        </ul>
        <button
          className="md:hidden "
          onClick={() => {
            setMobileNav((value) => !value);
          }}
        >
          <Hamburger />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
