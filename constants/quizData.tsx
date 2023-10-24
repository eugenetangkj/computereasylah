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



export const TypingQuizData: Quiz = {
  totalQuestions: 5,
  questions: [
    {
      question: "What does the pressing CTRL + C at the same time do?",
      choices: [
        "Undo",
        "Save",
        "Copy",
        "Paste",
      ],
      correctAnswer: "Copy",
      imageLink: "",
      explanation: "CTRL + C is used to copy the currently selected item such as text or images.",
    },
    {
      question: "What does pressing ALT + F4 at the same time do?",
      choices: [
        "Open the start menu",
        "Switch between open windows",
        "Close the current window",
        "Open the file menu",
      ],
      correctAnswer: "Close the current window",
      imageLink: "",
      explanation: "ALT + F4 is used to close the current window.",
    },
    {
      question: 'While typing, how do you delete the character to the left of the cursor?',
      choices: [
        "Press the delete key",
        "Press the backspace key",
        "Press the enter key",
        "Press the spacebar",
      ],
      correctAnswer: "Press the backspace key",
      imageLink: "",
      explanation:
        "The backspace key is used to delete the character to the LEFT of the cursor, while the delete key does the same but on the RIGHT instead.",
    },
    {
      question: "Which of the following is false about CAPS LOCK?",
      choices: [
        "It can be toggled to type in all capital letters",
        "It can be toggled to type in all small letters",
        "It has to be held down while typing",
        "There is usually an indicator light on the keyboard to show if it is on or off"],
      correctAnswer: "It has to be held down while typing",
      imageLink: "",
      explanation: "CAPS LOCK can be used to toggle between 2 functionalities: To type in all capital letters or to type in all small letters. Most keyboards use a small indicator light to show whether the CAPS LOCK is currently toggled on or off. It does not have to be held down while typing.",
    },
    {
      question: 'How do I move the cursor to the beginning of the line while typing?',
      choices: [
        "Press the home key",
        "Press the end key",
        "Press the page up key",
        "Press the page down key",
      ],
      correctAnswer: "Press the home key",
      imageLink: "",
      explanation: "The home key is used to move the cursor to the beginning of the line while typing. The end key is used to move the cursor to the end of the line while typing. The page up and page down keys are used to move the cursor up and down the page respectively.",
    },
  ],
};