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
  totalTips: 4,
  tips: [
    {
      tipHeader: "Keep Your Computer Safe",
      tipBody:
        "Make sure your computer is always up to date with the latest fixes.",
      tipImage: "/assets/safety/safety-tips/update-software.png",
    },
    {
      tipHeader: "Lock the Door with a Strong Key",
      tipBody:
        "Think of a strong, secret password like a key that locks your computer. Make it hard for others to guess.",
      tipImage: "/assets/safety/safety-tips/strong-password.png",
    },
    {
      tipHeader: "Don't Believe Scary Warnings",
      tipBody:
        "Some pop-up warnings aren't true. Don't download things because a scary message tells you to.",
      tipImage: "/assets/safety/safety-tips/scary-warning.png",
    },
    {
      tipHeader: "Beware of Tech Support Scams",
      tipBody:
        "Be careful if someone you don't know contacts you about computer problems; real tech support won't do that. If you're unsure, ask someone you trust for help to avoid scams.",
      tipImage: "/assets/safety/safety-tips/tech-support-scam.png",
    },
  ],
};
