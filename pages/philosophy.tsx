import Text from "@/common/Text";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import { NextPage } from "next";
import React from "react";
import { useEffect, useState } from "react";


const Philosophy: NextPage = () => {

  // Animation
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
      // Set isActive to true after a short delay when the component is mounted
      const timer = setTimeout(() => {
          setIsActive(true);
      }, 100); // Adjust the delay as needed

      return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);



  return (
    <div className={`overflow-x-hidden opacity-0 transition-opacity ${isActive ? "opacity-100" : ""} duration-1000`}>
      <Layout>
        <div className="flex flex-col items-center text-center mx-2">
          {/* Philosophy */}
          <div>
            <Title text="Our Philosophy" className="py-8" />
            <Text
              className="mb-12"
              content="Our team has designed our platform by considering the needs of senior adults in acquiring and practicing fundamental computer skills."
            />
          </div>

          <div className="flex flex-col justify-start items-center space-y-8 w-4/5 self-center">
            {/* Bite-sized */}
            <div className="lg:w-1000p flex flex-col lg:flex-grow space-y-2 lg:flex-row justify-center items-center lg:mx-28 lg:space-x-16">
              {/* Philosophy image and title */}
              <img
                  src="assets/home/philosophy/philosophy-icon-1.png"
                  alt="Bite-sized"
                  className="mx-auto self-center"
                  style={{ height: "75px", width: "75px" }}
              />
              {/* Philosophy details */}
              <div className="flex flex-col justify-center mx-2 lg:items-start">
                  <p className="font-gaegu font-bold text-3xl sm:text-4xl py-4">Bite-sized</p>
                  <p className="font-nunito text-lg md:text-xl self-center lg:self-start lg:text-left mb-8">
                  While the content is split into topics, we encourage recaps of previous topics&apos; content whenever possible.
                  </p>
              </div>
            </div>
          
            {/* Relatability */}
            <div className="lg:w-1000p flex flex-col lg:flex-grow space-y-2 lg:flex-row justify-center items-center lg:mx-28 lg:space-x-16">
              {/* Philosophy image and title */}
              <img
                  src="assets/home/philosophy/philosophy-icon-2.png"
                  alt="Relatibility"
                  className="mx-auto self-center"
                  style={{ height: "75px", width: "75px" }}
              />
              {/* Philosophy details */}
              <div className="flex flex-col justify-center mx-2 lg:items-start">
                  <p className="font-gaegu font-bold text-3xl sm:text-4xl py-4">Relatability</p>
                  <p className="font-nunito text-lg md:text-xl self-center lg:self-start lg:text-left mb-8">
                  We use concepts and images that senior adults are familiar with, instead of complex explanations.
                  </p>
              </div>
            </div>

            {/* Recap */}
            <div className="lg:w-1000p flex flex-col lg:flex-grow space-y-2 lg:flex-row justify-center items-center lg:mx-28 lg:space-x-16">
              {/* Philosophy image and title */}
              <img
                  src="assets/home/philosophy/philosophy-icon-3.png"
                  alt="Recap"
                  className="mx-auto self-center"
                  style={{ height: "75px", width: "75px" }}
              />
              {/* Philosophy details */}
              <div className="flex flex-col justify-center mx-2 lg:items-start">
                  <p className="font-gaegu font-bold text-3xl sm:text-4xl py-4">Recap</p>
                  <p className="font-nunito text-lg md:text-xl self-center lg:self-start lg:text-left mb-8">
                  While the content is split into topics, we encourage recaps of previous topics&apos; content whenever possible.
                  </p>
              </div>
            </div>

            {/* Guided */}
            <div className="lg:w-1000p flex flex-col lg:flex-grow space-y-2 lg:flex-row justify-center items-center lg:mx-28 lg:space-x-16">
              {/* Philosophy image and title */}
              <img
                  src="assets/home/philosophy/philosophy-icon-4.png"
                  alt="Guided"
                  className="mx-auto self-center"
                  style={{ height: "75px", width: "75px" }}
              />
              {/* Philosophy details */}
              <div className="flex flex-col justify-center mx-2 lg:items-start">
                  <p className="font-gaegu font-bold text-3xl sm:text-4xl py-4">Guided</p>
                  <p className="font-nunito text-lg md:text-xl self-center lg:self-start lg:text-left mb-8">
                  For each activity, we provide instructions and guidance so it is clear for the participants regarding how to use them.
                  </p>
              </div>
            </div>

            






          </div>



          {/* Strategy */}
          <div>
            <Title text="Our Strategy" className="py-8 mt-16" />
            <Text
              className="mb-12"
              content="The content and activities on The Playground revolve around 3 main aspects."
            />
          </div>
          <div className="flex flex-col items-center text-center bg-white w-screen xl:w-4/5">
            <div className="w-5/6">
              {/* Recap */}
              <div className=" flex flex-col mb-12 space-y-8">
                {/* Text content */}
                <div className="text-left space-y-4">
                    <Title text="Recap" />
                    <Text content="We highlight and recap the key points that were taught in each topic." className="text-blue-600 font-bold" />
                    <Text content="It could be overwhelming for the participants of computer classes to remember all the content. Thus, we have summary videos that help the participants distill the key points to takeaway. This better helps them to remember important information amidst the wide-ranging content taught in each lesson."/>
                </div>
                {/* Image content */}
                <img
                src="/assets/home/philosophy/activity-icon-1.png"
                alt="Reflect"
                className="self-center w-auto md:w-4/5 lg:w-2/3 xl:w-1/2" />
              </div>

              {/* Practice */}
              <div className=" flex flex-col mb-12 space-y-8">
                {/* Text content */}
                <div className="text-left space-y-4">
                    <Title text="Practice" />
                    <Text content="We provide hands-on interactive activities that build on the content taught in the computer classes." className="text-blue-600 font-bold" />
                    <Text content="Participants value hands-on, and we hear them. We designed hands-on practices that are intended to build confidence amongst the learners with regards to grasping the concepts taught in the classes, providing them an opportunity to apply what they have learned."/>
                </div>
                {/* Image content */}
                <img
                src="/assets/home/philosophy/activity-icon-2.png"
                alt="Practice"
                className="self-center w-auto md:w-4/5 lg:w-2/3 xl:w-1/2" />
              </div>

              {/* Test */}
              <div className=" flex flex-col mb-12 space-y-8">
                {/* Text content */}
                <div className="text-left space-y-4">
                    <Title text="Test" />
                    <Text content="We curate simple assessments that allow the participants to test their knowledge." className="text-blue-600 font-bold" />
                    <Text content="Simple assessments help participants identify areas that they are still unfamiliar with, helping them to check if they have a good understanding of the key concepts taught in the classes."/>
                </div>
                {/* Image content */}
                <img
                src="/assets/home/philosophy/activity-icon-3.png"
                alt="Test"
                className="self-center w-auto md:w-4/5 lg:w-2/3 xl:w-1/2" />
              </div>




            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Philosophy;
