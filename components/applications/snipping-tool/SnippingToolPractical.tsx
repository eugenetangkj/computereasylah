import { useEffect, useState } from "react";
import Iframe from 'react-iframe';
import { createWorker} from "tesseract.js";

//Snipping tool theory component
type SnippingToolPracticalProps = {
    updateCurrentElementIndex: (newIndex: number) => void,
};




export default function SnippingToolPractical({ updateCurrentElementIndex } : SnippingToolPracticalProps ){
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
  const [ocrText, setOcrText] = useState("");
  const [imageData, setImageData] = useState<string | null>(null);
  const worker = createWorker();

  const convertImageToText = async () => {
    if (!imageData) return;
    await (await worker).load();
    const {
      data: { text },
    } = await (await worker).recognize(imageData);
    setOcrText(text);
  };

  useEffect(() => {
    convertImageToText();
  }, [imageData]);

  //Handles image upload
  function handleImageChange(e : any) {
    const file = e.target.files[0];
    //Check whether got any files received
    if(! file) {
        return;
    }

    //Check whether user uploaded a valid image file
    const allowedImageExtensions = ['jpg', 'jpeg', 'png'];
    const fileName = file.name;
    const fileExtension = fileName.split(".").pop()?.toLowerCase() || "";

    if (! allowedImageExtensions.includes(fileExtension)) {
        //File is not a valid image. Should not feed into OCR model
        return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri : string | null = reader.result as string;
        setImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  }




  return ( <div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-12 lg:space-y-12 mt-10 md:mt-20 lg:mt-8 2xl:mt-0 opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
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

        <p>{ocrText}</p>


        {/* Navigation buttons */}
        <div className='flex justify-center items-center space-x-8'>

            {/* Previous button */}
            <button id='next-button' className="hidden lg:flex justify-center w-56 text-5xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300"
            onClick={ () => updateCurrentElementIndex(0) }>
                <span>Previous</span>
            </button>

            {/* Get Help button */}
            <button id='get-help-button' className="hidden lg:flex justify-center w-56 text-4xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300"
            onClick={ () => updateCurrentElementIndex(1) }>
                <span>Get Help</span>
            </button>

            {/* Check button */}
            <button id='check-button' className="hidden lg:flex justify-center w-56 text-5xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300"
            onClick={ () => updateCurrentElementIndex(1) }>
                <span>Check</span>
            </button>

            
        </div>

        <div className='h-8'>

        </div>

    </div>
      
      

    )
}
