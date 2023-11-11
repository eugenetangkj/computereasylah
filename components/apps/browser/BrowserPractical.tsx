import { useEffect, useState } from "react";
import Iframe from 'react-iframe';
import { browserQuestions, browserAnswers } from "./BrowserQuestions";

//Browser theory component
type BrowserPracticalProps = {
    updateCurrentElementIndex: (newIndex: number) => void,
};




export default function BrowserPractical({ updateCurrentElementIndex } : BrowserPracticalProps  ){
    // Animation
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Set isActive to true after a short delay when the component is mounted
        const timer = setTimeout(() => {
        setIsActive(true);
        }, 100); // Adjust the delay as needed
        window.scrollTo(0, 0);
        const randomInteger = Math.floor(Math.random() * numberOfQuestions);
        setRandomInteger(randomInteger);
        console.log(randomInteger);

        return () => clearTimeout(timer); // Clean up the timer on unmount

    }, []);


    //Input field data
    const [inputFieldData, setInputFieldData] = useState('');


    



    //Error prompt handling
    const [shouldShowErrorPrompt, setShowShouldErrorPrompt] = useState(false);

    //Help prompt handling
    const videoLink = 'https://www.youtube.com/embed/LpOUk6fvfHo';
    const [shouldShowHelpPrompt, setShowShouldHelpPrompt] = useState(false);
    const handleGetHelpButtonClick = () => {
        setShowShouldHelpPrompt(true);
    }


    //Question variables
    const [randomInteger, setRandomInteger] = useState<number>(0);
    const numberOfQuestions = 3;




    //Check answer
    const handleCheckButtonClick = () => {
        if (inputFieldData.trim().toLocaleLowerCase() == browserAnswers[randomInteger]) {
            //Correct answer
            updateCurrentElementIndex(2);
        } else {
            setShowShouldErrorPrompt(true);
            return;
        }
    }
        



    return ( <div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-12 lg:space-y-12 mt-10 md:mt-20 lg:mt-28 2xl:mt-0 opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
    } duration-1000`}>

        {/* Title */}
        <h3 className="text-xl md:text-2xl lg:text-3xl lg:leading-relaxed 2xl:text-4xl 2xl:leading-relaxed font-bold font-nunito text-center w-3/4">Head to www.google.com and search</h3>

        {/* Question  */}
        { (randomInteger != -1)
            ? <h2 className="text-4xl md:text-5xl lg:text-6xl lg:leading-relaxed 2xl:text-8xl 2xl:leading-relaxed font-bold font-gaegu text-center w-3/4">{ browserQuestions[randomInteger] }</h2>
            : <h2 className="text-4xl md:text-5xl lg:text-6xl lg:leading-relaxed 2xl:text-8xl 2xl:leading-relaxed font-bold font-gaegu text-center w-3/4">{ browserQuestions[Math.floor(Math.random() * numberOfQuestions)] }</h2>
        }


        {/* Input field */}
        <input
            type='text'
            name="input-data"
            id="input-data"
            placeholder="Enter your answer here"
            className="border border-gray-300 text-gray-900 rounded-lg text-xl  focus:outline-creative-pink-900 p-2.5 w-3/4  placeholder-gray-300"
            onChange={(e: any) => {
                setInputFieldData(e.target.value);
            }}
            autoCorrect="off"
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
                <h4 className='text-3xl xl:text-4xl 2xl:text-5xl font-nunito text-center'>Hmmm... something is not right</h4>
                <h6 className='text-4xl xl:text-5xl 2xl:text-6xl font-nunito text-center font-bold leading-relaxed xl:leading-relaxed 2xl:leading-relaxed'>The answer is incorrect. Try again!</h6>
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
            disabled = { inputFieldData == '' }>
                <span>Check</span>
            </button>
  
        </div>

        <div className='h-8'>

        </div>

    </div>
      
      

    )
}
