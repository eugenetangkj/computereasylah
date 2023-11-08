import Text from "./Text";
import { useState } from "react";
import Title from "./Title";



export const Slides = () => {
    const [email, setEmail] = useState<string>(""); // Initialize the email state with an empty string
    const [message, setMessage] = useState<string>(""); // Initialize the message state with an empty string
  
    const handleEmailChange = (event: React.ChangeEvent<any>) => {
      setEmail(event.target.value);
    };
  
    const handleMessageChange = (event: React.ChangeEvent<any>) => {
      setMessage(event.target.value);
    };
  
    return (
      <div className="flex flex-col justify-center items-center text-center overflow-y-hidden mt-12">
        <div className="mx-auto w-11/12 md:w-5/6  mb-8 md:mb-16">
          <div className="w-full text-left flex flex-col gap-y-8">
            <div>
              <label htmlFor="email" className="font-nunito font-bold text-xl">
                Email:
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded-full bg-neutral-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-neutral-300 focus:border-neutral-400 first-letter h-10 md:h-12"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 md:mb-1 font-nunito font-bold text-xl"
              >
                Message:
              </label>
              <textarea
                className="shadow appearance-none border rounded-3xl bg-neutral-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-neutral-300 focus:border-neutral-400 first-letter h-24 md:h-32"
                value={message}
                onChange={handleMessageChange}
              />
            </div>
            <button className="w-1/2 h-12 sm:w-40 sm:h-16 bg-trust-blue-500 rounded-full mx-auto hover:bg-trust-blue-hover">
              <Text content="Submit" className="font-semibold" />
            </button>
          </div>
        </div>
      </div>
    );
  };