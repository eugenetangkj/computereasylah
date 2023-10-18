// Email Quiz data component

export interface Question {
  question: string;
  choices: string[];
  correctAnswer: string;
  imageLink: string;
}


export interface Quiz {
  totalQuestions: number;
  questions: Question[];
}



export const EmailQuizData: Quiz = {
    totalQuestions: 5,
    questions: [
      {
        question: 'Which of the following is an invalid email address?',
        choices: ['sally123@gmail.com', 'sally.123@gmail.com', 'sally/123@gmail.com', 'sally@gmail.com'],
        correctAnswer: 'sally/123@gmail.com',
        imageLink: ''
      },
      {
        question: 'What does the send button do?',
        choices: ['Send an email', 'Delete an email', 'Forward an email', 'Compose an email'],
        correctAnswer: 'Send an email',
        imageLink: 'https://equalsdrummond.files.wordpress.com/2013/07/what-was-google-thinking-1.png'
      },
      {
        question:
          'What does "CC" stand for in the context of email?',
        choices: ['Click and Copy', 'Carbon Copy', 'Central Control', 'Clear Communication'],
        correctAnswer: 'Carbon Copy',
        imageLink: ''
      },
      {
        question:
          'Which folder is typically used to store sent emails?',
        choices: [' Inbox', 'Outbox', 'Drafts', 'Sent'],
        correctAnswer: 'Sent',
        imageLink: ''
      },
      {
        question:
          'What is the purpose of the "Subject" field when composing an email?',
        choices: ['To address the email', 'To format the email', 'To specify the type of email', 'To provide a brief description of the content'],
        correctAnswer: 'To provide a brief description of the content',
        imageLink: ''
      },

    ],
}
