import LevelSelection from '@/components/typing/level-selection';
import { LevelOption } from '@/components/typing/level-selection';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TypingMainUI from '@/components/typing/typing-main-ui';
import React from 'react';

import { useEffect, useState } from 'react';
import BackButton, { Topic } from '@/components/backButton';
import Head from 'next/head';

import NextLink from 'next/link';

const storyLevelOptions: LevelOption[] = [{
    label: 'Hawker Center',
    id: 'chickenrice',
    imageSrc: '/assets/typing/chickenrice/chickenrice_stall.png'
},
{
    label: 'MRT Station',
    id: 'mrt',
    imageSrc: '/assets/typing/mrt/tampinesmrttopdownblur.png'
},
{
    label: 'Supermarket',
    id: 'supermarket',
    imageSrc: '/assets/typing/chickenrice/queue.png'
}
]


const StoryPage = () => {
    const router = useRouter();


    // Animation
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Set isActive to true after a short delay when the component is mounted
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 100); // Adjust the delay as needed

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);


    const [chosenStory, setChosenStory] = React.useState<string | null>(null);

    const selectOption = (index: number) => {
        console.log("Chose " + index + " with id " + storyLevelOptions[index].id);

        const chosenStory = storyLevelOptions[index].id;
        // setChosenStory(chosenStory);

        // Tell router to go to ./game/chosenStory
        router.push(`/playground/typing/game/${chosenStory}`)
    }

    return (
        <div>
            <Head>
                <title>Playground - Typing Story </title>
            </Head>
            <div className='bg-white'>

                {chosenStory ?
                    <div>
                        <TypingMainUI chosenStory={chosenStory as string} />
                    </div>
                    :
                    <div className='hidden md:block'>
                        {/* <LevelSelection options={storyLevelOptions} onOptionSelect={(index) => { selectOption(index) }} onBackClick={() => { router.back() }} /> */}

                        <div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-8 lg:space-y-4 mt-10 md:mt-20 lg:mt-0 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>

                            <div className={`fixed top-0 left-0 w-full py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-16`}>
                                {/* Back button */}
                                <NextLink href="/playground/typing" className='w-1/4'>
                                    <h5 className="font-nunito text-2xl lg:text-4xl font-bold hover:text-energy-orange-hover duration-300">Back</h5>
                                </NextLink>
                            </div>
                            {/* Title */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-gaegu text-center mt-16">Choose Level</h1>
                            {/* Levels */}
                            <div className='flex flex-col justify-center items-center mx-24 lg:mx-12 space-y-8 lg:space-y-0 lg:gap-16 lg:gap-x-32 py-4'>
                                {/* Select Basic Levels */}
                                <div className='flex flex-row justify-center items-center space-x-10'>
                                    <button className='flex flex-col justify-center items-center space-y-4' onClick={
                                        () => router.push(`/playground/typing/symbols-game`)
                                    }>
                                        <div className='bg-white hover:bg-energy-orange-900 border-solid border-8 border-energy-orange-900 py-8 lg:px-6 xl:py-10 flex flex-col justify-center items-center rounded-3xl w-72 h-6 lg:w-80 lg:h-12 xl:w-96 xl:h-16 duration-300' style={{ position: 'relative' }}>
                                            <h3 className='font-bold font-nunito text-2xl xl:text-3xl text-center'>Symbols</h3>

                                        </div>
                                    </button>

                                    <button className='flex flex-col justify-center items-center space-y-4' onClick={
                                        () => router.push(`/playground/typing/game/words`)
                                    }>
                                        <div className='bg-white hover:bg-energy-orange-900 border-solid border-8 border-energy-orange-900 py-8 lg:px-6 xl:py-10 flex flex-col justify-center items-center rounded-3xl w-72 h-6 lg:w-80 lg:h-12 xl:w-96 xl:h-16 duration-300' style={{ position: 'relative' }}>
                                            <h3 className='font-bold font-nunito text-2xl xl:text-3xl text-center'>Words</h3>

                                        </div>
                                    </button>
                                </div>

                                {/* Spacer */}

                                {/* <div className='h-1'></div> */}

                                <div>
                                    <span className='font-bold font-nunito text-2xl xl:text-3xl text-center'>Sentences and Stories:</span>
                                </div>

                                { /* Select Story Levels */}

                                <div className='grid grid-cols-2 justify-center'>
                                    {storyLevelOptions.map((option, index) => (
                                        <button
                                            key={index}
                                            className='flex flex-col items-center justify-center m-4 hover:bg-energy-orange-900 border-solid border-8 border-energy-orange-900 rounded-t-3xl duration-300'
                                            style={{ position: 'relative' }}
                                            onClick={() => selectOption(index)}
                                        >
                                            <div className='border-solid border-b-8 border-energy-orange-900 py-8 lg:px-6 xl:py-10 flex flex-col justify-center items-center w-72 h-6 lg:w-80 lg:h-12 xl:w-96 xl:h-16 '>
                                                <span className="font-bold font-nunito text-2xl xl:text-3xl text-center">{option.label}</span>
                                            </div>
                                            <img alt={option.id} src={option.imageSrc} className="object-cover w-72 h-20 lg:w-80 lg:h-32 xl:w-96 xl:h-48" />

                                        </button>
                                    ))}
                                </div>

                            </div>
                        </div>

                        <img src='/assets/typing/tilted_keyboard.png' alt='Keyboard' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 right-0 translate-x-3/10 -translate-y-1/2 z-20' />
                        <img src='/assets/typing/tilted_i_cursor_icon.png' alt='I Cursor' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 translate-y-3/4 lg:top-1/8 left-4 -translate-x-2/5' />

                    </div>
                }

                <div className='md:hidden w-screen h-screen'>
                    {/* Only available on desktop message, only shown on mobile */}
                    <div className='flex md:hidden flex-col justify-center items-center space-y-16'>
                        <BackButton pathToReturnTo='/playground/typing' displayText='Back' category={Topic.Typing} />
                        <h1 className="text-3xl md:text-4xl font-bold font-gaegu text-center mx-8 py-10">Sorry, this activity is only available on a computer.</h1>
                        <img src='/assets/email/computer.png' alt='Computer' className='w-2/5 md:w-1/4' />
                    </div>
                </div>
            </div >

        </div>


    );
};

export default StoryPage;

