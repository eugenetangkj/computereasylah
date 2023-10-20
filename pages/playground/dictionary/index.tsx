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

    //Opens the definition of the term
    const handleOpenDefinition = () => {

    }




    return (
        <div className={`flex flex-col items-center justify-start py-2 bg-white space-y-8 lg:space-y-8 pt-12 md:pt-8 md:mt-20 lg:mt-4 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            
           
            {/* Dictionary View */}
            <div className='hidden flex-col justify-center items-center space-y-8 z-10'>
                {/* Back button */}
                <BackButton pathToReturnTo='/playground' displayText='Back' />

                {/* Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center">Dictionary</h1>

                {/* Search bar */}
                <input
                    type="search"
                    id='search-bar'
                    className="fixed top-8 -translate-y-3 right-10 z-30 p-2 md:p-4 font-nunito text-lg sm:text-xl md:text-2xl text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-2 focus:ring-wisdom-purple-hover focus:border-wisdom-purple-hover outline-none"
                    placeholder="Search Computer Term"
                    onChange={handleChangeSearchTerm }
                />

                {/* List of Terms Container */}
                <div className='flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-8 w-4/5'>
                    {
                        allTerms.terms.map((term, index) =>
                            (term.term.toLowerCase().includes(currentSearchTerm.toLowerCase()))
                            ? <div key={index} className='border-4 border-wisdom-purple-500 bg-white rounded-xl p-4 flex flex-col justify-start items-start space-y-4 mx-4 h-40 hover:bg-wisdom-purple-hover hover:text-white duration-300 hover:border-wisdom-purple-hover cursor-pointer'
                            onClick= { handleOpenDefinition }>
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

            {/* Definition View */}
            <div className='flex flex-col justify-center items-center space-y-8 xl:space-y-12 mx-8'>
            <div className={`fixed w-full bg-white top-0 left-0 py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-8`}>
                {/* Back button */}
                <NextLink href='{ pathToReturnTo }' className=''>
                <h5 className="font-nunito text-2xl lg:text-4xl font-bold hover:text-trust-blue-hover duration-300" style={{ display: 'inline-block', width: '5%', height: '100%' }}>Back</h5>
                </NextLink>
            </div>
               
                 
                {/* Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center">Browser</h1>
                {/* Subtitle */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold font-gaegu text-center">Find these icons familiar?</h2>
                {/* Image */}
                <img src='https://www.eweek.com/wp-content/uploads/2021/02/browser-logos.png' alt='Image' className='w-48 md:w-60 lg:w-72 xl:'/>
                {/* Explanation */}
                <p className="text-xl leading-relaxed md:text-2xl md:leading-relaxed lg:text-3xl lg:leading-relaxed 2xl:text-4xl 2xl:leading-relaxed font- font-nunito text-center">A browser is an app that you use to surf the Internet. It allows you to visit different websites. When you click on any of the above icons on your phone or computer, you are using a browser!</p>

                
                {/* White space below */}
                <div className='h-4'></div>


            </div>

           
            
            {/* Background Images */}
            <img src='/assets/dictionary/book.png' alt='Book' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-20 left-0 -translate-x-1/4' />
            <img src='/assets/dictionary/computer.png' alt='Computer' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10' />
        </div>



    )
}