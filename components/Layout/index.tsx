import { FC, useState } from "react";
import Navbar from "../NavBar";

const Layout: FC = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="h-screen">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
