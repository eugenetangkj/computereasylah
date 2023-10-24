import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { MdComputer } from 'react-icons/md';
import { Topic } from '@/components/backButton';
import BackButton from '@/components/backButton';
import Head from 'next/head';


//Home page for typing activities in the playground (Using template from email page)
export default function TypingPage() {

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

        <div>
            <Head>
                <title>Playground - Typing </title>
            </Head>
            <div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-8 lg:space-y-4 mt-10 md:mt-20 lg:mt-0 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
                <div className={`fixed top-0 left-0 w-full bg-white py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-16`}>
                    {/* Back button */}
                    <BackButton pathToReturnTo='/playground' displayText='Back' category={Topic.Typing} />
                </div>
                {/* Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-gaegu text-center mt-16">Typing</h1>
                {/* Options */}
                <div className='flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 justify-center items-center mx-24 lg:mx-12 space-y-8 lg:space-y-0 lg:gap-16 lg:gap-x-32 py-4'>
                    {/* Learn */}
                    <NextLink href='/playground/typing/learn' className='flex flex-col justify-center items-center space-y-4'>
                        <div className='bg-white hover:bg-energy-orange-900 border-solid border-8 border-energy-orange-900 py-10 lg:px-8 xl:py-14 flex flex-col justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-40 duration-300' style={{ position: 'relative' }}>
                            <h3 className='font-bold font-nunito text-2xl xl:text-3xl text-center'>Recap</h3>
                            {/* <MdComputer className='text-energy-orange-900 text-3xl lg:text-4xl' style={{ position: 'absolute', bottom: '20px', right: '20px' }} /> */}
                        </div>
                    </NextLink>

                    {/* Story */}
                    <NextLink href='/playground/typing/story' className='flex flex-col justify-center items-center'>
                        <div className='bg-white hover:bg-energy-orange-900 border-solid border-8 border-energy-orange-900 py-10 lg:px-8 xl:py-14 flex flex-col justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-40 duration-300' style={{ position: 'relative' }}>
                            <h3 className='font-bold font-nunito text-2xl xl:text-3xl text-center'>Practice</h3>
                            <MdComputer className='text-energy-orange-900 text-3xl lg:text-4xl' style={{ position: 'absolute', bottom: '20px', right: '20px' }} />
                        </div>
                    </NextLink>

                    {/* Practice */}
                    <NextLink href='/playground/typing/quiz' className='flex flex-col justify-center items-center space-y-4'>
                        <div className='bg-white hover:bg-energy-orange-900 border-solid border-8 border-energy-orange-900 py-10 lg:px-8 xl:py-14 flex flex-col justify-center items-center rounded-3xl w-64 h-28 lg:w-72 lg:h-36 xl:w-80 xl:h-40 duration-300' style={{ position: 'relative' }}>
                            <h3 className='font-bold font-nunito text-2xl xl:text-3xl text-center'>Quiz</h3>
                            {/* <MdComputer className='text-energy-orange-900 text-3xl lg:text-4xl' style={{ position: 'absolute', bottom: '20px', right: '20px' }} /> */}
                        </div>
                    </NextLink>


                </div>


                {/* Background Images */}
                <img src='/assets/typing/tilted_keyboard.png' alt='Keyboard' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 right-0 translate-x-3/10 -translate-y-1/2 z-20' />
                <img src='/assets/typing/tilted_i_cursor_icon.png' alt='I Cursor' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 translate-y-3/4 lg:top-1/8 left-4 -translate-x-2/5' />

            </div>
        </div>
    );
}
