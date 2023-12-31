import { useEffect, useState } from "react";
import NextLink from "next/link";
import { Quiz } from "../constants/quizData";
import { Topic } from "./backButton";

type Props = {
  quizData: Quiz;
  themeColor: string;
  topic: Topic;
};

//Quiz content for email quiz
export const QuizBody = ({ quizData, themeColor, topic }: Props) => {
  // Animation
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set isActive to true after a short delay when the component is mounted
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  const allQuestions: Quiz = quizData;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [shouldDisableOptions, setShouldDisableOptions] = useState(false);

  //Refer to HTML variables
  let showExplanationButton = document.getElementById("view-explanation-button");

  //CSS styling variables
  let unselectedOptionStylingBorder = "border-pale-gray";
  let unselectedOptionStylingBackground = "bg-white";
  let selectedOptionStylingBackground = `bg-pale-gray-100`;
  let selectedOptionStylingBorder = `border-pale-gray-100`;
  let correctOptionStylingBorder = "border-question-correct";
  let correctOptionStylingBackground = "bg-question-correct";

  const changeUnselectedOptionStyling = (
    elementToUpdate: HTMLElement | null,
    typeOfAction: string
  ) => {
    if (typeOfAction == "remove") {
      elementToUpdate?.classList.remove(unselectedOptionStylingBorder);
      elementToUpdate?.classList.remove(unselectedOptionStylingBackground);
    } else {
      //Add
      elementToUpdate?.classList.add(unselectedOptionStylingBorder);
      elementToUpdate?.classList.add(unselectedOptionStylingBackground);
    }
  };

  const changeSelectedOptionStyling = (
    elementToUpdate: HTMLElement | null,
    typeOfAction: string
  ) => {
    if (typeOfAction == "remove") {
      elementToUpdate?.classList.remove(selectedOptionStylingBorder);
      elementToUpdate?.classList.remove(selectedOptionStylingBackground);
    } else {
      //Add
      elementToUpdate?.classList.add(selectedOptionStylingBorder);
      elementToUpdate?.classList.add(selectedOptionStylingBackground);
    }
  };

  const changeCorrectOptionStyling = (
    elementToUpdate: HTMLElement | null,
    typeOfAction: string
  ) => {
    if (typeOfAction == "remove") {
      elementToUpdate?.classList.remove(correctOptionStylingBorder);
      elementToUpdate?.classList.remove(correctOptionStylingBackground);
    } else {
      //Add
      elementToUpdate?.classList.add(correctOptionStylingBorder);
      elementToUpdate?.classList.add(correctOptionStylingBackground);
    }
  };

  //Runs whenever user changes the option
  const handleAnswerSelection = (newSelectedAnswer: string) => {
    //Check if user changed his answer and whether he should be allowed to change options
    if (newSelectedAnswer == selectedAnswer || shouldDisableOptions) {
      return;
    }

    //Update selected answer
    setSelectedAnswer(newSelectedAnswer);
  };

  //Runs when user presses the check answer button
  const handleCheckAnswer = () => {
    //Prevents selection of options
    setShouldDisableOptions(true);

    //Update current score
    if (selectedAnswer == allQuestions.questions[currentQuestionIndex].correctAnswer) {
      setCurrentScore(currentScore + 1);
    }

    //Display explanation button
    showExplanationButton?.classList.remove("hidden");

    let correctAnswer = document.getElementById(
      allQuestions.questions[currentQuestionIndex].correctAnswer
    );
    changeUnselectedOptionStyling(correctAnswer, "remove");
    changeSelectedOptionStyling(correctAnswer, "remove");
    changeCorrectOptionStyling(correctAnswer, "add");

    //Hide check button
    let checkButton = document.getElementById("check-button");
    checkButton?.classList.add("hidden");

    //Make next button appear
    let nextButton = document.getElementById("next-button");
    nextButton?.classList.remove("hidden");
  };

  //Runs when user clicks on view explanation
  const toggleExplanation = (typeOfAction: string) => {
    let explanationPromptElement = document.getElementById("explanation-prompt");
    if (typeOfAction == "open") {
      //Opens explanation prompt
      explanationPromptElement?.classList.remove("hidden");
      explanationPromptElement?.classList.add("flex");
    } else {
      //Closes explanation prompt
      explanationPromptElement?.classList.add("hidden");
      explanationPromptElement?.classList.remove("flex");
    }
  };

  //Runs when user wants to advance to the next question
  const handleNextQuestion = () => {
    setShouldDisableOptions(false);
    window.scrollTo(0, 0);
    if (currentQuestionIndex + 1 == allQuestions.totalQuestions) {
      //No more questions

      //Hide the question content
      let questionContent = document.getElementById("quiz-content");
      questionContent?.classList.add("hidden");
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      //Show end screen
      let endScreen = document.getElementById("end-screen");
      endScreen?.classList.remove("hidden");
      endScreen?.classList.add("flex");

      return;
    }

    //Make check button appear
    let checkButton = document.getElementById("check-button");
    checkButton?.classList.remove("hidden");

    //Make next button disappear
    let nextButton = document.getElementById("next-button");
    nextButton?.classList.add("hidden");

    //Hide the explanation button
    let showExplanationButton = document.getElementById("view-explanation-button");
    showExplanationButton?.classList.add("hidden");

    //Reset correct option
    let correctAnswer = document.getElementById(
      allQuestions.questions[currentQuestionIndex].correctAnswer
    );
    changeCorrectOptionStyling(correctAnswer, "remove");
    changeUnselectedOptionStyling(correctAnswer, "add");

    // let options = document.getElementsByClassName('options');
    // for (let i = 0; i < options.length; i++) {
    //     let currentOption = options[i];
    //     currentOption?.classList.remove('bg-sky-200');
    //     currentOption?.classList.remove('bg-green-200');
    //     currentOption?.classList.add('bg-white');
    // }

    //Update current question index and selected answer
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer("");
  };

  //Reset quiz
  const handlePracticeAgain = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setCurrentScore(0);
    window.scrollTo(0, 0);

    //Hide the question content
    let questionContent = document.getElementById("quiz-content");
    questionContent?.classList.remove("hidden");

    //Show end screen
    let endScreen = document.getElementById("end-screen");
    endScreen?.classList.add("hidden");
    endScreen?.classList.remove("flex");

    //Make check button appear
    let checkButton = document.getElementById("check-button");
    checkButton?.classList.remove("hidden");

    //Make next button disappear
    let nextButton = document.getElementById("next-button");
    nextButton?.classList.add("hidden");

    //Hide the explanation button
    let showExplanationButton = document.getElementById("view-explanation-button");
    showExplanationButton?.classList.add("hidden");

    //Reset all colour backgrounds
    let options = document.getElementsByClassName("options");
    for (let i = 0; i < options.length; i++) {
      let currentOption = options[i];
      currentOption?.classList.remove("bg-sky-200");
      currentOption?.classList.remove("bg-green-200");
      currentOption?.classList.add("bg-white");
    }
  };

  return (
    <div
      className={`opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
      } duration-1000`}
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center">
        {currentQuestionIndex + 1 == allQuestions.totalQuestions + 1
          ? "Quiz Complete!"
          : `Question ${currentQuestionIndex + 1} of ${allQuestions.totalQuestions}`}
      </h1>

      <div
        id="quiz-content"
        className="flex flex-col justify-center items-center space-y-8 mt-8 mb-8"
      >
        {/* Question */}
        {currentQuestionIndex + 1 != allQuestions.totalQuestions + 1 ? (
          <h2 className="text-2xl leading-relaxed mx-4 md:text-3xl md:leading-relaxed lg:text-4xl lg:leading-relaxed 2xl:text-5xl 2xl:leading-relaxed font-nunito text-center z-10">
            {allQuestions.questions[currentQuestionIndex].question}
          </h2>
        ) : (
          <h2></h2>
        )}

        {/* Image */}
        {currentQuestionIndex + 1 != allQuestions.totalQuestions + 1 &&
        allQuestions.questions[currentQuestionIndex].imageLink != "" ? (
          <img
            src={allQuestions.questions[currentQuestionIndex].imageLink}
            alt="Question Image"
            className="mx-4 w-1/4"
          />
        ) : (
          <h2></h2>
        )}

        {/* Options */}
        {currentQuestionIndex + 1 != allQuestions.totalQuestions + 1 ? (
          allQuestions.questions[currentQuestionIndex].choices.map((choice, index) =>
            choice != selectedAnswer ? (
              <div
                key={index}
                id={choice}
                className="bg-white border-solid border-4 border-pale-gray rounded-full py-4 px-8 mb-5 cursor-pointer options w-72 md:w-500p lg:w-600p xl:w-800p font-nunito duration-300 text-xl"
                onClick={() => handleAnswerSelection(choice)}
              >
                <h3>{choice}</h3>
              </div>
            ) : (
              <div
                key={index}
                id={choice}
                className={`bg-pale-gray-100 border-solid border-4 border-pale-gray-100 rounded-full py-4 px-8 mb-5 cursor-pointer options w-72 md:w-500p lg:w-600p xl:w-800p font-nunito duration-300 text-xl`}
                onClick={() => handleAnswerSelection(choice)}
              >
                <h3>{choice}</h3>
              </div>
            )
          )
        ) : (
          <h3></h3>
        )}

        {/* Explanation */}
        <div
          id="explanation-prompt"
          className="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 py-4 lg:py-8 2xl:py-24 px-8 w-4/5 lg:w-3/4 rounded-2xl flex-col justify-center items-center space-y-8 z-20"
        >
          <h3 className="font-bold font-nunito text-center text-lg lg:text-3xl 2xl:text-4xl">
            {currentQuestionIndex < allQuestions.totalQuestions
              ? allQuestions.questions[currentQuestionIndex].question
              : ""}
          </h3>
          <div className="flex flex-col space-y-2">
            <p className="text-center font-nunito text-lg lg:text-xl 2xl:text-2xl">
              Answer:
            </p>
            <h4 className="font-nunito text-center text-2xl lg:text-3xl 2xl:text-4xl">
              {currentQuestionIndex < allQuestions.totalQuestions
                ? allQuestions.questions[currentQuestionIndex].correctAnswer
                : ""}
            </h4>
          </div>
          <p className="text-center font-nunito text-xl lg:text-2xl 2xl:text-3xl">
            {currentQuestionIndex < allQuestions.totalQuestions
              ? allQuestions.questions[currentQuestionIndex].explanation
              : ""}
          </p>
          <button
            id="dismiss-explanation-button"
            className={`w-48 text-4xl font-gaegu bg-${themeColor}-900 font-bold px-4 py-4 rounded-2xl duration-300 disabled:bg-gray-200`}
            onClick={() => toggleExplanation("close")}
          >
            <span>Ok</span>
          </button>
        </div>

        {/* Check button */}
        <button
          id="check-button"
          className={`text-3xl font-gaegu bg-${themeColor}-500 font-bold px-16 py-4 rounded-2xl duration-300 disabled:bg-gray-200`}
          onClick={handleCheckAnswer}
          disabled={selectedAnswer == ""}
        >
          <span>Submit</span>
        </button>

        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
          {/* View Explanation button */}
          <button
            id="view-explanation-button"
            className={`hidden w-48 text-3xl font-gaegu bg-${themeColor}-500 font-bold px-4 py-4 rounded-2xl duration-300 disabled:bg-gray-200`}
            onClick={() => toggleExplanation("open")}
          >
            <span>Explanation</span>
          </button>

          {/* Next button */}
          <button
            id="next-button"
            className={`hidden w-48 text-3xl font-gaegu bg-${themeColor}-500 font-bold px-16 py-4 rounded-2xl duration-300 disabled:bg-gray-200`}
            onClick={handleNextQuestion}
          >
     
          <span>Next</span>
          </button>
        </div>
      </div>

      <div
        id="end-screen"
        className="hidden flex-col justify-center items-center mt-16 space-y-12 2xl:space-y-16 xl:space-y-28 2xl:mt-32"
      >
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-nunito text-center">{`Total Score: ${currentScore} / ${allQuestions.totalQuestions}`}</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <button
            className={`text-3xl xl:text-4xl font-gaegu bg-${themeColor}-500 font-bold px-8 py-4 rounded-2xl duration-300 w-64 xl:w-72 border-4 border-${themeColor}-500`}
            onClick={handlePracticeAgain}
          >
            <span>Take Again</span>
          </button>
          <NextLink href= {
            (topic == Topic.Typing)
            ? '/typing'
            : (topic == Topic.Applications)
            ? '/apps'
            : (topic == Topic.Email)
            ? '/email'
            : (topic == Topic.Safety)
            ? '/safety'
            : ''

          } className="my-4">
            <button
              className={`text-3xl xl:text-4xl font-gaegu border-solid border-4 border-${themeColor}-900 font-bold px-8 py-4 rounded-2xl duration-300 w-64 xl:w-72`}
            >
              <span>Home</span>
            </button>
          </NextLink>
        </div>
      </div>
    </div>
  );
};
