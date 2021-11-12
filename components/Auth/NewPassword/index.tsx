import { FC, useState } from "react";
import { Auth } from "aws-amplify";
import { useAuth } from "../../../lib/auth";
const NewPassword: FC = () => {
  const { newPassword } = useAuth();
  const [password, setPassword] = useState("");
  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await newPassword(password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      action=""
      className="bg-gray-800 text-white flex flex-col h-1/2 w-1/2 justify-center items-center space-y-5 rounded-lg"
      onSubmit={(e) => {
        formHandler(e);
      }}
    >
      <div className="w-3/4 flex flex-col justify-between ">
        <label htmlFor="email">Password</label>
        <input
          value={password}
          type="password"
          placeholder="Make a new password"
          required
          className="p-2 rounded-lg text-black"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="w-3/4  text-center">
        <button
          type="submit"
          className="bg-CdarkOrange text-white p-2 rounded-lg"
        >
          Sign in
        </button>
      </div>
      <div className="w-3/4  text-center">
        <span className="text-white">
          Forgot password <span className="font-semibold">reset it</span> or{" "}
          {""}
          <span className="font-semibold">Contact us</span>
        </span>
      </div>
    </form>
  );
};
export default NewPassword;
