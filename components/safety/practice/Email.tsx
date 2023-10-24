import React from "react";

export interface EmailProps {
  senderName: string;
  senderEmail: string;
  date: string;
  subject: string;
  content: string;
}

const Email: React.FC<EmailProps> = ({
  senderName,
  senderEmail,
  date,
  subject,
  content,
}) => {
  const createMarkup = (htmlContent: any) => ({ __html: htmlContent });

  return (
    <div className="bg-white shadow-md rounded-md p-10 flex flex-col">
      <div className="flex items-center space-x-2">
        <div className="font-bold">From: {senderName}</div>
        <div className="text-gray-500">&lt;{senderEmail}&gt;</div>
      </div>
      <div className="font-bold text-left">Date: {date}</div>
      <div className="font-bold text-left mb-16">Subject: {subject}</div>
      <div
        className="text-left"
        dangerouslySetInnerHTML={createMarkup(content)}
      />
    </div>
  );
};

export default Email;
