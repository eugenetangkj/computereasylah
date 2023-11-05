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

//Typing Quiz Questions and Answers
export const TypingQuizData: Quiz = {
  totalQuestions: 5,
  questions: [
    {
      question: "What does pressing CTRL + C at the same time do?",
      choices: ["Undo", "Save", "Copy", "Paste"],
      correctAnswer: "Copy",
      imageLink: "",
      explanation:
        "CTRL + C is used to copy the currently selected item such as text or images.",
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
      question:
        "While typing, how do you delete the character to the left of the cursor?",
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
        "Hold it down while typing to type in capital letters",
        "There is usually an indicator light on the keyboard to show if it is on or off",
      ],
      correctAnswer: "Hold it down while typing to type in capital letters",
      imageLink: "",
      explanation:
        "CAPS LOCK can be used to toggle between 2 functionalities: To type in all capital letters or to type in all small letters. Most keyboards use a small indicator light to show whether the CAPS LOCK is currently toggled on or off. It does not have to be held down while typing.",
    },
    {
      question:
        "Which key do I press once to move the cursor to the beginning of the line while typing?",
      choices: [
        "Press the home key",
        "Press the end key",
        "Press the page up key",
        "Press the page down key",
        "Press the backspace key",
        "Press the left key",
      ],
      correctAnswer: "Press the home key",
      imageLink: "",
      explanation:
        "The home key is used to move the cursor to the beginning of the line while typing. The end key is used to move the cursor to the end of the line while typing. The page up and page down keys are used to move the cursor up and down the page respectively. Backspace and left do not immediately move the cursor to the start of the line.",
    },
  ],
};

//Applications Quiz Questions and Answers
export const ApplicationsQuizData: Quiz = {
  totalQuestions: 3,
  questions: [
    {
      question: "What does a word processor do?",
      choices: [
        "Listen to music",
        "Write word documents",
        "Access the Internet",
        "Play interesting games",
      ],
      correctAnswer: "Write word documents",
      imageLink: "",
      explanation:
        "Word processors allow you to create word documents on your computer, such as writing a letter or designing a flyer. Examples of word processors are Microsoft Word and Notepad.",
    },
    {
      question: "What is the function of this icon?",
      choices: [
        "Close the window",
        "Minimise the window",
        "Maximise the window",
        "Opens a new window",
      ],
      correctAnswer: "Maximise the window",
      imageLink:
        "https://cdn.icon-icons.com/icons2/2248/PNG/512/window_maximize_icon_137012.png",
      explanation:
        "The icon shown is used to maximise a window, allowing the window to take up the full space on your screen.",
    },
    {
      question: "What is the function of this icon?",
      choices: [
        "Close the window",
        "Minimise the window",
        "Maximise the window",
        "Opens a new window",
      ],
      correctAnswer: "Minimise the window",
      imageLink: "https://cdn-icons-png.flaticon.com/512/5866/5866526.png",
      explanation:
        "The icon shown is used to minimise a window, such that the window no longer appears on the screen. To bring the window into view, you can visit the taskbar.",
    },
    {
      question:
        "I have an existing file on the computer. I made some changes, and would like to save it without changing the file name. Which option should I press?",
      choices: ["Save", "Save As", "Open", "Print"],
      correctAnswer: "Save",
      imageLink: "",
      explanation:
        "Save As allows you to save the file with a new file name, while Save saves the contents of the file without changing a new file name.",
    },
    {
      question: "Which file extension do downloaded applications usually have?",
      choices: [".docx", ".exe", ".mp3", ".pptx"],
      correctAnswer: ".exe",
      imageLink: "",
      explanation:
        "Downloaded apps are usually executable files, which contain instructions for your computer to download and run the apps. Executable files have a .exe file extension.",
    },
  ],
};

//Email Quiz Questions and Answers
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
      explanation:
        "Subject provides a quick overview of what the email is about without having to read the entire email.",
    },
  ],
};

//Safety Quiz Questions and Answers
export const SafetyQuizData: Quiz = {
  totalQuestions: 5,
  questions: [
    {
      question: "Which of the following is not a type of malware?",
      choices: ["Virus", "Browserware", "Spyware", "Ransomware"],
      correctAnswer: "Browserware",
      imageLink: "",
      explanation:
        "There is no such as thing as browserware. Instead, it is possible for your computer to be infected with virus, spyware or ransomware if you visit dangerous sites on the Internet.",
    },
    {
      question: "Which of the following best describes what phishing is?",
      choices: [
        "A scammer invites you to go fishing",
        "A scammer blocks off your Internet access",
        "A scammer pretends to be someone whom you trust",
        "A scammer directly hacks into your computer",
      ],
      correctAnswer: "A scammer pretends to be someone whom you trust",
      imageLink: "",
      explanation:
        "Phishing is where scammers pretend to be someone trustable, tricking you into sharing sensitive data like bank and credit card numbers.",
    },
    {
      question: "Which of the following is a sign of an online scam?",
      choices: [
        "Vague and incorrect language",
        "Urgent or threatening language",
        "Promise of attractive prizes",
        "Request for confidential information",
        "All of the above",
      ],
      correctAnswer: "All of the above",
      imageLink: "",
      explanation:
        "Online scams often encourage you to perform an action that would reveal confidential information. They often do so via either threatening or attracting you with prizes.",
    },
    {
      question: "What application should you download to remove ads in your browser?",
      choices: ["Ad Blocker", "Ad Remover", "Ad Delete", "Ad Noise"],
      correctAnswer: "Ad Blocker",
      imageLink: "",
      explanation:
        "The correct term is Ad Blocker. Ad Blocker is a software that stops ads from appearing in your browser. It is useful to remove distracting ads which could even be fake news or dangerous to click on.",
    },
    {
      question: "Which of the following is a strong password?",
      choices: ["Password123", "abcd123", "tomtan", "lrtv2!@"],
      correctAnswer: "lrtv2!@",
      imageLink: "",
      explanation:
        "It is encouraged to use a mixture of letters and symbols in a strong password. Avoid common words like your own name, and try not to use consecutive characters on a keyboard.",
    },
  ],
};
