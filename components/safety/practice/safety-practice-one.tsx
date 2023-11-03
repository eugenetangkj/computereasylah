import BackButton, { Topic } from "@/components/backButton";
import IrasLogoWithWords from "@/public/assets/safety/practice/iras-logo-with-words.png";
import IrasLogo from "@/public/assets/safety/practice/iras-logo.png";

import Image from "next/image";
import React, { useState } from "react";

import { CiMail } from "react-icons/ci";
import { MdClose } from "react-icons/md";

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
      {(isPhishy || isNotPhishy) && (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-nunito">
          <div className="p-4 rounded-lg shadow-md bg-white w-5/6">
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
      )}
    </>
  );
};

const SafetyPracticeOne: React.FC<SafetyPracticalProps> = ({ updateCurrentIndex }) => {
  const [isPhishy, setIsPhishy] = useState(false);
  const [isNotPhishy, setIsNotPhishy] = useState(false);

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
    <div className={`flex flex-col item-center justify-center min-h-screen p-2 sm:p-10 space-y-8 lg:space-y-4 mt-10 md:mt-20 lg:mt-0 opacity-0 transition-opacity ${
      isActive ? "opacity-100" : ""
  } duration-1000`}>
      <BackButton
        pathToReturnTo="/playground/safety"
        displayText="Back"
        category={Topic.Safety}
      />
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
          !isPhishy && !isNotPhishy && "hidden"
        }`}
        onClick={closeModal}
      />

      <div className="text-center text-3xl font-nunito font-semibold sm:py-2 xl:py-8 mx-auto">
        You have received the following email.
      </div>
      {/* Email content */}
      <div className="border-y-2 sm:border-none sm:rounded-3xl sm:shadow-lg hover:shadow-xl sm:p-10 pb-8">
        <div className="flex items-center w-full bg-gray-100 space-x-2 h-12">
          <CiMail className="ml-2" />
          <div>Inbox</div>
        </div>
        <div className="font-bold text-2xl">Tax Refund Confirmation Required</div>
        <div className="flex items-center my-6">
          <Image src={IrasLogo} alt="IRAS Logo" className="w-12 mr-2" />
          {/* Sender details */}
          <div className="flex flex-col">
            <div>IRAS Refund Team</div>
            <div className="text-gray-500">
              &lt;iras.refundteam@officialiras.sg&gt;
            </div>
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
            <span
              className="text-blue-600 underline"
            >
              [IRAS Refund Team Inland Revenue Authority of Singapore:
              ]
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
            <span
              className="text-blue-600 underline"
            >
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
      <div className="text-center text-2xl sm:text-3xl font-nunito font-semibold">
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
        nextPractice={nextPractice}
      />
    </div>
  );
};

export default SafetyPracticeOne;
