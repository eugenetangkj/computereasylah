import { useState } from "react";

import Text from "@/common/Text";
import Title from "@/common/Title";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
    <div className="overflow-x-auto">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center bg-white w-screen h-screen overflow-y-hidden">
        <div className="mx-auto w-1/2 mb-24">
          <div className="mb-12"><Title text="Request for Slides" className="text-sky-900 my-12" />
          <Text content="Our Foundation Class Curriculum, designed by Work Live Digital, is specifically tailored to instill essential computer skills in senior adults, starting from the very basics. We believe in empowering seniors to confidently navigate the digital world, and our curriculum serves as the starting point on their digital journey." />
          </div>
          <div className="mx-auto w-3/4 ">
            <div className="text-left">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="shadow appearance-none border rounded-full bg-neutral-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-neutral-300 focus:border-neutral-400 first-letter h-12"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="text-left">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="shadow appearance-none border rounded-3xl bg-neutral-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-neutral-300 focus:border-neutral-400 first-letter h-32"
                  value={message}
                  onChange={handleMessageChange}
                />
              </div>
            </div>
            <button className="w-40 h-12 bg-sky-900 rounded-full text-white font-semibold text-xl mt-10">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Slides;
