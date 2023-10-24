import { useEffect, useState } from 'react';
import BackButton from '@/components/backButton';
import Image from 'next/image';
import { Topic } from '@/components/backButton';

//Home page for email activities in the playground
export default function WhyLearnEmail() {

    // Animation
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      // Set isActive to true after a short delay when the component is mounted
      const timer = setTimeout(() => {
        setIsActive(true);
      }, 100); // Adjust the delay as needed
  
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);



    

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen py-16 md:py-8 bg-white space-y-8 mt-12 md:mt-20 lg:space-y-12 opacity-0 transition-opacity ${isActive ? 'opacity-100' : ''} duration-1000`}>
            {/* Back button */}
            <BackButton pathToReturnTo='/playground/email' displayText='Exit' category={ Topic.Email }  />
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold font-gaegu text-center z-10">Why Learn Email</h1>

            {/* Bullet Points */}
            <ul className='list-disc space-y-8 mx-8 font-nunito text-lg xl:text-2xl w-3/4 z-10'>
                <li>Government organisations, like CPF and IRAS, communicate updates on their new policies, your tax payments, your CPF account details etc.</li>
                <li>Banks, like DBS and OCBC, send you updates on your bank account via email.</li>
                <li>Companies that are hiring require your email to communicate important information about the application process with you.</li>
                <li>Retail companies, like Lazada and Shopee, send you digital newsletters and emails about upcoming events and promotions.</li>
                <li>Web applications and services, like Facebook, Amazon and Linkedin, require an email address when you create an account with them to communicate important updates to you.</li>
            </ul>

            {/* Cartoon image */}
            <img src='/assets/email/why-learn-email.png' alt='Importance of Email' className='w-2/5 lg:w-1/5 xl:w-1/6 z-10' />



            {/* Background Images */}
            <img src='/assets/email/tilted-mail.png' alt='Mail' className='w-1/4 md:w-1/6 lg:w-1/8 fixed top-0 right-0 translate-x-3/10 z-20' />
            <img src='/assets/email/tilted-email-symbol.png' alt='Address Sign' className='w-1/4 md:w-1/6 lg:w-1/8 fixed bottom-0 -translate-y-1/2 lg:top-1/8 left-0 -translate-x-2/5' />
        </div>



    )
}