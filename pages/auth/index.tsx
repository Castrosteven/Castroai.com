import { NextPage } from "next";
import { useEffect, useState } from "react";
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
    if (user && user.challengeName === "NEW_PASSWORD_REQUIRED") {
      setStage("CHALLENGE");
    } else if (user && user.signInUserSession.isValid()) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div className="h-screen bg-gray-200 w-full flex items-center justify-center">
      <div className=" w-full md:w-1/2 h-full md:h-3/4 flex items-center justify-center">
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
