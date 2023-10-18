import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { BiSearchAlt2, BiPencil, BiSolidInbox, BiSolidSend, BiSolidTrash} from "react-icons/bi";

interface EmailSceneFourProps {
    updateSceneIndex: (index: number) => void
}

//Home page for email activities in the playground
export default function EmailSceneFour({ updateSceneIndex } : EmailSceneFourProps) {
    const handleNextButtonClick = () => {
        updateSceneIndex(5);
    }

    const handlePreviousButtonClick = () => {
        updateSceneIndex(3);
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
        <div className={`flex flex-col justify-start h-4/5 w-4/5 items-start p-8 mx-64 space-y-8 opacity-0 transition-opacity rounded-2xl bg-stone-100 ${isActive ? 'opacity-100' : ''} duration-1000`}>
            {/* Email interface header */}
            <div className='flex justify-start items-center space-x-8 w-full px-8 '>
                <img src='/assets/email/gmail-logo.png' alt='Gmail' className='' />
                <h4 className='text-5xl text-gray-600 font-roboto'>Gmail</h4>
                <div className='flex justify-start items-center bg-blue-100 pl-8 rounded-full space-x-8 py-4 ml-8 flex-grow'>
                    <BiSearchAlt2 className='text-gray-600 text-2xl' />
                    <h6 className='text-2xl text-gray-600'>Search mail</h6>
                </div>


            </div>

            {/* Email interface body */}
            <div className='flex justify-center px-8 w-full h-full'>
                {/* Side bar */}
                <div className='flex flex-col justify-start space-y-8'>
                    {/* Compose */}
                    <button className="bg-sky-200 hover:shadow-lg text-gray-600 font-roboto py-4 rounded-lg flex px-4 space-x-2 justify-center duration-300 w-48 text-2xl items-center animate-pulse"
                    onClick={handleNextButtonClick}>
                        <BiPencil className='text-gray-600 text-3xl' />
                        <span className=''>Compose</span>
                    </button>

                    {/* Inbox */}
                    <button className="bg-blue-200 font-roboto py-4 rounded-full flex px-6 space-x-4 justify-start duration-300 w-48 text-2xl items-center cursor-auto"
                    >
                        <BiSolidInbox className='text-3xl' />
                        <span className=''>Inbox</span>
                    </button>

                    {/* Sent */}
                    <button className="font-roboto py-4 rounded-full flex px-6 space-x-4 justify-start duration-300 w-48 text-2xl items-center cursor-auto"
                    >
                        <BiSolidSend className='text-3xl' />
                        <span className=''>Sent</span>
                    </button>

                    {/* Trash */}
                    <button className="font-roboto py-4 rounded-full flex px-6 space-x-4 justify-start duration-300 w-48 text-2xl items-center cursor-auto"
                    >
                        <BiSolidTrash className='text-3xl' />
                        <span className=''>Trash</span>
                    </button>

                    

                </div>
                {/* Main body */}
                <div className='flex flex-col justify-center items-center self-center space-y-8 flex-grow'>
                    <img src='/assets/email/mailbox.png' alt='Empty inbox' className='w-1/5' />
                    <h6 className='text-3xl text-gray-600'>No emails in your inbox</h6>
                </div>
            </div>


            {/* Instruction to player */}
            <div className='bg-compassion-pink-500 fixed bottom-8 right-8 p-16 rounded-lg'>
                <h4 className='text-trust-blue-900 text-4xl font-itim'>Left click Compose to start creating an email</h4>

            </div>

        </div>


    )
}