import NextLink from "next/link";
import { useEffect, useState } from "react";
import BackButton from "@/components/backButton";
import Image from 'next/image';
import { Topic } from "@/components/backButton";

//Backup Iphone page
export default function BackupIphone() {
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
      className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-8 lg:space-y-16 mt-10 md:mt-20 lg:mt-0 2xl:mt-8 opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
      } duration-1000`}
    >
      
      {/* Back button */}
      <BackButton pathToReturnTo='/playground/applications/backup-phone' displayText='Back' category={Topic.Applications} />
     
      {/* Title */}
      <h1 className="text-4xl w-4/5 md:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-gaegu text-center mt-16 z-10">Back Up My Iphone to the Computer</h1>
      <h3 className='text-3xl md:text-4xl text-gray-500 font-nunito text-center'>Coming soon...</h3>


     
              

        {/* Background Images */}
        <img src='/assets/applications/terminal-interface.png' alt='Terminal' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10' />
        <img src='/assets/applications/video.png' alt='Video' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5' />
        </div>



    )
}
