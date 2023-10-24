import { useEffect, useState } from "react";
import NextLink from "next/link";

//Calculator complete screen component
type CalculatorCompleteProps = {
    updateCurrentElementIndex: (newIndex: number) => void,
};




export default function CalculatorComplete({ updateCurrentElementIndex } : CalculatorCompleteProps ){
  // Animation
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set isActive to true after a short delay when the component is mounted
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);



  return ( <div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-12 lg:space-y-16 mt-10 md:mt-20 lg:mt-8 2xl:mt-0 opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
    } duration-1000`}>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center mt-16">Great Job!</h1>


     
        {/* Navigation buttons */}
        <div className='flex justify-center items-center space-x-8'>

            {/* Practice Again button */}
            <button id='practice-again-button' className="hidden lg:flex justify-center w-96 text-5xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover border-4 border-creative-pink-500 hover:border-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300"
            onClick={ () => updateCurrentElementIndex(0) }>
                <span>Practice Again</span>
            </button>

         

            {/* Exit button */}
            <NextLink href='/playground/applications/common-apps'>
                <button id='check-button' className="hidden lg:flex justify-center w-96 text-5xl font-gaegu bg-white border-solid border-4 border-creative-pink-900 hover:bg-creative-pink-hover hover:border-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300"
                >
                    <span>Exit</span>
                </button>
            </NextLink>
  
        </div>

        <div className='h-8'>

        </div>

    </div>
      
      

    )
}
