import { FC, useState } from "react";
import { Auth } from "aws-amplify";
import { CognitoUserInterface } from "@aws-amplify/ui-components";
import { AuthFormProps } from "../../../pages/auth";
import { UpdateUser } from "../../../context/AuthContext";

const SignInForm: FC<AuthFormProps> = ({ setStage, setChallengeName }) => {
  const initialState = {
    username: "",
    password: "",
  };
  type formType = typeof initialState;
  const [form, setForm] = useState<formType>(initialState);
  const { setUser } = UpdateUser();

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user: CognitoUserInterface = await Auth.signIn(form);
      console.log(user);
      setUser(user);
      const { challengeName } = user;
      if (challengeName === "NEW_PASSWORD_REQUIRED") {
        setChallengeName("NEW_PASSWORD_REQUIRED");
        setStage("CHALLENGE");
        console.log("NEED TO CHANGE PASSWORD with respondToAuthChallenge");
      }
    } catch (error) {}
  };
  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    let newState = { ...form };
    newState[`${name}`] = e.target.value;
    setForm(newState);
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
        <label htmlFor="email">Email</label>
        <input
          value={form.username}
          name="username"
          type="email"
          placeholder="Email@email.com"
          required
          className="p-2 rounded-lg text-black"
          onChange={(e) => inputHandler(e)}
        />
      </div>
      <div className="w-3/4 flex flex-col justify-between ">
        <label htmlFor="email">Password</label>
        <input
          value={form.password}
          type="password"
          name="password"
          placeholder="password"
          required
          className="p-2 rounded-lg text-black"
          onChange={(e) => inputHandler(e)}
        />
      </div>
      <div className="w-3/4  text-center">
        <button
          type="submit"
          className="bg-CdarkOrange text-white p-2 rounded-lg "
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
export default SignInForm;
