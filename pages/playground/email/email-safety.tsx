import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { EmailTipsData, Tips } from '@/components/tips/tipsData';


//Home page for email activities in the playground
export default function EmailSafety() {

    // Animation
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      // Set isActive to true after a short delay when the component is mounted
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 100); // Adjust the delay as needed
  
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);


    //Prepare email safety tips
    const allTips: Tips = EmailTipsData;
    const [currentTipIndex, setCurrentTipIndex] = useState(0);

    //Handle switching of tips
    const switchTips = (direction: string) => {
        if (direction == 'left') {
            //Decrement tip index
            (currentTipIndex == 0) 
            ? setCurrentTipIndex(allTips.totalTips - 1)
            : setCurrentTipIndex(currentTipIndex - 1);
        } else {
            //Increment tip index
            (currentTipIndex == allTips.totalTips - 1) 
            ? setCurrentTipIndex(0)
            : setCurrentTipIndex(currentTipIndex + 1);
        }
    }




    return (
        <div className={`flex flex-col items-center justify-start py-2 bg-white space-y-8 lg:space-y-4 pt-28 md:pt-8 md:mt-20 lg:mt-20 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            <div className={`fixed top-0 left-0 w-full bg-white py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-16`}>
                {/* Back button */}
                <NextLink href="/playground/email" className=''>
                    <h5 className="font-nunito text-2xl lg:text-4xl font-bold hover:text-trust-blue-hover duration-300">Back</h5>
                </NextLink>
            </div>
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-gaegu text-center">Email Safety</h1>
            {/* Tips */}
            <div id='tips-content' className='flex flex-col justify-center items-center mx-8 space-y-12'>
                <h2 className='text-3xl font-bold font-gaegu text-center bg-trust-blue-500 rounded-full p-4'>{allTips.tips[currentTipIndex].tipHeader}</h2>
                <div className='flex justify-between items-center space-x-4'>
                    <button className="bg-trust-blue-500 hover:bg-trust-blue-hover text-white rounded-full duration-300"
                    onClick={() => switchTips('left')}>
                        <MdChevronLeft className='text-2xl w-8 h-8 lg:w-12 lg:h-12' />
                    </button>
                    <h3 className='text-xl lg:text-2xl font-nunito text-center'>{allTips.tips[currentTipIndex].tipBody}</h3>
                    <button className="bg-trust-blue-500 hover:bg-trust-blue-hover text-white rounded-full duration-300"
                    onClick={() => switchTips('right')}>
                        <MdChevronRight className='text-2xl w-8 h-8 lg:w-12 lg:h-12' />
                    </button>
                </div>
               
                <img src={allTips.tips[currentTipIndex].tipImage} alt='Email Safety Tip Image' className='w-3/4 md:w-1/2' />



            </div>


            {/* Background Images */}
            <img src='/assets/email/tilted-mail.png' alt='Mail' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10 z-20' />
            <img src='/assets/email/tilted-email-symbol.png' alt='Address Sign' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5' />
        </div>



    )
}