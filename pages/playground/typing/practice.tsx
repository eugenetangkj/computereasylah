import LevelSelection from '@/components/typing/level-selection';
import { LevelOption } from '@/components/typing/level-selection';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TypingRandomiseUI from '@/components/typing/typing-randomise-ui';
import React from 'react';

const PracticePage = () => {
    const router = useRouter();

    const chosenStory = "all-random"

    return (
        <div className='flex flex-col justify-center items-center bg-slate-100 max-h-full max-w-full'>

            <div>
                <TypingRandomiseUI chosenStory={chosenStory as string} />
            </div>

        </div>

    );
};

export default PracticePage;

