import React, { useState, useEffect, useContext, createContext } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import {
  CognitoUserInterface,
  SignUpAttributes,
} from "@aws-amplify/ui-components";
import Toast from "../../components/Toast";

type AuthContextType = {
  user: CognitoUserInterface;
  signout: () => Promise<void>;
  loading: boolean;
  newPassword: (password: string) => Promise<void>;
  signin: (form: SignUpAttributes) => Promise<void>;
};

const authContext = createContext<AuthContextType>(null);

export function AuthProvider({ children }) {
  const auth = useProvideAuth();

  const router = useRouter();

  return (
    <authContext.Provider value={auth}>
      <div>
        {router.pathname.includes("dashboard") ||
        router.pathname.includes("auth") ? (
          <Toast msg={auth.error} status={auth.error && "BAD"} />
        ) : null}
        {children}
      </div>
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<CognitoUserInterface>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const signin = async (form: SignUpAttributes) => {
    setLoading(true);
    try {
      console.log(form);
      const user = await Auth.signIn(form);
      console.log(`SIGNED IN`);
      setUser(user);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.log(JSON.stringify(error));
      setError(error.message);

      setLoading(false);
    }
  };

  const signout = async () => {
    setLoading(true);

    try {
      await Auth.signOut();
      setUser(null);
      console.log(`SIGNED OUT`);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);

      setLoading(false);
    }
  };
  const newPassword = async (password: string) => {
    try {
      setLoading(true);

      const res = await Auth.completeNewPassword(user, password);
      setUser(res);
      console.log(`Created new password`);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);

    const check = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
        console.log(`Set user`);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
      }
    };
    check();
  }, []);

  return {
    user,
    loading,
    signout,
    signin,
    newPassword,
    error,
  };
}
