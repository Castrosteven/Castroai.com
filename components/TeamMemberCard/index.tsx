import { ITeamMember } from "../../@types/generated/contentful";
import Image from "next/image";
const TeamMemberCard = ({ member }: { member: ITeamMember }) => {
  const { description, link, name, picture, title } = member.fields;
  const { fields } = picture;
  return (
    <div className=" lg:w-3/4  h-full flex flex-col justify-center items-center p-5 bg-lightBlue rounded-lg gap-2 ">
      <Image
        src={`https:${fields.file.url}`}
        alt={""}
        width={150}
        height={150}
        className="rounded-full"
      />
      <div className="text-black p-2 rounded-lg bg-white w-3/4 md:w-full h-1/2 text-center ">
        <p className="text-center">{name}</p>
        <span>{title}</span>
        <div className="font-darkGray text-darkGray ">{description}</div>
        <a href={link} target={"_blank"} rel={"noreferrer"}>
          Follow me on linkendin
        </a>
      </div>
    </div>
  );
};
export default TeamMemberCard;
