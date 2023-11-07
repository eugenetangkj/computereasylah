import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { MdAttachFile, MdClose } from "react-icons/md";
import { Topic } from '@/components/backButton';
import BackButton from '@/components/backButton';


interface EmailSceneFourProps {
    updateSceneIndex: (index: number) => void
}

//Home page for email activities in the playground
export default function EmailSceneFour({ updateSceneIndex } : EmailSceneFourProps) {
    //Transition functions
    const handleNextButtonClick = () => {
        updateSceneIndex(5);
    }

    const handlePreviousButtonClick = () => {
        if (! shouldShowErrorPrompt) {
            //Can only transition if the error prompt is not present
            updateSceneIndex(3);
        }
    }

    //Fade in animation
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      // Set isActive to true after a short delay when the component is mounted
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 100); // Adjust the delay as needed
  
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);


    //Input form variables
    const [toFieldData, setToFieldData] = useState('');
    const [subjectFieldData, setSubjectFieldData] = useState('');
    const [messageFieldData, setMessageFieldData] = useState('');

    //Handle error message
    const [errorMessage, setErrorMessage] = useState('');
    const [shouldShowErrorPrompt, setShowShouldErrorPrompt] = useState(false);
    const handleTryAgainButtonClick = () => {
        setShowShouldErrorPrompt(false);
    }


    //Model answers
    const toFieldModelAnswer = 'care@fan.com';
    const subjectFieldModelAnswer = 'warranty';
    const messageFieldModelAnswer = 'i want to register for warranty.'
    //Handler for send button
    const handleSendButtonClick = () => {
        if (shouldShowErrorPrompt) {
            //Error prompt is already shown. No need to process
            return;
        }

        //Check whether to field is correct
        let processedToFieldInput = toFieldData.trim().toLowerCase();
        if (processedToFieldInput != toFieldModelAnswer) {
            //Show error prompt
            setErrorMessage('Did you send to the correct email address?')
            setShowShouldErrorPrompt(true);
            return;
        }
        
        //Check whether subject field is correct
        let processedSubjectFieldInput = subjectFieldData.trim().toLowerCase();
        if (processedSubjectFieldInput != subjectFieldModelAnswer) {
            //Show error prompt
            setErrorMessage('Did you set the correct subject?')
            setShowShouldErrorPrompt(true);
            return;
        }


        //Check whether message field is correct
        let processedMessageFieldInput = messageFieldData.trim().toLowerCase();
        if (processedMessageFieldInput != messageFieldModelAnswer) {
            //Show error prompt
            setErrorMessage('Did you enter the correct message?')
            setShowShouldErrorPrompt(true);
            return;
        }

        //Reach here means all fields are correct
        handleNextButtonClick();
    }


    return (
        <div className={`grid grid-rows-1 grid-cols-3 gap-4 w-screen h-screen items-start p-8 mx-64 opacity-0 transition-opacity rounded-2xl bg-stone-100 ${isActive ? 'opacity-100' : ''} duration-1000`}>
            {/* Instructions */}
            <div className='bg-trust-blue-500 row-start-1 col-span-1 flex flex-col p-8 rounded-lg space-y-2 xl:space-y-6 justify-center h-full overflow-y-hidden'>
                <h4 className='text-3xl xl:text-4xl 2xl:text-5xl font-gaegu font-bold text-center'>Fill in the following information</h4>

                <h5 className='text-trust-blue-900 text-xl xl:text-2xl 2xl:text-3xl font-nunito font-bold'>Send to: <br /> <span className='text-black'>care@fan.com</span></h5>

                <h5 className='text-trust-blue-900 text-xl xl:text-2xl 2xl:text-3xl font-nunito font-bold'>Subject: <br /> <span className='text-black'>Warranty</span></h5>

                <h5 className='text-trust-blue-900 text-xl xl:text-2xl 2xl:text-3xl font-nunito font-bold'>Message: <br /> <span className='text-black'>I want to register for warranty.</span></h5>

                <h4 className='text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center font-gaegu'>Then press send!</h4>
            </div>
        
        
            {/* New message interface */}
            <div className='bg-stone-300 row-start-1 col-span-2  flex flex-col flex-grow h-full overflow-y-hidden'>
                <div className='w-full flex justify-between items-center mx-0 bg-stone-600 py-2'>
                    <h5 className='text-white  text-2xl ml-8'>{(subjectFieldData == '') ? 'New Message' : subjectFieldData}</h5>
                    <MdClose className='text-white text-5xl mr-4' />

                </div>
                {/* To field */}
                <div className='flex justify-start items-center bg-white mx-8 mt-4 py-2 px-4 space-x-8'>
                    <h5 className='text-gray-600  text-2xl w-16 text-center'>To</h5>
                    <input
                                type='text'
                                name="to-email"
                                id="to-email"
                                placeholder="Email address of the person you want to send an email to"
                                className="border border-gray-300 text-gray-900 rounded-lg text-xl  focus:outline-blue-500 p-2.5 w-3/4  placeholder-gray-300"
                                onChange={(e: any) => {
                                    setToFieldData(e.target.value);
                                }}
                    />
                </div>

                {/* Subject field */}
                <div className='flex justify-start items-center bg-white mx-8 mt-4 py-2 px-4 space-x-8'>
                    <h5 className='text-gray-600  text-2xl w-16'>Subject</h5>
                    <input
                                type='text'
                                name="subject"
                                id="subject"
                                placeholder="What topic is your email on"
                                className="border border-gray-300 text-gray-900 rounded-lg text-xl  focus:outline-blue-500  w-3/4 p-2.5  placeholder-gray-300"
                                onChange={(e: any) => {
                                    setSubjectFieldData(e.target.value);
                                }}
                    />
                </div>

                {/* Message field */}
                <div className='flex flex-col justify-start items-start bg-white mx-8 mt-4 py-4 px-4 space-y-4'>
                    <h5 className='text-gray-600  text-2xl w-16'>Message</h5>
                    <textarea
                                rows={2}
                                name="message"
                                id="message"
                                placeholder="What do you want to say to the other person"
                                className="border border-gray-300 text-gray-900 rounded-lg text-xl  focus:outline-blue-500  w-3/4 p-2.5  placeholder-gray-300 resize-none"
                                onChange={(e: any) => {
                                    setMessageFieldData(e.target.value);
                                }}
                    />


                </div>
                
                {/* Send button and attach file */}
                <div className='flex mx-8 space-x-4 mt-4 mb-16'>
                    <button className="bg-blue-500 hover:shadow-lg text-white  rounded-lg flex px-2 py-2 xl:px-4 xl:py-4 justify-center duration-300 w-48 items-center animate-pulse"
                        onClick={handleSendButtonClick}>
                            <span className='text-2xl xl:text-3xl '>Send</span>
                    </button>
                    <button className="cursor-auto">
                        <MdAttachFile className='text-gray-600 text-5xl' />
                    </button>
                </div>

            </div>

            {/* Error Message */}
            {
                (shouldShowErrorPrompt)
                ? <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-trust-blue-100 rounded-xl p-8 flex flex-col justify-center items-center space-y-8 2xl:space-y-16 bg-gray-100'>
                    <h4 className='text-2xl xl:text-3xl 2xl:text-4xl font-nunito text-center'>Hmmm... something is not right</h4>
                    <h6 className='text-3xl xl:text-4xl 2xl:text-5xl font-nunito text-center font-bold 2xl:leading-relaxed'>{errorMessage}</h6>
                    {/* Try again button */}
                    <button className="w-48 text-4xl font-gaegu bg-trust-blue-900 font-bold px-4 py-4 rounded-2xl duration-300"
                        onClick={handleTryAgainButtonClick}>
                            <span>Ok</span>
                    </button>
                </div>
                : ''
            }

            <div className={`fixed bottom-10 right-0 z-20 bg-trust-blue-900 hover:bg-trust-blue-hover mr-16 px-8 py-4 rounded-3xl duration-300`}>
                {/* Back button */}
                <NextLink href='/email' className=''>
                <h5 className="font-nunito text-2xl lg:text-4xl font-bold ">Quit</h5>
                </NextLink>
            </div>

  
   

        </div>
    );


}