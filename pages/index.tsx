import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import ServiceCard from "../components/Landing/ServiceCard";
import TeamMemberCard from "../components/Landing/TeamMemberCard";
import ContactUsForm from "../components/Landing/ContactUsForm";
import TechImage from "../assets/tech_image.png";
import { client } from "../hooks/useContentful";
import { ILandingPage } from "../@types/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { InlineWidget } from "react-calendly";

export const getStaticProps: GetStaticProps = async () => {
  const landingPage = await client.getEntry("1Khe7iXwdfd8tAfGPXubIJ");

  return {
    props: {
      landingPage: landingPage,
    },
    revalidate: 1,
  };
};

interface props {
  landingPage: ILandingPage;
}

const pageTitle = "Castro AI LLC";

const Home: NextPage<props> = ({ landingPage }) => {
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div className="h-full md:h-96 flex-col md:flex-row flex gap-40 mt-32 p-5 container mx-auto max-w-7xl  ">
        <div className="flex flex-col gap-5 items-start justify-center">
          <h1 className="text-3xl font-semibold ">
            {landingPage.fields.heroHeading}
          </h1>
          <h2 className="text-1xl font-medium">
            {landingPage.fields.heroSubTitle}
          </h2>
          <div className="flex items-center justify-center w-full">
            <Link
              href={"#schedule"}
              style={{
                backgroundColor: "#F36B1C",
              }}
              className="p-2 text-white rounded-md font-semibold"
            >
              Schedule a Free Consultation!
            </Link>
          </div>
        </div>
        <img src={landingPage.fields.heroImage.fields.file.url} alt="" />
      </div>
      {/* Techs Used */}
      <div className="bg-gray-100 h-full  ">
        <div className="flex justify-evenly flex-wrap gap-5 items-center p-10 opacity-95 ">
          {landingPage.fields.technologies.map((tech, index) => {
            return (
              <div key={index}>
                <img
                  className=" filter grayscale opacity-100"
                  src={tech.fields.logo.fields.file.url}
                  alt=""
                  height="auto"
                  width={150}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* About */}
      <section
        id="about"
        className="container mx-auto max-w-7xl h-full flex flex-col gap-10 mt-10 mb-10 pb-10 p-5"
      >
        <p
          style={{ fontSize: 32 }}
          className=" font-bold text-CdarkBlue text-center"
        >
          WHO WE ARE
        </p>
        <div className=" flex justify-center">
          <ReactPlayer url="https://www.youtube.com/watch?v=ZUWsYg1QnmI" />
        </div>
        <div className="text-center space-y-10">
          <div className="font-light leading-loose text-1xl text-darkGray ">
            {documentToReactComponents(landingPage.fields.about)}
          </div>
        </div>
        <div className=" grid md:grid-cols-3 gap-4 items-center">
          {landingPage.fields.teamMembers.map((member, index) => {
            return <TeamMemberCard key={index} member={member} />;
          })}
        </div>
      </section>
      {/* Services */}
      <section className=" bg-gray-100 pt-10 pb-10 p-5 " id="services">
        <div className="container mx-auto max-w-7xl">
          <div className="">
            <p
              style={{ fontSize: 32 }}
              className="font-bold text-CdarkBlue text-center"
            >
              SERVICES
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-10  ">
            {landingPage.fields.services.map((service, index) => {
              return <ServiceCard key={index} service={service} />;
            })}
          </div>
        </div>
      </section>
      {/* Contact */}
      <section
        id="tech"
        className="container mx-auto max-w-7xl mt-10 mb-10 pb-10 p-5"
      >
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
                CASTRO AI can help you build a comprehensive solution that will
                cater to your business needs and help you achieve your key
                objectives.
              </p>
            </div>
            <button className="bg-CdarkOrange text-white p-2 rounded-lg">
              <Link href={"/technologies"}>Read More</Link>
            </button>
          </div>
        </div>
      </section>
      {/* Schedule */}
      <section
        id="schedule"
        className="pt-10 pb-10 bg-gray-100 p-5"
        style={{
          height: "1000px",
        }}
      >
        <p className="text-3xl font-semibold text-center pb-10">
          Free consultation. No strings attached
        </p>
        <InlineWidget
          url="https://calendly.com/castroai/30min"
          styles={{
            overflow: "hidden",
            height: "100%",
          }}
        />
      </section>
      {/* Contact */}
      <section id="contact" className=" pt-10 pb-10">
        <div className="flex flex-col justify-center items-center h-full   ">
          <div className=" pb-10">
            <p style={{ fontSize: 32 }} className=" font-bold text-gray-800">
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
