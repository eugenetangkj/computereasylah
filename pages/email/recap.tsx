import NextLink from "next/link";
import { useEffect, useState } from "react";
import BackButton from "@/components/backButton";
import Image from "next/image";
import { Topic } from "@/components/backButton";
import Head from "next/head";
import Iframe from "react-iframe";

//Email recap page
export default function EmailRecap() {
  // Animation
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set isActive to true after a short delay when the component is mounted
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  //Video link to email recap video
  const videoLink =
    "https://www.youtube.com/embed/n3Vf4rSO1yM?si=72xUT-cXsts0Kk36";

  return (
    <div>
      <Head>
        <title>Playground - Email Recap</title>
      </Head>
      <div
        className={`flex flex-col items-center justify-start h-80vh lg:justify-center py-2 bg-white space-y-8 lg:space-y-16 mt-20 lg:mt-24 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}
      >
        {/* Back button */}
        <BackButton
          pathToReturnTo="/email"
          displayText="Back"
          category={Topic.Email}
        />

        {/* Title */}
        <h1 className="text-4xl w-4/5 md:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-gaegu text-center mt-16 z-10">
          Recap on Email
        </h1>
        <h3 className="text-3xl md:text-4xl text-gray-500 font-nunito text-center">
          Watch this 5-min recap video to recap what was taught for Email.
        </h3>

        {/* Video */}
        <Iframe
          url={videoLink}
          height="300px"
          id=""
          className="z-30 w-340p lg:w-540p"
        />

        {/* Background Images */}
        <img
          src="/assets/email/tilted-mail.png"
          alt="Mail"
          className="w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10 z-20"
        />
        <img
          src="/assets/email/tilted-email-symbol.png"
          alt="Address Sign"
          className="w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5"
        />
      </div>
    </div>
  );
}
