// Custom interfaces for tips

export interface TipItem {
    tipHeader: string;
    tipBody: string;
    tipImage: string;
  }
  
  
  export interface Tips {
    totalTips: number;
    tips: TipItem[]
  }
  
  
  
  export const EmailTipsData: Tips = {
      totalTips: 3,
      tips: [
        {
            tipHeader: 'Tip 1: Check the source of the email',
            tipBody: 'Do not open emails from suspicious people. Check with someone else if you are unsure.',
            tipImage: '/assets/email/tip-1.png'
        },
        {
            tipHeader: 'Tip 2: Never send any personal info',
            tipBody: 'Never send others your NRIC, bank account details or SingPass OTPs via email.',
            tipImage: '/assets/email/tip-2.png'
        },
        {
            tipHeader: 'Tip 3: Do not download suspicious files',
            tipBody: 'Do not download software or click on suspicious links in emails.',
            tipImage: '/assets/email/tip-3.png'
        },
       
      ],
  }
  