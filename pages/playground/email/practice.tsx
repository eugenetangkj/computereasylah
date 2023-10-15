import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import EmailSceneZero from '@/components/email/practice/email-scene-zero';
import EmailSceneOne from '@/components/email/practice/email-scene-one';
import EmailSceneTwo from '@/components/email/practice/email-scene-two';
import EmailSceneThree from '@/components/email/practice/email-scene-three';
import EmailSceneFour from '@/components/email/practice/email-scene-four';
import EmailSceneFive from '@/components/email/practice/email-scene-five';
import EmailSceneSix from '@/components/email/practice/email-scene-six';
import EmailSceneSeven from '@/components/email/practice/email-scene-seven';
import EmailSceneEight from '@/components/email/practice/email-scene-eight';
import EmailSceneNine from '@/components/email/practice/email-scene-nine';
import EmailSceneTen from '@/components/email/practice/email-scene-ten';
import EmailSceneEleven from '@/components/email/practice/email-scene-eleven';
import EmailSceneTwelve from '@/components/email/practice/email-scene-twelve';
import EmailSceneThirteen from '@/components/email/practice/email-scene-thirteen';


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
                :(currentSceneIndex == 5)
                ? <EmailSceneFive updateSceneIndex={updateCurrentSceneIndex} />
                : (currentSceneIndex == 6)
                ? <EmailSceneSix updateSceneIndex={updateCurrentSceneIndex} />
                : (currentSceneIndex == 7)
                ? <EmailSceneSeven updateSceneIndex={updateCurrentSceneIndex} />
                : (currentSceneIndex == 8)
                ? <EmailSceneEight updateSceneIndex={updateCurrentSceneIndex} />
                : (currentSceneIndex == 9)
                ? <EmailSceneNine updateSceneIndex={updateCurrentSceneIndex} />
                : (currentSceneIndex == 10)
                ? <EmailSceneTen updateSceneIndex={updateCurrentSceneIndex} />
                : (currentSceneIndex == 11)
                ? <EmailSceneEleven updateSceneIndex={updateCurrentSceneIndex} />
                : (currentSceneIndex == 12)
                ? <EmailSceneTwelve updateSceneIndex={updateCurrentSceneIndex} />
                : (currentSceneIndex == 13)
                ? <EmailSceneThirteen updateSceneIndex={updateCurrentSceneIndex} />
                : <EmailSceneZero updateSceneIndex={updateCurrentSceneIndex} />
            }

            
           
        </div>


    )
}