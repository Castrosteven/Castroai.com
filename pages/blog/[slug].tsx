import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Layout from "../../components/Layout";
import { client } from "..";
import { IPost } from "../../@types/generated/contentful";
import { ParsedUrlQuery } from "querystring";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

import Image from "next/image";
import { useEffect } from "react";

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
  const post = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
    limit: 1,
    include: 10,
  });
  return {
    props: {
      post,
    },
  };
};

const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "post") {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre className="language-javascript">
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "video") {
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
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};

const Post: NextPage<{ post: any }> = ({ post }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  return (
    <Layout>
      <div className="container mx-auto">
        <div className={`h-full p-10 container mx-auto`}>
          {documentToReactComponents(
            post.items[0].fields.content,
            renderOptions
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Post;
