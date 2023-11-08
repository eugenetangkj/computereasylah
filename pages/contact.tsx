import Text from "@/common/Text";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import Head from "next/head";
import { useState, useEffect } from "react";

//Contact page
const Contact = () => {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName("BODY")[0];
    bodyElement.classList.remove('overflow-hidden');

  }, []);

  const [subject, setSubject] = useState<string>(""); // Initialize the subject state with an empty string
    const [message, setMessage] = useState<string>(""); // Initialize the message state with an empty string
  
    const handleSubjectChange = (event: React.ChangeEvent<any>) => {
      setSubject(event.target.value);
    };
  
    const handleMessageChange = (event: React.ChangeEvent<any>) => {
      setMessage(event.target.value);
    };
  

  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <Layout>
        <div className="overflow-x-hidden mb-8 sm:mb-16">
            <div className="flex flex-col items-center text-center bg-white mx-8 lg:mx-16 xl:mx-48 2xl:mx-64">
                <div className="mx-auto w-11/12 mb-8 md:mb-12">
                <Title
                    className="p-4 md:p-12 items-center"
                    text="Say Hello!"
                />
                <Text
                    className=""
                    content="We are always on the lookout for collaboration opportunities and are open to any ideas that would improve our initiative as a whole. Feel free to leave us a message."
                />
                </div>
                <div className="w-full text-left flex flex-col gap-y-8">
            <div className='flex flex-col space-y-4'>
              <label htmlFor="subject" className="font-nunito font-bold text-xl">
                Subject:
              </label>
              <input
                type='text'
                name="subject"
                id="subject"
                className="border-2 border-gray-300 text-gray-900 rounded-lg text-xl  focus:outline-blue-500 p-2.5  placeholder-gray-300"
                onChange={ handleSubjectChange }
            />
            </div>

            <div className="w-full text-left flex flex-col gap-y-8">
                <label htmlFor="message" className="block mb-2 md:mb-1 font-nunito font-bold text-xl">Message:</label>
                <textarea
                    rows={4}
                    name="message"
                    id="message"
                    className="border-2 border-gray-300 text-gray-900 rounded-lg text-xl  focus:outline-blue-500 p-2.5  placeholder-gray-300 resize-none"
                    onChange={ handleMessageChange }
                />
            </div>
            <button className="w-1/2 h-12 sm:w-40 sm:h-16 bg-trust-blue-900 rounded-full mx-auto hover:bg-trust-blue-hover duration-300">
              <Text content="Submit" className="font-bold text-white" />
            </button>
          </div>
        
            </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
