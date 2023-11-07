import NextLink from "next/link";
import { useEffect, useState } from "react";
import BackButton from "@/components/backButton";
import Image from 'next/image';
import { Topic } from "@/components/backButton";
import Head from "next/head";

//Home page for email activities in the playground
export default function Applications() {
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
    <div>
      <Head>
        <title>Playground - Applications</title>
      </Head>
      <div
        className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-8 lg:space-y-4 mt-10 md:mt-20 lg:mt-8 2xl:mt-0 opacity-0 transition-opacity ${
          isActive ? "opacity-100" : ""
        } duration-1000`}
      >
        
        {/* Back button */}
        <BackButton pathToReturnTo='/' displayText='Back' category={Topic.Applications} />
      
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center mt-16">
          Applications
        </h1>
        {/* Options */}
        <div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 justify-center items-center mx-24 lg:mx-12 space-y-8 lg:space-y-0 lg:gap-y-8 lg:gap-x-32 2xl:gap-y-16 py-4">
          {/* Recap */}
          <NextLink
            href="/apps/recap"
            className="flex flex-col justify-center items-center space-y-4"
          >
            <div className="bg-white hover:bg-creative-pink-900 border-solid border-8 border-creative-pink-900 py-10 lg:px-8 xl:py-16 flex justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-16 duration-300">
              <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">
                Recap
              </h3>
            </div>
          </NextLink>

          {/* Common apps */}
          <NextLink
            href="/apps/common-apps"
            className="flex flex-col justify-center items-center"
          >
            <div className="bg-white hover:bg-creative-pink-900 border-solid border-8 border-creative-pink-900 py-10 lg:px-8 xl:py-16 flex justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-16 duration-300">
              <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">Common Apps</h3>
            </div>
          </NextLink>

          {/* Quiz */}
          <NextLink
            href="/apps/quiz"
            className="flex flex-col justify-center items-center space-y-4"
          >
            <div className="bg-white hover:bg-creative-pink-900 border-solid border-8 border-creative-pink-900 py-10 lg:px-8 xl:py-16 flex justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-16 duration-300">
              <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">
                Quiz
              </h3>
            </div>
          </NextLink>
        </div>

                

          {/* Background Images */}
          <img src='/assets/apps/terminal-interface.png' alt='Terminal' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10 z-20' />
          <img src='/assets/apps/video.png' alt='Video' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5' />
      </div>
    </div>



    )
}
