import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { IServices } from "../../../@types/generated/contentful";

interface ServiceCardProps {
  service: IServices;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { description, title, icon } = service.fields;
  return (
    <div className="bg-white rounded-lg h-full p-14 flex flex-col justify-betwen space-y-4 shadow-lg hover:shadow-2xl cursor-pointer ">
      <div className="">
        <Image src={`https:${icon.fields.file.url}`} width={50} height={50} />
      </div>
      <div style={{ fontSize: 15 }} className="font-bold">
        {title}
      </div>
      <div>
        <span style={{ fontSize: 13 }}>
          {documentToReactComponents(description)}
        </span>
      </div>
    </div>
  );
};
export default ServiceCard;
