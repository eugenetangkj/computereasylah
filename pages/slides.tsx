import { useState } from "react";

import Text from "@/common/Text";
import Title from "@/common/Title";
import Layout from "@/components/layout";

interface SlidesProps {
  // Define your component's props here
}

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, value, onChange, className }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div className="text-left">
      <label htmlFor={label}>{label}:</label>
      <input
        type="text"
        id={label}
        className={`shadow appearance-none border rounded-2xl bg-neutral-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-neutral-300 focus:border-neutral-400 first-letter:${className}`}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

const Slides: React.FC<SlidesProps> = (props) => {
  const [email, setEmail] = useState<string>(""); // Initialize the email state with an empty string
  const [message, setMessage] = useState<string>(""); // Initialize the message state with an empty string
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <Layout>
      <div className="overflow-hidden">
        <div className="flex flex-col justify-center items-center text-center h-screen bg-white w-screen overflow-y-hidden">
          <div className="mx-auto w-11/12 md:w-3/4 lg:w-1/2 mb-8 md:mb-16">
            <div className="mb-8 md:mb-12">
              <Title text="Request for Slides" className="text-sky-900 my-6 md:my-8" />
              <Text content="Our Foundation Class Curriculum, designed by Work Live Digital, is specifically tailored to instill essential computer skills in senior adults, starting from the very basics. We believe in empowering seniors to confidently navigate the digital world, and our curriculum serves as the starting point on their digital journey." />
            </div>
            <div className="mx-auto w-full md:w-3/4 ">
              <div className="text-left">
                <label htmlFor="email" className="block mb-2 md:mb-1">
                  Email:
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded-full bg-neutral-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-neutral-300 focus:border-neutral-400 first-letter h-10 md:h-12"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="text-left mt-4 md:mt-6">
                <label htmlFor="message" className="block mb-2 md:mb-1">
                  Message:
                </label>
                <textarea
                  className="shadow appearance-none border rounded-3xl bg-neutral-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-neutral-300 focus:border-neutral-400 first-letter h-24 md:h-32"
                  value={message}
                  onChange={handleMessageChange}
                />
              </div>
              <button className="w-full md:w-40 h-10 md:h-12 bg-sky-900 rounded-full text-white font-semibold text-base md:text-xl mt-6 md:mt-10">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Slides;
