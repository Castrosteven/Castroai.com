import Image from "next/image";
import { IService } from "../../@types/generated/contentful";

interface ServiceCardProps {
  service: IService;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { name, slug, logo, description } = service.fields;

  const url = logo.fields.file.url;
  return (
    <div className="bg-white rounded-lg h-full p-14 flex flex-col justify-betwen space-y-4 ">
      <div className="">
        <Image src={`https:${url}`} width={50} height={50} alt={`${name}`} />
      </div>
      <div style={{fontSize:15}} className="font-bold">{name.toUpperCase()}</div>
      <div>
        <span style={{fontSize:13}} >{description}</span>
      </div>
    </div>
  );
};
export default ServiceCard;
