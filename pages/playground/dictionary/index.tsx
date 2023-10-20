import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import BackButton from '@/components/backButton';
import DictionaryDefinition from '@/components/dictionary/dictionaryDefinition';
import DictionaryView from '@/components/dictionary/dictionaryView';
import { Term, EmptyTerm } from '@/components/dictionary/dictionaryData';
import Image from 'next/image';

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


    //State to track dictionary view or definition view is open
    const [isDictionaryViewOpen, setIsDictionaryViewOpen] = useState(true);
    const [currentTerm, setCurrentTerm] = useState<Term>(EmptyTerm);

    const [currentSearchTerm, setCurrentSearchTerm] = useState('');

    //Helper functions to update states
    const updateCurrentTerm = (newTerm : Term) => {
        setCurrentTerm(newTerm);
    };
    const updateCurrentViewState = (isDictionaryViewOpenNew : boolean) => {
        setIsDictionaryViewOpen(isDictionaryViewOpenNew);
    }
    const updateCurrentSearchTerm = (newSearchTerm : string) => {
        setCurrentSearchTerm(newSearchTerm);
    }
    const getCurrentSearchTerm = () => {
        return currentSearchTerm;
    }


    return (
        <div className={`flex flex-col items-center justify-start py-2 bg-white space-y-8 lg:space-y-8 pt-12 md:pt-8 md:mt-20 lg:mt-4 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            
        
            {/* Either dictionary or definition view */}
            {
                (isDictionaryViewOpen)
                ? <DictionaryView updateCurrentTerm={ updateCurrentTerm } updateCurrentViewState= {updateCurrentViewState} updateCurrentSearchTerm={ updateCurrentSearchTerm } getCurrentSearchTerm={ getCurrentSearchTerm } />
                : <DictionaryDefinition term={ currentTerm } updateCurrentViewState={ updateCurrentViewState } currentSearchTerm={ currentSearchTerm } />
            }

                
            {/* Background Images */}
            <img src='/assets/dictionary/book.png' alt='Book' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-20 left-0 -translate-x-1/4' />
            <img src='/assets/dictionary/computer.png' alt='Computer' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10' />
        </div>



    )
}