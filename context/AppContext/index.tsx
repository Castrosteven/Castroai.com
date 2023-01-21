import { Entry } from "contentful";
import { createContext, ReactNode, useContext } from "react";
import {
  ICompanyInfo,
  ICompanyInfoFields,
} from "../../@types/generated/contentful";
import { useContentful } from "../../hooks/useContentful";

interface IContext {
  companyInfo: Entry<ICompanyInfoFields> | null;
}
const Context = createContext<IContext>({} as IContext);
export const AppContext = ({ children }: { children: ReactNode }) => {
  const { companyInfo } = useContentful();
  return (
    <Context.Provider value={{ companyInfo }}>{children}</Context.Provider>
  );
};
export const useApp = () => useContext(Context);
