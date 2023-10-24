import { get } from "http";
import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
// import Image from 'next/image';
import { StoryScenes } from "./story-data";
import { KeyCheckQuestion, symbolsQuestions } from "./non-story-data";

// import { turnOnFullScreen } from "./util";


const KeyCheckGame: React.FC = () => {

    // turnOnFullScreen();
    const questionData = symbolsQuestions.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    const [keyQuestion, setKeyQuestion] = useState(questionData[0].key);
    const [questionTitle, setQuestionTItle] = useState(questionData[0].displayQuestion);
    const [checkKey, setCheckKey] = useState(questionData[0].checkKey);
    const [hint, setHint] = useState(questionData[0].hint);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [showHint, setShowHint] = useState(true);

    const [gameEnded, setGameEnded] = useState(false);

    const [fontSize, setFontSize] = useState(4);


    const resetGame = () => {
        setGameEnded(false);
        setCurrentQuestionIndex(0);
        setKeyQuestion(questionData[0].key);
        setCheckKey(questionData[0].checkKey);
        setQuestionTItle(questionData[0].displayQuestion);
        setHint(questionData[0].hint);
    }

    const handleQuestionEnded = () => {
        console.log("Question ended");
        console.log("Current question index: " + currentQuestionIndex);

        // setShowHint(false);

        // Use the next element in upcomingSentencesAndBackgroundImages in another instance of TypingGame
        if (currentQuestionIndex < questionData.length - 1) {

            setKeyQuestion(questionData[currentQuestionIndex + 1].key);
            setCheckKey(questionData[currentQuestionIndex + 1].checkKey);
            setQuestionTItle(questionData[currentQuestionIndex + 1].displayQuestion);
            setHint(questionData[currentQuestionIndex + 1].hint);

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
            console.log("Correct key: " + questionData[currentQuestionIndex].checkKey);

            if (key == checkKey) {
                handleQuestionEnded();
            } else {
                // setShowHint(true);
            }

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
        <div id='typing-game-container' className='relative  w-screen h-screen'>

            <div className="flex flex-row justify-center items-center content-start absolute top-1">
                <button onClick={() => window.history.back()} className={`bg-white bg-opacity-80 hover:bg-energy-orange-900 p-2 m-2 ml-4 rounded-lg font-nunito font-bold text-${fontSize}xl duration-300`}>
                    Back
                </button>

                {/* <button onClick={resetGame} className="bg-white bg-opacity-80 p-2 m-2 rounded-lg font-gaegu font-bold text-2xl">
                    Reset
                </button> */}

                {/* <div className={`bg-white bg-opacity-80 p-2 m-2 rounded-lg font-gaegu font-bold text-${fontSize}xl duration-300`}>
                    <span>Sentence</span>
                    <div>
                        <span className="text-green-600">{currentQuestionIndex + 1}</span>
                        <span className="text-black-500">/</span>
                        <span className="text-black-500">{storyData.scenes.length}</span>
                    </div>
                </div> */}

            </div>

            <div className="absolute top-2 right-5 flex flex-col bg-white bg-opacity-80 p-2 rounded-lg font-nunito font-bold duration-300">
                <span className={`text-${fontSize}xl ml-10 mr-10 mb-1`}>Font Size</span>
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-gaegu text-center mt-16">Symbols</h1>

                <div className='mt-10'>
                    <span className='font-bold font-nunito text-2xl xl:text-3xl text-center'>Type the following symbol using your keyboard!</span>
                </div>

                <div className='flex flex-col justify-center items-center space-y-4 mt-10'>
                    <div className='bg-white border-solid border-8 border-energy-orange-900 py-8 lg:px-6 xl:py-10 flex flex-col justify-center items-center rounded-3xl duration-300' style={{ position: 'relative' }}>
                        <h3 className={`font-bold font-nunito text-8xl text-center px-20`}>{keyQuestion}</h3>
                    </div>
                </div>

                <div className="mt-20">
                    <span className={`font-bold font-nunito text-${fontSize}xl text-center`}>{questionTitle}</span>
                </div>

                <div className={`p-5 rounded-lg font-nunito font-bold text-${fontSize}xl max-w-fit inline-block mx-8 my-10 duration-300`} hidden={gameEnded}>

                    {showHint ? <div className={hintClassName}>Hint: {hint}</div> : null}
                </div>

                {gameEnded ? <GameEndOverlayDiv /> : null}
            </div>

            <img src='/assets/typing/tilted_keyboard.png' alt='Keyboard' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 right-0 translate-x-3/10 -translate-y-1/2 z-20' />
            <img src='/assets/typing/tilted_i_cursor_icon.png' alt='I Cursor' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 translate-y-3/4 lg:top-1/8 left-4 -translate-x-2/5' />

        </div>
    );
};

export default KeyCheckGame;
