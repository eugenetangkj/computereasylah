import React, { useState, useRef } from "react";
import NextLink from "next/link";
import { VStack } from "@chakra-ui/react";
import Flashcard from "@/components/safety/safety-tips/Flashcard";

const SafetyTips = () => {
  const preemptiveMeasuresCards = [
    {
      Front: <div>Keep your software up to date</div>,
      Back: (
        <div>
          Software updates often include security patches that fix
          vulnerabilities. Make sure to keep your operating system, web browser,
          and other software up to date to stay protected.
        </div>
      ),
      imageUrl: "/assets/safety/safety-tips/update-software.png",
    },
    {
      Front: <div>Don&apos;t overshare on social media</div>,
      Back: (
        <div>
          Be careful about what you post on social media. Avoid sharing personal
          information, such as your home address or phone number, and be mindful
          of who can see your posts.
        </div>
      ),
      imageUrl: "/assets/safety/safety-tips/social-media-sharing.png",
    },
    {
      Front: <div>Watch out for fake tech support scams</div>,
      Back: (
        <div>
          Scammers may pose as tech support representatives and ask you to give
          them remote access to your computer. They may then install malware or
          steal your personal information. If you need tech support, contact the
          company directly.
        </div>
      ),
      imageUrl: "/assets/safety/safety-tips/tech-support-scam.png",
    },
  ];

  const commonScamCards = [
    {
      Front: <div>Keep your software up to date</div>,
      Back: (
        <div>
          Software updates often include security patches that fix
          vulnerabilities. Make sure to keep your operating system, web browser,
          and other software up to date to stay protected.
        </div>
      ),
      imageUrl: "/assets/safety/safety-tips/update-software.png",
    },
    {
      Front: <div>Don&apos;t overshare on social media</div>,
      Back: (
        <div>
          Be careful about what you post on social media. Avoid sharing personal
          information, such as your home address or phone number, and be mindful
          of who can see your posts.
        </div>
      ),
      imageUrl: "/assets/safety/safety-tips/social-media-sharing.png",
    },
    {
      Front: <div>Watch out for fake tech support scams</div>,
      Back: (
        <div>
          Scammers may pose as tech support representatives and ask you to give
          them remote access to your computer. They may then install malware or
          steal your personal information. If you need tech support, contact the
          company directly.
        </div>
      ),
      imageUrl: "/assets/safety/safety-tips/tech-support-scam.png",
    },
  ];

  const [preemptiveIndex, setPreemptiveIndex] = useState(0);
  const [preemptiveflipped, setPreemptiveFlipped] = useState(false);
  const [scamIndex, setScamIndex] = useState(0);
  const [scamflipped, setScamFlipped] = useState(false);

  const handlePreemptiveNext = () => {
    if (preemptiveIndex < preemptiveMeasuresCards.length - 1) {
      setPreemptiveIndex(preemptiveIndex + 1);
      setPreemptiveFlipped(false);
    }
  };

  const handlePreemptivePrevious = () => {
    if (preemptiveIndex > 0) {
      setPreemptiveIndex(preemptiveIndex - 1);
      setPreemptiveFlipped(false);
    }
  };

  const handleScamNext = () => {
    if (preemptiveIndex < preemptiveMeasuresCards.length - 1) {
      setScamIndex(preemptiveIndex + 1);
      setScamFlipped(false);
    }
  };

  const handleScamPrevious = () => {
    if (preemptiveIndex > 0) {
      setScamIndex(preemptiveIndex - 1);
      setScamFlipped(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div
        className={`fixed top-0 left-0 w-full bg-white py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-16 text-blue-800`}
      >
        {/* Back button */}
        <NextLink href="/playground/safety" className="w-1/4">
          <h5 className="font-nunito text-2xl lg:text-4xl font-bold hover:text-trust-blue-hover duration-300">
            Back
          </h5>
        </NextLink>
      </div>
      <VStack>
        {/*Preemptive Measures*/}
        <div className="text-black m-10">
          <h1 className="text-3xl mb-10">Pre-emptive Measures</h1>
          <Flashcard
            Front={preemptiveMeasuresCards[preemptiveIndex].Front}
            Back={preemptiveMeasuresCards[preemptiveIndex].Back}
            imageUrl={preemptiveMeasuresCards[preemptiveIndex].imageUrl}
            flipped={preemptiveflipped}
            setFlipped={setPreemptiveFlipped}
          />
          <div className="mt-4 flex justify-between">
            <button
              onClick={handlePreemptivePrevious}
              disabled={preemptiveIndex === 0}
              className={`rounded p-2 px-4 ${
                preemptiveIndex === 0
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-blue-500 text-white cursor-pointer"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handlePreemptiveNext}
              className={`rounded p-2 px-4 ${
                preemptiveIndex === preemptiveMeasuresCards.length - 1
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-blue-500 text-white cursor-pointer"
              }`}
            >
              Next
            </button>
          </div>
        </div>

        <div className="text-black m-10">
          <h1 className="text-3xl mb-10">Common Scams</h1>
          <Flashcard
            Front={commonScamCards[scamIndex].Front}
            Back={commonScamCards[scamIndex].Back}
            imageUrl={commonScamCards[scamIndex].imageUrl}
            flipped={scamflipped}
            setFlipped={setScamFlipped}
          />
          <div className="mt-4 flex justify-between">
            <button
              onClick={handleScamPrevious}
              disabled={scamIndex === 0}
              className={`rounded p-2 px-4 ${
                scamIndex === 0
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-blue-500 text-white cursor-pointer"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleScamNext}
              className={`rounded p-2 px-4 ${
                scamIndex === commonScamCards.length - 1
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-blue-500 text-white cursor-pointer"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </VStack>
    </div>
  );
};

export default SafetyTips;