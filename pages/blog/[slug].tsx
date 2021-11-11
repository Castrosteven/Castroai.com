import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Layout from "../../components/Layout";
import { client } from "..";
import { IPost } from "../../@types/generated/contentful";
import { ParsedUrlQuery } from "querystring";

export const getStaticPaths: GetStaticPaths = async () => {
  const { items } = (await client.getEntries({
    content_type: "post",
  })) as { items: IPost[] };

  const paths = items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const { items } = (await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  })) as { items: IPost[] };
  return {
    props: {
      items,
    },
  };
};

type PostProps = {
  items: IPost[];
};

const Post: NextPage<PostProps> = ({ items }) => {
  const { title } = items[0].fields;

  return (
    <Layout>
      <div className="pt-20 bg-gray-800"></div>
      <div className="bg-gray-100 p-10 container mx-auto">{title}</div>
    </Layout>
  );
};

export default Post;
