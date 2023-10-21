import LevelSelection from '@/components/typing/level-selection';
import { LevelOption } from '@/components/typing/level-selection';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TypingRandomiseUI from '@/components/typing/typing-randomise-ui';
import React from 'react';


const learnLevelOptions: LevelOption[] = [{
    label: 'Computer Parts',
    id: 'computerparts',
    imageSrc: '/assets/typing/chickenrice/chickenrice_stall.png'
},
{
    label: 'Software Terms',
    id: 'softwareterms',
    imageSrc: '/assets/typing/chickenrice/bored.png'
}
]


const LearnPage = () => {
    const router = useRouter();

    const [chosenStory, setChosenStory] = React.useState<string | null>(null);

    const selectOption = (index: number) => {
        console.log("Chose " + index + " with id " + learnLevelOptions[index].id);

        const chosenStory = learnLevelOptions[index].id;
        setChosenStory(chosenStory);
    }

    return (
        <div className='flex flex-col justify-center items-center bg-slate-100 max-h-full max-w-full'>

            {chosenStory ?
                <div>
                    <TypingRandomiseUI chosenStory={chosenStory as string} />
                </div>
                :
                <div>
                    <LevelSelection options={learnLevelOptions} onOptionSelect={(index) => { selectOption(index) }} onBackClick={() => { router.back() }} />

                </div>
            }

        </div>

    );
};

export default LearnPage;

