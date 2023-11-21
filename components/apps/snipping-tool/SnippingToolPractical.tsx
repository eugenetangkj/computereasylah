import { useEffect, useState } from "react";
import Iframe from 'react-iframe';
import { createWorker } from "tesseract.js";

//Snipping tool theory component
type SnippingToolPracticalProps = {
    updateCurrentElementIndex: (newIndex: number) => void,
};




export default function SnippingToolPractical({ updateCurrentElementIndex }: SnippingToolPracticalProps) {
    // Animation
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Set isActive to true after a short delay when the component is mounted
        const timer = setTimeout(() => {
            setIsActive(true);
        }, 100); // Adjust the delay as needed
        window.scrollTo(0, 0);
        window.scrollTo(0, 0);

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);



    //OCR code
    //Taken from https://blog.logrocket.com/build-image-text-conversion-app-react-tesseractjs/
    const [ocrText, setOcrText] = useState("");
    const [imageData, setImageData] = useState<string | null>(null);
    const [shouldDisable, setShouldDisable] = useState(true);
    const worker = createWorker();

    const convertImageToText = async () => {
        if (!imageData) return;

        const {
            data: { text },
        } = await (await worker).recognize(imageData);
        setOcrText(text);
        setShouldDisable(false);
    };

    useEffect(() => {
        convertImageToText();
    }, [imageData]);

    //Handles image upload
    function handleImageChange(e: any) {
        setShouldDisable(true);
        const file = e.target.files[0];
        //Check whether got any files received
        if (!file) {
            return;
        }

        //Check whether user uploaded a valid image file
        const allowedImageExtensions = ['jpg', 'jpeg', 'png'];
        const fileName = file.name;
        const fileExtension = fileName.split(".").pop()?.toLowerCase() || "";

        if (!allowedImageExtensions.includes(fileExtension)) {
            //File is not a valid image. Should not feed into OCR model
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const imageDataUri: string | null = reader.result as string;
            setImageData(imageDataUri);
        };
        reader.readAsDataURL(file);
    }


    //Error prompt handling
    const [shouldShowErrorPrompt, setShowShouldErrorPrompt] = useState(false);

    //Help prompt handling
    const videoLink = 'https://www.youtube.com/embed/meKdIRzylA8';
    const [shouldShowHelpPrompt, setShowShouldHelpPrompt] = useState(false);
    const handleGetHelpButtonClick = () => {
        setShowShouldHelpPrompt(true);
    }





    //Check answer
    const handleCheckButtonClick = () => {
        const modelAnswer = 'Snipping tool is great';
        if (ocrText.trim() === modelAnswer) {
            //Proceed to success page
            updateCurrentElementIndex(2);

        } else {
            setShowShouldErrorPrompt(true);
        }
    }




    return (<div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-12 lg:space-y-12 mt-10 md:mt-20 lg:mt-28 2xl:mt-0 opacity-0 transition-opacity ${isActive ? "opacity-100" : ""
        } duration-1000`}>

        {/* Title */}

        <h3 className="text-xl md:text-2xl lg:text-3xl lg:leading-relaxed 2xl:text-4xl 2xl:leading-relaxed font-bold font-nunito text-center w-3/4">Use the snipping tool to snip a picture of the following text, save the picture and upload it.</h3>

        <h2 className="text-5xl md:text-6xl lg:text-7xl lg:leading-relaxed 2xl:text-8xl 2xl:leading-relaxed font-bold font-gaegu text-center w-3/4">Snipping tool is great</h2>

        <input
            type="file"
            name=""
            id=""
            onChange={handleImageChange}
            accept="image/*"
            className='text-4xl font-nunito text-center'
        />



        {/* Help Message */}
        {
            (shouldShowHelpPrompt)
                ? <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-trust-blue-100 rounded-xl p-16 flex flex-col justify-center items-center space-y-8 2xl:space-y-16 bg-gray-300 z-40' style={{ marginTop: 0 }}>
                    <h4 className='text-3xl xl:text-4xl 2xl:text-5xl font-nunito text-center'>Watch this video to get help!</h4>
                    <Iframe url={videoLink}
                        height="250px"
                        id=""
                        className="z-20 w-540p"
                    />


                    {/* Dismiss help button prompt */}
                    <button className="w-48 text-4xl font-gaegu bg-creative-pink-900 font-bold px-4 py-4 rounded-2xl duration-300"
                        onClick={() => setShowShouldHelpPrompt(false)}>
                        <span>Ok</span>
                    </button>
                </div>
                : ''
        }


        {/* Error Message */}
        {
            (shouldShowErrorPrompt)
                ? <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-trust-blue-100 rounded-xl p-16 flex flex-col justify-center items-center space-y-8 2xl:space-y-16 bg-gray-100' style={{ marginTop: 0 }}>
                    <h4 className='text-3xl xl:text-4xl 2xl:text-5xl font-nunito text-center'>Hmmm... something is not right</h4>
                    <h6 className='text-4xl xl:text-5xl 2xl:text-6xl font-nunito text-center font-bold leading-relaxed xl:leading-relaxed 2xl:leading-relaxed'>Did you snip and attach a picture of the text &apos;Snipping tool is great&apos;?</h6>
                    {/* Try again button */}
                    <button className="w-48 text-4xl font-gaegu bg-creative-pink-900 font-bold px-4 py-4 rounded-2xl duration-300"
                        onClick={() => setShowShouldErrorPrompt(false)}>
                        <span>Ok</span>
                    </button>
                </div>
                : ''
        }






        {/* Navigation buttons */}
        <div className='flex justify-center items-center space-x-8'>

            {/* Previous button */}
            <button id='next-button' className="hidden lg:flex justify-center w-56 text-5xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300"
                onClick={() => updateCurrentElementIndex(0)}>
                <span>Previous</span>
            </button>

            {/* Get Help button */}
            <button id='get-help-button' className="hidden lg:flex justify-center w-56 text-4xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300"
                onClick={handleGetHelpButtonClick}>
                <span>Get Help</span>
            </button>

            {/* Check button */}
            <button id='check-button' className="hidden lg:flex justify-center w-56 text-5xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300 disabled:bg-gray-200"
                onClick={handleCheckButtonClick}
                disabled={shouldDisable}>
                <span>Check</span>
            </button>

        </div>

        <div className='h-8'>

        </div>

    </div>



    )
}
