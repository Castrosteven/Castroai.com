import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { IBlogPost, IBlogPostFields } from "../../@types/generated/contentful";
import { client } from "../../hooks/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../../components/Layout";
import ContactUsForm from "../../components/Landing/ContactUsForm";
import { options } from "../../utils/documentRenderOption";
const BlogPost = ({ post }: { post: IBlogPost }) => {
  console.log(
    post.fields.hero && post.fields.hero.fields.image.fields.file.url
  );
  return (
    <Layout>
      <Head>
        <title>{post.fields.title}</title>
      </Head>

      <div
        className="h-96"
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url( https:${
            post.fields.hero && post.fields.hero.fields.image.fields.file.url
          } );`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
