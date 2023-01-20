import { createClient } from "contentful";
import { useEffect, useState } from "react";
import {
  ICompanyInfo,
  ICompanyInfoFields,
} from "../@types/generated/contentful";

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN_ID || "",
});
const fetchEntryById = async (content_type: string) => {
  return await client.getEntries({
    content_type: content_type,
  });
};
export const useContentful = () => {
  const [companyInfo, setCompanyInfo] = useState<ICompanyInfoFields | null>(
    null
  );
  useEffect(() => {
    fetchEntryById("companyInfo").then((res) => {
      const { fields } = res.items[0] as ICompanyInfo;
      setCompanyInfo(fields);
    });
  }, []);
  return {
    companyInfo,
  };
};
