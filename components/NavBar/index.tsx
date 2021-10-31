import React, { FC } from "react";

const menuItems = [
  { name: "Projects", path: "", logo: "" },
  { name: "About us", path: "", logo: "" },
  { name: "Services", path: "", logo: "" },
  { name: "Blog", path: "", logo: "" },
];

const NavBar: FC<{ className?: string }> = (className) => {
  return (
    <nav>
      <ul
        className={`${className} flex flex-row space-x-4 items-center h-full `}
      >
        {menuItems.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </nav>
  );
};
export default NavBar;
