import BackButton from "@/components/backButton";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { Topic } from "@/components/backButton";
import Head from "next/head";

interface SafetyOptionProps {
  href: string;
  title: string;
}

const SafetyOption: React.FC<SafetyOptionProps> = ({ href, title }) => {
  return (
    <NextLink href={href} className="flex flex-col justify-center items-center">
      <div className="bg-white hover:bg-passion-red-900 border-solid border-8 border-passion-red-900 py-10 lg:px-8 xl:py-16 flex justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-16 duration-300">
        <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">
          {title}
        </h3>
      </div>
    </NextLink>
  );
};

const SafetyPage = () => {
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
        <title>Playground - Safety</title>
      </Head>
      <div
        className={`flex flex-col items-center justify-start h-80vh lg:justify-center py-2 bg-white space-y-8 lg:space-y-4 mt-20 lg:mt-24 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}
      >
        <BackButton pathToReturnTo='/' displayText='Back' category={Topic.Safety} />
        

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center mt-16">
          Safety
        </h1>

        {/* Options */}
        <div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 justify-center items-center mx-24 lg:mx-12 space-y-8 lg:space-y-0 lg:gap-y-8 lg:gap-x-32 2xl:gap-y-16 py-4">
          <SafetyOption href="/safety/recap" title="Recap" />
          <SafetyOption href="/safety/tips" title="Safety Tips" />
          <SafetyOption href="/safety/practice" title="Practice" />
          <SafetyOption href="/safety/quiz" title="Quiz" />
        </div>

        {/* Background Images */}
        <img
          src="/assets/safety/tilted_shield.png"
          alt="Shield"
          className="w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10 z-20"
        />
        <img
          src="/assets/playground/cursor.png"
          alt="Shield"
          className="w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5"
        />
      </div>
    </div>
  );
};

export default SafetyPage;
