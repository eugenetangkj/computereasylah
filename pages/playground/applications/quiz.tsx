import NextLink from "next/link";
import { useEffect, useState } from "react";
import { ApplicationsQuizData } from "@/constants/quizData";
import { QuizBody } from "@/components/QuizBody";
import BackButton from "@/components/backButton";
import { Topic } from "@/components/backButton";

//Practice component for email activities
export default function ApplicationQuiz() {
  // Animation
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set isActive to true after a short delay when the component is mounted
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  const [hasStartedQuiz, setHasStartedQuiz] = useState(false);

  //Starts quiz
  const handleStartQuiz = () => {
    setHasStartedQuiz(true);
  };

  return (
    <div
      className={`flex flex-col items-center justify-start py-2 bg-white space-y-8 lg:space-y-4 pt-28 md:pt-8 md:mt-20 lg:mt-20 opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
      } duration-1000`}
    >
      <div
        className={`fixed top-0 left-0 w-full bg-white py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-16`}
      >
        {/* Back button */}
        <BackButton pathToReturnTo='/playground/applications' displayText='Back' category={Topic.Applications} />
      </div>

      {!hasStartedQuiz ? (
        <div className="flex flex-col justify-center items-center space-y-24 2xl:space-y-36">
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center">
            Applications Quiz
          </h1>

          <h3 className="text-xl lg:text-3xl font-nunito text-center mx-8">
            Want to test your knowledge about applications? Take the Applications Quiz now!
          </h3>

          <button
            className="text-3xl md:text-4xl lg:text-5xl font-gaegu bg-creative-pink-500 hover:bg-creative-pink-hover font-bold px-8 py-4 rounded-2xl duration-300"
            onClick={handleStartQuiz}
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <QuizBody quizData={ ApplicationsQuizData } themeColor="creative-pink" topic={ Topic.Applications } />
      )}

      {/* Background Images */}
      <img src='/assets/applications/terminal-interface.png' alt='Terminal' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10 z-20' />
    <img src='/assets/applications/video.png' alt='Video' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5' />
    </div>
  );
}
