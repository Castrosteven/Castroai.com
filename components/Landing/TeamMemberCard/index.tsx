import { ITeamMember } from "../../../@types/generated/contentful";
import Linkedin from "./linkedin.svg";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const TeamMemberCard = ({ member }: { member: ITeamMember }) => {
  const { profilePicture, bio, name, position, linkedin } = member.fields;
  return (
    <div className="  h-full flex flex-col justify-between items-center  bg-gray-100 rounded-lg p-5 hover:shadow-lg ">
      <div className="text-black p-2 rounded-lg bg-gray-100 flex flex-col justify-between space-y-4 text-center ">
        <div>
          <Image
            src={`https:${profilePicture.fields.file.url}`}
            alt={""}
            width={150}
            height={150}
            className="rounded-full"
          />
          {/* NAME */}
          <p style={{ fontSize: 15 }} className="text-center font-bold">
            {name.toUpperCase()}
          </p>
          {/* TITLE */}
          <span style={{ fontSize: 15 }}>{position}</span>
        </div>
        <div style={{ fontSize: 15 }} className="font-darkGray text-darkGray ">
          {documentToReactComponents(bio)}
        </div>
      </div>
      <div className="flex">
        <a href={linkedin} target={"_blank"} rel="noreferrer">
          <Linkedin height={25} width={25} />
        </a>
      </div>
    </div>
  );
};
export default TeamMemberCard;
