import { NextPage } from "next";
import { SetStateAction, useEffect, useState } from "react";
import NewPassword from "../../components/Auth/NewPassword";
import SignInForm from "../../components/Auth/SignInForm";
import { useAuth } from "../../lib/auth";
import { useRouter } from "next/router";
import { CognitoUserInterface } from "@aws-amplify/ui-components";
export type Stages = "SIGN_IN" | "SIGN_UP" | "CHALLENGE" | "CONFIRM";

const Auth: NextPage = () => {
  const { user }: { user: CognitoUserInterface | false } = useAuth();
  const [stages, setStage] = useState<Stages>("SIGN_IN");
  const router = useRouter();
  useEffect(() => {
    if (user) {
      const { challengeName } = user;
      console.log(challengeName);
      if (challengeName === "NEW_PASSWORD_REQUIRED") {
        setStage("CHALLENGE");
      } else {
        router.push("/dashboard");
      }
    }
  }, []);
  return (
    <div className="h-screen bg-gray-200 w-full flex">
      <div className=" w-1/2 flex items-center justify-center">
        <div>
          <p className="text-3xl font-extrabold text-center">
            CUSTOMER LOGIN PANEL{" "}
          </p>
        </div>
      </div>
      <div className=" w-1/2 flex items-center justify-center">
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
