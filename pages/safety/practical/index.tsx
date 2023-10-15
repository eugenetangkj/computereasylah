import React from "react";
import Email, { EmailProps } from "@/components/safety/practical/Email";

const EmailPage: React.FC = () => {
  const emailData: EmailProps = {
    senderName: "IRS Refund Team",
    senderEmail: "irs.refundteam@officiallrs.com",
    date: "2022-01-01",
    subject: "Tax Refund Confirmation Required",
    content: `
      <div>
        <p>Dear [Your Name],</p>
        <br/>
        <p>
          We hope this email finds you well. We are writing to inform you that you are eligible for a tax refund from the Internal Revenue Service (IRS). The refund amount is substantial, and we need to verify your identity before we can process your refund.
        </p>
        <br/>
        <p>
          Please note that this is a time-sensitive matter, and we urge you to take action immediately to claim your refund. To proceed, click on the following link to access the secure IRS website and confirm your details:
        </p>
        <br/>
        <p>
          <a href="http://phishingsite.com/verify" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">
            [Internal Revenue Service (IRS): http:/irs.com/verify]
          </a>
        </p>
        <br/>
        <p>
          Once you click the link, you will be asked to provide your personal and financial information to confirm your identity. Please make sure to have your Social Security Number, bank account details, and other personal information on hand to complete the verification process.
        </p>
        <br/>
        <p>
          Failure to confirm your information within the next 48 hours will result in the cancellation of your refund request, and you will forfeit the refund.
        </p>
        <br/>
        <p>
          We understand the importance of protecting your personal information. Rest assured that this verification process is secure, and your data will be handled with the utmost confidentiality.
        </p>
        <br/>
        <p>
          If you have any questions or need assistance, please do not hesitate to contact our IRS support team at the following email address:
          <a href="mailto:irs.support@phishingsite.com" style="color: blue; text-decoration: underline;">irs.support@officialirs.gov</a>.
        </p>
        <br/>
        <p>
          Thank you for your prompt attention to this matter. We appreciate your cooperation in helping us process your tax refund efficiently.
        </p>
  
        <p>Sincerely, IRS Refund Team Internal Revenue Service</p>
      </div>
    `,
  };

  return (
    <div className="bg-white text-black text-center h-screen">
      <p className="bg-white mb-10 text-left">ex.1</p>
      <h1 className="text-2xl mb-4">Identify if the email below is phishy</h1>
      <Email {...emailData} />
      <button className="bg-red-400 rounded-3xl h-10 w-32 mx-10 mt-10">
        Phishy
      </button>
      <button className="bg-blue-400 rounded-3xl h-10 w-32 mx-10 mt-10">
        Not Phishy
      </button>
    </div>
  );
};

export default EmailPage;
