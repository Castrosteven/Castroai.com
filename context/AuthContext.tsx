import { Auth } from "aws-amplify";
import {
  createContext,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { CognitoUserInterface } from "@aws-amplify/ui-components";

const initalState = {
  isAuth: false,
  user: null,
};

type IState = typeof initalState;

const AuthContext = createContext<IState>(initalState);
const UpdateUserContext = createContext<{
  setUser: React.Dispatch<SetStateAction<CognitoUserInterface>>;
}>(null);

export function UseUser() {
  return useContext(AuthContext);
}
export const UpdateUser = () => {
  return useContext(UpdateUserContext);
};

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<CognitoUserInterface>(null);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setIsAuth(true);
        setUser(user);
      } catch (error) {
        setIsAuth(false);
      }
    };
    getUser;
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth: isAuth, user: user }}>
      <UpdateUserContext.Provider
        value={{
          setUser,
        }}
      >
        {children}
      </UpdateUserContext.Provider>
      ]
    </AuthContext.Provider>
  );
};
