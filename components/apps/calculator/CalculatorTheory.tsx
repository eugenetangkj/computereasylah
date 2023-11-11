import { useEffect, useState } from "react";
import Iframe from 'react-iframe'

//Calculator theory component
type CalculatorTheoryProps = {
    updateCurrentElementIndex: (newIndex: number) => void,
};




export default function CalculatorTheory({ updateCurrentElementIndex } : CalculatorTheoryProps ){
  // Animation
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set isActive to true after a short delay when the component is mounted
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100); // Adjust the delay as needed
    window.scrollTo(0, 0);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  
  const videoLink = 'https://www.youtube.com/embed/tgbNymZ7vqY';



  return ( <div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-12 lg:space-y-8 mt-10 md:mt-20 lg:mt-16 2xl:mt-0 opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
    } duration-1000`}>

        {/* Title */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-x-12 lg:space-y-0 mt-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center">Calculator</h1>
            <img src='/assets/apps/calculator-logo.png' alt='Calculator' className='' />
        </div>

        <h3 className='text-2xl text-gray-500 font-nunito text-center'>Need to calculate something? Use the calculator!</h3>

        {/* Video */}
        <Iframe url={ videoLink }
            height="300px"
            id=""
            className="z-20 w-340p lg:w-540p"
        />

        {/* Next button */}
        <button id='next-button' className="hidden lg:flex w-56 text-5xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover font-bold px-16 py-4 rounded-2xl duration-300"
        onClick={ () => updateCurrentElementIndex(1) }>
            <span>Next</span>
        </button>

        <div className='h-8'>

        </div>

    </div>
      
      

    )
}
