import { useEffect, useState } from "react";
import Iframe from 'react-iframe';
import { createWorker} from "tesseract.js";

//Snipping tool theory component
type NotepadPracticalProps = {
    updateCurrentElementIndex: (newIndex: number) => void,
};




export default function NotepadPractical({ updateCurrentElementIndex } : NotepadPracticalProps ){
    // Animation
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Set isActive to true after a short delay when the component is mounted
        const timer = setTimeout(() => {
        setIsActive(true);
        }, 100); // Adjust the delay as needed

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);



    //OCR code
    //Taken from https://blog.logrocket.com/build-image-text-conversion-app-react-tesseractjs/

    const [fileData, setFileData] = useState<string | null>(null);
    const [shouldDisable, setShouldDisable] = useState(true);



    //Handles file upload
    function handleFileChange(e : any) {
        e.preventDefault();
        setShouldDisable(true);
        const file = e.target.files[0];
        //Check whether got any files received
        if(! file) {
            return;
        }

        //Check whether user uploaded a valid image file
        const allowedFileExtensions = ['txt'];
        const fileName = file.name;
        const fileExtension = fileName.split(".").pop()?.toLowerCase() || "";

        if (! allowedFileExtensions.includes(fileExtension)) {
            //File is not a valid txt file. Should not process
            return;
        }

        const reader = new FileReader();
        reader.onload = async (e) => {
            const fileContents = e.target?.result as string;
            setFileData(fileContents?.trim().toLocaleLowerCase());
            setShouldDisable(false);
        };
        reader.readAsText(file);
    }


    //Error prompt handling
    const [shouldShowErrorPrompt, setShowShouldErrorPrompt] = useState(false);

    //Help prompt handling
    const videoLink = 'https://www.youtube.com/embed/avdjQ1SAx34';
    const [shouldShowHelpPrompt, setShowShouldHelpPrompt] = useState(false);
    const handleGetHelpButtonClick = () => {
        setShowShouldHelpPrompt(true);
    }

    

    //Check answer
    const handleCheckButtonClick = () => {
        const modelAnswer = 'i love notepad!';
        console.log(fileData);
        if (fileData === modelAnswer) {
            //Proceed to success page
            updateCurrentElementIndex(2);

        } else {
            setShowShouldErrorPrompt(true);
        }
    }




  return ( <div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-12 lg:space-y-12 mt-10 md:mt-20 lg:mt-8 2xl:mt-0 opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
    } duration-1000`}>

        {/* Title */}
       
        <h3 className="text-xl md:text-2xl lg:text-3xl lg:leading-relaxed 2xl:text-4xl 2xl:leading-relaxed font-bold font-nunito text-center w-3/4">Use Notepad to create a note with the following text. Save it, then upload it.</h3>

        <h2 className="text-5xl md:text-6xl lg:text-7xl lg:leading-relaxed 2xl:text-8xl 2xl:leading-relaxed font-bold font-gaegu text-center w-3/4">I love Notepad!</h2>
        
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => handleFileChange(e) }
          accept=".txt"
          className='text-4xl font-nunito text-center'
        />

      

        {/* Help Message */}
        {
            (shouldShowHelpPrompt)
            ? <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-trust-blue-100 rounded-xl p-16 flex flex-col justify-center items-center space-y-8 2xl:space-y-16 bg-gray-100' style={{ marginTop: 0 }}>
                <h4 className='text-3xl xl:text-4xl 2xl:text-5xl font-nunito text-center'>Watch this video to get help!</h4>
                <Iframe url= { videoLink }
                    height="300px"
                    id=""
                    className="z-20 w-540p"
                />


                {/* Dismiss help button prompt */}
                <button className="w-48 text-4xl font-gaegu bg-creative-pink-900 font-bold px-4 py-4 rounded-2xl duration-300"
                    onClick={ () => setShowShouldHelpPrompt(false) }>
                        <span>Ok</span>
                </button>
            </div>
            : ''
        }


        {/* Error Message */}
        {
            (shouldShowErrorPrompt)
            ? <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-trust-blue-100 rounded-xl p-16 flex flex-col justify-center items-center space-y-8 2xl:space-y-16 bg-gray-100' style={{ marginTop: 0 }}>
                <h4 className='text-2xl xl:text-3xl 2xl:text-5xl font-nunito text-center'>Hmmm... something is not right</h4>
                <h6 className='text-3xl xl:text-4xl 2xl:text-6xl font-nunito text-center font-bold leading-relaxed xl:leading-relaxed 2xl:leading-relaxed'>Make sure that you have uploaded a text file with the words &apos;I love Notepad!&apos;.</h6>
                {/* Try again button */}
                <button className="w-48 text-4xl font-gaegu bg-creative-pink-900 font-bold px-4 py-4 rounded-2xl duration-300"
                    onClick={ () => setShowShouldErrorPrompt(false) }>
                        <span>Ok</span>
                </button>
            </div>
            : ''
        }

        

       


        {/* Navigation buttons */}
        <div className='flex justify-center items-center space-x-8'>

            {/* Previous button */}
            <button id='next-button' className="hidden lg:flex justify-center w-56 text-5xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300"
            onClick={ () => updateCurrentElementIndex(0) }>
                <span>Previous</span>
            </button>

            {/* Get Help button */}
            <button id='get-help-button' className="hidden lg:flex justify-center w-56 text-4xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300"
            onClick={ handleGetHelpButtonClick }>
                <span>Get Help</span>
            </button>

            {/* Check button */}
            <button id='check-button' className="hidden lg:flex justify-center w-56 text-5xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300 disabled:bg-gray-200"
            onClick={ handleCheckButtonClick }
            disabled = { shouldDisable }>
                <span>Check</span>
            </button>
  
        </div>

        <div className='h-8'>

        </div>

    </div>
      
      

    )
}
