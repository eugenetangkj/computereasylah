import NextLink from 'next/link';

//Back button

type BackButtonProps = {
    pathToReturnTo: string;
    displayText: string
};



export default function BackButton({ pathToReturnTo, displayText } : BackButtonProps) {

    return ( <div className={`fixed w-full bg-white top-0 left-0 py-2 z-20 pl-8 pt-8 md:pl-16 md:pt-8`}>
        {/* Back button */}
        <NextLink href={ pathToReturnTo } className=''>
        <h5 className="font-nunito text-2xl lg:text-4xl font-bold hover:text-trust-blue-hover duration-300" style={{ display: 'inline-block', width: '5%', height: '100%' }}>{ displayText }</h5>
        </NextLink>
    </div>
        
  


    )
}