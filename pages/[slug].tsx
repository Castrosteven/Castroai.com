import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import {
  IPageContent,
  IPageContentFields,
} from "../@types/generated/contentful";
import Layout from "../components/Layout";
import { client } from "../hooks/useContentful";
import { options } from "../utils/documentRenderOption";

const Page = ({ page }: { page: IPageContent }) => {
  const backgroundImage =
    page.fields.heroBanner &&
    page.fields.heroBanner.fields.image &&
    page.fields.heroBanner.fields.image.fields.file &&
    `url(https:${page.fields.heroBanner.fields.image.fields.file.url})`;
  return (
    <Layout>
      <Head>
        <title>{page.fields.title}</title>
      </Head>
      <div
        style={{
          backgroundImage: backgroundImage,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "400px",
          width: "100%",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 1)",
        }}
      >
        <div className="container mx-auto flex items-center h-full">
          <span className="text-6xl font-extrabold">
            {page.fields.heroBanner && page.fields.heroBanner.fields.headline}
          </span>
        </div>
      </div>
      <main className="prose max-w-7xl container mx-auto">
        {documentToReactComponents(page.fields.body, options)}
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { items } = await client.getEntries<IPageContentFields>({
    content_type: "pageContent",
  });

  const paths = items.map((page) => {
    return { params: { slug: page.fields.slug } };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
};
export default Page;
export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const post = await client.getEntries({
    content_type: "pageContent",
    "fields.slug": params.slug,
  });
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page: post.items[0],
      preview,
    },
  };
};
