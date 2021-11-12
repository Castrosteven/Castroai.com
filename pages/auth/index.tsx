import { NextPage } from "next";
import { SetStateAction, useEffect, useState } from "react";
import NewPassword from "../../components/Auth/NewPassword";
import SignInForm from "../../components/Auth/SignInForm";
import { useAuth } from "../../lib/auth";
import { useRouter } from "next/router";

export type Stages = "SIGN_IN" | "SIGN_UP" | "CHALLENGE" | "CONFIRM";

const Auth: NextPage = () => {
  const { user } = useAuth();
  const [stages, setStage] = useState<Stages>("SIGN_IN");
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, []);
  return (
    <div className="h-screen bg-gray-200 w-full flex">
      <div className="bg-red-400 w-1/2 flex items-center justify-center">
        <div>
          <p>Welcome please sign in </p>
        </div>
      </div>
      <div className="bg-blue-400 w-1/2 flex items-center justify-center">
        {stages === "SIGN_IN" ? (
          <SignInForm />
        ) : stages === "CHALLENGE" ? (
          <NewPassword />
        ) : null}
      </div>
    </div>
  );
};
export default Auth;
