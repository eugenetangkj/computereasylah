import NextLink from 'next/link';
import { useEffect, useState } from 'react';


//Home page for email activities in the playground
export default function Email() {

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
        <div className={`h-screen w-screen bg-trust-blue-900 flex flex-col items-center justify-center opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            <div className="fixed top-16 left-16 p-4">
                <NextLink href="/playground">
                <h5 className="font-itim text-5xl hover:text-trust-blue-500 duration-300 text-white">Back</h5>
                </NextLink>
            </div>

            <div className='flex flex-col items-center justify-center'>
            
                {/* Title */}
                <h1 className="text-8xl font-bold font-itim text-white mb-8">Email</h1>

                {/* Practice button */}
                <NextLink href='/playground/email/practice' className='my-12'>
                    <button className="bg-trust-blue-100 hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-16 rounded-full flex justify-center duration-300 text-5xl w-72">
                        <span>Practice</span>
                    </button>
                </NextLink>

                
                {/* Quiz button */}
                <NextLink href='/playground/email/quiz' className='my-4'>
                    <button className="bg-white hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-16 rounded-full flex justify-center duration-300 text-5xl w-72">
                        <span>Quiz</span>
                    </button>
                </NextLink>


                {/* Planet email image */}
                <img src='/assets/email/planet-email.png' alt='Planet and Email' className='w-1/6 fixed bottom-0 right-16 translate-y-1/3' />

                {/* Text chat image */}
                <img src='/assets/email/text-chat.png' alt='Text Chat' className='w-1/8 fixed top-1/2 left-0 -translate-x-1/4' />

                {/* Heart chat image */}
                <img src='/assets/email/hearts-chat.png' alt='Heart Chat' className='w-1/8 fixed top-16 right-0 translate-x-1/8' />

            </div>
        </div>


    )
}