import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ContentTypeCollection, EntryCollection } from "contentful";
import { GetServerSideProps, GetStaticProps } from "next";
import Link from "next/link";
import {
  IBlogPost,
  IBlogPostFields,
  IPageContent,
} from "../../@types/generated/contentful";
import Layout from "../../components/Layout";
import { client } from "../../hooks/useContentful";
import { options } from "./[slug]";

const Blog = ({ blogPosts }: { blogPosts: IPageContent }) => {
  return (
    <Layout>
      <div className="mt-20 container mx-auto max-w-7xl">
        <div>{documentToReactComponents(blogPosts.fields.body, options)}</div>
      </div>
    </Layout>
  );
};
export default Blog;
export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await client.getEntry("52tqFDxyJo93QHlY2Glo6w");
  return {
    props: {
      blogPosts,
    },
    revalidate: 10,
  };
};
