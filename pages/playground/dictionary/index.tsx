import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import BackButton from '@/components/backButton';
import { ListOfTerms, TermsData } from '@/components/dictionary/dictionaryData';


//Dictionary home page
export default function Dictionary() {

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
    const [currentSearchTerm, setCurrentSearchTerm] = useState('');
    const handleChangeSearchTerm = (e : any) => {
        e.preventDefault()
        setCurrentSearchTerm(e.target.value);
    }




    return (
        <div className={`flex flex-col items-center justify-start py-2 bg-white space-y-8 lg:space-y-8 pt-28 md:pt-8 md:mt-20 lg:mt-20 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            
            {/* Back button */}
            <BackButton pathToReturnTo='/playground' displayText='Back' />

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center">Dictionary</h1>
        
            {/* Search bar */}
            <input
                type="search"
                id='search-bar'
                className="fixed top-0 -translate-y-3 right-10 z-30 p-2 md:p-4 font-nunito text-lg sm:text-xl md:text-2xl text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-2 focus:ring-wisdom-purple-hover focus:border-wisdom-purple-hover outline-none"
                placeholder="Search Computer Term"
                onChange={handleChangeSearchTerm }
            />
    
            {/* List of Terms Container */}
            <div className='max-h-[50vh] flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-8 w-4/5'>
                {
                    allTerms.terms.map((term, index) =>
                        (term.term.toLowerCase().includes(currentSearchTerm.toLowerCase()))
                        ? <div key={index} className='border-4 border-wisdom-purple-500 bg-white rounded-xl p-4 flex flex-col justify-start items-start space-y-4 mx-4 md:h-54'>
                            <h2 className='font-gaegu font-bold text-3xl'>{ term.term }</h2>
                            <h4 className='font-nunito text-xl'>{ term.shortDescription }</h4>
                        </div>
                        : ''
                    )
                }
            </div>
    
            
            {/* Background Images */}
            <img src='/assets/dictionary/book.png' alt='Book' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-20 left-0 -translate-x-1/4' />
            <img src='/assets/dictionary/computer.png' alt='Computer' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10' />
        </div>



    )
}