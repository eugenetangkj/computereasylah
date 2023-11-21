import LevelSelection, { LevelOption } from '@/components/typing/level-selection';
import TypingRandomiseUI from '@/components/typing/typing-randomise-ui';
import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';


const learnLevelOptions: LevelOption[] = [{
    label: 'Computer Parts',
    id: 'computerparts',
    imageSrc: '/assets/typing/chickenrice/chickenrice_stall.png'
},
{
    label: 'All Random',
    id: 'all-random',
    imageSrc: '/assets/typing/chickenrice/bored.png'
}
]


const LearnPage = () => {
    const router = useRouter();

    const [chosenStory, setChosenStory] = React.useState<string | null>(null);

    const selectOption = (index: number) => {
   
        const chosenStory = learnLevelOptions[index].id;
        setChosenStory(chosenStory);
    }

    return (
        <div>
            <Head>
            <title>Typing - Learn</title>
            </Head>
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
        </div>

    );
};

export default LearnPage;

