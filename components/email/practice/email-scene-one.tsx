import NextLink from 'next/link';
import { useEffect, useState } from 'react';

interface EmailSceneOneProps {
    updateSceneIndex: (index: number) => void
}

//Home page for email activities in the playground
export default function EmailSceneOne({ updateSceneIndex } : EmailSceneOneProps) {
    const handleNextButtonClick = () => {
        updateSceneIndex(2);
    }


    //Set fade in animation
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
      // Set isActive to true after a short delay when the component is mounted
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 100); // Adjust the delay as needed
  
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);



    return (
        <div className={`flex justify-center items-center mx-16 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            {/* Picture image */}
            <img src='/assets/email/fan.png' alt='Fan' className='w-1/4' />

            {/* Content */}
            <div className='flex flex-col justify-center items-center space-y-16'>
                {/* Text */}
                <h5 className='font-nunito text-5xl xl:text-6xl w-3/4 text-center leading-relaxed xl:leading-relaxed'>
                    You have just bought a new fan.
                </h5>

                {/* Next button */}
                <button id='next-button' className="w-56 text-5xl font-gaegu bg-trust-blue-500 hover:bg-trust-blue-hover font-bold px-16 py-4 rounded-2xl duration-300 disabled:bg-gray-200"
                    onClick={handleNextButtonClick}>
                        <span>Next</span>
                </button>

            </div>

        </div>


    )
}