import BackButton from "@/components/backButton";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { MdComputer } from "react-icons/md";
import Image from 'next/image';
import { Topic } from "@/components/backButton";
import Head from "next/head";

//Home page for email activities in the playground
export default function Email() {
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
        <title>Playground - Email</title>
      </Head>

      <div
        className={`flex flex-col items-center justify-start h-80vh lg:justify-center py-2 bg-white space-y-8 lg:space-y-4 mt-20 lg:mt-24 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}
      >
        
        {/* Back button */}
        <BackButton pathToReturnTo='/' displayText='Back' category={Topic.Email} />
      
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center mt-16">
          Email
        </h1>
        {/* Options */}
        <div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 justify-center items-center mx-24 lg:mx-12 space-y-8 lg:space-y-0 lg:gap-y-8 lg:gap-x-32 2xl:gap-y-16 py-4">
          {/* Recap */}
          <NextLink
            href="/email/recap"
            className="flex flex-col justify-center items-center space-y-4"
          >
            <div className="bg-white hover:bg-trust-blue-900 border-solid border-8 border-trust-blue-900 py-10 lg:px-8 xl:py-16 flex justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-16 duration-300">
              <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">
                Recap
              </h3>
            </div>
          </NextLink>

          {/* Email Safety */}
          <NextLink
            href="/email/email-safety"
            className="flex flex-col justify-center items-center"
          >
            <div className="bg-white hover:bg-trust-blue-900 border-solid border-8 border-trust-blue-900 py-10 lg:px-8 xl:py-16 flex justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-16 duration-300">
              <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">
                Email Safety
              </h3>
            </div>
          </NextLink>

          {/* Practice */}
          <NextLink
            href="/email/practice"
            className="flex flex-col justify-center items-center space-y-4"
          >
            <div
              className="bg-white hover:bg-trust-blue-900 border-solid border-8 border-trust-blue-900 py-10 lg:px-8 xl:py-16 flex flex-col justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-16 duration-300"
              style={{ position: "relative" }}
            >
              <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">
                Practice
              </h3>
              <MdComputer
                className="text-trust-blue-900 text-3xl lg:text-4xl"
                style={{ position: "absolute", bottom: "20px", right: "20px" }}
              />
            </div>
          </NextLink>

          {/* Quiz */}
          <NextLink
            href="/email/quiz"
            className="flex flex-col justify-center items-center space-y-4"
          >
            <div className="bg-white hover:bg-trust-blue-900 border-solid border-8 border-trust-blue-900 py-10 lg:px-8 xl:py-16 flex justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-16 duration-300">
              <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">
                Quiz
              </h3>
            </div>
          </NextLink>
        </div>

                

          {/* Background Images */}
          <img src='/assets/email/tilted-mail.png' alt='Mail' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10 z-20' />
          <img src='/assets/email/tilted-email-symbol.png' alt='Address Sign' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5' />
      </div>
    </div>



    )
}
