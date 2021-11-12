import { FC, useEffect } from "react";
import SideBar from "./sidebar";
import { useAuth } from "../../../lib/auth";

import { useRouter } from "next/router";
const DashboardLayout: FC = ({ children }) => {
  const auth = useAuth();
  useEffect(() => {
    if (!auth.user) {
      router.push("/auth");
    }
  }, []);
  const router = useRouter();

  return (
    <div className="bg-gray-800 h-screen w-full flex">
      <header className="h-20 bg-gray-200 w-full items-center flex pl-10 pr-10 fixed justify-between">
        <span className="text-2xl">Customer Dashboard</span>
        <button
          className="bg-gray-800 p-2 text-white rounded-lg"
          onClick={() => auth.signout()}
        >
          SIGNOUT
        </button>
      </header>
      <SideBar />
      <main className="w-5/6 pt-24 p-10">{children}</main>
    </div>
  );
};
export default DashboardLayout;
