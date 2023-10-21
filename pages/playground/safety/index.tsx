import NextLink from "next/link";
import { useEffect, useState } from "react";

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
    <div
      className={`flex flex-col items-center justify-center min-h-screen py-2 bg-yellow-100 space-y-8 lg:space-y-4 mt-10 md:mt-20 lg:mt-0 opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
      } duration-1000`}
    >
      <div
        className={`fixed top-0 left-0 w-full bg-yellow-100 py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-16 text-yellow-800`}
      >
        {/* Back button */}
        <NextLink href="/playground" className="w-1/4">
          <h5 className="font-nunito text-2xl lg:text-4xl font-bold hover:text-trust-blue-hover duration-300">
            Back
          </h5>
        </NextLink>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-gaegu text-center mt-16 text-yellow-500">
        Safety
      </h1>

      {/* Options */}
      <div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 justify-center items-center mx-24 lg:mx-12 space-y-8 lg:space-y-0 lg:gap-16 lg:gap-x-32 py-4">
        {/* Safety Tips */}
        <NextLink
          href="/playground/safety/safety-tips"
          className="flex flex-col justify-center items-center space-y-4"
        >
          <div className="bg-white hover:bg-yellow-400 border-solid border-8 border-amber-500 py-10 lg:px-8 xl:py-14 flex flex-col justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-40 duration-300 text-amber-500">
            <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">
              Safety Tips
            </h3>
          </div>
        </NextLink>

        {/* Common Scams */}
        <NextLink
          href="/playground/safety/common-scams"
          className="flex flex-col justify-center items-center space-y-4"
        >
          <div className="bg-white hover:bg-yellow-400 border-solid border-8 border-amber-500 py-10 lg:px-8 xl:py-14 flex flex-col justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-40 duration-300 text-amber-500">
            <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">
              Common Scams
            </h3>
          </div>
        </NextLink>

        {/* Quiz */}
        <NextLink
          href="/playground/safety/quiz"
          className="flex flex-col justify-center items-center space-y-4"
        >
          <div className="bg-white hover:bg-yellow-400 border-solid border-8 border-amber-500 py-10 lg:px-8 xl:py-14 flex flex-col justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-40 duration-300 text-amber-500">
            <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">
              Quiz
            </h3>
          </div>
        </NextLink>

        {/* Practice */}
        <NextLink
          href="/playground/safety/practical"
          className="flex flex-col justify-center items-center space-y-4"
        >
          <div className="bg-white hover:bg-yellow-400 border-solid border-8 border-amber-500 py-10 lg:px-8 xl:py-14 flex flex-col justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-40 duration-300 text-amber-500">
            <h3 className="font-bold font-nunito text-2xl xl:text-3xl text-center">
              Practical
            </h3>
          </div>
        </NextLink>
      </div>

      {/* Background Images */}
      <img
        src="/assets/safety/shield.png"
        alt="Shield"
        className="w-1/5 fixed top-12 right-60 z-20"
      />
      <img
        src="/assets/safety/virus.png"
        alt="Virus"
        className="w-1/4 md:w-1/6 lg:w-1/8 fixed top-12 bottom-0 -translate-y-1/2 lg:top-44 right-0.5"
      />
    </div>
  );
};

export default SafetyPage;
