import Text from "@/common/Text";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import { philosophyDetails, philosophyInfo } from "@/constants";
import { NextPage } from "next";
import Image from "next/image";
import philosophyIcon from "public/assets/home/philosophy/philosophy-icon.png";
import React from "react";

interface TopicProps {
  title: string;
  text: string;
  imageSrc: any;
  imageAlt: string;
}

const Topic: React.FC<TopicProps> = ({ title, text, imageSrc, imageAlt }) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row text-center">
        <div className="flex flex-col justify-between w-full sm:w-1/3 md:w-1/3">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="h-20 sm:h-32 mx-auto w-auto"
          />
          <p className="font-gaegu font-bold text-3xl sm:text-4xl py-4">{title}</p>
        </div>
        <div className="w-full sm:w-1/3 md:w-2/3">
          <p className="font-nunito text-lg sm:text-xl md:text-2xl sm:text-left">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

interface TopicDetailsProps {
  title: string;
  subtitle: string;
  text: string;
  imageSrc: any;
  imageAlt: string;
}

const TopicDetails: React.FC<TopicDetailsProps> = ({
  title,
  subtitle,
  text,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="text-left w-full sm:w-1/2">
          <Title text={title} />
          <Text content={subtitle} className="text-trust-blue-900 font-bold" />
          <Text content={text} />
        </div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-2/3 sm:w-1/2 mx-auto"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

const Philosophy: NextPage = () => {
  return (
    <div>
      <Layout>
        <div className="text-center">
          <div>
            <Title text="Our Philosophy" className="py-8" />
            <Image
              src={philosophyIcon}
              alt="phisolophy icon"
              className="w-full sm:w-1/2 mx-auto"
            />
            <Text
              className="mb-12"
              content="Our team has designed our platform by considering the needs of senior adults in acquiring and practicing fundamental computer skills."
            />
          </div>
          <div className="flex flex-col items-center text-center w-screen">
            <div className="w-5/6 sm:w-1/3 md:w-2/3">
              {philosophyInfo.map((topic, index) => {
                // Format the index with leading zeros
                const formattedIndex = (index + 1).toString().padStart(2, "0");
                const imagePath =
                  "/assets/home/philosophy/philosophy-icon-" + (index + 1) + ".png";

                return (
                  <Topic
                    key={index}
                    title={topic.title}
                    text={topic.content}
                    imageSrc={imagePath}
                    imageAlt={topic.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center text-center bg-white w-screen">
            <div className="w-5/6 sm:w-1/3 md:w-2/3">
              {philosophyDetails.map((topic, index) => {
                // Format the index with leading zeros
                const formattedIndex = (index + 1).toString().padStart(2, "0");
                const formattedTitle = `${formattedIndex} ${topic.title}`;
                const imagePath =
                  "/assets/home/philosophy/activity-icon-" + (index + 1) + ".png";

                return (
                  <TopicDetails
                    key={index}
                    title={formattedTitle}
                    subtitle={topic.subtitle}
                    text={topic.text}
                    imageSrc={imagePath}
                    imageAlt={topic.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Philosophy;
