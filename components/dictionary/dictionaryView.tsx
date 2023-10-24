import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { Term } from './dictionaryData';
import { ListOfTerms, TermsData } from './dictionaryData';
import BackButton from '../backButton';
import { Topic } from '../backButton';


//Dictionary view component
type DictionaryViewProps = {
    updateCurrentViewState: (isDictionaryViewOpenNew: boolean) => void,
    updateCurrentTerm: (newCurrentTerm: Term) => void,
    updateCurrentSearchTerm: (newCurrentSearchTerm: string) => void,
    getCurrentSearchTerm: () => string;
    
};



export default function DictionaryView( { updateCurrentViewState, updateCurrentTerm, updateCurrentSearchTerm, getCurrentSearchTerm } : DictionaryViewProps) {

    // Animation
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      // Set isActive to true after a short delay when the component is mounted
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 100); // Adjust the delay as needed
  
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);

    //Dictionary data
    const allTerms: ListOfTerms = TermsData;

    //Search bar filtering functionality
    const handleChangeSearchTerm = (e : any) => {
        e.preventDefault()
        updateCurrentSearchTerm(e.target.value);
    }

    //Opens the definition of the term
    const handleOpenDefinition = (term: string, shortDescription: string, leadingText: string, imageUrl:string, explanation:string) => {
        let newTermToUse = {
            term: term,
            shortDescription: shortDescription,
            leadingText: leadingText,
            imageUrl: imageUrl,
            explanation: explanation
        };

        updateCurrentTerm(newTermToUse);
        updateCurrentViewState(false);

    }


    return (
        <div className={`flex flex-col justify-center items-center space-y-8 z-10 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            {/* Back button */}
            <BackButton pathToReturnTo='/playground' displayText='Back'  category={Topic.Dictionary} />

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center">Dictionary</h1>

            {/* Search bar */}
            <input
                type="search"
                id='search-bar'
                className="fixed top-0 -translate-y-3 right-10 z-30 p-2 md:p-4 font-nunito text-lg sm:text-xl md:text-2xl text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-2 focus:ring-wisdom-purple-hover focus:border-wisdom-purple-hover outline-none"
                placeholder="Search Computer Term"
                value={ getCurrentSearchTerm() }
                onChange={handleChangeSearchTerm }
            />

            {/* List of Terms Container */}
            <div className='flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-8 w-4/5'>
                {
                    allTerms.terms.map((term, index) =>
                        (term.term.toLowerCase().includes(getCurrentSearchTerm().toLowerCase()))
                        ? <div key={index} className='border-4 border-wisdom-purple-500 bg-white rounded-xl p-4 flex flex-col justify-start items-start space-y-4 mx-4 h-40 hover:bg-wisdom-purple-hover hover:text-white duration-300 hover:border-wisdom-purple-hover cursor-pointer'
                        onClick= { () => handleOpenDefinition(term.term, term.shortDescription, term.leadingText, term.imageUrl, term.explanation) }>
                            <h2 className='font-gaegu font-bold text-3xl xl:text-4xl'>{ term.term }</h2>
                            <h4 className='font-nunito text-xl xl:text-2xl'>{ term.shortDescription }</h4>
                        </div>
                        : ''
                    )
                }
            </div>

            {/* White space below */}
            <div className='h-4'></div>

        </div>

            
          
           
         


    )
}