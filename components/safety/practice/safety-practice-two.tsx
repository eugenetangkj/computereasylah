import BackButton, { Topic } from "@/components/backButton";
import IrasLogoWithWords from "@/public/assets/safety/practice/iras-logo-with-words.png";
import IrasLogo from "@/public/assets/safety/practice/iras-logo.png";
import Image from "next/image";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BorderedWordWithModal from "./BorderedWordWithModal";

import Modal from "@/common/Modal";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { CiMail } from "react-icons/ci";

interface HintModalProps {
  tooltipContent: Array<any>;
  handleRevealClicked: () => void;
  handleCloseModal: () => void;
  isOpen: boolean;
}

const HintModal: React.FC<HintModalProps> = ({
  tooltipContent,
  handleRevealClicked,
  handleCloseModal,
  isOpen,
}) => {
  const GreenCheck: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <AiFillCheckCircle className={`text-question-correct text-3xl ${className}`} />
    );
  };

  const RedCross: React.FC<{ className?: string }> = ({ className }) => {
    return (
      <AiFillCloseCircle className={`text-question-wrong text-3xl ${className}`} />
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div className="font-nunito mt-4">
        <div className="grid gap-y-2">
          {tooltipContent.map((hint, index) => (
            <div key={index} className="flex flex-col text-md sm:text-xl">
              <div className="flex flex-row justify-between">
                <div>{hint.hint}</div>
                {hint.count === hint.total ? <GreenCheck /> : <RedCross />}
              </div>
              {hint.count !== hint.total && (
                <div className="mx-auto bg-pale-gray-100 hover:bg-pale-gray-500 hover:text-white p-1.5 rounded-xl">
                  {hint.count !== hint.total && `(${hint.count} / ${hint.total})`}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="bg-trust-blue-900 hover:bg-trust-blue-hover rounded-full font-semibold text-lg sm:text-xl h-12 w-40 sm:h-14 sm:w-44"
            onClick={handleRevealClicked}
          >
            Reveal Answers
          </button>
        </div>
      </div>
    </Modal>
  );
};

interface CongratulationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CongratulationsModal: React.FC<CongratulationsModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="font-nunito mt-4 text-center">
          <div className="text-xl sm:text-2xl font-semibold mb-4 text-center">
            Congratulations!
          </div>
          <div className="text-lg sm:text-xl">
            You have successfully found all the phishing elements in the email!
          </div>
          <div className="flex flex-row justify-center gap-x-4 mt-4 font-semibold text-lg sm:text-xl">
            <button
              className="bg-trust-blue-900 hover:bg-trust-blue-hover hover:text-white rounded-full h-12 w-44 sm:h-14 sm:w-48 duration-300"
              onClick={onClose}
            >
              Continue to read
            </button>

            <NextLink href="/safety">
              <button className="bg-passion-red-900 hover:bg-passion-red-hover hover:text-white rounded-full h-12 w-36 sm:h-14 sm:w-40 duration-300">
                Quit
              </button>
            </NextLink>
          </div>
        </div>
      </Modal>
    </>
  );
};

const SafetyPracticeTwo: React.FC = () => {
  const [phishyCount, setPhishyCount] = useState(0);
  const [isPhishyClicked, setIsPhishyClicked] = useState(Array(5).fill(false));
  const [isCongratulationsModalOpen, setIsCongratulationsModalOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isContinueToRead, setIsContinueToRead] = useState(false);
  const [hints, setHints] = useState([
    { hint: "1. Fake sender email", count: 0, total: 1 },
    { hint: "2. Urgent language to rush recipients", count: 0, total: 2 },
    { hint: "3. URL Phishing", count: 0, total: 1 },
    { hint: "4. Asking for sensitive information", count: 0, total: 1 },
  ]);

  const [fontSize, setFontSize] = useState(2);
  const fontSizeClasses = ["text-base", "text-lg", "text-xl", "text-2xl", "text-3xl"];
  const lineSpacingClasses = [
    "leading-normal",
    "leading-normal",
    "leading-normal",
    "leading-relaxed",
    "leading-loose",
  ];

  const fontSizeClass = `${fontSizeClasses[fontSize - 2]} ${
    lineSpacingClasses[fontSize - 2]
  }`;

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(parseInt(event.target.value));
  };

  // Function to handle email click
  const handlePhishyClick = (index: number) => {
    setIsPhishyClicked((prev) => {
      const updatedIsPhishyClicked = [...prev];
      updatedIsPhishyClicked[index] = true;
      return updatedIsPhishyClicked;
    });
    setPhishyCount((prevCount) => prevCount + 1);
  };

  // Function to open congratulations modal
  const openCongratulationsModal = () => {
    setIsCongratulationsModalOpen(true);
  };

  // Function to close congratulations modal
  const closeCongratulationsModal = () => {
    setIsCongratulationsModalOpen(false);
    setIsContinueToRead(true);
  };

  const handleRevealClicked = () => {
    setIsContinueToRead(true);
    for (let i = 0; i < 5; i++) {
      handlePhishyClick(i);
    }
    setPhishyCount(5);
    toast.success("Revealed Answers!");
  };

  useEffect(() => {
    var hints = [
      { hint: "1. Fake sender email", count: 0, total: 1 },
      { hint: "2. Urgent language to rush recipients", count: 0, total: 2 },
      { hint: "3. URL Phishing", count: 0, total: 1 },
      { hint: "4. Asking for sensitive information", count: 0, total: 1 },
    ];
    const indexMap = [0, 1, 2, 3, 1]; // Map isPhishyClicked index to hints index

    isPhishyClicked.forEach((isClicked, index) => {
      if (isClicked) {
        const hintIndex = indexMap[index];
        hints[hintIndex].count += 1;
      }
    });
    setHints(hints);
  }, [isPhishyClicked]);

  const handleCloseModal = () => {
    setIsHintModalOpen(false);
  };

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
    <div
      className={`flex flex-col item-center justify-center min-h-screen p-10 space-y-8 lg:space-y-4 mt-10 md:mt-20 lg:mt-0 opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
      } duration-1000`}
    >
      <BackButton
        pathToReturnTo="/safety"
        displayText="Quit"
        category={Topic.Safety}
      />
      <HintModal
        tooltipContent={hints}
        handleRevealClicked={handleRevealClicked}
        handleCloseModal={handleCloseModal}
        isOpen={isHintModalOpen}
      />
      <CongratulationsModal
        isOpen={isCongratulationsModalOpen}
        onClose={closeCongratulationsModal}
      />
      <div className="flex flex-col justify-center items-center font-semibold lg:mx-12 space-y-8 py-4">
        <div className="mt-8 lg:mt-16 text-center text-3xl font-nunito font-semibold pt-4 mx-auto">
          Identify the texts in this email that are phishy, then click on them.
        </div>
        {/* Font size slider */}
        <div className="flex flex-col bg-white bg-opacity-80 p-2 rounded-lg font-nunito font-bold duration-300 w-full sm:w-1/2 md:w-1/4 mx-auto">
          <span className={`${fontSizeClass} text-center`}>Font Size</span>
          <input
            type="range"
            min="2"
            max="6"
            value={fontSize}
            onChange={handleFontSizeChange}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-5/6 lg:w-2/3 gap-y-4 font-nunito text-xl sm:text-2xl">
          <div className="border- bg-pale-gray-100 p-2 rounded-lg">
            Phishing texts identified: {phishyCount} / 5
          </div>
          <button
            className="bg-passion-red-900 hover:bg-passion-red-hover hover:text-white rounded-full h-12 w-28 sm:h-14 sm:w-32 cursor-pointer duration-300"
            onClick={() => setIsHintModalOpen(true)}
          >
            Hint
          </button>
        </div>
      </div>

      {/* Email content */}
      <div
        className={`border-y-2 sm:border-none sm:rounded-3xl sm:shadow-lg hover:shadow-xl sm:p-10 pb-8" ${fontSizeClass}`}
      >
        <div
          className="flex items-center w-full bg-gray-100 space-x-2"
          style={{ height: `${fontSize}rem` }}
        >
          <CiMail className="ml-2" />
          <div>Inbox</div>
        </div>
        <div className="font-bold">Tax Refund Confirmation Required</div>
        <div className="flex items-center my-6 ">
          <Image src={IrasLogo} alt="IRAS Logo" className="w-12 mr-2" />
          {/* Sender details */}
          <div className="flex flex-col leading-snug text-base">
            <div>IRAS Refund Team</div>
            <BorderedWordWithModal
              word="&lt;iras.refundteam@officialiras.sg&gt;"
              wordClassName="text-gray-500"
              modalContent="The sender email is not an official IRAS email address."
              isWordClicked={isPhishyClicked[0]}
              handleWordClicked={() => handlePhishyClick(0)}
              phishyCount={phishyCount}
              isContinueToRead={isContinueToRead}
              openCongratulationsModal={openCongratulationsModal}
            />
          </div>
        </div>
        <div>
          <div>Dear Sir / Madam,</div>
          <br />
          <div>
            We hope this email finds you in good health. We are writing to inform you
            that you may be eligible for a tax refund from the Inland Revenue Authority
            of Singapore (IRAS). The refund amount is substantial, and we need to verify
            your identity before we can process your refund.
          </div>
          <br />
          <div>
            <BorderedWordWithModal
              word="Please note that this is a time-sensitive matter, and we urge you to
              take action immediately to claim your refund."
              wordClassName="text-black font-bold"
              modalContent="The email creates a sense of urgency, pressuring you to take immediate action. Phishing emails often use urgency to rush recipients into making mistakes."
              isWordClicked={isPhishyClicked[1]}
              handleWordClicked={() => handlePhishyClick(1)}
              phishyCount={phishyCount}
              isContinueToRead={isContinueToRead}
              openCongratulationsModal={openCongratulationsModal}
            />
            To proceed, click on the following link to access the secure IRAS website
            and confirm your details:
          </div>
          <div>
            <BorderedWordWithModal
              word="[IRAS Refund Team Inland Revenue Authority of Singapore]"
              wordClassName="text-blue-600 underline"
              modalContent="URL phishing attacks uses various means to trick a user into clicking on the malicious link."
              isWordClicked={isPhishyClicked[2]}
              handleWordClicked={() => handlePhishyClick(2)}
              phishyCount={phishyCount}
              isContinueToRead={isContinueToRead}
              openCongratulationsModal={openCongratulationsModal}
            />
          </div>
          <br />
          Once you click the link, you will be asked to provide your personal and
          financial information to confirm your identity.
          <BorderedWordWithModal
            word="Please make sure to have your Tax Reference Number, bank account details, and other personal
            information on hand to complete the verification process."
            wordClassName="text-black"
            modalContent="The email asks for sensitive information like Tax Reference Number and bank account details. Legitimate organizations rarely request such information via email."
            isWordClicked={isPhishyClicked[3]}
            handleWordClicked={() => handlePhishyClick(3)}
            phishyCount={phishyCount}
            isContinueToRead={isContinueToRead}
            openCongratulationsModal={openCongratulationsModal}
          />
          <br />
          <br />
          <div>
            <BorderedWordWithModal
              word="Failure to confirm your information within the next 48 hours will
              result in the cancellation of your refund request"
              wordClassName="text-black"
              modalContent="Another attempt to create a sense of urgency to the victim."
              isWordClicked={isPhishyClicked[4]}
              handleWordClicked={() => handlePhishyClick(4)}
              phishyCount={phishyCount}
              isContinueToRead={isContinueToRead}
              openCongratulationsModal={openCongratulationsModal}
            />
            , and you will forfeit the refund.
          </div>
          <br />
          <div>
            We understand the importance of protecting your personal information. Rest
            assured that this verification process is secure, and your data will be
            handled with the utmost confidentiality.
          </div>
          <div>
            If you have any questions or need assistance, please do not hesitate to
            contact our IRAS support team at the following email address:
            <span className="text-blue-600 underline">
              {" "}
              iras.support@officialiras.sg
            </span>
            .
          </div>
          <br />
          <div>
            Thank you for your prompt attention to this matter. We appreciate your
            cooperation in helping us process your tax refund efficiently.
          </div>
          <br />
          <br />
          <div>Sincerely,</div>
          <div>IRAS Refund Team Inland Revenue Authority of Singapore</div>
          <Image
            src={IrasLogoWithWords}
            alt="IRAS Logo With words"
            className="h-28 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SafetyPracticeTwo;
