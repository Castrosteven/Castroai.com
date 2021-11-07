import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import Hamburger from "./hamburger.svg";
import Button from "../Button";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
  // { name: "Projects", path: "#", logo: "" },
  { name: "About us", path: "#about", logo: "" },
  { name: "Services", path: "#services", logo: "" },
  { name: "Blog", path: "/blog", logo: "" },
];

class Navbar extends React.Component {
  listener = null;
  state = {
    nav: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 400) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  render() {
    return (
      <div
        className={`${
          this.state.nav
            ? "fixed bg-gray-800 transition duration-500 ease-in-out "
            : "absolute bg-transparent "
        } h-20 top-0 left-0 z-50 w-full`}
      >
        <div className="container h-full mx-auto flex items-center justify-between p-5 md:p-0 text-white">
          <div className="flex items-center">
            <div className="bg-white p-1 rounded-full">
              <Logo />
            </div>
            <div className="text-white flex flex-col items-center brand">
              <span className="font-BroLink text-2xl ">castroai</span>
              <span className="text-xs">Software Development Company</span>
            </div>
          </div>
          <ul className="hidden md:flex  items-center space-x-6">
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
                Contact us
              </Link>
            </Button>
          </ul>
          <button className="md:hidden ">
            <Hamburger />
          </button>
        </div>
      </div>
    );
  }
}
export default Navbar;
