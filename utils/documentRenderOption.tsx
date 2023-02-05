import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import { Options } from "@contentful/rich-text-react-renderer";
import { IBlogPost } from "../@types/generated/contentful";
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
