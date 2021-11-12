import { NextPage } from "next";
import DashboardLayout from "./Layout";
import { useAuth } from "../../lib/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
const Dashboard: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/auth");
    }
  }, []);

  return (
    <DashboardLayout>
      <div className="text-white">DASHBOARD</div>
    </DashboardLayout>
  );
};
export default Dashboard;
