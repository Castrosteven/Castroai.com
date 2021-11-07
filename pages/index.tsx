import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import Button from "../components/Button";

//
import { GetStaticProps } from "next";
import { createClient } from "contentful";
import Layout from "../components/Layout";

import { IService, ITeamMember } from "../@types/generated/contentful";
import ServiceCard from "../components/ServiceCard";
import TeamMemberCard from "../components/TeamMemberCard";
import SlideShow from "../components/SlideShow";
import ContactUsForm from "../components/ContactUsForm";
export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_TOKEN_ID!,
  });
  // const service = await client.getEntries("service");
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

const desc = "CASTROAI | Custom Web Application Development";
const pageTitle = "Castro AI LLC";
const twitterHandle = "";
const currentURL = "https://www.castroai.com";
const previewImage =
  "https://images.ctfassets.net/t2fhl88kz6ha/4Riwo6PGRC2mEnd8ZzDxg3/bd11a6285887056d952ed4436dba32f5/pexels-thisisengineering-3861972.jpg";
const Home: NextPage<props> = ({ teamMembers, services }) => {
  return (
    <div className="">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={pageTitle} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={desc} key="ogdesc" />
      </Head>
      <Layout>
        {/* Main hero section */}

        <section className=" h-full md:h-1/2 flex items-center ">
          <SlideShow />
        </section>
        {/* About */}
        <section
          className=" bg-white pb-16 pt-16 flex flex-col justify-around items-center "
          id="about"
        >
          <div className="container p-5 md:p-0 flex mx-auto ">
            <div className="text-center pl:20 pr:20  space-y-10">
              <p className="text-2xl font-medium">WHO WE ARE</p>
              <p className="font-light leading-loose text-1xl text-darkGray ">
                <span className="font-BroLink text-black ">castroai</span> was
                founded in 2021 in the state of New York. We are a team of
                certified engenieers & designers with years of experience all
                working towards the same goal. To deliver you and your business
                with the highest quality product. We’ve already helped out many
                new business in making their dreams come true. Now it’s your
                turn.
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
        <section className="bg-gray-100 pb-16 pt-16" id="services">
          <div className="container  text-center p-5 md:p-0 flex flex-col mx-auto">
            <p className="text-2xl font-medium">SERVICES</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center pt-16 ">
              {services.map((service, index) => {
                return <ServiceCard key={index} service={service} />;
              })}
            </div>
          </div>
        </section>
        <section id="contact pb-16 pt-16">
          <div className="container mx-auto flex justify-center items-center ">
            <ContactUsForm />
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
