import NextLink from 'next/link';
import { useEffect, useState } from 'react';

interface EmailSceneTwoProps {
    updateSceneIndex: (index: number) => void
}

//Home page for email activities in the playground
export default function EmailSceneTwo({ updateSceneIndex } : EmailSceneTwoProps) {
    const handleNextButtonClick = () => {
        updateSceneIndex(3);
    }

    const handlePreviousButtonClick = () => {
        updateSceneIndex(1);
    }

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      // Set isActive to true after a short delay when the component is mounted
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 100); // Adjust the delay as needed
  
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);

    
    return (
        <div className={`flex flex-col justify-center items-center space-y-6 2xl:space-y-12 mt-16  opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            {/* Picture image */}
            <img src='/assets/email/catch-up.png' alt='Catch up via email' className='w-36' />

    
            {/* Text */}
            <h5 className='font-nunito text-4xl 2xl:text-5xl w-4/5 text-center leading-relaxed 2xl:leading-relaxed'>
                Let us send an email to the company to register for the fan's warranty.
            </h5>

            <div className='flex justify-center space-x-8'>

                {/* Previous button */}
                <button id='next-button' className="w-56 text-5xl font-gaegu bg-trust-blue-500 hover:bg-trust-blue-hover font-bold px-8 py-4 rounded-2xl duration-300 disabled:bg-gray-200"
                    onClick={handlePreviousButtonClick}>
                        <span>Previous</span>
                </button>

                {/* Next button */}
                <button id='next-button' className="w-56 text-5xl font-gaegu bg-trust-blue-500 hover:bg-trust-blue-hover font-bold px-16 py-4 rounded-2xl duration-300 disabled:bg-gray-200"
                    onClick={handleNextButtonClick}>
                        <span>Next</span>
                </button>

            </div>

        </div>


    )
}