import React, { useState } from "react";
import Email, { EmailProps } from "@/components/safety/practical/Email";

const EmailPage: React.FC = () => {
  const emailData: EmailProps = {
    senderName: "IRAS Refund Team",
    senderEmail: "iras.refundteam@officialiras.gov.sg",
    date: "2022-01-01",
    subject: "Tax Refund Confirmation Required",
    content: `
      <div>
        <p>Dear [Your Name],</p>
        <br/>
        <p>
          We hope this email finds you in good health. We are writing to inform you that you may be eligible for a tax refund from the Inland Revenue Authority of Singapore (IRAS). The refund amount is substantial, and we need to verify your identity before we can process your refund.
        </p>
        <br/>
        <p>
          Please note that this is a time-sensitive matter, and we urge you to take action immediately to claim your refund. To proceed, click on the following link to access the secure IRAS website and confirm your details:
        </p>
        <p>
          <a href="http://phishingsite.com/verify" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">
            [IRAS Refund Team Inland Revenue Authority of Singapore: http://phishingsite.com/verify-sg]
          </a>
        </p>
        <br/>
        <p>
          Once you click the link, you will be asked to provide your personal and financial information to confirm your identity. Please make sure to have your Tax Reference Number, bank account details, and other personal information on hand to complete the verification process.
        </p>
        <br/>
        <p>
          Failure to confirm your information within the next 48 hours will result in the cancellation of your refund request, and you will forfeit the refund.
        </p>
        <br/>
        <p>
          We understand the importance of protecting your personal information. Rest assured that this verification process is secure, and your data will be handled with the utmost confidentiality.
        </p>
        <p>
          If you have any questions or need assistance, please do not hesitate to contact our IRAS support team at the following email address:
          <a href="mailto:iras.support@phishingsite.com" style="color: blue; text-decoration: underline;"> iras.support@officialiras.gov.sg</a>.
        </p>
        <br/>
        <p>
          Thank you for your prompt attention to this matter. We appreciate your cooperation in helping us process your tax refund efficiently.
        </p>
        <br/>
        <br/>
        <p>Sincerely,</p>
        <p>
          IRAS Refund Team Inland Revenue Authority of Singapore
        </p>
      </div>
    `,
  };

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

  return (
    <div className="bg-white text-black text-center min-h-screen">
      <p className="bg-white mb-10 text-left">ex.1</p>
      <h1 className="text-2xl mb-4">Identify if the email below is phishy</h1>
      <Email {...emailData} />
      <button
        className="bg-red-400 rounded-3xl h-10 w-32 mx-10 mt-10"
        onClick={openisPhishyModal}
      >
        Phishy
      </button>
      <button
        className="bg-blue-400 rounded-3xl h-10 w-32 mx-10 mt-10"
        onClick={openisNotPhishyModal}
      >
        Not Phishy
      </button>

      {(isPhishy || isNotPhishy) && (
        // Modal content
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`p-4 rounded-lg shadow-md ${
              isPhishy ? "bg-green-300" : "bg-red-300"
            }`}
          >
            {isPhishy && (
              <h2 className="text-xl mb-4">
                Congratulation, you have identified a phishing attempt!
              </h2>
            )}
            {isNotPhishy && (
              <h2 className="text-xl mb-4">
                Sorry, you have not identified a phishing attempt.
              </h2>
            )}
            <div className="text-left">
              <p>Below are some of the phishing elements in the email:</p>
              <br />
              <p>
                1. <span className="font-bold">Sender Email</span>: The sender
                email is not an official IRAS email address.
              </p>
              <p>
                2. <span className="font-bold">Unsolicited Email</span>: Be
                cautious of unsolicited emails claiming you are eligible for a
                tax refund. Tax authorities typically communicate through
                official channels and not via email.
              </p>
              <p>
                3. <span className="font-bold">Urgent Language</span>: The email
                creates a sense of urgency, pressuring you to take immediate
                action. Phishing emails often use urgency to rush recipients
                into making mistakes.
              </p>
              <p>
                4.{" "}
                <span className="font-bold">
                  Request for Personal and Financial Information
                </span>
                : The email asks for sensitive information like Tax Reference
                Number and bank account details. Legitimate organizations rarely
                request such information via email.
              </p>
            </div>
            <button
              className={`rounded-3xl h-10 w-32 mt-4 ${
                isPhishy ? "bg-green-400" : "bg-red-400"
              }`}
              onClick={closeModal} // Close the modal when this button is clicked
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailPage;