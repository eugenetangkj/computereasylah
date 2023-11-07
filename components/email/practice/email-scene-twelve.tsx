import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import BackButton from '@/components/backButton';
import Image from 'next/image';
import { Topic } from '@/components/backButton';

interface EmailSceneTwelveProps {
    updateSceneIndex: (index: number) => void
}

//Home page for email activities in the playground
export default function EmailSceneTwelve({ updateSceneIndex } : EmailSceneTwelveProps) {
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
        <div className={`flex flex-col items-center justify-start py-2 bg-white space-y-8 lg:space-y-4 md:pt-8 md:mt-20 lg:mt-0 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            <BackButton pathToReturnTo='/email' displayText='Exit'  category={ Topic.Email }  />

            {/* Practice instructions, only available on desktop */}
            <div className='flex flex-col justify-center items-center space-y-16'>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-gaegu text-center">Practice Complete!</h1>

                <h3 className='text-xl lg:text-3xl font-nunito text-center mx-8'>Email is a good way for you to keep in touch with others. Keep practicing, and happy emailing.</h3>

                <div className='flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8'>
                        <button className="text-3xl xl:text-4xl font-gaegu bg-trust-blue-500 hover:bg-trust-blue-hover font-bold px-8 py-4 rounded-2xl duration-300 w-64 xl:w-72 border-solid border-4 border-trust-blue-500 hover:border-trust-blue-hover"
                        onClick={handleNextButtonClick}>
                            <span>Take Again</span>
                        </button>
                        <NextLink href='/email' className='my-4'>
                            <button className="text-3xl xl:text-4xl font-gaegu border-solid border-4 border-trust-blue-900 hover:border-trust-blue-hover hover:bg-trust-blue-hover font-bold px-8 py-4 rounded-2xl duration-300 w-64 xl:w-72">
                                <span>Exit</span>
                            </button>
                        </NextLink>

                </div> 
            </div>









            {/* Background Images */}
            <img src='/assets/email/tilted-mail.png' alt='Mail' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10 z-20' />
            <img src='/assets/email/tilted-email-symbol.png' alt='Address Sign' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5' />
        </div>


    )
}