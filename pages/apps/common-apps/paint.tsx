import NextLink from "next/link";
import { useEffect, useState } from "react";
import BackButton from "@/components/backButton";
import Image from 'next/image';
import { Topic } from "@/components/backButton";
import PaintTheory from "@/components/apps/paint/PaintTheory";
import Head from "next/head";


//Paint page
export default function Paint() {
    // Animation
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Set isActive to true after a short delay when the component is mounted
        const timer = setTimeout(() => {
        setIsActive(true);
        }, 100); // Adjust the delay as needed

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);


    // State to track which element to show
    const [currentElementIndex, setCurrentElementIndex] = useState(0);

    // Helper function to pass to child states
    const updateCurrentElementIndex = (newIndex : number) => {
        setCurrentElementIndex(newIndex);
    };

    //If fall below lg breakpoint, reset to theory view
    const breakPoint = 1024;
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [screenWidth]);

    useEffect(() => {
        if (screenWidth < breakPoint) {
          setCurrentElementIndex(0);
        }
    }, [screenWidth]);





  return (
    <div>
        <Head>
        <title>Playground - Paint Application</title>
        </Head>
        <div className={`opacity-0 transition-opacity ${ isActive ? "opacity-100" : "" } duration-1000`}>
            {/* Back button */}
            <BackButton pathToReturnTo='/apps/common-apps' displayText='Quit' category={Topic.Applications} />
            {
                // Only have paint theory
                <PaintTheory updateCurrentElementIndex={ updateCurrentElementIndex } />
            }
        

            {/* Background Images */}
            <img src='/assets/apps/terminal-interface.png' alt='Terminal' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10 z-20' />
            <img src='/assets/apps/video.png' alt='Video' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5' />
        </div>
    </div>

    )
}
