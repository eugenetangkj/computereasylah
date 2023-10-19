import { useEffect, useState } from 'react';
import { MdAttachFile, MdClose } from "react-icons/md"

interface EmailSceneFiveProps {
    updateSceneIndex: (index: number) => void
}

//Home page for email activities in the playground
export default function EmailSceneFive({ updateSceneIndex } : EmailSceneFiveProps) {
    //Transition functions
    const handleNextButtonClick = () => {
        updateSceneIndex(6);
    }

    const handlePreviousButtonClick = () => {
        if (! shouldShowErrorPrompt) {
            //Can only transition if the error prompt is not present
            updateSceneIndex(4);
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
    const toFieldModelAnswer = 'ahboon@gmail.com';
    const subjectFieldModelAnswer = 'greetings';
    const messageFieldModelAnswer = 'hi ah boon, long time no see!'
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
        <div className={`grid grid-rows-1 grid-cols-3 gap-4 h-4/5 w-4/5 items-start p-8 mx-64 opacity-0 transition-opacity rounded-2xl bg-stone-100 ${isActive ? 'opacity-100' : ''} duration-1000`}>
            {/* Instructions */}
            <div className='bg-compassion-pink-500 row-start-1 col-span-1 flex flex-col p-16 rounded-lg space-y-8'>
                <h4 className='text-trust-blue-900 text-4xl font-itim text-center'>Fill in the following information</h4>

                <h5 className='text-trust-blue-900 text-3xl font-itim'>Send to: <br /> <span className='text-white'>ahboon@gmail.com</span></h5>

                <h5 className='text-trust-blue-900 text-3xl font-itim'>Subject: <br /> <span className='text-white'>Greetings</span></h5>

                <h5 className='text-trust-blue-900 text-3xl font-itim'>Message: <br /> <span className='text-white'>Hi Ah Boon, long time no see!</span></h5>

                <h4 className='text-trust-blue-900 text-4xl font-itim text-center'>Then press send!</h4>
            </div>
        
        
            {/* New message interface */}
            <div className='bg-stone-300 row-start-1 col-span-2  flex flex-col flex-grow h-full'>
                <div className='w-full flex justify-between items-center mx-0 bg-stone-600 py-4'>
                    <h5 className='text-white font-roboto text-2xl ml-8'>{(subjectFieldData == '') ? 'New Message' : subjectFieldData}</h5>
                    <MdClose className='text-white text-5xl mr-4 cursor-pointer' onClick={handlePreviousButtonClick} />

                </div>
                {/* To field */}
                <div className='flex justify-start items-center bg-white mx-8 mt-4 py-4 px-4 space-x-8'>
                    <h5 className='text-gray-600 font-roboto text-2xl w-16 text-center'>To</h5>
                    <input
                                type='text'
                                name="to-email"
                                id="to-email"
                                placeholder="Email address of the person you want to send an email to"
                                className="border border-gray-300 text-gray-900 rounded-lg text-xl font-roboto focus:outline-blue-500 p-2.5 w-3/4  placeholder-gray-300"
                                onChange={(e: any) => {
                                    setToFieldData(e.target.value);
                                }}
                    />
                </div>

                {/* Subject field */}
                <div className='flex justify-start items-center bg-white mx-8 mt-4 py-4 px-4 space-x-8'>
                    <h5 className='text-gray-600 font-roboto text-2xl w-16'>Subject</h5>
                    <input
                                type='text'
                                name="subject"
                                id="subject"
                                placeholder="What topic is your email on"
                                className="border border-gray-300 text-gray-900 rounded-lg text-xl font-roboto focus:outline-blue-500  w-3/4 p-2.5  placeholder-gray-300"
                                onChange={(e: any) => {
                                    setSubjectFieldData(e.target.value);
                                }}
                    />
                </div>

                {/* Message field */}
                <div className='flex flex-col justify-start items-start bg-white mx-8 mt-4 py-8 px-4 space-y-4'>
                    <h5 className='text-gray-600 font-roboto text-2xl w-16'>Message</h5>
                    <textarea
                                rows={4}
                                name="message"
                                id="message"
                                placeholder="What do you want to say to the other person"
                                className="border border-gray-300 text-gray-900 rounded-lg text-xl font-roboto focus:outline-blue-500  w-3/4 p-2.5  placeholder-gray-300 resize-none"
                                onChange={(e: any) => {
                                    setMessageFieldData(e.target.value);
                                }}
                    />


                </div>
                
                {/* Send button and attach file */}
                <div className='flex mx-8 space-x-4 mt-8'>
                    <button className="bg-blue-500 hover:shadow-lg text-white font-roboto py-4 rounded-lg flex px-4 justify-center duration-300 w-48 items-center animate-pulse"
                        onClick={handleSendButtonClick}>
                            <span className='text-3xl font-roboto'>Send</span>
                    </button>
                    <button className="cursor-auto">
                        <MdAttachFile className='text-gray-600 text-5xl' />
                    </button>
                </div>

            </div>

            {/* Error Message */}
            {
                (shouldShowErrorPrompt)
                ? <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-trust-blue-100 p-16 rounded-xl flex flex-col justify-center items-center w-1/2 h-1/2 space-y-16'>
                    <h4 className='text-trust-blue-900 text-5xl font-itim'>Hmmm... something is not right</h4>
                    <h6 className='text-trust-blue-900 text-3xl font-itim'>{errorMessage}</h6>
                    {/* Try again button */}
                    <button className="bg-white hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-16 rounded-full flex justify-center duration-300 text-3xl"
                        onClick={handleTryAgainButtonClick}>
                            <span>Try again</span>
                    </button>
                </div>
                : ''
            }

  
   

        </div>
    );


}