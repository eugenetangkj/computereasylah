import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { EmailQuizData } from '@/components/quiz/emailQuizData';
import { Quiz } from '@/components/quiz/emailQuizData';

//Practice component for email activities
export default function EmailQuiz() {

    const allQuestions: Quiz = EmailQuizData;


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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
        <div className="h-screen w-screen bg-trust-blue-900 flex flex-col items-center justify-center overflow-hidden">
        <h1>Email Quiz</h1>

        <div id='quiz-content'>
            {/* Question */}
            {
                (currentQuestionIndex + 1 != allQuestions.totalQuestions + 1)
                ? <h2>{allQuestions.questions[currentQuestionIndex].question}</h2>
                : <h2></h2>
            }

            <button id='view-explanation-button' className="hidden">
                <span>View Explanation</span>
            </button>

            
            {/* Options */}
            {
                (currentQuestionIndex + 1 != allQuestions.totalQuestions + 1)
                ?
            
            
            allQuestions.questions[currentQuestionIndex].choices.map((choice, index) => (
            <div key={index} id={choice} className='bg-white mb-5 cursor-pointer options' onClick={() => handleAnswerSelection(choice)}>
                <h3>{choice}</h3>
            
            </div>
            
                ))
            : <h3></h3>
            
            
            }

            {/* Check button */}
            <button id='check-button' className="bg-white hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-16 rounded-full flex justify-center duration-300 text-5xl w-72"
            onClick={handleCheckAnswer} disabled={selectedAnswer == ''}>
                <span>Check</span>
            </button>

            {/* Next button */}
            <button id='next-button' className="hidden bg-white hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-16 rounded-full duration-300 text-5xl w-72"
            onClick={handleNextQuestion}>
                <span>Next</span>
            </button>
        </div>

        <div id='end-screen' className='hidden'>
            <h1>Congrats</h1>
            <h2>{`Total Score:${currentScore} / ${allQuestions.totalQuestions}`}</h2>
            <button className="bg-white hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-16 rounded-full flex justify-center duration-300 text-5xl w-72"
            onClick={handlePracticeAgain}>
                <span>Practice Again</span>
            </button>

            <NextLink href='/playground/email' className='my-4'>
                <button className="bg-white hover:bg-trust-blue-500 text-trust-blue-900 hover:text-white font-itim py-4 px-16 rounded-full flex justify-center duration-300 text-5xl w-72">
                    <span>Home</span>
                </button>
            </NextLink>

       
        </div>




            
           
    </div>


    )
}