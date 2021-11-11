import Link from "next/link";
import { IPost } from "../../../@types/generated/contentful";
const PostCard = ({ post }: { post: IPost }) => {
  const { content, slug, subtext, title } = post.fields;
  return (
    <div className="bg-white h-52 rounded-lg">
      <div className="flex flex-col items-center justify-around h-full">
        <div>{title}</div>
        <div>{subtext}</div>
        <Link href={`/blog/${slug}`} passHref>
          <a className="bg-red-300 p-2 rounded-lg text-white hover:bg-red-500">
            READ MORE
          </a>
        </Link>
      </div>
    </div>
  );
};
export default PostCard;
