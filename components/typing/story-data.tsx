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
            typingSentence: "Wah! I'm damn hungry sia! Eat what for lunch ah?",
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



export const mrtStory: StoryScenes = {
    scenes: [
        {
            typingSentence: "A story about an elderly going on MRT then getting offered a seat",
            bkgImg: "/assets/typing/chickenrice/bored.png"
        },
    ]
};

export const supermarketStory: StoryScenes = {
    scenes: [
        {
            typingSentence: "A story about an elderly going NTUC, viewing the various deals and buying several items, then going to self checkout then dont know how to use self checkout counter then ask for help",
            bkgImg: "/assets/typing/chickenrice/bored.png"
        },
    ]
};

export const computerParts: StoryScenes = {
    scenes: [
        {
            typingSentence: "A laptop is a portable computer, small enough to be carried around easily and is flat when closed.",
            bkgImg: "/assets/typing/chickenrice/bored.png"
        },
        // {
        //     typingSentence: "A computer is an electronic device that manipulates information or data. It has the ability to store, retrieve and process data.",
        //     bkgImg: "/assets/typing/chickenrice/bored.png"
        // },
        {
            typingSentence: "Hardware is any part of your computer that has a physical structure.",
            bkgImg: "/assets/typing/chickenrice/bored.png"
        },
        {
            typingSentence: "Software is any set of instructions that tells the hardware what to do.",
            bkgImg: "/assets/typing/chickenrice/bored.png"
        },
        {
            typingSentence: "The system unit is also known as the computer case - A metal and plastic box that contains the electronic components of the computer.",
            bkgImg: "/assets/typing/chickenrice/bored.png"
        },
        {
            typingSentence: "A monitor is a device that displays the information given by the computer. You are currently looking at your computer's monitor screen.",
            bkgImg: "/assets/typing/chickenrice/bored.png"
        },
        {
            typingSentence: "A keyboard is used for you to be able to communicate with the computer by typing on it. It contains many buttons labelled with symbols. You are typing on a keyboard now.",
            bkgImg: "/assets/typing/chickenrice/bored.png"
        },
        {
            typingSentence: "A mouse is a pointer tool that you can use to tell the computer which part of the screen to click on.",
            bkgImg: "/assets/typing/chickenrice/bored.png"
        },
    ]
};

// Update dictionary new stories
const storyMapping: { [key: string]: StoryScenes } = {
    // Stories
    "chickenrice": chickenRiceStory,
    "mrt": mrtStory,
    "supermarket": supermarketStory,

    // Learn
    "computerparts": computerParts,
};

export const getStoryScenesFromString = (storyName: string): StoryScenes => {
    if (storyName == "all-random") {
        return getStorySceneWithAllScenes();
    }

    console.log("Getting story scenes for " + storyName);
    return storyMapping[storyName];
};

const getStorySceneWithAllScenes = (): StoryScenes => {
    const allScenes: StoryScene[] = [];
    Object.values(storyMapping).forEach((story) => {
        allScenes.push(...story.scenes);
    });

    const allScenesStoryScene: StoryScenes = {
        scenes: allScenes
    }

    return allScenesStoryScene;
};








