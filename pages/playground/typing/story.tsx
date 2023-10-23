import LevelSelection from '@/components/typing/level-selection';
import { LevelOption } from '@/components/typing/level-selection';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TypingMainUI from '@/components/typing/typing-main-ui';
import React from 'react';

const storyLevelOptions: LevelOption[] = [{
    label: 'Hawker Center',
    id: 'chickenrice',
    imageSrc: '/assets/typing/chickenrice/chickenrice_stall.png'
},
{
    label: 'MRT Station',
    id: 'mrt',
    imageSrc: '/assets/typing/chickenrice/bored.png'
},
{
    label: 'Supermarket',
    id: 'supermarket',
    imageSrc: '/assets/typing/chickenrice/queue.png'
}
]


const StoryPage = () => {
    const router = useRouter();

    const [chosenStory, setChosenStory] = React.useState<string | null>(null);

    const selectOption = (index: number) => {
        console.log("Chose " + index + " with id " + storyLevelOptions[index].id);

        const chosenStory = storyLevelOptions[index].id;
        setChosenStory(chosenStory);
    }

    return (
        <div className='bg-slate-100'>

            {chosenStory ?
                <div>
                    <TypingMainUI chosenStory={chosenStory as string} />
                </div>
                :
                <div>
                    <LevelSelection options={storyLevelOptions} onOptionSelect={(index) => { selectOption(index) }} onBackClick={() => { router.back() }} />

                </div>
            }

        </div>

    );
};

export default StoryPage;

