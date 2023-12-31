import React, { useEffect, useState } from "react";
// import Image from 'next/image';
import BackButton, { Topic } from "../backButton";
import { StoryScenes } from "./story-data";

// import { turnOnFullScreen } from "./util";

interface TypingGameProps {
  storyData: StoryScenes;
}

const TypingGame: React.FC<TypingGameProps> = ({ storyData }) => {
  // turnOnFullScreen();

  if (storyData == null || storyData == undefined) {
    storyData = {
      scenes: [
        {
          typingSentence: "Error! The selected story was not found.",
          bkgImg: "/assets/typing/chickenrice/chickenrice_stall.png",
        },
      ],
    };
  }

  const [currentSentence, setCurrentSentence] = useState(
    storyData.scenes[0].typingSentence
  );
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(
    storyData.scenes[0].bkgImg
  );
  const [typedSentence, setTypedSentence] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [showHint, setShowHint] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [gameEnded, setGameEnded] = useState(false);
  const [showContinueInstructions, setShowContinueInstructions] = useState(false);

  const [fontSize, setFontSize] = useState(4);

  const [numTypeWrong, setNumTypeWrong] = useState(0);
  const [numTypeCorrect, setNumTypeCorrect] = useState(0);

  const calcAccuracy = () => {
    if (numTypeCorrect + numTypeWrong == 0) return "100%";
    let amt: string =
      (
        Math.round((10000 * numTypeCorrect) / (numTypeCorrect + numTypeWrong)) / 100
      ).toString() + "%";

    // while (amt.length < 6) {
    //     amt += " ";
    // }

    return amt;
  };

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
      return <span className="text-black-500">{currentChar}</span>;
    } else if (isCharTypedCorrectly(index)) {
      return <span className="text-green-600">{currentChar}</span>;
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
    

    setShowHint(false);
    setShowInstructions(false);
    setShowContinueInstructions(false);
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
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // Handle game end logic later
      setGameEnded(true);
    }
  };

  // First letter of this kind of variable must be a capital letter otherwise got weird error
  const GameEndOverlayDiv: React.FC = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg p-8 flex flex-col items-center space-y-8">
          <img
            src="/assets/typing/game_end_great_work.png"
            alt="trophy"
            className="w-1/2 h-1/2 mb-4"
          />
          {/* <h2 className="text-2xl font-bold text-center mb-4">Congratulations! Great Work!</h2> */}
          <h4 className="text-green-600 font-nunito text-3xl">
            {numTypeCorrect} keys typed correctly
          </h4>
          <h4 className="text-red-500 font-nunito text-3xl">
            {numTypeWrong} keys typed wrongly
          </h4>
          <h4 className="text-black-500 font-nunito text-4xl font-bold">
            Your Accuracy: {calcAccuracy()}
          </h4>

          <button
            onClick={() => window.history.back()}
            className="font-nunito bg-energy-orange-500 text-5xl hover:bg-energy-orange-hover font-bold py-4 px-8 rounded-xl duration-300"
          >
            Done
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

 
      if (typedSentence.length == currentSentence.length - 1 && key.length === 1) {
        setShowContinueInstructions(true);
    
      }
      if (key === "Backspace") {
        if (currentCharIndex == 0) return;

        // If char being backspaced is correct then decrement numTypeCorrect by 1
        // Meanwhile if char is wrong the number of errors does not decrease
        if (isCharTypedCorrectly(currentCharIndex - 1)) {
          setNumTypeCorrect((prevNum) => prevNum - 1);
        }

        setTypedSentence((prevTypedSentence) => prevTypedSentence.slice(0, -1));
        setCurrentCharIndex((prevIndex) => prevIndex - 1);
        setShowContinueInstructions(false);
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
          setNumTypeWrong((prevNum) => prevNum + 1);
        } else {
          setNumTypeCorrect((prevNum) => prevNum + 1);
        }

        setTypedSentence((prevTypedSentence) => prevTypedSentence + key);
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      }

  
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   
    setFontSize(parseInt(event.target.value));
  };

  const hintClassName =
    "text-red-500 bg-white-200 font-nunito font-bold text-center mb-10";

  // Workaround for when the storydata is not found because react hooks cannot be called conditionally
  // (Original plan is to return this when storyData is null or undefined at the beginning of this entire function)
  if (
    storyData.scenes[0].typingSentence == "Error! The selected story was not found."
  ) {
    return (
      <div>
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <div className="flex flex-col justify-center items-center space-y-16">
            <BackButton
              pathToReturnTo="/typing"
              displayText="Back"
              category={Topic.Typing}
            />
            <h1 className="font-bold font-nunito text-3xl md:text-4xl xl:text-5xl text-center  mx-8 py-10">
              Error! The selected story was not found.
            </h1>
            {/* <img src='/assets/email/computer.png' alt='Computer' className='w-2/5 md:w-1/4' /> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="typing-game-container" className="relative">
      <img
        src={currentBackgroundImage}
        className="object-cover w-screen h-screen"
        alt="Current Typing Background Image"
      />

      <div className="flex flex-row justify-center items-center content-start absolute top-1">
        <button
          onClick={() => window.history.back()}
          className={`bg-white bg-opacity-80 hover:bg-energy-orange-900 p-2 m-2 ml-4 rounded-lg font-nunito font-bold text-${fontSize}xl duration-300`}
        >
          Quit
        </button>

        {/* <button onClick={resetGame} className="bg-white bg-opacity-80 p-2 m-2 rounded-lg font-gaegu font-bold text-2xl">
                    Reset
                </button> */}

        <div
          className={`bg-white bg-opacity-80 p-2 m-2 rounded-lg font-gaegu font-bold text-${fontSize}xl duration-300`}
        >
          <span className="font-nunito">Accuracy</span>
          <div>
            <span className="text-green-600">{numTypeCorrect}</span>
            <span className="text-black-500">/</span>
            <span className="text-red-500">{numTypeWrong}</span>
            <span className="text-black-500"> - {calcAccuracy()}</span>
          </div>
        </div>

        <div
          className={`bg-white bg-opacity-80 p-2 m-2 rounded-lg font-gaegu font-bold text-${fontSize}xl duration-300`}
        >
          <div>
            <span className="font-nunito">Progress: </span>
            <span className="text-green-600">{currentQuestionIndex + 1}</span>
            <span className="text-black-500">/</span>
            <span className="text-black-500">{storyData.scenes.length}</span>
          </div>
        </div>
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
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        {/* Font for sentence to type should use Roboto? or Consolas? I use consolas now because it is monospaced */}
        {/* Dynamic font size in className did not work: text-[${fontSize}px] */}
        {/* Use inline-block to fix flex box ignoring margin and padding */}
        {showContinueInstructions ? (
          <div
            className={`absolute ${
              showInstructions || showHint ? "bottom-56" : "bottom-36"
            } bg-white bg-opacity-90 p-5 rounded-lg font-consolas font-bold text-${fontSize}xl max-w-fit inline-block mx-8 duration-300`}
            hidden={gameEnded}
          >
            <div className="text-green-600"> Press any key to continue!</div>
          </div>
        ) : null}
        <div
          className={`absolute bottom-8 bg-white bg-opacity-80 p-5 rounded-lg font-consolas font-bold text-${fontSize}xl max-w-fit inline-block mx-8 duration-300`}
          hidden={gameEnded}
        >
          {/* {{ Hint shown when user types to the end of the sentence but it is not correct yet}} */}
          {showInstructions ? (
            <div className={hintClassName}>
              Type the text below using your keyboard!
            </div>
          ) : null}
          {showHint ? (
            <div className={hintClassName}>
              Type the entire sentence correctly to proceed!
            </div>
          ) : null}

          {currentSentence.split("").map((char, index) => {
            if (index === currentCharIndex) {
              return (
                <span key={index} className="underline underline-offset-8">
                  {getHighlightedChar(index)}
                </span>
              );
            } else {
              return <span key={index}>{getHighlightedChar(index)}</span>;
            }
          })}
        </div>

        {gameEnded ? <GameEndOverlayDiv /> : null}
      </div>
    </div>
  );
};

export default TypingGame;
