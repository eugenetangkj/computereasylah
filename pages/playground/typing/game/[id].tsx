import { useRouter } from 'next/router';
import TypingMainUI from '@/components/typing/typing-main-ui';

export default function Game() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <TypingMainUI chosenStory={id as string} />
        </div>
    );
}