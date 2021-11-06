import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import People from "../assets/landing/people.svg";
import Teamwork from "../assets/landing/teamwork.jpg";
import Button from "../components/Button";
import BackgroundImage from "../assets/pexels-startup-stock-photos-7096.jpg";
import Image from "next/image";
//
import { GetStaticProps } from "next";
import { createClient } from "contentful";
import Layout from "../components/Layout";
import {
  IService,
  ITeamMember,
  CONTENT_TYPE,
} from "../@types/generated/contentful";
import ServiceCard from "../components/ServiceCard";
import TeamMemberCard from "../components/TeamMemberCard";
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

const Home: NextPage<props> = ({ teamMembers, services }) => {
  return (
    <div className="">
      <Head>
        <title>Castro AI LLC</title>
        <meta name="description" content="Custom Web Application Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Main hero section */}
        <section className="hero h-3/4 flex items-center ">
          <div className="text-white text-left container mx-auto p-5 flex flex-col space-y-10 ">
            <p className="text-3xl font-semibold">
              ENTERPRISE SOFTWARE <br />
              DEVELOPMENT
            </p>
            <p>
              Let our team of Certified Engineers and Designers be on your team.
            </p>
            <Button className="w-3/4 md:w-1/4">Read our case studies</Button>
          </div>
        </section>
        {/* About */}
        <section className="bg-white h-3/4 pt-16">
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
          <div className="container mx-auto p-5 ">
            <div className=" grid md:grid-cols-3 gap-4 items-center">
              {teamMembers.map((member, index) => {
                return <TeamMemberCard key={index} member={member} />;
              })}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
