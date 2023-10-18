import NextLink from 'next/link';


export default function Playground() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-8">
            {/* Title */}
            <h1 className="text-5xl font-bold font-gaegu w-2/3 text-center mt-16">Computer, Easy Lah!</h1>
            {/* Options */}
            <div className='flex flex-col justify-center items-center mx-24 space-y-4 py-4'>
                {/* Typing */}
                <NextLink href='/playground/typing' className='flex flex-col justify-center items-center space-y-4'>
                    <div className='bg-energy-orange-900 py-10 flex justify-center rounded-3xl w-48 h-36'>
                        <img src='/assets/playground/keyboard.png' alt='Typing on Keyboard' className='w-3/4' style={{ imageRendering: 'pixelated' }} />
                    </div>
                    <h3 className='font-bold font-nunito text-2xl'>Typing</h3>

                </NextLink>

                {/* Email */}
                <NextLink href='/playground/email' className='flex flex-col justify-center items-center space-y-4'>
                    <div className='bg-trust-blue-900 py-8 flex justify-center rounded-3xl w-48 h-36'>
                        <img src='/assets/playground/email.png' alt='Text Chat' className='w-1/2' style={{ imageRendering: 'pixelated' }} />
                    </div>
                    <h3 className='font-bold font-nunito text-2xl'>Email</h3>

                </NextLink>

                {/* Safety */}
                <NextLink href='/playground/safety' className='flex flex-col justify-center items-center space-y-4'>
                    <div className='bg-passion-red-900 py-6 flex justify-center rounded-3xl w-48 h-36'>
                        <img src='/assets/playground/safety.png' alt='Text Chat' className='w-1/2' style={{ imageRendering: 'pixelated' }} />
                    </div>
                    <h3 className='font-bold font-nunito text-2xl'>Safety</h3>

                </NextLink>



            </div>
        </div>


    )
}