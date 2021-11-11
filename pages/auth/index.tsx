import { NextPage } from "next";
import SignInForm from "../../components/Auth/SignInForm";

const Auth: NextPage = () => {
  return (
    <div className="h-screen bg-gray-200 w-full flex">
      <div className="bg-red-400 w-1/2 flex items-center justify-center">
        <div>
          <p>Welcome please sign in </p>
        </div>
      </div>
      <div className="bg-blue-400 w-1/2 flex items-center justify-center">
        <SignInForm />
      </div>
    </div>
  );
};
export default Auth;
