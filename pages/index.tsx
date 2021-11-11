import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { GetStaticProps } from "next";
import { createClient } from "contentful";
import Layout from "../components/Layout";
import { IService, ITeamMember } from "../@types/generated/contentful";
import ServiceCard from "../components/ServiceCard";
import TeamMemberCard from "../components/TeamMemberCard";
import SlideShow from "../components/SlideShow";
import ContactUsForm from "../components/ContactUsForm";

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
        className=" bg-white pb-16 pt-16 flex flex-col justify-around items-center "
        id="about"
      >
        <div className="container p-5  flex mx-auto ">
          <div className="text-center pl:20 pr:20  space-y-10">
            <p style={{ fontSize: 32 }} className=" font-bold text-CdarkBlue">
              WHO WE ARE
            </p>
            <p className="font-light leading-loose text-1xl text-darkGray ">
              <span className="font-BroLink text-black ">castroai LLC</span> was
              founded in 2021 in the state of New York. We are a team of
              certified engenieers & designers with years of experience all
              working towards the same goal. To deliver you and your business
              with the highest quality product. We’ve already helped out many
              new business in making their dreams come true. Now it’s your turn.
            </p>
          </div>
          {/*  */}
        </div>
        <div className="container   mx-auto p-5 ">
          <div className=" grid md:grid-cols-3 gap-4 items-center">
            {teamMembers.map((member, index) => {
              return <TeamMemberCard key={index} member={member} />;
            })}
          </div>
        </div>
      </section>
      {/* Services */}
      <section className=" bg-gray-100 pb-16 pt-16" id="services">
        <div className="container  text-center p-5  flex flex-col mx-auto">
          <p style={{ fontSize: 32 }} className="font-bold text-CdarkBlue">
            SERVICES
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center pt-16 ">
            {services.map((service, index) => {
              return <ServiceCard key={index} service={service} />;
            })}
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="  bg-gray-400 ">
        <div className="container mx-auto p-5 pb-10 flex flex-col justify-center items-center h-full  ">
          <div className="p-5">
            <p style={{ fontSize: 32 }} className=" font-bold text-gray-800">
              {" "}
              👋 Say Hello
            </p>
          </div>
          <ContactUsForm />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
