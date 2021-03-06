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
      <div className="bg-gray-200">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-4 p-24">
            {items.map((post, index) => {
              return <PostCard post={post} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
