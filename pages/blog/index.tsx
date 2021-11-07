import { NextPage } from "next";

import Layout from "../../components/Layout";

const Blog: NextPage = () => {
  return (
    <Layout>
      <div>
        <div className="pt-20 bg-gray-800"></div>
        <div className="container mx-auto">
          <h1>HELLO I AM A BLOG PAGE</h1>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
