import Link from "next/link";
import Image from "next/image";
import { IPost } from "../../../@types/generated/contentful";
import style from "./style.module.css";
const PostCard = ({ post }: { post: IPost }) => {
  const { content, slug, subtext, title, postImage } = post.fields;
  const { file, description } = postImage.fields;
  const { height, width } = file.details.image;

  return (
    <div className="rounded-lg flex flex-col justify-center items-center bg-white ">
      {/* image */}
      <div className="w-full">
        <Image
          src={`https:${file.url}`}
          width={width}
          height={height}
          layout="responsive"
          alt={description}
        />
      </div>
      {/* content */}
      <div className=" w-full h-36">{title}</div>
      <div>{subtext}</div>
      {/* Author */}
      <div className="w-full ">STEVE</div>
    </div>
  );
};
export default PostCard;
