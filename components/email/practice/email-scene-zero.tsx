import NextLink from 'next/link';
import { useEffect, useState } from 'react';

interface EmailSceneZeroProps {
    updateSceneIndex: (index: number) => void
}

//Home page for email activities in the playground
export default function EmailSceneZero({ updateSceneIndex } : EmailSceneZeroProps) {
    const handleNextButtonClick = () => {
        updateSceneIndex(1);
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
        <div className={`flex justify-center items-center mx-64 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            {/* Picture image */}
            <img src='/assets/email/past-image.png' alt='Past Image' className='' />

            {/* Content */}
            <div className='flex flex-col justify-center items-center space-y-16'>
                {/* Text */}
                <h5 className='text-white font-itim text-5xl w-3/4 text-center leading-relaxed'>
                    You found a photo of you and your friends that was taken 5 years ago....
                </h5>

                {/* Next button */}
                <button className="bg-trust-blue-100 hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-16 rounded-full flex justify-center duration-300 text-5xl w-72"
                onClick={handleNextButtonClick}>
                    <span>Next</span>
                </button>

            </div>

        </div>


    )
}