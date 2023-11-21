// Custom interfaces for tips

export interface TipItem {
  tipHeader: string;
  tipBody: string;
  tipImage: string;
}

export interface Tips {
  totalTips: number;
  tips: TipItem[];
}

export const EmailTipsData: Tips = {
  totalTips: 3,
  tips: [
    {
      tipHeader: "Check the source of the email",
      tipBody:
        "Do not open emails from suspicious people. Check with someone else if you are unsure.",
      tipImage: "/assets/email/tip-1.png",
    },
    {
      tipHeader: "Never send any personal info",
      tipBody:
        "Never send others your NRIC, bank account details or SingPass OTPs via email.",
      tipImage: "/assets/email/tip-2.png",
    },
    {
      tipHeader: "Do not download suspicious files",
      tipBody:
        "Do not download software or click on suspicious links in emails.",
      tipImage: "/assets/email/tip-3.png",
    },
  ],
};

export const SafetyTipsData: Tips = {
  totalTips: 6,
  tips: [
    {
      tipHeader: "Using vague and incorrect language and information",
      tipBody:
        "Phishing messages might make grammar or spelling mistakes and use a generic greeting instead of your name, so watch out for those signs!",
      tipImage: "/assets/safety/safety-tips/tip-1.png",
    },
    {
      tipHeader: "Using urgent or threatening language",
      tipBody:
        "Phishing messages may try to scare you into doing something quickly by saying things like 'Your account will be locked' or 'Immediate action required'.",
      tipImage: "/assets/safety/safety-tips/tip-2.png",
    },
    {
      tipHeader: "Promising attractive prizes",
      tipBody:
        "Phishing messages might say you've won a big prize to get your attention, but it's usually a trick to make you do something bad.",
      tipImage: "/assets/safety/safety-tips/tip-3.png",
    },
    {
      tipHeader: "Requesting for confidential information",
      tipBody:
        "Phishing messages might ask for private information, like your password or personal details, trying to trick you into giving it to them.",
      tipImage: "/assets/safety/safety-tips/tip-4.png",
    },
    {
      tipHeader: "Receiving unexpected emails",
      tipBody:
        "If you get emails from people you don't know or weren't expecting, they might be phishing emails with bad stuff inside.",
      tipImage: "/assets/safety/safety-tips/tip-5.png",
    },
    {
      tipHeader: "Message containing suspicious attachments",
      tipBody:
        "If you get messages with weird attachments, they could be bad, like viruses, so be careful.",
      tipImage: "/assets/safety/safety-tips/tip-6.png",
    },
  ],
};
