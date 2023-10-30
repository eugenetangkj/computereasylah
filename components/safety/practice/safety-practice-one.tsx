import BackButton, { Topic } from "@/components/backButton";
import IrasLogo from "@/public/assets/safety/practice/iras-logo.png";
import Image from "next/image";
import React, { useState } from "react";

import { CiMail } from "react-icons/ci";
import { MdClose } from "react-icons/md";

interface SafetyPracticalProps {
  updateCurrentIndex: (index: number) => void;
}

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

  return (
    <div className="flex flex-col item-center justify-center min-h-screen p-2 sm:p-10 space-y-8 lg:space-y-4 mt-10 md:mt-20 lg:mt-0">
      <BackButton
        pathToReturnTo="/playground/safety"
        displayText="Back"
        category={Topic.Safety}
      />

      <div className="text-center text-3xl font-nunito font-semibold py-4 mx-auto">
        You have received the following email.
      </div>
      <div className="sm:shadow-lg hover:shadow-xl sm:p-10 rounded-3xl">
        <div className="flex items-center w-full bg-gray-100 space-x-2 h-12">
          <CiMail className="ml-2" />
          <div>Inbox</div>
        </div>
        <div className="font-bold text-2xl">Tax Refund Confirmation Required</div>
        <div className="flex items-center my-6">
          <Image src={IrasLogo} alt="IRAS Logo" className="w-14 mr-2" />
          {/* Sender details */}
          <div className="flex flex-col">
            <div>IRAS Refund Team</div>
            <div className="text-gray-500">
              &lt;iras.refundteam@officialiras.gov.sg&gt;
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
            <a
              href="http://phishingsite.com/verify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              [IRAS Refund Team Inland Revenue Authority of Singapore:
              http://phishingsite.com/verify-sg]
            </a>
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
            <a
              href="mailto:iras.support@phishingsite.com"
              className="text-blue-600 underline"
            >
              {" "}
              iras.support@officialiras.gov.sg
            </a>
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
        </div>
      </div>
      <div className="text-center text-3xl font-nunito font-semibold">
        Is it a phishing attempt?
      </div>
      <div className="flex flex-row justify-center text-xl font-semibold mt-4 space-x-8">
        <button
          className="bg-passion-red-900 hover:bg-passion-red-hover hover:text-white rounded-full h-12 w-32"
          onClick={openisPhishyModal}
        >
          Phishy
        </button>
        <button
          className="bg-trust-blue-900 hover:bg-trust-blue-hover rounded-full h-12 w-36"
          onClick={openisNotPhishyModal}
        >
          Not Phishy
        </button>
      </div>

      {(isPhishy || isNotPhishy) && (
        // Modal content
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`p-4 rounded-lg shadow-md border-4 ${
              isPhishy ? "border-green-500 bg-green-300" : "border-red-500 bg-red-300"
            }`}
          >
            {isPhishy && (
              <>
                <div className="top-0 right-0 text-green-900 mx-1 mb-4" dir="rtl">
                  <MdClose className="cursor-pointer" size={32} onClick={closeModal} />
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  Congratulation, you have identified a phishing attempt!
                </h2>
                <p className="text-xl mb-8">
                  Next, let&ldquo;s try to identify the phishing elements in the email.{" "}
                  <br />
                  Press &ldquo;Next&rdquo; to continue.
                </p>
              </>
            )}
            {isNotPhishy && (
              <>
                <div className="top-0 right-0 text-red-900 mx-1 mb-4" dir="rtl">
                  <MdClose className="cursor-pointer" size={32} onClick={closeModal} />
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  Unfortunately, you have not identified a phishing attempt.
                </h2>
                <p className="text-xl mb-8">
                  The email contains multiple signs of phishing including: <br /> 1.
                  Fake sender email <br /> 2. Urgent language to rush recipients <br />{" "}
                  3. Asking for sensitive information <br />
                  <br /> Let&lsquo;s try to identify the red flags in this phishing
                  attempt together. <br />
                  Press &ldquo;Next&rdquo; to continue.
                </p>
              </>
            )}
            <div dir="rtl">
              <button
                className={`bg-white border-solid border-4 rounded-full h-16 w-40 mx-5 ${
                  isPhishy
                    ? "hover:bg-green-500 border-green-500"
                    : "hover:bg-passion-red-900 border-passion-red-900 "
                }`}
                onClick={nextPractice}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyPracticeOne;
