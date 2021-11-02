import { FC, useState } from "react";
import Header from "./Header";

const Layout: FC = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="w-full h-screen">
      <Header navbarOpen={navbarOpen} />
      {children}
    </div>
  );
};
export default Layout;
