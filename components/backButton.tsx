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


//Back button

type BackButtonProps = {
    pathToReturnTo: string;
    displayText: string
  };



export default function BackButton({ pathToReturnTo, displayText } : BackButtonProps) {

    return ( <div className={`fixed top-0 left-0 py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-16`}>
        {/* Back button */}
        <NextLink href={ pathToReturnTo } className=''>
            <h5 className="font-nunito text-2xl lg:text-4xl font-bold hover:text-trust-blue-hover duration-300">{ displayText }</h5>
        </NextLink>
    </div>
        
  


    )
}