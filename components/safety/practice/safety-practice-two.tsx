import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import BorderedWordWithTooltip from "./BorderedWordWithTooltip";
import WordWithTooltip from "./WordWithTooltip";
import { Topic } from "@/components/backButton";
import BackButton from "@/components/backButton";

const SafetyPracticeTwo: React.FC = () => {
  const [isPhishy1Clicked, setIsPhishy1Clicked] = useState(false);
  const [isPhishy2Clicked, setIsPhishy2Clicked] = useState(false);
  const [isPhishy3Clicked, setIsPhishy3Clicked] = useState(false);
  const [isPhishy4Clicked, setIsPhishy4Clicked] = useState(false);
  const [isPhishy5Clicked, setIsPhishy5Clicked] = useState(false);
  const [phishyCount, setPhishyCount] = useState(0);
  const [isCongratulationsModalOpen, setIsCongratulationsModalOpen] =
    useState(false);
  const [isContinueToRead, setIsContinueToRead] = useState(false);
  const [hints, setHints] = useState([
    { hint: "1. Fake sender email", count: 0, total: 1 },
    { hint: "2. Urgent language to rush recipients", count: 0, total: 2 },
    { hint: "3. URL Phishing", count: 0, total: 1 },
    { hint: "4. Asking for sensitive information", count: 0, total: 1 },
  ]);

  // Function to handle email click
  const handlePhishy1Click = () => {
    setIsPhishy1Clicked(true);
    setPhishyCount(phishyCount + 1);
  };

  const handlePhishy2Click = () => {
    setIsPhishy2Clicked(true);
    setPhishyCount(phishyCount + 1);
  };

  const handlePhishy3Click = () => {
    setIsPhishy3Clicked(true);
    setPhishyCount(phishyCount + 1);
  };

  const handlePhishy4Click = () => {
    setIsPhishy4Clicked(true);
    setPhishyCount(phishyCount + 1);
  };

  const handlePhishy5Click = () => {
    setIsPhishy5Clicked(true);
    setPhishyCount(phishyCount + 1);
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
    handlePhishy1Click();
    handlePhishy2Click();
    handlePhishy3Click();
    handlePhishy4Click();
    handlePhishy5Click();
    setPhishyCount(5);
  };

  useEffect(() => {
    // Check the phishyCount in useEffect
    if (phishyCount === 5 && !isContinueToRead) {
      openCongratulationsModal();
    }
  }, [phishyCount]);

  useEffect(() => {
    var hints = [
      { hint: "1. Fake sender email", count: 0, total: 1 },
      { hint: "2. Urgent language to rush recipients", count: 0, total: 2 },
      { hint: "3. URL Phishing", count: 0, total: 1 },
      { hint: "4. Asking for sensitive information", count: 0, total: 1 },
    ];
    if (isPhishy1Clicked) {
      hints[0].count += 1;
    }
    if (isPhishy2Clicked) {
      hints[1].count += 1;
    }
    if (isPhishy3Clicked) {
      hints[2].count += 1;
    }
    if (isPhishy4Clicked) {
      hints[3].count += 1;
    }
    if (isPhishy5Clicked) {
      hints[1].count += 1;
    }
    setHints(hints);
  }, [
    isPhishy1Clicked,
    isPhishy2Clicked,
    isPhishy3Clicked,
    isPhishy4Clicked,
    isPhishy5Clicked,
  ]);

  return (
    <div className="flex flex-col item-center justify-center min-h-screen p-10 bg- space-y-8 lg:space-y-4 mt-10 md:mt-20 lg:mt-0">
      <BackButton
        pathToReturnTo="/playground/safety"
        displayText="Back"
        category={Topic.Safety}
      />

      <div className="flex flex-col justify-center items-center text-3xl font-semibold mx-24 lg:mx-12 space-y-8 lg:space-y-0 lg:gap-16 lg:gap-x-32 py-4">
        <h1>
          Identify the texts in this email that are phishy, then click on them.
        </h1>
        <div className=" flex text-center items-center justify-between">
          <div className="bg-blue-400 text-white rounded-full py-2 px-10">
            Phishing texts identified: {phishyCount} / 5
          </div>
          <div className="ml-20 bg-red-700 text-white rounded-full py-2 px-10 cursor-pointer">
            <WordWithTooltip
              hint="Hint"
              hintClassName="text-white"
              tooltipContent={hints}
              handleRevealClicked={handleRevealClicked}
            />
          </div>
        </div>
      </div>
      <div className="text-left p-10 border-4 border-passion-red-900 ">
        <div className="flex items-center space-x-2">
          <div className="font-bold">From: IRAS Refund Team</div>
          <BorderedWordWithTooltip
            word="&lt;iras.refundteam@officialiras.gov.sg&gt;"
            wordClassName="text-gray-500"
            tooltipContent="The sender email is not an official IRAS email address."
            isWordClicked={isPhishy1Clicked}
            handleWordClicked={handlePhishy1Click}
          />
        </div>
        <div className="font-bold text-left">Date: 2022-01-01</div>
        <div className="font-bold text-left mb-16">
          Subject: Tax Refund Confirmation Required
        </div>
        <div>
          <p>Dear [Your Name],</p>
          <br />
          <p>
            We hope this email finds you in good health. We are writing to
            inform you that you may be eligible for a tax refund from the Inland
            Revenue Authority of Singapore (IRAS). The refund amount is
            substantial, and we need to verify your identity before we can
            process your refund.
          </p>
          <br />
          <p>
            <BorderedWordWithTooltip
              word="Please note that this is a time-sensitive matter, and we urge you to
              take action immediately to claim your refund."
              wordClassName="text-black"
              tooltipContent="The email creates a sense of urgency, pressuring you to take immediate action. Phishing emails often use urgency to rush recipients into making mistakes."
              isWordClicked={isPhishy2Clicked}
              handleWordClicked={handlePhishy2Click}
            />
            To proceed, click on the following link to access the secure IRAS
            website and confirm your details:
          </p>
          <p>
            <BorderedWordWithTooltip
              word="[IRAS Refund Team Inland Revenue Authority of Singapore:
                http://phishingsite.com/verify-sg]"
              wordClassName="text-blue-600 underline"
              tooltipContent="URL phishing attacks uses various means to trick a user into clicking on the malicious link."
              isWordClicked={isPhishy3Clicked}
              handleWordClicked={handlePhishy3Click}
            />
          </p>
          <br />
          <p>
            <BorderedWordWithTooltip
              word="You will be asked to provide your personal
              and financial information to confirm your identity. Please make sure
              to have your Tax Reference Number, bank account details, and other
              personal information"
              wordClassName="text-black"
              tooltipContent="The email asks for sensitive information like Tax Reference Number and bank account details. Legitimate organizations rarely request such information via email."
              isWordClicked={isPhishy4Clicked}
              handleWordClicked={handlePhishy4Click}
            />
            on hand to complete the verification process.
          </p>
          <br />
          <p>
            <BorderedWordWithTooltip
              word="Failure to confirm your information within the next 48 hours will
              result in the cancellation of your refund request"
              wordClassName="text-black"
              tooltipContent="Another attempt to create a sense of urgency to the victim."
              isWordClicked={isPhishy5Clicked}
              handleWordClicked={handlePhishy5Click}
            />
            , and you will forfeit the refund.
          </p>
          <br />
          <p>
            We understand the importance of protecting your personal
            information. Rest assured that this verification process is secure,
            and your data will be handled with the utmost confidentiality.
          </p>
          <p>
            If you have any questions or need assistance, please do not hesitate
            to contact our IRAS support team at the following email address:
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
            Thank you for your prompt attention to this matter. We appreciate
            your cooperation in helping us process your tax refund efficiently.
          </p>
          <br />
          <br />
          <p>Sincerely,</p>
          <p>IRAS Refund Team Inland Revenue Authority of Singapore</p>
        </div>
      </div>
      {isCongratulationsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-content bg-green-300 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Congratulations!</h2>
            <p>
              You have successfully found all the phishing elements in the
              email!
            </p>
            <div className="justify-between mt-4">
              <button
                className="bg-green-400 text-white rounded-full p-4 mx-10"
                onClick={closeCongratulationsModal}
              >
                Continue to read
              </button>
              <NextLink href="/playground/safety">
                <button className="bg-red-400 text-white rounded-full p-4 mx-10">
                  Return to Safety Home Page
                </button>
              </NextLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyPracticeTwo;
