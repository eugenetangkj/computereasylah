import BackButton, { Topic } from "@/components/backButton";
import Head from "next/head";
import { useEffect, useState } from "react";
import TypingChallengeGame from "@/components/typing/challenge/challenge-game";
import { getStoryScenesFromString } from "@/components/typing/story-data";

// Typing challenge start screen
export default function TypingChallenge() {
  // Animation
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set isActive to true after a short delay when the component is mounted
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  const [hasStartedChallenge, setHasStartedChallenge] = useState(false);

  //Starts quiz
  const handleStartChallenge = () => {
    setHasStartedChallenge(true);
  };

  return (
    <div>
      <Head>
        <title>Playground - Typing Challenge</title>
      </Head>
      <div className={`flex flex-col items-center justify-start py-2 bg-white space-y-8 lg:space-y-4 ${hasStartedChallenge ? 'pt-0 mt-0 py-0 h-screen' : 'pt-28 md:pt-8 md:mt-20 lg:mt-20'}`}>

        {!hasStartedChallenge ? (
           <BackButton
           pathToReturnTo="/typing"
           category={Topic.Typing}
           displayText="Quit"
       /> 
        ) : ''
        }
       


        <div className='hidden lg:block'>
        {!hasStartedChallenge ? (
          <div className="flex flex-col justify-center items-center space-y-24 2xl:space-y-36">
            <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center">
              Typing Challenge
            </h1>

            <h3 className="text-xl lg:text-3xl font-nunito text-center mx-24">
              Confident in typing? Try out this challenge!
            </h3>

            <button
              className="text-3xl md:text-4xl lg:text-5xl font-gaegu bg-energy-orange-500 hover:bg-energy-orange-hover font-bold px-8 py-4 rounded-2xl duration-300"
              onClick={handleStartChallenge}
            >
              Start Challenge
            </button>
          </div>
        ) : (
          <TypingChallengeGame storyData={getStoryScenesFromString('challenge')} />
        )}
        </div>

        <div className='lg:hidden w-screen'>
            {/* Only available on desktop message, only shown on mobile */}
            <div className='flex lg:hidden flex-col justify-start items-center space-y-16'>
                <BackButton pathToReturnTo='/typing' displayText='Back' category={Topic.Typing} />
                <h1 className="text-3xl md:text-4xl font-bold font-gaegu text-center mx-8">Sorry, this activity is only available on a computer.</h1>
                <img src='/assets/email/computer.png' alt='Computer' className='w-2/5 md:w-1/4' />
            </div>
        </div>


        {/* Background Images */}
        {!hasStartedChallenge ?
        (
        <img
          src="/assets/typing/tilted_keyboard.png"
          alt="Keyboard"
          className="w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 right-0 translate-x-3/10 -translate-y-1/2 z-20"
        />)
        : ''
        }

        { !hasStartedChallenge ?
        (
        <img
          src="/assets/typing/tilted_i_cursor_icon.png"
          alt="I Cursor"
          className="w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 translate-y-3/4 lg:top-1/8 left-4 -translate-x-2/5"
        />)
        :''
        }

      </div>
    </div>
  );
}
