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
        <div className="bg-gray-800 h-screen w-full flex flex-col flex-1 justify-between md:flex-row-reverse">
          <header className="h-20 bg-gray-200 w-full items-center flex pl-10 pr-10 fixed justify-between md:w-full">
            <span className="text-2xl">Customer Dashboard</span>
            <button
              className="bg-gray-800 p-2 text-white rounded-lg"
              onClick={() => signout()}
            >
              SIGNOUT
            </button>
          </header>
          <main className="md:w-11/12 md:pt-24 pt-20 md:p-10  h-full">
            {children}
          </main>
          <SideBar />
        </div>
      )}
    </div>
  );
};
export default DashboardLayout;
