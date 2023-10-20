import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { BiSearchAlt2, BiPencil, BiSolidInbox, BiSolidSend, BiSolidTrash} from "react-icons/bi";
import Image from 'next/image';

interface EmailSceneSevenProps {
    updateSceneIndex: (index: number) => void
}

//Home page for email activities in the playground
export default function EmailSceneSeven({ updateSceneIndex } : EmailSceneSevenProps) {
    const handleNextButtonClick = () => {
        updateSceneIndex(8);
    }

    const handlePreviousButtonClick = () => {
        updateSceneIndex(6);
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
        <div className={`flex flex-col justify-start items-start w-screen h-screen p-8 space-y-16 opacity-0 transition-opacity rounded-2xl bg-stone-100 ${isActive ? 'opacity-100' : ''} duration-1000`}>
            {/* Email interface header */}
            <div className='flex justify-start items-center space-x-8 w-full px-8 '>
                <img src='/assets/email/gmail-logo.png' alt='Gmail' className='' />
                <h4 className='text-5xl text-gray-600 '>Gmail</h4>
                <div className='flex justify-start items-center bg-blue-100 pl-8 rounded-full space-x-8 py-4 ml-8 flex-grow'>
                    <BiSearchAlt2 className='text-gray-600 text-2xl' />
                    <h6 className='text-2xl text-gray-600 '>Search mail</h6>
                </div>


            </div>

            {/* Email interface body */}
            <div className='flex justify-center px-8 space-x-8 w-full h-full'>
                {/* Side bar */}
                <div className='flex flex-col justify-start space-y-8'>
                    {/* Compose */}
                    <button className="bg-sky-200  text-gray-600  py-4 rounded-lg flex px-4 space-x-2 justify-center duration-300 w-48 text-2xl items-center cursor-auto"
                    >
                        <BiPencil className='text-gray-600 text-3xl' />
                        <span className=''>Compose</span>
                    </button>

                    {/* Inbox */}
                    <button className="bg-blue-200  py-4 rounded-full flex px-6 space-x-4 justify-start duration-300 w-48 text-2xl items-center cursor-auto"
                    >
                        <BiSolidInbox className='text-3xl' />
                        <span className=''>Inbox</span>
                    </button>

                    {/* Sent */}
                    <button className=" py-4 rounded-full flex px-6 space-x-4 justify-start duration-300 w-48 text-2xl items-center cursor-auto"
                    >
                        <BiSolidSend className='text-3xl' />
                        <span className=''>Sent</span>
                    </button>

                    {/* Trash */}
                    <button className=" py-4 rounded-full flex px-6 space-x-4 justify-start duration-300 w-48 text-2xl items-center cursor-auto"
                    >
                        <BiSolidTrash className='text-3xl' />
                        <span className=''>Trash</span>
                    </button>

                    

                </div>
                {/* Main body */}
                <div className='flex bg-white justify-between items-start flex-grow rounded-xl px-8 py-8'>
                    <div className='flex justify-between items-start flex-grow rounded-xl px-8 cursor-pointer animate-pulse' onClick={handleNextButtonClick}>
                        <h6 className='text-xl xl:text-3xl text-gray-600 '>Care Fan</h6>
                        <h6 className='text-xl xl:text-3xl text-gray-600 '><span className='text-black'>Re: Warranty</span> - Hi, kindly attach... </h6>
                        <h6 className='text-xl xl:text-3xl text-gray-600 '>May 4</h6>
                    </div>
                </div>
            </div>


            {/* Instruction to player */}
            <div className='bg-trust-blue-500 fixed bottom-8 right-8 p-8 rounded-lg'>
                <h4 className='text-3xl 2xl:text-5xl font-gaegu font-bold text-center'>It seems like Care Fan has replied us. Let us open the email.</h4>

            </div>

            <div className={`fixed top-0 right-0 z-20 bg-trust-blue-900 hover:bg-trust-blue-hover mr-16 px-8 py-4 rounded-3xl duration-300`}>
                {/* Back button */}
                <NextLink href='/playground/email' className=''>
                <h5 className="font-nunito text-2xl lg:text-4xl font-bold ">Quit</h5>
                </NextLink>
            </div>

        </div>


    )
}