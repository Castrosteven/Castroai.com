import { FC, useEffect, useState } from "react";
import SideBar from "./sidebar";

const DashboardLayout: FC = ({ children }) => {
  return (
    <div className="bg-gray-800 h-screen w-full flex">
      <header className="h-20 bg-gray-200 w-full items-center flex pl-10 pr-10 fixed">
        <span className="text-2xl">Customer Dashboard</span>
        <nav></nav>
      </header>
      <SideBar />
      <main className="w-5/6 pt-24 p-10">{children}</main>
    </div>
  );
};
export default DashboardLayout;
