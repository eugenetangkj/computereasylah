import { get } from "http";
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
// import Image from 'next/image';

interface TypingGameProps {
    upcomingSentencesAndBackgroundImages: [string, string][];
}

const TypingGame: React.FC<TypingGameProps> = ({
    upcomingSentencesAndBackgroundImages,
}) => {

    const [currentSentence, setCurrentSentence] = useState(upcomingSentencesAndBackgroundImages[0][0]);
    const [currentBackgroundImage, setCurrentBackgroundImage] = useState(upcomingSentencesAndBackgroundImages[0][1]);
    const [typedSentence, setTypedSentence] = useState("");
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [showHint, setShowHint] = useState(false);

    const [gameEnded, setGameEnded] = useState(false);


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
                <span className="text-lime-300">{currentChar}</span>
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
        setCurrentSentence(upcomingSentencesAndBackgroundImages[currentQuestionIndex][0]);
        setCurrentBackgroundImage(upcomingSentencesAndBackgroundImages[currentQuestionIndex][1]);
        setTypedSentence("");
        setCurrentCharIndex(0);
    };

    const handleQuestionEnded = () => {
        console.log("Question ended");
        console.log("Current question index: " + currentQuestionIndex);
        console.log("Upc: " + upcomingSentencesAndBackgroundImages);
        // Use the next element in upcomingSentencesAndBackgroundImages in another instance of TypingGame
        if (currentQuestionIndex < upcomingSentencesAndBackgroundImages.length - 1) {
            setTypedSentence("");
            setCurrentCharIndex(0);

            setCurrentSentence(upcomingSentencesAndBackgroundImages[currentQuestionIndex + 1][0]);
            setCurrentBackgroundImage(upcomingSentencesAndBackgroundImages[currentQuestionIndex + 1][1]);

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
                    <img src="/trophy-placeholder.png" alt="trophy" className="w-16 h-16 mb-4" />
                    <h2 className="text-2xl font-bold text-center mb-4">Congratulations! Great Work!</h2>
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
            const currentChar = getChar(currentCharIndex);

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

    const hintClassName = "text-pink-500 bg-yellow-200 font-bold text-center mt-5 mb-4"

    return (
        <div id='typing-game-container' className='grow relative h-full w-full'>
            <img src={currentBackgroundImage} alt='Current Typing Background Image' className='object-cover h-full w-full' />
            <div className="flex flex-col justify-center items-center">
                {gameEnded ? <GameEndOverlayDiv /> : null}

                <div className='absolute bottom-20 bg-white bg-opacity-50 p-5 font-roboto text-2xl max-w-fit'>

                    {/* {{ Hint shown when user types to the end of the sentence but it is not correct yet}} */}
                    {showHint ? <div className={hintClassName}>Type the entire sentence correctly to proceed!</div> : null}
                    {currentSentence.split("").map((char, index) => {
                        if (index == currentCharIndex) {
                            return (
                                // Trying to make arrow that is centered underneath the current character but cant yet
                                // <span className='flex flex-col'>
                                <span className="underline underline-offset-8">{getHighlightedChar(index)}</span>
                                //     <span className="top-[50px] h-0 w-0 border-x-[6px] border-x-transparent border-b-[10px] border-b-red-600"></span>
                                // </span>
                            );
                        } else {
                            return getHighlightedChar(index);
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default TypingGame;
