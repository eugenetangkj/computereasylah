import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { BiSearchAlt2, BiReply} from "react-icons/bi";
import { MdAttachFile, MdClose } from "react-icons/md"

interface EmailSceneTenProps {
    updateSceneIndex: (index: number) => void
}

//Home page for email activities in the playground
export default function EmailSceneTen({ updateSceneIndex } : EmailSceneTenProps) {
    const handleNextButtonClick = () => {
        updateSceneIndex(11);
    }

    const handlePreviousButtonClick = () => {
        updateSceneIndex(9);
    }

    //Transition animations
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      // Set isActive to true after a short delay when the component is mounted
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 100); // Adjust the delay as needed
  
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);


    //Handles attachment of images
    const [isImageWindowOpen, setIsImageWindowOpen] = useState(false);
    const [hasAttachedImage, setHasAttachedImage] = useState(false);

    const handleCloseImageWindow = () => {
        setIsImageWindowOpen(false);
    }
    
    const handleOpenImageWindow = () => {
        //Only allow opening of image window if there is no error prompt
        if (! shouldShowErrorPrompt) {
            setIsImageWindowOpen(true);
        }
    }

    const handleSelectImage = () => {
        setIsImageWindowOpen(false);
        setHasAttachedImage(true);
    }

    const handleUnselectImage = () => {
        setHasAttachedImage(false);
    }

    

    //Handles submission of email


    //Input form variables
    const [messageFieldData, setMessageFieldData] = useState('');

    //Handle error message
    const [errorMessage, setErrorMessage] = useState('');
    const [shouldShowErrorPrompt, setShowShouldErrorPrompt] = useState(false);
    const handleTryAgainButtonClick = () => {
        setShowShouldErrorPrompt(false);
    }


    //Model answers
    const messageFieldModelAnswer = "yes, it's still open!";
    //Handler for send button
    const handleSendButtonClick = () => {
        if (shouldShowErrorPrompt || isImageWindowOpen) {
            //Error prompt is already shown or image window is currently open. No need to process
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

        //Check whether image is attached
        if (! hasAttachedImage) {
            //Show error prompt
            setErrorMessage('Have you attached the image?')
            setShowShouldErrorPrompt(true);
            return;
        }

        //Reach here means all fields are correct
        handleNextButtonClick();
    }




    
    return (
        <div className={`flex items-start p-8 mx-64 space-y-8 opacity-0 transition-opacity rounded-2xl bg-stone-100 ${isActive ? 'opacity-100' : ''} duration-1000`}>
            {/* Instructions to player */}
            <div className='bg-compassion-pink-500 row-start-1 row-span-5 col-start-1 col-span-2 flex flex-col p-16 rounded-lg space-y-8 h-full justify-between'>
                <h4 className='text-trust-blue-900 text-4xl font-itim text-center'>Fill in the following information</h4>

                <h5 className='text-trust-blue-900 text-3xl font-itim'>Message: <br /> <span className='text-white'>Yes, it is still open!</span></h5>

                <h5 className='text-trust-blue-900 text-3xl font-itim'>Attachment: <br /> <span className='text-white'>Attach an image of the chicken rice stall</span></h5>

                <h4 className='text-trust-blue-900 text-4xl font-itim text-center'>Then press send!</h4>
            </div>


            {/* Email interface */}
            <div className='flex flex-col justify-start space-y-8'>

                {/* Search bar */}
                <div className='row-start-1 row-span-1 col-start-3 col-span-6 flex justify-start items-center bg-blue-100 pl-8 rounded-full space-x-8 py-4 ml-8 flex-grow'>
                    <BiSearchAlt2 className='text-gray-600 text-2xl' />
                    <h6 className='text-2xl text-gray-600 font-roboto'>Search mail</h6>
                </div>

                {/* Email interface body */}
                <div className='row-start-2 row-span-3 col-start-3 col-span-6 flex justify-center px-8 space-x-8 w-full h-full'>
                    {/* Main body */}
                    <div className='flex flex-col bg-white justify-start items-start flex-grow rounded-xl px-8 py-8 space-y-8'>
                        {/* Body content */}
                        <p className='text-xl text-gray-600 font-roboto'>Hey Ah Hock, it is great to hear from you! I am doing great, thanks for asking.</p>
                        <p className='text-xl text-gray-600 font-roboto'>I miss the chicken rice in Singapore... Is our favorite stall still open?</p>

                        {/* Reply field */}
                        <div className="flex flex-col border-4 border-gray-400 rounded-xl flex-grow w-full p-4 space-y-4">
                            
                            <div className='flex justify-start items-center space-x-4'>
                                <BiReply className='text-5xl text-gray-600'/>
                                <h6 className='text-2xl text-gray-600 font-roboto'>ahboon@gmail.com</h6>
                            </div>
                            <textarea
                                rows={4}
                                name="message"
                                id="message"
                                placeholder="What do you want to say to the other person"
                                className="border border-gray-300 text-gray-900 rounded-lg text-xl font-roboto focus:outline-blue-500  w-full p-2.5  placeholder-gray-300 resize-none "
                                onChange={(e: any) => {
                                    setMessageFieldData(e.target.value);
                                }}
                            />

                            {/* Shows attached image, if any */}
                            {
                                (hasAttachedImage)
                                ? <div className='flex justify-between items-center w-1/2 p-4 bg-gray-200'>
                                    <h6 className='font-roboto text-xl font-bold text-blue-500'>Chicken Rice.png</h6>
                                    <MdClose className='text-gray-600 text-3xl mr-4 cursor-pointer' onClick={handleUnselectImage} />
                                </div>
                                : ''
                            }

                            
                            <div className='flex justify-start items-center'>
                            {/* Send button bar */}
                            <div className='flex space-x-4 mt-8'>
                                <button className="bg-blue-500 hover:shadow-lg text-white font-roboto py-4 rounded-lg flex px-4 justify-center duration-300 w-48 items-center animate-pulse"
                                onClick={handleSendButtonClick}>
                                    <span className='text-3xl font-roboto'>Send</span>
                                </button>
                    <button className="cursor-auto">
                        <MdAttachFile className='text-gray-600 text-5xl cursor-pointer' onClick={handleOpenImageWindow}/>
                    </button>
                </div>

                            </div>
                        </div>
        
                    </div>
                </div>

            </div>

            {/* Image window */}
            {
                (isImageWindowOpen)
                ? <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-gray-300 text-gray-900 p-4 px-16 rounded-xl flex flex-col justify-start items-start w-1/2 h-1/2 space-y-16 '>
                    <div className='flex justify-between items-center w-full'>
                        <h6 className='font-roboto text-3xl text-gray-600'>Open</h6>
                        <MdClose className='text-gray-600 text-5xl mr-4 cursor-pointer' onClick={handleCloseImageWindow} />
                    </div>
                    <img src='/assets/email/chicken-rice-stall.png' alt='Chicken rice stall' className='w-2/5 cursor-pointer' onClick={handleSelectImage}/>
                </div>
                : ''
            }

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


    )
}