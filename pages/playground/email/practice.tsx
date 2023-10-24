import { useEffect, useState } from "react";
import EmailSceneZero from "@/components/email/practice/email-scene-zero";
import EmailSceneOne from "@/components/email/practice/email-scene-one";
import EmailSceneTwo from "@/components/email/practice/email-scene-two";
import EmailSceneThree from "@/components/email/practice/email-scene-three";
import EmailSceneFour from "@/components/email/practice/email-scene-four";
import EmailSceneFive from "@/components/email/practice/email-scene-five";
import EmailSceneSix from "@/components/email/practice/email-scene-six";
import EmailSceneSeven from "@/components/email/practice/email-scene-seven";
import EmailSceneEight from "@/components/email/practice/email-scene-eight";
import EmailSceneNine from "@/components/email/practice/email-scene-nine";
import EmailSceneTen from "@/components/email/practice/email-scene-ten";
import EmailSceneEleven from "@/components/email/practice/email-scene-eleven";
import EmailSceneTwelve from "@/components/email/practice/email-scene-twelve";
import EmailSceneThirteen from "@/components/email/practice/email-scene-thirteen";
import BackButton from "@/components/backButton";
import Image from "next/image";
import { Topic } from "@/components/backButton";
import Head from "next/head";

//Practice component for email activities
export default function EmailPractice() {
  //Current scene loaded
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  // Function to update scene index
  const updateCurrentSceneIndex = (index: number) => {
    setCurrentSceneIndex(index);
  };

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
      <title>Playground - Email Practice</title>
    </Head>
      <div
        className={`h-screen w-screen flex flex-col items-center justify-center overflow-x-hidden opacity-0 transition-opacity ${
          isActive ? "opacity-100" : ""
        } duration-1000`}
      >
        <div className="hidden lg:block">
          {currentSceneIndex == 0 ? (
            <EmailSceneZero updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 1 ? (
            <EmailSceneOne updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 2 ? (
            <EmailSceneTwo updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 3 ? (
            <EmailSceneThree updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 4 ? (
            <EmailSceneFour updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 5 ? (
            <EmailSceneFive updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 6 ? (
            <EmailSceneSix updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 7 ? (
            <EmailSceneSeven updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 8 ? (
            <EmailSceneEight updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 9 ? (
            <EmailSceneNine updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 10 ? (
            <EmailSceneTen updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 11 ? (
            <EmailSceneEleven updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 12 ? (
            <EmailSceneTwelve updateSceneIndex={updateCurrentSceneIndex} />
          ) : currentSceneIndex == 13 ? (
            <EmailSceneThirteen updateSceneIndex={updateCurrentSceneIndex} />
          ) : (
            <EmailSceneZero updateSceneIndex={updateCurrentSceneIndex} />
          )}
        </div>
        <div className="lg:hidden">
          {/* Only available on desktop message, only shown on mobile */}
          <div className="flex lg:hidden flex-col justify-center items-center space-y-16">
            <BackButton pathToReturnTo="/playground/email" displayText="Back" category= { Topic.Email } />
            <h1 className="text-3xl md:text-4xl font-bold font-gaegu text-center mx-8">
              Sorry, this activity is only available on a computer.
            </h1>
            <img
              src="/assets/email/computer.png"
              alt="Computer"
              className="w-2/5 md:w-1/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
