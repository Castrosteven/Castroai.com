import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const Service = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div>
        <div className="pt-20 bg-gray-800"></div>
        <div className="container mx-auto">
          <h1>HELLO I AM SERIVE PAGE FOR {slug}</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Service;
