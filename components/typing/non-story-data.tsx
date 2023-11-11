
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
        hint: "Press Shift together with the key that shows !",
    },
    {
        key: "@",
        checkKey: "@",
        displayQuestion: "At Sign",
        hint: "Press Shift together with the key that shows @",
    },
    {
        key: "#",
        checkKey: "#",
        displayQuestion: "Hash",
        hint: "Press Shift together with the key that shows #",
    },
    {
        key: "$",
        checkKey: "$",
        displayQuestion: "Dollar Sign",
        hint: "Press Shift together with the key that shows $",
    },
    {
        key: "%",
        checkKey: "%",
        displayQuestion: "Percent",
        hint: "Press Shift together with the key that shows %",
    },
    {
        key: "^",
        checkKey: "^",
        displayQuestion: "Caret",
        hint: "Press Shift together with the key that shows ^",
    },
    {
        key: "&",
        checkKey: "&",
        displayQuestion: "Ampersand",
        hint: "Press Shift together with the key that shows &",
    },
    {
        key: "*",
        checkKey: "*",
        displayQuestion: "Asterisk",
        hint: "Press Shift together with the key that shows *",
    },
    {
        key: "(",
        checkKey: "(",
        displayQuestion: "Left Parenthesis",
        hint: "Press Shift together with the key that shows (",
    },
    {
        key: ")",
        checkKey: ")",
        displayQuestion: "Right Parenthesis",
        hint: "Press Shift together with the key that shows )",
    },
    {
        key: "_",
        checkKey: "_",
        displayQuestion: "Underscore",
        hint: "Press Shift together with the key that shows _",
    },
    {
        key: "+",
        checkKey: "+",
        displayQuestion: "Plus Sign",
        hint: "Press Shift together with the key that shows +",
    },
    {
        key: "{",
        checkKey: "{",
        displayQuestion: "Left Curly Bracket",
        hint: "Press Shift together with the key that shows {",
    },
    {
        key: "}",
        checkKey: "}",
        displayQuestion: "Right Curly Bracket",
        hint: "Press Shift together with the key that shows }",
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
        hint: "Press Shift together with the key that shows \"",
    },
    {
        key: "<",
        checkKey: "<",
        displayQuestion: "Less Than",
        hint: "Press Shift together with the key that shows <",
    },
    {
        key: ">",
        checkKey: ">",
        displayQuestion: "Greater Than",
        hint: "Press Shift together with the key that shows >",
    },
    {
        key: "?",
        checkKey: "?",
        displayQuestion: "Question Mark",
        hint: "Press Shift together with the key that shows ?",
    },
    {
        key: "~",
        checkKey: "~",
        displayQuestion: "Tilde",
        hint: "Press Shift together with the key that shows ~",
    },
    {
        key: "-",
        checkKey: "-",
        displayQuestion: "Minus Sign",
        hint: "Press the key that shows -",
    },
    {
        key: "=",
        checkKey: "=",
        displayQuestion: "Equal Sign",
        hint: "Press the key that shows =",
    },
    {
        key: "[",
        checkKey: "[",
        displayQuestion: "Left Square Bracket",
        hint: "Press the key that shows [",
    },
    {
        key: "]",
        checkKey: "]",
        displayQuestion: "Right Square Bracket",
        hint: "Press the key that shows ]",
    },
    {
        key: "\\",
        checkKey: "\\",
        displayQuestion: "Backslash",
        hint: "Press the key that shows \\",
    },
    {
        key: ";",
        checkKey: ";",
        displayQuestion: "Semicolon",
        hint: "Press they key that shows ;",
    },
    {
        key: "'",
        checkKey: "'",
        displayQuestion: "Single Quote",
        hint: "Press the key that shows '",
    },
    {
        key: ",",
        checkKey: ",",
        displayQuestion: "Comma",
        hint: "Press the key that shows ,",
    },
    {
        key: ".",
        checkKey: ".",
        displayQuestion: "Period",
        hint: "Press the key that shows .",
    },
    {
        key: "/",
        checkKey: "/",
        displayQuestion: "Slash",
        hint: "Press the key that shows /",
    },
    {
        key: " ",
        checkKey: " ",
        displayQuestion: "Space",
        hint: "Press the Spacebar located at the bottom center of the keyboard.",
    },
];
