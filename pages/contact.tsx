import Text from "@/common/Text";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import Head from "next/head";
import { useState, useEffect, SetStateAction } from "react";

const sendEmail = async (subject: string, message: string) => {
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject, message }),
    });

    if (!response.ok) {
      throw new Error(
        `Email API request failed with status: ${response.status}`
      );
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw new Error(`Error sending email: ${(error as Error).message}`);
  }
};

//Contact page
const Contact = () => {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName("BODY")[0];
    bodyElement.classList.remove("overflow-hidden");
  }, []);

  const [subject, setSubject] = useState<string>(""); // Initialize the subject state with an empty string
  const [emailaddress, setEmailAddress] = useState<string>(""); // Initialize the email address state with an empty string
  const [message, setMessage] = useState<string>(""); // Initialize the message state with an empty string

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleSubjectChange = (event: React.ChangeEvent<any>) => {
    setSubject(event.target.value);
  };

  const handleEmailAddressChange = (event: React.ChangeEvent<any>) => {
    setEmailAddress(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<any>) => {
    setMessage(event.target.value);
  };

  const openModal = (content: any) => {
    setModalContent(content);
    setIsModalOpen(true);

    // Automatically close the modal after 2.5 seconds
    setTimeout(() => {
      setIsModalOpen(false);
      setModalContent("");
    }, 2500);
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    try {
      let newMessage = "From: " + emailaddress + "\n" + message;
      await sendEmail(subject, newMessage);
      openModal("Message successfully sent! We will get in touch soon.");
      setSubject("");
      setEmailAddress("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      openModal("We could not receive your message. Please try again.");
    }
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
              <Title className="p-4 md:p-12 items-center" text="Say Hello!" />
              <Text
                className=""
                content="We are always on the lookout for collaboration opportunities and are open to any ideas that would improve our initiative as a whole. Feel free to leave us a message."
              />
            </div>
            <div className="w-full text-left flex flex-col gap-y-8">
              <div className="flex flex-col space-y-4">
                <label
                  htmlFor="subject"
                  className="font-nunito font-bold text-xl"
                >
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="border-2 border-gray-300 text-gray-900 rounded-lg text-xl  focus:outline-blue-500 p-2.5  placeholder-gray-300"
                  value={subject}
                  onChange={handleSubjectChange}
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label
                  htmlFor="emailaddress"
                  className="font-nunito font-bold text-xl"
                >
                  Your Email Address:
                </label>
                <input
                  type="text"
                  name="emailaddress"
                  id="emailaddress"
                  className="border-2 border-gray-300 text-gray-900 rounded-lg text-xl  focus:outline-blue-500 p-2.5  placeholder-gray-300"
                  value={emailaddress}
                  onChange={handleEmailAddressChange}
                />
              </div>

              <div className="w-full text-left flex flex-col gap-y-4">
                <label
                  htmlFor="message"
                  className="block mb-2 md:mb-1 font-nunito font-bold text-xl"
                >
                  Message:
                </label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  className="border-2 border-gray-300 text-gray-900 rounded-lg text-xl  focus:outline-blue-500 p-2.5  placeholder-gray-300 resize-none"
                  value={message}
                  onChange={handleMessageChange}
                />
              </div>
              <button
                className="w-1/2 h-12 sm:w-40 sm:h-16 bg-trust-blue-900 rounded-full mx-auto hover:bg-trust-blue-hover duration-300"
                onClick={handleSubmit}
              >
                <Text content="Submit" className="font-bold text-white" />
              </button>
            </div>
          </div>
        </div>
      </Layout>
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-top sm:max-w-lg sm:w-full">
              <div className="bg-white dark:bg-gray-800">
                <div className="sm:flex sm:items-start p-5">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg font-medium leading-6 dark:text-gray-300"
                      id="modal-title"
                    >
                      {modalContent}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
