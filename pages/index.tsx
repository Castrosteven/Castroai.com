import type { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";
import People from "../assets/landing/people.svg";
import Teamwork from "../assets/landing/teamwork.jpg";
import Button from "../components/Button";

import Image from "next/image";
//
import { GetStaticProps } from "next";
import { createClient } from "contentful";
import Layout from "../components/Layout";
import { IService, IServiceFields } from "../@types/generated/contentful";
import ServiceCard from "../components/ServiceCard";

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_TOKEN_ID!,
  });
  const { items } = await client.getEntries("service");

  return {
    props: {
      items,
    }, // will be passed to the page component as props
  };
};

const Home: NextPage<{ items: IService[] }> = ({ items }) => {
  console.log(items);

  return (
    <div>
      <Head>
        <title>Castro AI LLC</title>
        <meta name="description" content="Custom Web Application Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section
          className="
          h-4/5 bg-white flex flex-col pt-20 p-6 justify-around
          md:flex-row md:h-1/2 md:items-center md:p-12
          lg:pr-60 lg:pl-60
         "
        >
          <div className="md:w-1/2">
            {/* MAIN TEXT */}
            <span className="text-darkBlue  font-extrabold text-3xl">
              Custom Web Application <br /> Development
            </span>
            {/* Small text */}
            <p className="text-base font-normal text-darkGray pt-10 lg:w-2/5">
              We are a New York Based Software Development team that build
              custom web applications and sites for small and large business.
            </p>
            {/* button */}
            <div className="text-left">
              <Button className="w-1/2 mt-4">See our work</Button>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2 lg:w-2/5">
            <People />
          </div>
        </section>
        <section className="h-3/4 md:h-1/2 md:w-full bg-darkBlue text-white p-6 md:p-12 lg:pl-60 lg:pr-60 md:flex-row md:flex  md:items-center lg:justify-around  ">
          <div className="text-left md:w-1/2 md:flex md:flex-col md:justify-around p-2 lg:w-2/5 ">
            <p className="text-2xl pb-7">
              About <span className="font-BroLink ">castroai</span>
            </p>
            <div>
              <span className="font-BroLink">castroai</span> was founded in 2021
              in the state of New York. We are a team of certified engenieers &
              designers with years of experience all working towards the same
              goal. To deliver you and your business with the highest quality
              product. We’ve already helped out many new business in making
              their dreams come true. Now it’s your turn.
            </div>
          </div>

          <div className="md:w-1/2 flex items-center lg:w-2/5 ">
            <Image src={Teamwork} alt="" className="rounded-lg" />
          </div>
        </section>
        <section className="bg-lightBlue  pt-10 pl-5 pr-5 items-center flex flex-col justify-center">
          <div className="font-black text-3xl text-center">
            Software Development Services
          </div>
          <div className="text-center font-medium pt-5">
            With a lot of great services, we guarantee simplicity and clarity.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-center p-10">
            {items.map((item, index) => {
              return <ServiceCard key={index} service={item} />;
            })}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
