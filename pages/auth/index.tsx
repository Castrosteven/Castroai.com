import { NextPage } from "next";
import { SetStateAction, useEffect, useState } from "react";
import NewPassword from "../../components/Auth/NewPassword";
import SignInForm from "../../components/Auth/SignInForm";

export type Stages = "SIGN_IN" | "SIGN_UP" | "CHALLENGE" | "CONFIRM";
export type AuthFormProps = {
  setStage?: React.Dispatch<SetStateAction<Stages>>;
  challenge?: string;
};

const Auth: NextPage = () => {
  const [stages, setStage] = useState<Stages>("SIGN_IN");

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
