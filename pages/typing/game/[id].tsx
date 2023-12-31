import { useRouter } from 'next/router';
import TypingMainUI from '@/components/typing/typing-main-ui';
import BackButton, { Topic } from '@/components/backButton';
import Head from 'next/head';

export default function Game() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Head>
                <title>Playground - Type Words and Sentences</title>
            </Head>
            <div className='flex flex-col'>
                <div className='hidden md:block'>
                    <TypingMainUI chosenStory={id as string} />
                </div>

                {/* Screen for when the screen size is too small */}
                <div className='md:hidden w-screen h-screen'>
                    {/* Only available on desktop message, only shown on mobile */}
                    <div className='flex lg:hidden flex-col justify-center items-center space-y-16 h-screen'>
                        <BackButton pathToReturnTo='/typing' displayText='Back' category={Topic.Typing} />
                        <h1 className="text-3xl md:text-4xl font-bold font-gaegu text-center mx-8 py-10">Sorry, this activity is only available on a computer.</h1>
                        <img src='/assets/email/computer.png' alt='Computer' className='w-2/5 md:w-1/4' />
                    </div>
                </div>
            </div>
        </div>
    );
}