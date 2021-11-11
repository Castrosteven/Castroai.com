import { GetStaticProps, NextPage } from "next";
import { client } from "..";
import { IPost } from "../../@types/generated/contentful";
import PostCard from "../../components/Blog/PostCard";

import Layout from "../../components/Layout";
export const getStaticProps: GetStaticProps = async () => {
  const { items } = await client.getEntries({
    content_type: "post",
  });
  return {
    props: {
      items,
    },
  };
};

type BlogPageProps = {
  items: IPost[];
};
const Blog: NextPage<BlogPageProps> = ({ items }) => {
  return (
    <Layout>
      <div className="pt-20 bg-gray-800"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 p-10">
          {items.map((post, index) => {
            return <PostCard post={post} key={index} />;
          })}
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
