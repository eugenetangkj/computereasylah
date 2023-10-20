// Custom interface for data used in typing stories

export interface StoryScene {
    typingSentence: string;
    bkgImg: string;
}

export interface StoryScenes {
    scenes: StoryScene[]
}



export const chickenRiceStory: StoryScenes = {
    scenes: [
        {
            typingSentence: "Wah! I'm damn hungry sia! Eat what ah?",
            bkgImg: "/assets/typing/chickenrice/bored.png"
        },
        {
            typingSentence: "Eunos market hawker center got a lot of food ah can go see see look look!",
            bkgImg: "/assets/typing/chickenrice/eunos_market.png"
        },
        {
            typingSentence: "Got 1-1 offer at the chicken rice stall!",
            bkgImg: "/assets/typing/chickenrice/chickenrice_stall_1-1.png"
        },
        {
            typingSentence: "Eh let's go lahhh!!!",
            bkgImg: "/assets/typing/chickenrice/queue.png"
        },

        {
            typingSentence: "Eh Mr. Lim! What you want order ah?",
            bkgImg: "/assets/typing/chickenrice/chickenrice_stall.png"
        },
        {
            typingSentence: "I want roasted chicken rice large! Can I add egg?",
            bkgImg: "/assets/typing/chickenrice/chickenrice_ordering.png"
        },
        {
            typingSentence: "Can ah it's $0.50",
            bkgImg: "/assets/typing/chickenrice/chickenrice_add_egg.png"
        },
        {
            typingSentence: "Ok, coming right up!",
            bkgImg: "/assets/typing/chickenrice/chickenrice_stall.png"
        },
        {
            typingSentence: "Thank you! Time to start eating. Yum!!",
            bkgImg: "/assets/typing/chickenrice/chickenrice_chickenrice_set.png"
        },
        {
            typingSentence: "Wah! So delicious!!!",
            bkgImg: "/assets/typing/chickenrice/eating.png"
        },
        {
            typingSentence: "The chicken so soft and tender!",
            bkgImg: "/assets/typing/chickenrice/chicken_set_chicken.png"
        },
        {
            typingSentence: "The rice is so tasty and fragrant!",
            bkgImg: "/assets/typing/chickenrice/rice.png"
        },
        {
            typingSentence: "The warm soup is infused with chicken flavour!",
            bkgImg: "/assets/typing/chickenrice/soup.png"
        },
        {
            typingSentence: "The chilli also very shiok! Wah finally I am full!",
            bkgImg: "/assets/typing/chickenrice/steamed_chicken_rice_top_down.png"
        },
        {
            typingSentence: "Can I help you clear your tray?",
            bkgImg: "/assets/typing/chickenrice/clearing_tray.png"
        },
        {
            typingSentence: "Yes please! Thank you!",
            bkgImg: "/assets/typing/chickenrice/can_clear_tray.png"
        },
        {
            typingSentence: "I will be back! Time to note down the location of this stall so I can remember;",
            bkgImg: "/assets/typing/chickenrice/stall_2.png"
        },
        {
            typingSentence: "The address is: Block 4A Eunos Crescent, #01-34 Eng Kee Haianese Chicken Rice and Porridge",
            bkgImg: "/assets/typing/chickenrice/map.png"
        },
    ]
};


// Update dictionary new stories
const storyMapping: { [key: string]: StoryScenes } = {
    "chickenrice": chickenRiceStory
};

export const getStoryScenesFromString = (storyName: string): StoryScenes => {
    return storyMapping[storyName];
};









