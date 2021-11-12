import { FC, useEffect } from "react";
import SideBar from "./sidebar";
import { useAuth } from "../../../lib/auth";
import { useRouter } from "next/router";
const DashboardLayout: FC = ({ children }) => {
  const router = useRouter();
  const { user, signout, loading } = useAuth();
  useEffect(() => {
    if (user && user.Session) {
      router.push("/dashboard");
    } else if (!user) {
      router.push("/auth");
    }
  }, [loading]);
  return (
    <div>
      {loading ? (
        <div>LOADING....</div>
      ) : (
        <div className="bg-gray-800 h-screen w-full flex">
          <header className="h-20 bg-gray-200 w-full items-center flex pl-10 pr-10 fixed justify-between">
            <span className="text-2xl">Customer Dashboard</span>
            <button
              className="bg-gray-800 p-2 text-white rounded-lg"
              onClick={() => signout()}
            >
              SIGNOUT
            </button>
          </header>
          <SideBar />
          <main className="w-5/6 pt-24 p-10">{children}</main>
        </div>
      )}
    </div>
  );
};
export default DashboardLayout;
