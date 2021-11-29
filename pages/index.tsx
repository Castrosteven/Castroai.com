import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { createClient } from "contentful";
import Layout from "../components/Layout";
import { IService, ITeamMember } from "../@types/generated/contentful";
import ServiceCard from "../components/Landing/ServiceCard";
import TeamMemberCard from "../components/Landing/TeamMemberCard";
import SlideShow from "../components/Landing/SlideShow";
import ContactUsForm from "../components/Landing/ContactUsForm";
import TechImage from "../assets/tech_image.png";
import Section from "../components/Landing/Section";
import ReactPlayer from "react-player";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_TOKEN_ID!,
});

export const getStaticProps: GetStaticProps = async () => {
  const { items: teamMembers } = await client.getEntries({
    content_type: "teamMember",
  });
  const { items: services } = await client.getEntries({
    content_type: "service",
  });

  return {
    props: {
      teamMembers,
      services,
    },
    revalidate: 1,
  };
};

interface props {
  teamMembers: ITeamMember[];
  services: IService[];
}

const pageTitle = "Castro AI LLC";

const Home: NextPage<props> = ({ teamMembers, services }) => {
  return (
    <Layout>
      {/* Main hero section */}
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <SlideShow />
      {/* About */}
      <section
        className=" bg-white  flex flex-col justify-around items-center "
        id="about"
      >
        <Section>
          <div className="pt-10 pb-10">
            <p
              style={{ fontSize: 32 }}
              className=" font-bold text-CdarkBlue text-center"
            >
              WHO WE ARE
            </p>
          </div>
          <div className="pt-10 pb-10 flex justify-center">
            <ReactPlayer url="https://www.youtube.com/watch?v=ZUWsYg1QnmI" />
          </div>
          <div className="text-center space-y-10">
            <p className="font-light leading-loose text-1xl text-darkGray ">
              <span className="font-BroLink text-black ">castroai LLC</span> was
              founded in 2021 in the state of New York. We are a team of
              certified engenieers & designers with years of experience all
              working towards the same goal. To deliver you and your business
              with the highest quality product. We’ve already helped out many
              new business in making their dreams come true. Now it’s your turn.
            </p>
          </div>
        </Section>

        <Section>
          <div className=" grid md:grid-cols-3 gap-4 items-center">
            {teamMembers.map((member, index) => {
              return <TeamMemberCard key={index} member={member} />;
            })}
          </div>
        </Section>
      </section>
      {/* Services */}
      <section className=" bg-gray-100 " id="services">
        <Section>
          <div className="pt-10 pb-10">
            <p
              style={{ fontSize: 32 }}
              className="font-bold text-CdarkBlue text-center"
            >
              SERVICES
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center  ">
            {services.map((service, index) => {
              return <ServiceCard key={index} service={service} />;
            })}
          </div>
        </Section>
      </section>
      {/* Contact */}
      <section id="tech" className="bg-white ">
        <Section>
          <div className="flex flex-col md:flex-row md:flex-wrap  justify-center items-center">
            <div className="pt-10 pb-10 md:w-full">
              <p
                style={{ fontSize: 32 }}
                className=" font-bold text-CdarkBlue   text-center "
              >
                THE TECH STACK
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src={TechImage} alt="Tech" className="rounded-sm" />
            </div>
            <div className="text-center md:w-1/2 md:p-5">
              <div>
                <p className="text-left md:text-center">
                  Build your software leveraging the latest technological
                  improvements and breakthroughs. Whether you are looking for a
                  mobile, tablet, desktop, or cross-platform software suite,
                  CASTRO AI can help you build a comprehensive solution that
                  will cater to your business needs and help you achieve your
                  key objectives.
                </p>
              </div>
              <button className="bg-CdarkOrange text-white p-2 rounded-lg">
                <Link href={"/technologies"}>Read More</Link>
              </button>
            </div>
          </div>
        </Section>
      </section>
      {/* Contact */}
      <section id="contact" className="  bg-gray-400 ">
        <Section>
          <div className="flex flex-col justify-center items-center h-full   ">
            <div className="pt-10 pb-10">
              <p style={{ fontSize: 32 }} className=" font-bold text-gray-800">
                👋 Say Hello
              </p>
            </div>
            <ContactUsForm />
          </div>
        </Section>
      </section>
    </Layout>
  );
};

export default Home;
