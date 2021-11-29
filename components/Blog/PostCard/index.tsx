import Link from "next/link";
import Image from "next/image";
import { IPost } from "../../../@types/generated/contentful";
import style from "./style.module.css";
import dayjs from "dayjs";
var localizedFormat = require("dayjs/plugin/localizedFormat");

const PostCard = ({ post }: { post: IPost }) => {
  const { createdAt } = post.sys;
  const { content, slug, subtext, title, postImage } = post.fields;
  const { file, description } = postImage.fields;
  const { height, width } = file.details.image;
  dayjs.extend(localizedFormat);
  //https://day.js.org/docs/en/display/format
  return (
    <div className=" ">
      <Link href={`/blog/${slug}`} passHref>
        <div className="rounded-lg w-full h-96 flex flex-col justify-between items-center bg-white ">
          {/* image */}
          <div className="w-full ">
            <Image
              className="rounded-t-lg"
              src={`https:${file.url}`}
              width={width}
              height={height}
              layout="responsive"
              alt={description}
            />
          </div>
          <div className="flex w-full flex-col text-left h-full justify-around p-2">
            <div className="">{dayjs(createdAt).format("LL")}</div>
            <div className="text-4xl font-bold">{title}</div>
            <div>{subtext}</div>
          </div>
          {/* content */}

          {/* Author */}
        </div>
      </Link>
    </div>
  );
};
export default PostCard;
