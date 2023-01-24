import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { IBlogPost, IBlogPostFields } from "../../@types/generated/contentful";
import { client } from "../../hooks/useContentful";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";

import Layout from "../../components/Layout";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import ContactUsForm from "../../components/Landing/ContactUsForm";
import Link from "next/link";

export const options: Options = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>
            {" "}
            {node.data.target.fields.title}
          </a>
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={"Image"}
        />
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
      if (node.data.target.sys.contentType.sys.id === "blogPost") {
        const post = node.data.target as IBlogPost;
        return (
          <div className="w-96 ">
            <Link href={`blog/${post.fields.slug}`}>
              <Image
                src={`https:${post.fields.cardImage.fields.file.url}`}
                height={200.25}
                width={357}
                alt={"Image"}
              />
              <div className="pt-7 font-extralight ">
                <p
                  className="text-2xl whitespace-normal"
                  style={{
                    whiteSpace: "initial",
                  }}
                >
                  {post.fields.title}
                </p>
              </div>
            </Link>
          </div>
        );
      }
    },
  },
};

const BlogPost = ({ post }: { post: IBlogPost }) => {
  return (
    <Layout>
      <Head>
        <title>{post.fields.title}</title>
      </Head>

      <div
        className=""
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url( https:${
            post.fields.hero && post.fields.hero.fields.image.fields.file.url
          } )`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="mt-20 mb-20 container mx-auto max-w-7xl prose p-5">
        <div>
          <h1 className="text-center">{post.fields.title}</h1>
        </div>
        <div>{documentToReactComponents(post.fields.body, options)}</div>
      </div>
      <hr />
      <section className="mx-auto container justify-center flex  mt-20 mb-20">
        <div className="md:w-1/2 p-5">
          <div className="text-center">
            <h2>Send us a message</h2>
            <h1>Free CONSULTATION!</h1>
          </div>
          <ContactUsForm />
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
export const getStaticPaths: GetStaticPaths = async () => {
  const { items } = await client.getEntries<IBlogPostFields>({
    content_type: "blogPost",
  });

  const paths = items.map((post) => {
    return { params: { slug: post.fields.slug } };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const post = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: post.items[0],
      preview,
    },
  };
};
