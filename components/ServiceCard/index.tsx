import Image from "next/image";

interface ServiceCardProps {
  img: string;
  title: string;
  text: string;
  color: string;
}

const ServiceCard = ({ img, text, title, color }: ServiceCardProps) => {
  return (
    <div className="bg-white w-80 h-80 flex justify-center space-y-2 items-center flex-col rounded-2xl p-10 ">
      <div
        className={`bg-${color} p-6 rounded-lg flex  justify-center items-center`}
      >
        <Image
          src={img}
          sizes=""
          priority
          className=""
          width={"50"}
          height={"50"}
        />
      </div>
      <div>
        <p className={`text-${color}`}>{title}</p>
      </div>
      <div>
        <p className={`text-center text-sm text-black`}>{text}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
