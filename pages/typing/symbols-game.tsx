import { useRouter } from 'next/router';
import TypingMainUI from '@/components/typing/typing-main-ui';
import BackButton from '@/components/backButton';
import KeyCheckGame from '@/components/typing/key-check-game';
import { Topic } from '@/components/backButton';
import Head from 'next/head';

export default function SymbolsGame() {

    return (
        <div>
            <Head>
                <title>Playground - Type Symbols </title>
            </Head>
            <div className='flex flex-col'>
                <div className='hidden md:block'>
                    <KeyCheckGame />
                </div>

                {/* Screen for when the screen size is too small */}
                <div className='md:hidden w-screen h-screen'>
                    {/* Only available on desktop message, only shown on mobile */}
                    <div className='flex md:hidden flex-col justify-center items-center space-y-16'>
                        <BackButton pathToReturnTo='/typing' displayText='Back' category={Topic.Typing} />
                        <h1 className="text-3xl md:text-4xl font-bold font-gaegu text-center mx-8 py-10">Sorry, this activity is only available on a computer.</h1>
                        <img src='/assets/email/computer.png' alt='Computer' className='w-2/5 md:w-1/4' />
                    </div>
                </div>
            </div>
        </div>
    );
}