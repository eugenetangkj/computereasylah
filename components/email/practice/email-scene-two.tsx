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
        <div className={`flex flex-col justify-center items-center mx-64 space-y-8 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            {/* Picture image */}
            <img src='/assets/email/australia.png' alt='Australia' className='' />

    
            {/* Text */}
            <h5 className='text-white font-itim text-5xl w-3/4 text-center leading-relaxed'>
                Ah Boon had moved to Australia 4 years ago, and you have not seen him then.
            </h5>

            <div className='flex justify-center space-x-8'>

                {/* Previous button */}
                <button className="bg-white hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-16 rounded-full flex justify-center duration-300 text-3xl w-48"
                onClick={handlePreviousButtonClick}>
                    <span>Previous</span>
                </button>

                {/* Next button */}
                <button className="bg-trust-blue-100 hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-16 rounded-full flex justify-center duration-300 text-3xl w-48"
                onClick={handleNextButtonClick}>
                    <span>Next</span>
                </button>

            </div>

        </div>


    )
}