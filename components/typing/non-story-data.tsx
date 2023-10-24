
export interface KeyCheckQuestion {
    key: string; // The text to be displayed in the yellow box - Should show the key to press
    checkKey: string; // The key to be checked - This is checked with KeyboardEvent.key
    displayQuestion: string; // The question to be displayed below the yellow box
    hint: string;
}

export const symbolsQuestions: KeyCheckQuestion[] = [
    {
        key: "!",
        checkKey: "!",
        displayQuestion: "Exclamation Mark",
        hint: "Press Shift together with the 1 located above the keyboard letters at the same time.",
    },
    {
        key: "@",
        checkKey: "@",
        displayQuestion: "At Sign",
        hint: "Press Shift together with the 2 located above the keyboard letters at the same time.",
    },
    {
        key: "#",
        checkKey: "#",
        displayQuestion: "Hash",
        hint: "Press Shift together with the 3 located above the keyboard letters at the same time.",
    },
    {
        key: "$",
        checkKey: "$",
        displayQuestion: "Dollar Sign",
        hint: "Press Shift together with the 4 located above the keyboard letters at the same time.",
    },
    {
        key: "%",
        checkKey: "%",
        displayQuestion: "Percent",
        hint: "Press Shift together with the 5 located above the keyboard letters at the same time.",
    },
    {
        key: "^",
        checkKey: "^",
        displayQuestion: "Caret",
        hint: "Press Shift together with the 6 located above the keyboard letters at the same time.",
    },
    {
        key: "&",
        checkKey: "&",
        displayQuestion: "Ampersand",
        hint: "Press Shift together with the 7 located above the keyboard letters at the same time.",
    },
    {
        key: "*",
        checkKey: "*",
        displayQuestion: "Asterisk",
        hint: "Press Shift together with the 8 located above the keyboard letters at the same time.",
    },
    {
        key: "(",
        checkKey: "(",
        displayQuestion: "Left Parenthesis",
        hint: "Press Shift together with the 9 located above the keyboard letters at the same time.",
    },
    {
        key: ")",
        checkKey: ")",
        displayQuestion: "Right Parenthesis",
        hint: "Press Shift together with the 0 located above the keyboard letters at the same time.",
    },
    {
        key: "_",
        checkKey: "_",
        displayQuestion: "Underscore",
        hint: "Press Shift together with the - located above the keyboard letters at the same time.",
    },
    {
        key: "+",
        checkKey: "+",
        displayQuestion: "Plus Sign",
        hint: "Press Shift together with the = located above the keyboard letters at the same time.",
    },
    {
        key: "{",
        checkKey: "{",
        displayQuestion: "Left Curly Bracket",
        hint: "Press Shift together with the [ located above the keyboard letters at the same time.",
    },
    {
        key: "}",
        checkKey: "}",
        displayQuestion: "Right Curly Bracket",
        hint: "Press Shift together with the ] located above the keyboard letters at the same time.",
    },
    {
        key: "|",
        checkKey: "|",
        displayQuestion: "Pipe",
        hint: "Press Shift together with the \\ located above the keyboard letters at the same time.",
    },
    {
        key: ":",
        checkKey: ":",
        displayQuestion: "Colon",
        hint: "Press Shift together with the ; located above the keyboard letters at the same time.",
    },
    {
        key: '"',
        checkKey: '"',
        displayQuestion: "Double Quote",
        hint: "Press Shift together with the ' located above the keyboard letters at the same time.",
    },
    {
        key: "<",
        checkKey: "<",
        displayQuestion: "Less Than",
        hint: "Press Shift together with the , located above the keyboard letters at the same time.",
    },
    {
        key: ">",
        checkKey: ">",
        displayQuestion: "Greater Than",
        hint: "Press Shift together with the . located above the keyboard letters at the same time.",
    },
    {
        key: "?",
        checkKey: "?",
        displayQuestion: "Question Mark",
        hint: "Press Shift together with the / located above the keyboard letters at the same time.",
    },
    {
        key: "~",
        checkKey: "~",
        displayQuestion: "Tilde",
        hint: "Press Shift together with the ` located above the keyboard letters at the same time.",
    },
    {
        key: "-",
        checkKey: "-",
        displayQuestion: "Minus Sign",
        hint: "Press the - located between the 0 and = keys above the keyboard letters.",
    },
    {
        key: "=",
        checkKey: "=",
        displayQuestion: "Equal Sign",
        hint: "Press the = located between the - and Backspace keys above the keyboard letters.",
    },
    {
        key: "[",
        checkKey: "[",
        displayQuestion: "Left Square Bracket",
        hint: "Press the [ located between the P and Enter keys above the keyboard letters.",
    },
    {
        key: "]",
        checkKey: "]",
        displayQuestion: "Right Square Bracket",
        hint: "Press the ] located between the [ and Enter keys above the keyboard letters.",
    },
    {
        key: "\\",
        checkKey: "\\",
        displayQuestion: "Backslash",
        hint: "Press the \\ located between the ; and ' keys above the keyboard letters.",
    },
    {
        key: ";",
        checkKey: ";",
        displayQuestion: "Semicolon",
        hint: "Press the ; located between the L and Enter keys above the keyboard letters.",
    },
    {
        key: "'",
        checkKey: "'",
        displayQuestion: "Single Quote",
        hint: "Press the ' located between the ; and Enter keys above the keyboard letters.",
    },
    {
        key: ",",
        checkKey: ",",
        displayQuestion: "Comma",
        hint: "Press the , located between the M and . keys above the keyboard letters.",
    },
    {
        key: ".",
        checkKey: ".",
        displayQuestion: "Period",
        hint: "Press the . located between the , and / keys above the keyboard letters.",
    },
    {
        key: "/",
        checkKey: "/",
        displayQuestion: "Slash",
        hint: "Press the / located between the . and Right Shift keys above the keyboard letters.",
    },
    {
        key: " ",
        checkKey: " ",
        displayQuestion: "Space",
        hint: "Press the Spacebar located at the bottom center of the keyboard.",
    },
];
