import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { IBlogPost, IBlogPostFields } from "../../@types/generated/contentful";
import { client } from "../../hooks/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../../components/Layout";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";
import Image from "next/image";
function paragraphClass(node) {
  const className = "odd";
  //alternate logic for 'odd' | 'even'
  return className;
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={paragraphClass(node)}>{children}</p>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return (
        <div>
          <p>{node.data.target.fields.file.url}</p>
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={"Image"}
          />
        </div>
      );
    },
  },
};
const BlogPost = ({ post }: { post: IBlogPost }) => {
  return (
    <Layout>
      <Head>
        <title>{post.fields.title}</title>
      </Head>
      <div className="mt-20 container mx-auto max-w-7xl">
        <div>
          <p className="text-3xl font-semibold">{post.fields.title}</p>
        </div>
        <div>{documentToReactComponents(post.fields.post, options)}</div>
      </div>
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
