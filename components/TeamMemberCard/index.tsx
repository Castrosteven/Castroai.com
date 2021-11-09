import { ITeamMember } from "../../@types/generated/contentful";
import Linkedin from "../../assets/linkedin.svg";
import Image from "next/image";
const TeamMemberCard = ({ member }: { member: ITeamMember }) => {
  const { description, link, name, picture, title } = member.fields;
  const { fields } = picture;
  return (
    <div className="  h-full flex flex-col justify-between items-center  bg-gray-100 rounded-lg p-5 hover:shadow-lg ">
      <div className="text-black p-2 rounded-lg bg-gray-100 flex flex-col justify-between space-y-4 text-center ">
        <div>
          <Image
            src={`https:${fields.file.url}`}
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
          <span style={{ fontSize: 15 }}>{title}</span>
        </div>
        <div style={{ fontSize: 15 }} className="font-darkGray text-darkGray ">
          {description}
        </div>
      </div>
      <div className="flex">
        <a href={link} target={"_blank"} rel="noreferrer">
          <Linkedin height={25} width={25} />
        </a>
      </div>
    </div>
  );
};
export default TeamMemberCard;
