// Email Quiz data component

export interface Question {
  question: string;
  choices: string[];
  correctAnswer: string;
}


export interface Quiz {
  totalQuestions: number;
  questions: Question[];
}



export const EmailQuizData: Quiz = {
    totalQuestions: 3,
    questions: [
      {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        correctAnswer: 'stringify()',
      },
      {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'var and let', 'None of the above'],
        correctAnswer: 'var and let',
      },
      {
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
        correctAnswer: 'All of the above',
      },
    ],
}
