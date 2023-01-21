import { createClient, Entry } from "contentful";
import { useEffect, useRef, useState } from "react";
import {
  ICompanyInfo,
  ICompanyInfoFields,
} from "../@types/generated/contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN_ID || "",
});
const fetchCompanyInfo = async () => {
  return await client.getEntry<ICompanyInfoFields>("5wnChLnxbWk6mhsTQP11Kl");
};
export const useContentful = () => {
  const isMounted = useRef(false);

  const [companyInfo, setCompanyInfo] =
    useState<Entry<ICompanyInfoFields> | null>(null);
  useEffect(() => {
    if (isMounted.current) {
      return;
    }
    fetchCompanyInfo().then((res) => {
      console.log(res.fields.socialMediaLinks);
      setCompanyInfo(res);
    });
    isMounted.current = true;
  }, []);
  return {
    companyInfo,
  };
};
