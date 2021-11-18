import Section from "../../components/Landing/Section";
import Layout from "../../components/Layout";
import Head from "next/head";
import Art from "./assets/Art.svg";
const Technologies = () => {
  return (
    <Layout>
      <Head>
        <title>Technologies</title>
      </Head>
      <div style={{ height: "500px" }}>
        <div className="bg-techHeader bg-cover bg-center bg-no-repeat relative h-full w-full flex items-center justify-center">
          <Section>
            <div className="text-white font-bold" style={{ fontSize: 40 }}>
              THE TECH STACK
            </div>
            <div className="w-3/4 text-white" style={{ fontSize: 18 }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                nisi rerum culpa, dolorum autem ipsa nesciunt nam temporibus
                laborum, veniam nobis ullam praesentium voluptatum nulla. Est
                voluptatibus et quae id.
              </p>
            </div>
          </Section>
        </div>
      </div>
      <Section>
        <div className="flex md:flex-row flex-col h-full">
          <div className="md:w-1/2   ">
            <div className="flex  h-full   flex-col justify-center ">
              <p className="text-left font-bold pb-5" style={{ fontSize: 30 }}>
                ABOUT THE TECH
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                ut placeat non aspernatur ea quos repellat blanditiis, nesciunt
                necessitatibus consequatur. Quibusdam delectus magni cumque
                provident possimus in aliquid voluptas facere?
              </p>
            </div>
          </div>
          <div className="md:w-1/2 ">
            <Art />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Technologies;
