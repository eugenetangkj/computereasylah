import Text from "@/common/Text";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import { curriculumInfo } from "@/constants";
import { useEffect, useState } from "react";
import { Topic } from "@/common/Topic";



interface SlidesProps {}

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

const Curriculum = () => {
  return (
    <Layout>
      <div className="overflow-x-hidden mb-32">
        <div className="flex flex-col items-center text-center bg-white lg:mx-16 xl:mx-48 2xl:mx-64">
          <div className="mx-auto w-11/12 mb-8 md:mb-12">
            <Title
              className="p-4 md:p-12 items-center"
              text="Curriculum"
            />
            <Text
              className=""
              content="The content on our platform aligns with the Foundation Class curriculum designed by Work Live Digital, which is specifically tailored to instill fundamental computer skills in senior adults, starting from the very basics."
            />
          </div>
    

          {/* Curriculum grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 lg:gap-12 xl:gap-20">

            {/* Introduction */}
            <div className={`border-4 border-introduction-green-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Introduction
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                  What is a computer? What parts does it contain?
                </h5>
            </div>

            {/* Using a Computer */}
            <div className={`border-4 border-using-computer-lime-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Using a Computer
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                  How can I use the basic features of a computer?
                </h5>
            </div>

            {/* Typing */}
            <div className={`border-4 border-energy-orange-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Typing
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                How do I type into the computer using a keyboard?
                </h5>
            </div>

            {/* File Management */}
            <div className={`border-4 border-file-management-blue-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                File Management
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                How do I store and open files on a computer?
                </h5>
            </div>

            {/* Applications */}
            <div className={`border-4 border-creative-pink-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Applications
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                What are the main apps I can use on a computer?
                </h5>
            </div>

            {/* Internet */}
            <div className={`border-4 border-internet-purple-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Internet
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                  How do I browse the Internet using a computer?
                </h5>
            </div>

            {/* Email */}
            <div className={`border-4 border-trust-blue-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                Email
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                  How do I use the computer to send emails?
                </h5>
            </div>

            {/* Safety */}
            <div className={`border-4 border-passion-red-900 rounded-3xl space-y-4 flex flex-col justify-center`}
              style={{ width: "300px", height: "200px" }}>
                <div className="font-gaegu font-bold text-4xl">
                  Safety
                </div>
                <h5 className='font-nunito leading-normal font-semibold lg:text-xl lg:leading-relaxed'>
                  How can I safely use a computer and the Internet?
                </h5>
            </div>
          </div>
       
          <Slides />
        </div>
      </div>
    </Layout>
  );
};

export default Curriculum;
