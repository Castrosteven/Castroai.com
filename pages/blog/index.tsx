import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticProps } from "next";
import Link from "next/link";
import { IPageContent } from "../../@types/generated/contentful";
import Layout from "../../components/Layout";
import { client } from "../../hooks/useContentful";
import { options } from "./[slug]";

const Blog = ({ blogPosts }: { blogPosts: IPageContent }) => {
  return (
    <Layout>
      <title>{blogPosts.fields.title}</title>
      <div className="mt-20 container mx-auto max-w-7xl p-5">
        <div className="h-20 border-t-2 border-gray-800 border-b-2">
          <ul className="h-full w-full flex justify-start items-center gap-12">
            <li>Mobile Apps</li>
            <li>Social Media Marketing</li>
          </ul>
        </div>
        <div className="mt-20">
          <section>
            {documentToReactComponents(blogPosts.fields.body, options)}
          </section>
        </div>
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
