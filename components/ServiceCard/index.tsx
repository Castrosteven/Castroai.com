import Image from "next/image";
import { IService } from "../../@types/generated/contentful";

interface ServiceCardProps {
  service: IService;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { name, slug, logo, description } = service.fields;

  const url = logo.fields.file.url;
  return (
    <div className="flex flex-col justify-around h-full gap-4 rounded-lg">
      <div className="bg-white w-20 h-20 rounded-full text-center items-center flex justify-center">
        <Image src={`https:${url}`} width={50} height={50} alt={`${name}`} />
      </div>
      <div className="text-2xl font-bold">{name}</div>
      <div>
        <span>{description}</span>
      </div>
    </div>
  );
};
export default ServiceCard;
