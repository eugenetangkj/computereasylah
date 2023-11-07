import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { Term } from './dictionaryData';
import Image from 'next/image';
import { Topic } from '../backButton';
import BackButton from '../backButton';


//Dictionary definition component
type DictionaryDefinitionProps = {
    term: Term,
    updateCurrentViewState: (isDictionaryViewOpenNew: boolean) => void;
    currentSearchTerm: string
};


export default function DictionaryDefinition({ term, updateCurrentViewState, currentSearchTerm } : DictionaryDefinitionProps) {

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
        <div className={`mt-8 lg:mt-16 flex flex-col justify-center items-center space-y-8 z-10 xl:space-y-12 mx-8 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            
            {/* Definition View */}
            <div className='flex flex-col justify-start items-center space-y-16 xl:space-y-12 mx-8'>

            {/* Back button, show dictionary view */}
            <div className={`flex justify-start items-center fixed w-full top-0 left-0 py-4 z-30 pt-8 bg-neutral-100 text-center`}>
              <div className="grid grid-cols-3 w-4/5">
                {/* Back button */}
                <button onClick={ () => updateCurrentViewState(true) } className="ml-4 sm:ml-8 lg:ml-16 text-center w-fit">
                    <h5 className={`font-nunito text-2xl lg:text-4xl font-bold hover:text-wisdom-purple-hover duration-300`}>Back</h5>
                  </button>
              </div>
            </div>


            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center">{ term.term }</h1>
            {/* Subtitle */}
            <h2 className="text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold font-gaegu text-center">{ term.leadingText }</h2>
            {/* Image */}
            <img src={ term.imageUrl } alt='Image' className='w-48 md:w-60 lg:w-72 xl:w-96'/>
            {/* Explanation */}
            <p className="text-xl leading-relaxed md:text-2xl md:leading-relaxed lg:text-3xl lg:leading-relaxed 2xl:text-4xl 2xl:leading-relaxed font- font-nunito text-center">{ term.explanation }</p>

            
            {/* White space below */}
            <div className='h-4'></div>


            </div>

        </div>



    )
}