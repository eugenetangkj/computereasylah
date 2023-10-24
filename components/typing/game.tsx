import { get } from "http";
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
// import Image from 'next/image';
import { StoryScenes } from "./story-data";

// import { turnOnFullScreen } from "./util";

interface TypingGameProps {
    storyData: StoryScenes;
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: 1920,
        height: 1080,
    });

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

const TypingGame: React.FC<TypingGameProps> = ({
    storyData,
}) => {

    // turnOnFullScreen();

    const windowSize = useWindowSize();

    const [currentSentence, setCurrentSentence] = useState(storyData.scenes[0].typingSentence);
    const [currentBackgroundImage, setCurrentBackgroundImage] = useState(storyData.scenes[0].bkgImg);
    const [typedSentence, setTypedSentence] = useState("");
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [showHint, setShowHint] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);
    const [gameEnded, setGameEnded] = useState(false);

    const [fontSize, setFontSize] = useState(4);

    const [numTypeWrong, setNumTypeWrong] = useState(0);
    const [numTypeCorrect, setNumTypeCorrect] = useState(0);

    const calcAccuracy = () => {
        if (numTypeCorrect + numTypeWrong == 0) return 100;
        return Math.round(10000 * numTypeCorrect / (numTypeCorrect + numTypeWrong)) / 100;
    }

    const getChar = (index: number) => {
        const chars = currentSentence.split("");
        return chars[index];
    };

    const isCharTypedCorrectly = (index: number) => {
        return typedSentence.charAt(index) == getChar(index);
    };

    const getHighlightedChar = (index: number) => {
        const currentChar = getChar(index);
        const isCurrCharReached = index < currentCharIndex;

        if (!isCurrCharReached) {
            return (
                <span className="text-black-500">{currentChar}</span>
            );
        } else if (isCharTypedCorrectly(index)) {
            return (
                <span className="text-green-600">{currentChar}</span>
            );
        } else {
            return (
                <span className="text-red-500 bg-red-200">{currentChar}</span>
                // Need to add background on the text as well so that the user knows whether
                // the spaces were typed correctly or not
            );
        }
    };

    const resetGame = () => {
        setCurrentSentence(storyData.scenes[currentQuestionIndex].typingSentence);
        setCurrentBackgroundImage(storyData.scenes[currentQuestionIndex].bkgImg);
        setTypedSentence("");
        setCurrentCharIndex(0);
        setCurrentQuestionIndex(0);
        setShowHint(false);
        setGameEnded(false);
        setNumTypeWrong(0);
        setNumTypeCorrect(0);
    };

    const handleQuestionEnded = () => {
        console.log("Question ended");
        console.log("Current question index: " + currentQuestionIndex);
        console.log("Upc: " + storyData);

        setShowHint(false);
        setShowInstructions(false);

        // Use the next element in upcomingSentencesAndBackgroundImages in another instance of TypingGame
        if (currentQuestionIndex < storyData.scenes.length - 1) {
            setTypedSentence("");
            setCurrentCharIndex(0);

            setCurrentSentence(storyData.scenes[currentQuestionIndex + 1].typingSentence);
            setCurrentBackgroundImage(storyData.scenes[currentQuestionIndex + 1].bkgImg);

            // I still dont fully understand how react works with state yet - It seems like even though
            // I set question index within this function, it only updates after the function is done
            // so I have to set the question and background with currentQuestionIndex + 1 instead
            // of updating the question index then setting the question and background
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            // Handle game end logic later
            setGameEnded(true);
        }
    }

    // First letter of this kind of variable must be a capital letter otherwise got weird error
    const GameEndOverlayDiv: React.FC = () => {
        return (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white rounded-lg p-8 flex flex-col items-center">
                    <img src="/assets/typing/game_end_great_work.png" alt="trophy" className="w-1/2 h-1/2 mb-4" />
                    {/* <h2 className="text-2xl font-bold text-center mb-4">Congratulations! Great Work!</h2> */}
                    <button onClick={() => window.history.back()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Continue
                    </button>
                </div>
            </div>
        );
    };

    // Handle text input without textbox
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (gameEnded) return;

            const { key } = event;

            console.log("Key pressed: " + key);

            if (key === "Backspace") {
                if (currentCharIndex == 0) return;

                // If char being backspaced is correct then decrement numTypeCorrect by 1
                // Meanwhile if char is wrong the number of errors does not decrease
                if (isCharTypedCorrectly(currentCharIndex - 1)) {
                    setNumTypeCorrect(prevNum => prevNum - 1);
                }

                setTypedSentence(prevTypedSentence => prevTypedSentence.slice(0, -1));
                setCurrentCharIndex(prevIndex => prevIndex - 1);
            } else if (typedSentence.length >= currentSentence.length) {
                if (typedSentence == currentSentence) {
                    handleQuestionEnded();
                } else {
                    handleQuestionEnded();
                    // setShowHint(true);
                }
            } else if (key.length === 1) {

                let correctChar = getChar(currentCharIndex);
                if (key !== correctChar) {
                    setNumTypeWrong(prevNum => prevNum + 1);
                } else {
                    setNumTypeCorrect(prevNum => prevNum + 1);
                }

                setTypedSentence(prevTypedSentence => prevTypedSentence + key);
                setCurrentCharIndex(prevIndex => prevIndex + 1);
            }

            console.log("Previous typed sentence: " + typedSentence);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });


    const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Font size changed to: " + event.target.value);
        setFontSize(parseInt(event.target.value));
    };

    const hintClassName = "text-red-500 bg-white-200 font-nunito font-bold text-center mb-10"

    return (
        <div id='typing-game-container' className='relative'>
            <img src={currentBackgroundImage} className="object-cover w-screen h-screen" alt='Current Typing Background Image' />

            <div className="flex flex-row justify-center items-center content-start absolute top-1">
                <button onClick={() => window.history.back()} className="bg-white bg-opacity-80 hover:bg-energy-orange-900 p-2 m-2 ml-4 rounded-lg font-nunito font-bold text-2xl duration-300">
                    Back
                </button>

                {/* <button onClick={resetGame} className="bg-white bg-opacity-80 p-2 m-2 rounded-lg font-gaegu font-bold text-2xl">
                    Reset
                </button> */}

                <div className={`bg-white bg-opacity-80 p-2 m-2 rounded-lg font-gaegu font-bold text-${fontSize}xl`}>
                    <span>Accuracy</span>
                    <div>
                        <span className="text-green-600">{numTypeCorrect}</span>
                        <span className="text-black-500">/</span>
                        <span className="text-red-500">{numTypeWrong}</span>
                        <span className="text-black-500"> - {calcAccuracy()}%</span>
                    </div>
                </div>

                {/* <div className={`bg-white bg-opacity-80 p-2 m-2 rounded-lg font-gaegu font-bold text-${fontSize}xl`}>
                    <span>Sentence</span>
                    <div>
                        <span className="text-green-600">{currentQuestionIndex + 1}</span>
                        <span className="text-black-500">/</span>
                        <span className="text-black-500">{storyData.scenes.length}</span>
                    </div>
                </div> */}

            </div>

            <div className="absolute top-2 right-5 bg-white bg-opacity-80 p-2 rounded-lg font-nunito font-bold ">
                <span className={`text-${fontSize}xl`}>Font Size</span>
                <input
                    type="range"
                    min="2"
                    max="6"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                    className="w-full"
                />
            </div>




            <div className="flex flex-col justify-center items-center">

                {/* Font for sentence to type should use Roboto? or Consolas? I use consolas now because it is monospaced */}
                {/* Dynamic font size in className did not work: text-[${fontSize}px] */}
                {/* Use inline-block to fix flex box ignoring margin and padding */}
                <div className={`absolute bottom-8 bg-white bg-opacity-80 p-5 rounded-lg font-consolas font-bold text-${fontSize}xl max-w-fit inline-block mx-8`} hidden={gameEnded}>

                    {/* {{ Hint shown when user types to the end of the sentence but it is not correct yet}} */}
                    {showInstructions ? <div className={hintClassName}>Type the text below using your keyboard!</div> : null}
                    {showHint ? <div className={hintClassName}>Type the entire sentence correctly to proceed!</div> : null}
                    {currentSentence.split("").map((char, index) => {
                        if (index === currentCharIndex) {
                            return (
                                <span key={index} className="underline underline-offset-8">
                                    {getHighlightedChar(index)}
                                </span>
                            );
                        } else {
                            return (
                                <span key={index}>
                                    {getHighlightedChar(index)}
                                </span>
                            );
                        }
                    })}
                </div>

                {gameEnded ? <GameEndOverlayDiv /> : null}
            </div>
        </div>
    );
};

export default TypingGame;
