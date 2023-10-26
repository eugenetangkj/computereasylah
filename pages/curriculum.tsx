import Text from "@/common/Text";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import { curriculumInfo } from "@/constants";

interface CurriculumProps {
  // Define your props if needed
}

import React, { useState } from "react";

interface TopicProps {
  title: string;
  content: string;
}

interface SlidesProps {}

const Topic: React.FC<TopicProps> = ({ title, content }) => {
  return (
    <div className="border-4 border-trust-blue-500 p-4 rounded-3xl w-3/4 sm:w-full aspect-square flex flex-col justify-center">
      <div className="font-gaegu font-bold text-4xl sm:text-5xl md:text-5xl">
        {title}
      </div>
      <Text content={content} className="font-semibold" />
    </div>
  );
};

const Slides: React.FC<SlidesProps> = (props) => {
  const [email, setEmail] = useState<string>(""); // Initialize the email state with an empty string
  const [message, setMessage] = useState<string>(""); // Initialize the message state with an empty string

  const handleEmailChange = (event: React.ChangeEvent<any>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<any>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center text-center w-screen overflow-y-hidden mt-12">
      <div className="mx-auto w-11/12 md:w-5/6 lg:w-1/2 mb-8 md:mb-16">
        <div className="mb-8 md:mb-12">
          <Title text="Slides" className="my-6 md:my-12" />
          <Text
            content="Interested in organising a lesson using the Foundation Class curriculum and The Playground?
Drop us a message here and we will get in touch."
          />
        </div>
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

const Curriculum: React.FC<CurriculumProps> = (props) => {
  // You can use the props and state here

  return (
    <Layout>
      <div className="overflow-x-hidden mb-32">
        <div className="flex flex-col items-center text-center bg-white w-screen">
          <div className="mx-auto w-11/12 md:w-1/2 mb-8 md:mb-24">
            <Title
              className="p-4 md:p-12 text-sky-900 items-center"
              text="Curriculum"
            />
            <Text
              className=""
              content="The content on our platform aligns with the Foundation Class curriculum designed by Work Live Digital, which is specifically tailored to instill fundamental computer skills in senior adults, starting from the very basics."
            />
          </div>

          <div className="w-5/6 sm:w-2/3 md:w-1/2">
            <div className="flex flex-col mx-auto lg:grid grid-cols-3 gap-4 md:gap-28 items-center">
              {curriculumInfo.map((info, index) => (
                <Topic
                  key={index}
                  title={`0${index + 1} ${info.title}`}
                  content={info.content}
                />
              ))}
            </div>
          </div>
          <Slides />
        </div>
      </div>
    </Layout>
  );
};

export default Curriculum;
