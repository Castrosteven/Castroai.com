import React, { useState, useEffect, useContext, createContext } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

const authContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      setLoading(false);
      setUser(user);
      return user;
    } else {
      setLoading(false);
      setUser(false);
      return false;
    }
  };

  const signin = async (form) => {
    try {
      console.log(form);
      const user = await Auth.signIn(form);

      setUser(user);
    } catch (error) {
      return error;
    }
  };

  const signout = () => {
    return Auth.signOut().then(() => {
      handleUser(false);
      router.push("/auth");
    });
  };

  useEffect(() => {
    const check = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        handleUser(user);
      } catch (error) {
        handleUser(false);
      }
    };
    check();
  }, []);

  return {
    user,
    loading,
    signout,
    signin,
  };
}

const formatUser = (user) => {
  return {
    ...user,
  };
};
