import { useRouter } from 'next/router';

// This is currently unused
function Menu() {
    const router = useRouter();

    const navButtonStyle = 'cursor-pointer mx-2 text-white';

    const handleExitGame = () => {
        router.push('/playground');
    };

    const handleRetry = () => {
        // Add your retry logic here
    };

    const handleChangeLevel = () => {
        // Add your change level logic here
    };

    return (
        <div className='flex flex-col items-center w-full justify-center py-5 space-y-10 bg-blue-500'>
            <nav>
                <button className={navButtonStyle} onClick={handleExitGame}>Exit Game</button>
                <button className={navButtonStyle} onClick={handleRetry}>Retry</button>
                <button className={navButtonStyle} onClick={handleChangeLevel}>Change Level</button>
            </nav>
        </div>
    );
}

export default Menu;
