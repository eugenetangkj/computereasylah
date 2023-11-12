import React from 'react';
import Game from './game';


import { getStoryScenesFromString } from './story-data';


interface TypingMainUIProps {
    chosenStory: string;
}


// This component loads the story data and presents it to the Game component without any modification
// It is used for the Story feature for Typing
const TypingMainUI: React.FC<TypingMainUIProps> = (chosenStory) => {
    return (
        <div className='bg-slate-100'>
            {/* <Menu /> */}

            <Game
                storyData={getStoryScenesFromString(chosenStory.chosenStory)}
            />
            {/* <Statistics /> */}


            {/* <Image src={pic} alt='Chicken Rice Stall' className='w-1/2' /> */}
        </div>
    );
};


export default TypingMainUI;
