import React from 'react';
import Menu from './menu';
import Statistics from './statistics';
import Game from './game';
// import Image from 'next/image';
// import pic from '@/assets/chickenricestall.png';

interface TypingMainUIProps {

}

const TypingMainUI: React.FC<TypingMainUIProps> = (props) => {
    return (
        <div className='flex flex-col justify-center items-center bg-slate-100 max-h-full max-w-full'>
            <Menu />
            <Game
                upcomingSentencesAndBackgroundImages={[
                    ["Hello, Mr. Lim! What can I get you today?", "/assets/typing/chickenricestall.png"],
                    ["I would like a steamed chicken rice medium sized take away!", "/assets/typing/chickenricestall.png"],
                    ["Ok, coming right up!", "/assets/typing/chickenricestall.png"]
                ]}
            />
            {/* <Statistics /> */}


            {/* <Image src={pic} alt='Chicken Rice Stall' className='w-1/2' /> */}
        </div>
    );
};


export default TypingMainUI;
