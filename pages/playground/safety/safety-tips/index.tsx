import React, { useState, useRef } from "react";
import NextLink from "next/link";
import { VStack } from "@chakra-ui/react";
import Flashcard from "@/components/safety/safety-tips/Flashcard";

const SafetyTips = () => {
  const safetyTipsCards = [
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

  const [safetyIndex, setsafetyIndex] = useState(0);
  const [safetyflipped, setsafetyFlipped] = useState(false);

  const handlesafetyNext = () => {
    if (safetyIndex < safetyTipsCards.length - 1) {
      setsafetyIndex(safetyIndex + 1);
      setsafetyFlipped(false);
    }
  };

  const handlesafetyPrevious = () => {
    if (safetyIndex > 0) {
      setsafetyIndex(safetyIndex - 1);
      setsafetyFlipped(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <VStack>
        <div
          className={`relative left-0 w-full py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-16 text-blue-800`}
        >
          {/* Back button */}
          <NextLink href="/playground/safety" className="w-1/4">
            <h5 className="font-nunito text-2xl lg:text-4xl font-bold hover:text-trust-blue-hover duration-300">
              Back
            </h5>
          </NextLink>
        </div>
        {/*Safety tips*/}
        <div className="text-black m-10">
          <h1 className="text-3xl mb-10">Safety tips</h1>
          <Flashcard
            Front={safetyTipsCards[safetyIndex].Front}
            Back={safetyTipsCards[safetyIndex].Back}
            imageUrl={safetyTipsCards[safetyIndex].imageUrl}
            flipped={safetyflipped}
            setFlipped={setsafetyFlipped}
          />
          <div className="mt-4 flex justify-between">
            <button
              onClick={handlesafetyPrevious}
              disabled={safetyIndex === 0}
              className={`rounded p-2 px-4 ${
                safetyIndex === 0
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-blue-500 text-white cursor-pointer"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handlesafetyNext}
              disabled={safetyIndex === safetyTipsCards.length - 1}
              className={`rounded p-2 px-4 ${
                safetyIndex === safetyTipsCards.length - 1
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
