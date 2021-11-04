import type { NextPage } from "next";
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
import { IService } from "../@types/generated/contentful";
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
  return (
    <div className="py-14">
      <Head>
        <title>Castro AI LLC</title>
        <meta name="description" content="Custom Web Application Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className=" pl-5 pr-5 flex justify-center items-center">
          {/* Main Hero Section */}
          <div className="container md:flex md:justify-around ">
            {/* Text & Buttons */}
            <div className="md:w-1/2 md:flex md:flex-col md:justify-center p-10  ">
              {/* MAIN TEXT */}
              <span className="text-darkBlue  font-extrabold text-3xl">
                Custom Web Application <br /> Development
              </span>
              {/* Small text */}
              <p className="text-base font-normal text-darkGray ">
                We are a New York Based Software Development team that build
                custom web applications and sites for small and large business.
              </p>
              {/* button */}
              <div className="text-left">
                <Button className="w-1/2 mt-4">Contact us</Button>
              </div>
            </div>
            {/* Image */}
            <div className=" flex flex-col justify-end">
              <People />
            </div>
          </div>
        </section>
        {/* About Us Section */}
        <section className="bg-darkBlue text-white p-5 flex justify-center items-center">
          <div className="container pt-10 pb-10 md:flex md:justify-around">
            {/* Text Section */}
            <div className="text-left p-2 md:w-1/2 ">
              <p className="text-2xl pb-7">
                About <span className="font-BroLink ">castroai</span>
              </p>
              <div>
                <span className="font-BroLink">castroai</span> was founded in
                2021 in the state of New York. We are a team of certified
                engenieers & designers with years of experience all working
                towards the same goal. To deliver you and your business with the
                highest quality product. We’ve already helped out many new
                business in making their dreams come true. Now it’s your turn.
              </div>
            </div>
            {/* Image Container */}
            <div className="flex items-end md:w-1/2 lg:w-1/4  ">
              <Image src={Teamwork} alt="" className="rounded-lg" />
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="bg-lightBlue p-5 flex justify-center items-center">
          <div className="container pt-10 pb-10  ">
            {/* Large Text */}
            <div className="font-black text-3xl text-center">
              Software Development Services
            </div>
            {/* Small Text */}
            <div className="text-center text-sm font-medium pt-10 pb-10">
              With a lot of great services, we guarantee simplicity and clarity.
            </div>
            {/* Card Grid */}
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {items.map((item, index) => {
                return <ServiceCard key={index} service={item} />;
              })}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Home;
