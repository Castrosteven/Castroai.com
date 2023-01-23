import Footer from "./Footer";
import Navbar from "./NavBar";
const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(require("../../assets/background.png"))`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <Navbar />
      <main className={`mt-20`}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
