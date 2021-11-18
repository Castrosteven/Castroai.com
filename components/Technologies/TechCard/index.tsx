import { ITechnologys } from "../../../@types/generated/contentful";
import Image from "next/image";
const TechCard = ({ tech }: { tech: ITechnologys }) => {
  const { image } = tech.fields;
  const { fields } = image;
  const { description, file } = fields;
  const { url, details } = file;
  const { height, width } = details.image;
  return (
    <div className="h-40 w-40 text-center">
      {
        <Image
          src={`https:${url}`}
          alt={description}
          layout="responsive"
          width={width}
          height={height}
          className="w-full h-full"
        />
      }
      {description}
    </div>
  );
};

export default TechCard;
