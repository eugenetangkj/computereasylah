import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import EmailSceneZero from '@/components/email/practice/email-scene-zero';
import EmailSceneOne from '@/components/email/practice/email-scene-one';
import EmailSceneTwo from '@/components/email/practice/email-scene-two';
import EmailSceneThree from '@/components/email/practice/email-scene-three';
import EmailSceneFour from '@/components/email/practice/email-scene-four';


//Practice component for email activities
export default function EmailPractice() {

    //Current scene loaded
    const [currentSceneIndex, setCurrentSceneIndex] = useState(0); 


    // Function to update scene index
    const updateCurrentSceneIndex = (index: number) => {
        setCurrentSceneIndex(index);
    }

    return (
        <div className="h-screen w-screen bg-trust-blue-900 flex flex-col items-center justify-center overflow-hidden">
            {
                (currentSceneIndex == 0)
                ? <EmailSceneZero updateSceneIndex={updateCurrentSceneIndex} />
                :(currentSceneIndex == 1)
                ? <EmailSceneOne updateSceneIndex={updateCurrentSceneIndex} />
                :(currentSceneIndex == 2)
                ? <EmailSceneTwo updateSceneIndex={updateCurrentSceneIndex} />
                :(currentSceneIndex == 3)
                ? <EmailSceneThree updateSceneIndex={updateCurrentSceneIndex} />
                :(currentSceneIndex == 4)
                ? <EmailSceneFour updateSceneIndex={updateCurrentSceneIndex} />
                : <EmailSceneZero updateSceneIndex={updateCurrentSceneIndex} />
            }

            
           
        </div>


    )
}