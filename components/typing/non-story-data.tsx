
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
        hint: "Shift + 1",
    },
    {
        key: "@",
        checkKey: "@",
        displayQuestion: "At Sign",
        hint: "Shift + 2",
    },
    {
        key: "#",
        checkKey: "#",
        displayQuestion: "Hash",
        hint: "Shift + 3",
    },
    {
        key: "$",
        checkKey: "$",
        displayQuestion: "Dollar Sign",
        hint: "Shift + 4",
    },
    {
        key: "%",
        checkKey: "%",
        displayQuestion: "Percent",
        hint: "Shift + 5",
    },
    {
        key: "^",
        checkKey: "^",
        displayQuestion: "Caret",
        hint: "Shift + 6",
    },
    {
        key: "&",
        checkKey: "&",
        displayQuestion: "Ampersand",
        hint: "Shift + 7",
    },
    {
        key: "*",
        checkKey: "*",
        displayQuestion: "Asterisk",
        hint: "Shift + 8",
    },
    {
        key: "(",
        checkKey: "(",
        displayQuestion: "Left Parenthesis",
        hint: "Shift + 9",
    },
    {
        key: ")",
        checkKey: ")",
        displayQuestion: "Right Parenthesis",
        hint: "Shift + 0",
    },
    {
        key: "_",
        checkKey: "_",
        displayQuestion: "Underscore",
        hint: "Shift + -",
    },
    {
        key: "+",
        checkKey: "+",
        displayQuestion: "Plus Sign",
        hint: "Shift + =",
    },
    {
        key: "{",
        checkKey: "{",
        displayQuestion: "Left Curly Bracket",
        hint: "Shift + [",
    },
    {
        key: "}",
        checkKey: "}",
        displayQuestion: "Right Curly Bracket",
        hint: "Shift + ]",
    },
    {
        key: "|",
        checkKey: "|",
        displayQuestion: "Pipe",
        hint: "Shift + \\",
    },
    {
        key: ":",
        checkKey: ":",
        displayQuestion: "Colon",
        hint: "Shift + ;",
    },
    {
        key: '"',
        checkKey: '"',
        displayQuestion: "Double Quote",
        hint: "Shift + '",
    },
    {
        key: "<",
        checkKey: "<",
        displayQuestion: "Less Than",
        hint: "Shift + ,",
    },
    {
        key: ">",
        checkKey: ">",
        displayQuestion: "Greater Than",
        hint: "Shift + .",
    },
    {
        key: "?",
        checkKey: "?",
        displayQuestion: "Question Mark",
        hint: "Shift + /",
    },

    {
        key: "~",
        checkKey: "~",
        displayQuestion: "Tilde",
        hint: "Shift + `",
    },
    {
        key: "-",
        checkKey: "-",
        displayQuestion: "Minus Sign",
        hint: "-",
    },
    {
        key: "=",
        checkKey: "=",
        displayQuestion: "Equal Sign",
        hint: "=",
    },
    {
        key: "[",
        checkKey: "[",
        displayQuestion: "Left Square Bracket",
        hint: "[",
    },
    {
        key: "]",
        checkKey: "]",
        displayQuestion: "Right Square Bracket",
        hint: "]",
    },
    {
        key: "\\",
        checkKey: "\\",
        displayQuestion: "Backslash",
        hint: "\\",
    },
    {
        key: ";",
        checkKey: ";",
        displayQuestion: "Semicolon",
        hint: ";",
    },
    {
        key: "'",
        checkKey: "'",
        displayQuestion: "Single Quote",
        hint: "'",
    },
    {
        key: ",",
        checkKey: ",",
        displayQuestion: "Comma",
        hint: ",",
    },
    {
        key: ".",
        checkKey: ".",
        displayQuestion: "Period",
        hint: ".",
    },
    {
        key: "/",
        checkKey: "/",
        displayQuestion: "Slash",
        hint: "/",
    },
    {
        key: " ",
        checkKey: " ",
        displayQuestion: "Space",
        hint: "Space",
    },
];
