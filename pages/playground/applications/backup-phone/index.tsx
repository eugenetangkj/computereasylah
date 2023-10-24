import NextLink from "next/link";
import { useEffect, useState } from "react";
import BackButton from "@/components/backButton";
import Image from 'next/image';
import { Topic } from "@/components/backButton";
import Head from "next/head";

//Backup phone menu interface
export default function BackupPhone() {
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
        <title>Playground - Backup Phone</title>
      </Head>
      <div
        className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-8 lg:space-y-4 mt-10 md:mt-20 lg:mt-16 2xl:mt-8 opacity-0 transition-opacity ${
          isActive ? "opacity-100" : ""
        } duration-1000`}
      >
        
        {/* Back button */}
        <BackButton pathToReturnTo='/playground/applications' displayText='Back' category={Topic.Applications} />
      
        {/* Title */}
        <h1 className="text-5xl w-4/5 md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center mt-16 z-10">Back Up My Phone</h1>
        {/* Options */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:mx-12 space-y-8 lg:space-y-0 lg:space-x-16 py-8 z-10">
          {/* iPhone */}
          <NextLink href='/playground/applications/backup-phone/iphone' className='w-full'>
              <div className='w-full border-4 border-creative-pink-500 bg-white rounded-xl px-4 py-8 xl:p-12 flex flex-col justify-center items-center space-y-4  hover:bg-creative-pink-hover hover:text-white duration-300 hover:border-creative-pink-hover cursor-pointer'
              style={{ 'height': '250px' }}
              >
                  <h2 className='font-gaegu font-bold self-center text-5xl xl:text-6xl text-center'>I use iPhone</h2>
                  <img src='/assets/applications/apple-logo.png' alt='Apple' className='w-1/4' />
              </div>
          </NextLink>

          {/* Android */}
          <NextLink href='/playground/applications/backup-phone/android' className='w-full'>
              <div className='w-full border-4 border-creative-pink-500 bg-white rounded-xl px-4 py-8 xl:p-12 2xl:p-8  flex flex-col justify-center items-center space-y-4  hover:bg-creative-pink-hover hover:text-white duration-300 hover:border-creative-pink-hover cursor-pointer'
              style={{ 'height': '250px' }}
              >
                  <h2 className='font-gaegu font-bold self-center text-5xl xl:text-6xl text-center'>I use Android</h2>
                  <img src='/assets/applications/android-logo.png' alt='Android' className='w-1/4' />
              </div>
          </NextLink>
          

        
          
        </div>

                

          {/* Background Images */}
          <img src='/assets/applications/terminal-interface.png' alt='Terminal' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10' />
          <img src='/assets/applications/video.png' alt='Video' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5' />
      </div>
    </div>



    )
}
