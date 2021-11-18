import Section from "../../components/Landing/Section";
import Layout from "../../components/Layout";
import Head from "next/head";
import Art from "./assets/Art.svg";
import { GetStaticProps, NextPage } from "next";
import { client } from "../index";
import { ITechnologys } from "../../@types/generated/contentful";
import TechCard from "../../components/Technologies/TechCard";
import Image from "next/image";
import Techs from "./assets/TECHS.svg";
export const getStaticProps: GetStaticProps = async () => {
  const { items: technologys } = await client.getEntries({
    content_type: "technologys",
  });

  return {
    props: {
      technologys,
    },
    revalidate: 1,
  };
};

interface props {
  technologys: ITechnologys[];
}

const Technologies: NextPage<props> = ({ technologys }) => {
  return (
    <Layout>
      <Head>
        <title>Technologies</title>
      </Head>
      <section>
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
      </section>
      <section>
        <Section>
          <div className="flex md:flex-row flex-col h-full">
            <div className="md:w-1/2   ">
              <div className="flex  h-full   flex-col justify-center ">
                <p
                  className="text-left font-bold pb-5"
                  style={{ fontSize: 30 }}
                >
                  ABOUT THE TECH
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ut placeat non aspernatur ea quos repellat blanditiis,
                  nesciunt necessitatibus consequatur. Quibusdam delectus magni
                  cumque provident possimus in aliquid voluptas facere?
                </p>
              </div>
            </div>
            <div className="md:w-1/2 ">
              <Art />
            </div>
          </div>
        </Section>
      </section>

      <section>
        <Section>
          <hr />

          <div className="pt-10 pb-10">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
              {technologys.map((tech, index) => {
                return <TechCard tech={tech} key={index} />;
              })}
            </div>
          </div>
        </Section>
      </section>
      <section>
        <Section>
          <hr />

          <div className="flex md:flex-row  flex-col-reverse h-full">
            <div className="md:w-1/2 ">
              <div className="w-full">
                <Techs />
              </div>
            </div>
            <div className="md:w-1/2   ">
              <div className="flex  h-full  flex-col justify-center ">
                <p
                  className="md:text-right font-bold pb-5"
                  style={{ fontSize: 30 }}
                >
                  PLATFORMS & TECHNOLOGIES
                </p>
                <p className="md:text-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia ut placeat non aspernatur ea quos repellat blanditiis,
                  nesciunt necessitatibus consequatur. Quibusdam delectus magni
                  cumque provident possimus in aliquid voluptas facere?
                </p>
              </div>
            </div>
          </div>
        </Section>
      </section>
    </Layout>
  );
};

export default Technologies;
