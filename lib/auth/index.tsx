import React, { useState, useEffect, useContext, createContext } from "react";
import { Auth } from "aws-amplify";

import {
  CognitoUserInterface,
  SignUpAttributes,
} from "@aws-amplify/ui-components";

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
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
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
    } catch (error) {
      setError(error);
      alert(error);

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
    } catch (error) {
      setError(error);
      alert(error);
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
    } catch (error) {
      setError(error);
      alert(error);

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
      } catch (error) {
        setError(error);
        alert(error);

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
  };
}
