// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface ICompanyInfoFields {
  /** name */
  name: string;

  /** logo */
  logo: Asset;

  /** phone number */
  phoneNumber: string;

  /** address */
  address: string;

  /** branding */
  branding: string;

  /** SEO_TITLE */
  seoTitle: string;

  /** SEO_DESCRIPTION */
  seoDescription: string;

  /** SEO_KEYWORDS */
  seoKeywords: string[];

  /** social media links */
  socialMediaLinks: ISocialMediaLink[];
}

export interface ICompanyInfo extends Entry<ICompanyInfoFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "companyInfo";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ILandingPageFields {
  /** title */
  title: string;

  /** Hero Heading */
  heroHeading: string;

  /** Hero Sub Title */
  heroSubTitle: string;

  /** hero image */
  heroImage: Asset;

  /** technologies */
  technologies: ITechnology[];

  /** Team Members */
  teamMembers: ITeamMember[];

  /** About  */
  about: Document;

  /** services */
  services: IServices[];

  /** How we work Image */
  howWeWorkImage: Asset;

  /** How We Work */
  howWeWork: Document;
}

export interface ILandingPage extends Entry<ILandingPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "landingPage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IServicesFields {
  /** title */
  title: string;

  /** description */
  description: Document;

  /** icon */
  icon: Asset;
}

export interface IServices extends Entry<IServicesFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "services";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISocialMediaLinkFields {
  /** title */
  title: string;

  /** link */
  link: string;
}

export interface ISocialMediaLink extends Entry<ISocialMediaLinkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "socialMediaLink";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITeamMemberFields {
  /** name */
  name: string;

  /** linkedin */
  linkedin: string;

  /** profilePicture */
  profilePicture: Asset;

  /** position */
  position: string;

  /** bio */
  bio: Document;
}

export interface ITeamMember extends Entry<ITeamMemberFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "teamMember";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITechnologyFields {
  /** name */
  name: string;

  /** logo */
  logo: Asset;
}

export interface ITechnology extends Entry<ITechnologyFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "technology";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "companyInfo"
  | "landingPage"
  | "services"
  | "socialMediaLink"
  | "teamMember"
  | "technology";

export type IEntry =
  | ICompanyInfo
  | ILandingPage
  | IServices
  | ISocialMediaLink
  | ITeamMember
  | ITechnology;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
