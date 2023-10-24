import NextLink from "next/link";
import { useEffect, useState } from "react";
import BackButton from "@/components/backButton";
import Image from 'next/image';
import { Topic } from "@/components/backButton";

//Home page for common apps in Applications
export default function CommonApps() {
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
      className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-8 lg:space-y-4 mt-10 md:mt-20 lg:mt-16 2xl:mt-0 opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
      } duration-1000`}
    >
      
      {/* Back button */}
      <BackButton pathToReturnTo='/playground/applications' displayText='Back' category={Topic.Applications} />
     
      {/* Title */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center mt-16">
        Common Apps
      </h1>
      {/* Apps to learn*/}
      <div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 justify-center items-center mx-8 lg:mx-12 space-y-8 lg:space-y-0 lg:gap-y-8 lg:gap-x-24 2xl:gap-y-16 py-8 z-10">
        {/* Snipping tool */}
        <NextLink href='/playground/applications/common-apps/snipping-tool' className='w-full'>
            <div className='border-4 border-creative-pink-500 bg-white rounded-xl p-8 flex flex-col justify-start items-start self-center space-y-4 mx-4 hover:bg-creative-pink-hover hover:text-white duration-300 hover:border-creative-pink-hover cursor-pointer'
            style={{ 'height': '225px' }}
            >
                <div className='flex justify-between w-full'>
                    <h2 className='font-gaegu font-bold self-center text-3xl xl:text-4xl'>Snipping Tool</h2>
                    <img src='/assets/applications/snipping-tool-logo.png' alt='Snipping Tool' className='' />
                </div>
                
                <h4 className='font-nunito text-xl xl:text-2xl'>Take a picture of your computer screen!</h4>
            </div>
        </NextLink>

        {/* Browser */}
        <NextLink href='/playground/applications/common-apps/browser' className='w-full'>
            <div className='border-4 border-creative-pink-500 bg-white rounded-xl p-8 flex flex-col justify-start items-start self-center space-y-4 mx-4 hover:bg-creative-pink-hover hover:text-white duration-300 hover:border-creative-pink-hover cursor-pointer'
            style={{ 'height': '225px' }}
            >
                <div className='flex justify-between w-full'>
                    <h2 className='font-gaegu font-bold self-center text-3xl xl:text-4xl'>Browser</h2>
                    <img src='/assets/applications/edge-logo.png' alt='Microsoft Edge' className='' />
                </div>
                
                <h4 className='font-nunito text-xl xl:text-2xl'>Access the Internet and visit different sites!</h4>
            </div>
        </NextLink>

        {/* Calculator */}
        <NextLink href='/playground/applications/common-apps/calculator' className='w-full h-full'>
            <div className='border-4 border-creative-pink-500 bg-white rounded-xl p-8 flex flex-col justify-start items-start self-center space-y-4 mx-4 hover:bg-creative-pink-hover hover:text-white duration-300 hover:border-creative-pink-hover cursor-pointer'
            style={{ 'height': '225px' }}
            >
                <div className='flex justify-between w-full'>
                    <h2 className='font-gaegu font-bold text-3xl self-center xl:text-4xl'>Calculator</h2>
                    <img src='/assets/applications/calculator-logo.png' alt='Calculator' className='' />
                </div>
                
                <h4 className='font-nunito text-xl xl:text-2xl'>Need to calculate something?</h4>
            </div>
        </NextLink>

        {/* Paint */}
        <NextLink href='/playground/applications/common-apps/paint' className='w-full h-full'>
            <div className='border-4 border-creative-pink-500 bg-white rounded-xl p-8 flex flex-col justify-start items-start self-center space-y-4 mx-4 hover:bg-creative-pink-hover hover:text-white duration-300 hover:border-creative-pink-hover cursor-pointer'
            style={{ 'height': '225px' }}
            >
                <div className='flex justify-between w-full'>
                    <h2 className='font-gaegu font-bold text-3xl self-center xl:text-4xl'>Paint</h2>
                    <img src='/assets/applications/paint-logo.png' alt='Snipping Tool' className='' />
                </div>
                
                <h4 className='font-nunito text-xl xl:text-2xl'>Draw shapes and text on your computer!</h4>
            </div>
        </NextLink>









        
      </div>

              

        {/* Background Images */}
        <img src='/assets/applications/terminal-interface.png' alt='Terminal' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10 z-20' />
        <img src='/assets/applications/video.png' alt='Video' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5' />
        </div>



    )
}
