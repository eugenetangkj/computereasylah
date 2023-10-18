import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { EmailQuizData } from '@/components/quiz/emailQuizData';
import { Quiz } from '@/components/quiz/emailQuizData';

//Practice component for email activities
export default function EmailQuiz() {
    // Animation
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      // Set isActive to true after a short delay when the component is mounted
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 100); // Adjust the delay as needed
  
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);






    const allQuestions: Quiz = EmailQuizData;


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); //Initially show start screen
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [currentScore, setCurrentScore] = useState(0);


    //Runs whenever user changes the option
    const handleAnswerSelection = (newSelectedAnswer : string) => {

        //Check if user changed his answer and whether he should be allowed to change options
        let showExplanationButton = document.getElementById('view-explanation-button');
        if (newSelectedAnswer == selectedAnswer || ! showExplanationButton?.classList.contains('hidden')) {
            return;
        }


        //Select new option
        let newSelectedOption = document.getElementById(newSelectedAnswer);
        newSelectedOption?.classList.remove('bg-white');
        newSelectedOption?.classList.add('bg-sky-200');
        console.log("reached");

        //Unselect new option
        let oldSelectedOption = document.getElementById(selectedAnswer);
        oldSelectedOption?.classList.add('bg-white');
        oldSelectedOption?.classList.remove('bg-sky-200');

        //Update selected answer
        setSelectedAnswer(newSelectedAnswer);

    };


    //Runs when user presses the check answer button
    const handleCheckAnswer = () => {

        //Update current score
        if (selectedAnswer == allQuestions.questions[currentQuestionIndex].correctAnswer) {
            setCurrentScore(currentScore + 1);
        }



        //Display explanation button
        let showExplanationButton = document.getElementById('view-explanation-button');
        showExplanationButton?.classList.remove('hidden');

        let correctAnswer = document.getElementById(allQuestions.questions[currentQuestionIndex].correctAnswer);
        correctAnswer?.classList.remove('bg-white');
        correctAnswer?.classList.remove('bg-sky-200');
        correctAnswer?.classList.add('bg-green-200');


        //Hide check button
        let checkButton = document.getElementById('check-button');
        checkButton?.classList.add('hidden');

        //Make next button appear
        let nextButton = document.getElementById('next-button');
        nextButton?.classList.remove('hidden');


    };

    //Runs when user wants to advance to the next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 == allQuestions.totalQuestions) {
            //No more questions

            //Hide the question content
            let questionContent = document.getElementById('quiz-content');
            questionContent?.classList.add('hidden');

            //Show end screen
            let endScreen = document.getElementById('end-screen');
            endScreen?.classList.remove('hidden');

            return;

        }

        //Make check button appear
        let checkButton = document.getElementById('check-button');
        checkButton?.classList.remove('hidden');

        //Make next button disappear
        let nextButton = document.getElementById('next-button');
        nextButton?.classList.add('hidden');

        //Hide the explanation button
        let showExplanationButton = document.getElementById('view-explanation-button');
        showExplanationButton?.classList.add('hidden');

        //Reset all colour backgrounds
        let options = document.getElementsByClassName('options');
        for (let i = 0; i < options.length; i++) {
            let currentOption = options[i];
            currentOption?.classList.remove('bg-sky-200');
            currentOption?.classList.remove('bg-green-200');
            currentOption?.classList.add('bg-white');
        }
    

        //Update current question index and selected answer
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer('');

    }


    //Reset quiz
    const handlePracticeAgain = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer('');
        setCurrentScore(0);



        //Hide the question content
        let questionContent = document.getElementById('quiz-content');
        questionContent?.classList.remove('hidden');

        //Show end screen
        let endScreen = document.getElementById('end-screen');
        endScreen?.classList.add('hidden');

         //Make check button appear
         let checkButton = document.getElementById('check-button');
         checkButton?.classList.remove('hidden');
 
         //Make next button disappear
         let nextButton = document.getElementById('next-button');
         nextButton?.classList.add('hidden');
 
         //Hide the explanation button
         let showExplanationButton = document.getElementById('view-explanation-button');
         showExplanationButton?.classList.add('hidden');






        //Reset all colour backgrounds
        let options = document.getElementsByClassName('options');
        for (let i = 0; i < options.length; i++) {
            let currentOption = options[i];
            currentOption?.classList.remove('bg-sky-200');
            currentOption?.classList.remove('bg-green-200');
            currentOption?.classList.add('bg-white');
        }


    }


    return (
        <div className={`flex flex-col items-center justify-start py-2 bg-white space-y-8 lg:space-y-4 pt-28 md:pt-8 md:mt-20 lg:mt-20 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            <div className={`fixed top-0 left-0 w-full bg-white py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-16`}>
                {/* Back button */}
                <NextLink href="/playground/email" className=''>
                    <h5 className="font-nunito text-2xl lg:text-4xl font-bold hover:text-trust-blue-hover duration-300">Back</h5>
                </NextLink>
            </div>

            {/* Title */}
            <div className='flex flex-col justify-center items-center space-y-36'>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-gaegu text-center">Email Quiz</h1>

                <h3 className='text-xl lg:text-2xl font-nunito text-center mx-4'>Want to test your knowledge about emails? Take the Email Quiz now!</h3>

                <button className='text-3xl font-gaegu bg-trust-blue-500 hover:bg-trust-blue-hover font-bold px-8 py-4 rounded-2xl duration-300'
                onClick={() => console.log('TODO: Transition to starting question')}>
                Start Quiz  
                </button>
            </div>
       

            
           
    </div>


    )
}