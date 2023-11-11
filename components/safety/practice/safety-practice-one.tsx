import BackButton, { Topic } from "@/components/backButton";
import IrasLogoWithWords from "@/public/assets/safety/practice/iras-logo-with-words.png";
import IrasLogo from "@/public/assets/safety/practice/iras-logo.png";

import Image from "next/image";
import React, { useState } from "react";

import { CiMail } from "react-icons/ci";
import { MdClose } from "react-icons/md";

import Modal from "@/common/Modal";
import { useEffect } from "react";

interface SafetyPracticalProps {
  updateCurrentIndex: (index: number) => void;
}

interface PhishyModalProps {
  isPhishy: boolean;
  isNotPhishy: boolean;
  closeModal: () => void;
  nextPractice: () => void;
}

const PhishyModal: React.FC<PhishyModalProps> = ({
  isPhishy,
  isNotPhishy,
  closeModal,
  nextPractice,
}) => {
  const ModalTitle = ({ isPhishy }: { isPhishy: boolean }) => {
    return isPhishy ? (
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        Congratulations!
      </h2>
    ) : (
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        Unfortunately, you have not identified a phishing attempt.
      </h2>
    );
  };

  const ModalContent = ({ isPhishy }: { isPhishy: boolean }) => {
    return isPhishy ? (
      <p className="leading-normal md:text-xl md:leading-relaxed mb-8">
        You have identified a phishing attempt!
        <br />
        Next, let&rsquo;s proceed to identify the phishing elements in the email.
        <br />
        <br />
        Press &lsquo;Next&rsquo; to continue.
      </p>
    ) : (
      <p className="leading-normal md:text-xl md:leading-relaxed mb-8">
        The email contains multiple signs of phishing including:
        <br />
        1. Fake sender email
        <br />
        2. Urgent language to rush recipients
        <br />
        3. Asking for sensitive information
        <br />
        <br />
        Let&rsquo;s try to identify the red flags in this phishing attempt together.
        <br />
        Press &lsquo;Next&rsquo; to continue.
      </p>
    );
  };

  return (
    <>
      <Modal isOpen={isPhishy || isNotPhishy} onClose={closeModal}>
        <div className="fixed inset-0 flex items-center justify-center z-50 font-nunito">
          <div className="p-4 rounded-lg shadow-md bg-white w-5/6 md:w-2/3 lg:w-1/3">
            <div dir="rtl">
              <MdClose className="cursor-pointer" size={32} onClick={closeModal} />
            </div>
            <ModalTitle isPhishy={isPhishy} />
            <ModalContent isPhishy={isPhishy} />
            <div className="flex justify-center">
              <button
                className="bg-trust-blue-900 hover:bg-trust-blue-hover rounded-full font-semibold text-lg sm:text-xl h-12 w-28 sm:h-14 sm:w-32"
                onClick={nextPractice}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

const SafetyPracticeOne: React.FC<SafetyPracticalProps> = ({ updateCurrentIndex }) => {
  const [isPhishy, setIsPhishy] = useState(false);
  const [isNotPhishy, setIsNotPhishy] = useState(false);
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

  // Function to open the modal
  const openisPhishyModal = () => {
    setIsPhishy(true);
  };

  const openisNotPhishyModal = () => {
    setIsNotPhishy(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsPhishy(false);
    setIsNotPhishy(false);
  };

  // Function to go to next page
  const nextPractice = () => {
    updateCurrentIndex(2);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
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
      className={`mt-16 lg:mt-16 flex flex-col item-center justify-center min-h-screen p-2 sm:p-10 space-y-8 lg:space-y-4 md:mt-20 opacity-0 transition-opacity ${
        isActive ? "opacity-100" : ""
      } duration-1000`}
    >
      <BackButton
        pathToReturnTo="/safety"
        displayText="Quit"
        category={Topic.Safety}
      />

      <div className="text-center text-3xl font-nunito font-semibold sm:py-2 xl:py-8 mx-auto mt-4">
        You have received the following email.
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

      {/* Email content */}
      <div
        className={`border-y-2 sm:border-none sm:rounded-3xl sm:shadow-lg hover:shadow-xl sm:p-10 pb-8 ${fontSizeClass}`}
      >
        <div
          className="flex items-center w-full bg-gray-100 space-x-2 h-12"
          style={{ height: `${fontSize}rem` }}
        >
          <CiMail className="ml-2" />
          <div>Inbox</div>
        </div>
        <div className="font-bold">Tax Refund Confirmation Required</div>
        <div className="flex items-center my-6">
          <Image src={IrasLogo} alt="IRAS Logo" className="mr-2 w-12" />
          {/* Sender details */}
          <div className="flex flex-col leading-snug text-base">
            <div>IRAS Refund Team</div>
            <div className="text-gray-500">&lt;iras.refundteam@officialiras.sg&gt;</div>
          </div>
        </div>
        <div>
          <p>Dear Sir / Madam,</p>
          <br />
          <p>
            We hope this email finds you in good health. We are writing to inform you
            that you may be eligible for a tax refund from the Inland Revenue Authority
            of Singapore (IRAS). The refund amount is substantial, and we need to verify
            your identity before we can process your refund.
          </p>
          <br />
          <p>
            <strong>
              Please note that this is a time-sensitive matter, and we urge you to take
              action immediately to claim your refund.
            </strong>{" "}
            To proceed, click on the following link to access the secure IRAS website
            and confirm your details:
          </p>
          <p>
            <span className="text-blue-600 underline">
              [IRAS Refund Team Inland Revenue Authority of Singapore: ]
            </span>
          </p>
          <br />
          <p>
            Once you click the link, you will be asked to provide your personal and
            financial information to confirm your identity. Please make sure to have
            your Tax Reference Number, bank account details, and other personal
            information on hand to complete the verification process.
          </p>
          <br />
          <p>
            Failure to confirm your information within the next 48 hours will result in
            the cancellation of your refund request, and you will forfeit the refund.
          </p>
          <br />
          <p>
            We understand the importance of protecting your personal information. Rest
            assured that this verification process is secure, and your data will be
            handled with the utmost confidentiality.
          </p>
          <p>
            If you have any questions or need assistance, please do not hesitate to
            contact our IRAS support team at the following email address:
            <span className="text-blue-600 underline">
              {" "}
              iras.support@officialiras.sg
            </span>
            .
          </p>
          <br />
          <p>
            Thank you for your prompt attention to this matter. We appreciate your
            cooperation in helping us process your tax refund efficiently.
          </p>
          <br />
          <br />
          <p>Sincerely,</p>
          <p>IRAS Refund Team Inland Revenue Authority of Singapore</p>
          <Image
            src={IrasLogoWithWords}
            alt="IRAS Logo With words"
            className="h-28 w-auto"
          />
        </div>
      </div>

      <div className="text-center text-2xl sm:text-3xl font-nunito font-semibold py-4">
        Is it a phishing attempt?
      </div>
      <div className="flex flex-row justify-center text-lg sm:text-xl font-semibold mt-4 space-x-8 font-nunito">
        <button
          className="bg-passion-red-900 hover:bg-passion-red-hover hover:text-white rounded-full h-12 w-28 sm:h-14 sm:w-32"
          onClick={openisPhishyModal}
        >
          Phishy
        </button>
        <button
          className="bg-trust-blue-900 hover:bg-trust-blue-hover rounded-full h-12 w-32 sm:h-14 sm:w-36"
          onClick={openisNotPhishyModal}
        >
          Not Phishy
        </button>
      </div>
      <PhishyModal
        isPhishy={isPhishy}
        isNotPhishy={isNotPhishy}
        closeModal={closeModal}
        nextPractice={() => {
          nextPractice();
          scrollToTop();
        }}
      />
    </div>
  );
};

export default SafetyPracticeOne;
