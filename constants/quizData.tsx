// Email Quiz data component

export interface Question {
  question: string;
  choices: string[];
  correctAnswer: string;
  imageLink: string;
  explanation: string;
}

export interface Quiz {
  totalQuestions: number;
  questions: Question[];
}

export const EmailQuizData: Quiz = {
  totalQuestions: 5,
  questions: [
    {
      question: "What does the send button do?",
      choices: [
        "Send an email",
        "Delete an email",
        "Forward an email",
        "Compose an email",
      ],
      correctAnswer: "Send an email",
      imageLink:
        "https://equalsdrummond.files.wordpress.com/2013/07/what-was-google-thinking-1.png",
      explanation: "Send button is used to send an email after writing it.",
    },
    {
      question: "Which of the following is an invalid email address?",
      choices: [
        "sally123@gmail.com",
        "sally.123@gmail.com",
        "sally/123@gmail.com",
        "sally@gmail.com",
      ],
      correctAnswer: "sally/123@gmail.com",
      imageLink: "",
      explanation: "Email addresses cannot have the backslash / character",
    },
    {
      question: 'What does "CC" stand for in the context of email?',
      choices: [
        "Click and Copy",
        "Carbon Copy",
        "Central Control",
        "Clear Communication",
      ],
      correctAnswer: "Carbon Copy",
      imageLink: "",
      explanation:
        "Carbon copy is used to send a copy of the email to another intended recipient.",
    },
    {
      question: "Which folder is typically used to store sent emails?",
      choices: [" Inbox", "Outbox", "Drafts", "Sent"],
      correctAnswer: "Sent",
      imageLink: "",
      explanation: "Sent emails can be found in sent.",
    },
    {
      question: 'What is the purpose of the "Subject" field when composing an email?',
      choices: [
        "Address the email",
        "Format the email",
        "Specify the type of email",
        "Brief overview of the content",
      ],
      correctAnswer: "Brief overview of the content",
      imageLink: "",
      explanation: "Subject provides a quick overview of what the email is about.",
    },
  ],
};

export const SafetyQuizData: Quiz = {
  totalQuestions: 2,
  questions: [
    {
      question: "What does safety mean????",
      choices: [
        "Send an email",
        "Delete an email",
        "Forward an email",
        "Compose an email",
      ],
      correctAnswer: "Send an email",
      imageLink:
        "https://equalsdrummond.files.wordpress.com/2013/07/what-was-google-thinking-1.png",
      explanation: "Send button is used to send an email after writing it.",
    },
    {
      question: "Which of the following is an invalid email address?",
      choices: [
        "sally123@gmail.com",
        "sally.123@gmail.com",
        "sally/123@gmail.com",
        "sally@gmail.com",
      ],
      correctAnswer: "sally/123@gmail.com",
      imageLink: "",
      explanation: "Email addresses cannot have the backslash / character",
    },
  ],
};
