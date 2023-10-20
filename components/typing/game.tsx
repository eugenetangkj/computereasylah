import { get } from "http";
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
// import Image from 'next/image';
import { StoryScenes } from "./story-data";

interface TypingGameProps {
    storyData: StoryScenes;
}

const TypingGame: React.FC<TypingGameProps> = ({
    storyData,
}) => {

    const [currentSentence, setCurrentSentence] = useState(storyData.scenes[0].typingSentence);
    const [currentBackgroundImage, setCurrentBackgroundImage] = useState(storyData.scenes[0].bkgImg);
    const [typedSentence, setTypedSentence] = useState("");
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [showHint, setShowHint] = useState(false);

    const [gameEnded, setGameEnded] = useState(false);

    const [fontSize, setFontSize] = useState(2);


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
    };

    const handleQuestionEnded = () => {
        console.log("Question ended");
        console.log("Current question index: " + currentQuestionIndex);
        console.log("Upc: " + storyData);

        setShowHint(false);

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

                setTypedSentence(prevTypedSentence => prevTypedSentence.slice(0, -1));
                setCurrentCharIndex(prevIndex => prevIndex - 1);
            } else if (typedSentence.length >= currentSentence.length) {
                if (typedSentence == currentSentence) {
                    handleQuestionEnded();
                } else {
                    setShowHint(true);
                }
            } else if (key.length === 1) {
                setTypedSentence(prevTypedSentence => prevTypedSentence + key);
                setCurrentCharIndex(prevIndex => prevIndex + 1);
            }

            console.log("Previous typed sentence: " + typedSentence);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentCharIndex]);


    const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Font size changed to: " + event.target.value);
        setFontSize(parseInt(event.target.value));
    };

    const hintClassName = "text-pink-500 bg-yellow-200 font-bold text-center mt-5 mb-4"

    return (
        <div id='typing-game-container' className='grow relative h-full w-full'>
            <img src={currentBackgroundImage} alt='Current Typing Background Image' className='object-cover h-full w-full' />
            <div className="absolute top-0 right-5 bg-white bg-opacity-80 p-1 rounded-lg font-gaegu font-bold ">
                <span>Font Size</span>
                <input
                    type="range"
                    min="2"
                    max="6"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                    className="absolute top-10 right-0 w-full"
                />
            </div>


            <div className="flex flex-col justify-center items-center">
                {gameEnded ? <GameEndOverlayDiv /> : null}

                {/* Font for sentence to type should use Roboto? or Consolas? I use consolas now because it is monospaced */}
                {/* Dynamic font size in className did not work: text-[${fontSize}px] */}
                {/* Use inline-block to fix flex box ignoring margin and padding */}
                <div className={`absolute bottom-20 bg-white bg-opacity-80 p-5 rounded-lg font-consolas font-bold text-${fontSize}xl max-w-fit inline-block mx-8`} hidden={gameEnded}>

                    {/* {{ Hint shown when user types to the end of the sentence but it is not correct yet}} */}
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
            </div>
        </div>
    );
};

export default TypingGame;
