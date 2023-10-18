import NextLink from 'next/link';


export default function Playground() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white space-y-8 lg:space-y-32">
            {/* Title */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold font-gaegu w-2/3 text-center mt-16">Computer, Easy Lah!</h1>
            {/* Options */}
            <div className='flex flex-col lg:flex-row justify-center items-center mx-24 space-y-4 lg:space-y-0 lg:space-x-24 xl:space-x-28 py-4'>
                {/* Typing */}
                <NextLink href='/playground/typing' className='flex flex-col justify-center items-center space-y-4'>
                    <div className='bg-energy-orange-900 hover:bg-energy-orange-hover py-10 xl:py-14 flex justify-center rounded-3xl w-48 h-36 lg:w-56 lg:h-40 xl:w-64 xl:h-48 duration-300'>
                        <img src='/assets/playground/keyboard.png' alt='Typing on Keyboard' className='w-3/4'/>
                    </div>
                    <h3 className='font-bold font-nunito text-2xl'>Typing</h3>

                </NextLink>

                {/* Email */}
                <NextLink href='/playground/email' className='flex flex-col justify-center items-center space-y-4'>
                    <div className='bg-trust-blue-900 hover:bg-trust-blue-hover py-8 xl:py-12 flex justify-center rounded-3xl w-48 h-36 lg:w-56 lg:h-40 xl:w-64 xl:h-48 duration-300'>
                        <img src='/assets/playground/email.png' alt='Text Chat' className='w-1/2'/>
                    </div>
                    <h3 className='font-bold font-nunito text-2xl'>Email</h3>

                </NextLink>

                {/* Safety */}
                <NextLink href='/playground/safety' className='flex flex-col justify-center items-center space-y-4'>
                    <div className='bg-passion-red-900 hover:bg-passion-red-hover py-6 xl:py-10 xl:px-4 flex justify-center rounded-3xl w-48 h-36 lg:w-56 lg:h-40 xl:w-64 xl:h-48 duration-300'>
                        <img src='/assets/playground/safety.png' alt='Text Chat' className='w-1/2'/>
                    </div>
                    <h3 className='font-bold font-nunito text-2xl'>Safety</h3>

                </NextLink>
            </div>


            {/* Background Images */}
            <img src='/assets/playground/wifi.png' alt='Wifi' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10 lg:-translate-y-1/4' />
            <img src='/assets/playground/cursor.png' alt='Cursor' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-1/4 lg:top-1/8 left-0 -translate-x-2/5' />
            <img src='/assets/playground/mouse.png' alt='Mouse' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 right-0 translate-x-2/5 -translate-y-1/4' />
        </div>


    )
}