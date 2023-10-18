import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { BiSearchAlt2, BiPencil, BiSolidInbox, BiSolidSend, BiSolidTrash} from "react-icons/bi";

interface EmailSceneThirteenProps {
    updateSceneIndex: (index: number) => void
}

//Home page for email activities in the playground
export default function EmailSceneThirteen({ updateSceneIndex } : EmailSceneThirteenProps) {
    const handleNextButtonClick = () => {
        //Reset back to scene 0 for going through the practice again
        updateSceneIndex(0);
    }

    const handlePreviousButtonClick = () => {
        updateSceneIndex(12);
    }

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      // Set isActive to true after a short delay when the component is mounted
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 100); // Adjust the delay as needed
  
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);

    

   
    return (
        <div className={`h-screen w-screen bg-trust-blue-900 flex flex-col items-center justify-center opacity-0 transition-opacity rounded-2xl  ${isActive ? 'opacity-100' : ''} duration-1000`}>
            <div className='flex flex-col items-center justify-center space-y-16'>
            
                {/* Title */}
                <h1 className="text-6xl font-bold font-itim text-white mb-8 w-3/4 text-center">Congratulations for successfully reconnecting with Ah Boon via email!</h1>


                 {/* Message */}
                 <h5 className="text-4xl font-itim text-white mb-8 w-1/2 text-center">Email is a good way for you to keep in touch with others. Keep practicing, and happy emailing.</h5>


                {/* Practice Again button */}
                <button className="bg-trust-blue-100 hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-8 rounded-full flex justify-center duration-300 text-5xl w-96 my-4"
                onClick={handleNextButtonClick}>
                    <span>Practice Again</span>
                </button>


                {/* Home button */}
                <NextLink href='/playground/email' className='my-4'>
                    <button className="bg-white hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-16 rounded-full flex justify-center duration-300 text-5xl w-96">
                        <span>Home</span>
                    </button>
                </NextLink>


                {/* Email with chat image */}
                <img src='/assets/email/email-with-chat.png' alt='Email with chat' className='w-1/6 fixed bottom-0 right-16 translate-y-1/4' />

            </div>
        </div>
        
    );
}