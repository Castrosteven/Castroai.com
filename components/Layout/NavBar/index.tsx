import React, { useCallback, useEffect } from "react";
import Logo from "../../../assets/logo.svg";
import Hamburger from "./hamburger.svg";
import Button from "../Button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  let menuItems = [
    { name: "ABOUT US", path: "#about", logo: "" },
    { name: "SERVICES", path: "#services", logo: "" },
    { name: "BLOG", path: "/blog", logo: "" },
    { name: "TECHNOLOGIES", path: "#tech", logo: "" },
  ];

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
    <header
      className={`${
        nav
          ? "fixed bg-gray-800 transition duration-500 ease-in-out "
          : "absolute bg-transparent "
      } h-20 top-0 left-0 z-50 w-full`}
    >
      <div className="container h-full mx-auto flex items-center justify-between p-5  text-white  max-w-6xl">
        <Link href="/" passHref>
          <div className="flex items-center  ">
            <Logo />
            <div className="text-white flex flex-col items-center brand">
              <span
                style={{ fontSize: 22, lineHeight: 1.2 }}
                className="font-BroLink"
              >
                castro ai
              </span>
              <span style={{ fontSize: 12 }} className="">
                Software Development Company
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
            <Link href={"#contact"} passHref>
              CONTACT US
            </Link>
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
