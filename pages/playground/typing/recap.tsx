import NextLink from "next/link";
import { useEffect, useState } from "react";
import BackButton from "@/components/backButton";
import Image from 'next/image';
import { Topic } from "@/components/backButton";
import Head from "next/head";
import Iframe from 'react-iframe'

//Typing Recap page
export default function TypingRecap() {
  // Animation
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set isActive to true after a short delay when the component is mounted
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);


  //Video link to typing recap video
  const videoLink = 'https://www.youtube.com/embed/01CVHD5pp80?si=87N_fwmcFoEUIaUa';

  return (
    <div>
        <Head>
        <title>Playground - Typing Recap</title>
        </Head>
        <div
        className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-8 lg:space-y-16 mt-10 md:mt-20 lg:mt-0 2xl:mt-8 opacity-0 transition-opacity ${
            isActive ? "opacity-100" : ""
        } duration-1000`}
        >
        
        {/* Back button */}
        <BackButton pathToReturnTo='/playground/typing' displayText='Back' category={Topic.Typing} />
        
        {/* Title */}
        <h1 className="text-4xl w-4/5 md:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-gaegu text-center mt-16 z-30">Recap on Typing</h1>
        <h3 className='text-3xl md:text-4xl text-gray-500 font-nunito text-center z-30'>Watch this 5-min recap video to recap what was taught for Typing.</h3>

        {/* Video */}
        <Iframe url={ videoLink }
            height="320px"
            id=""
            className="z-30 w-340p lg:w-540p"
        />






        {/* Background Images */}
        <img src='/assets/typing/tilted_keyboard.png' alt='Keyboard' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 right-0 translate-x-3/10 -translate-y-1/2 z-20' />
        <img src='/assets/typing/tilted_i_cursor_icon.png' alt='I Cursor' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 translate-y-3/4 lg:top-1/8 left-4 -translate-x-2/5' />
        

        
                

            
        </div>
    </div>



    )
}
