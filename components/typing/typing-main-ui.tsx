import React from 'react';
import Menu from './menu';
import Statistics from './statistics';
import Game from './game';
// import Image from 'next/image';
// import pic from '@/assets/chickenricestall.png';
import { getStoryScenesFromString } from './story-data';


interface TypingMainUIProps {
    chosenStory: string;
}


// This component loads the story data and presents it to the Game component without any modification
// It is used for the Story feature for Typing
const TypingMainUI: React.FC<TypingMainUIProps> = (chosenStory) => {
    return (
        <div className='flex flex-col justify-center items-center bg-slate-100 max-h-full max-w-full'>
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
