// Dictionary Terms

export interface Term {
    term: string;
    shortDescription: string;
    leadingText: string;
    imageUrl: string;
    explanation: string;
  }
  
  
  export interface ListOfTerms {
    terms: Term[];
  }
  
  
  
  export const TermsData: ListOfTerms = {
      terms: [
        {
            term: "Browser",
            shortDescription: 'An app to access the Internet on the phone and computer',
            leadingText: "Find these icons familiar?",
            imageUrl: "https://www.eweek.com/wp-content/uploads/2021/02/browser-logos.png",
            explanation: "A browser is an app that you use to surf the Internet. It allows you to visit different websites. When you click on any of the above icons on your phone or computer, you are using a browser!"
        },
        {
            term: "Phishing",
            shortDescription: 'A common scam technique through SMS and email',
            leadingText: "Fishing? No, it is phishing!",
            imageUrl: "https://www.ncsc.gov.uk/images/Phishing-vector%20-%20Copy.png",
            explanation: "Phishing is like a trick where someone pretends to be your friend online to steal your important information."
        },
        {
            term: "Browser",
            shortDescription: 'An app to access the Internet',
            leadingText: "Find these icons familiar?",
            imageUrl: "https://www.eweek.com/wp-content/uploads/2021/02/browser-logos.png",
            explanation: "A browser is an app that you use to surf the Internet. It allows you to visit different websites. When you click on any of the above icons on your phone or computer, you are using a browser!"
        },
        {
            term: "Browser",
            shortDescription: 'An app to access the Internet',
            leadingText: "Find these icons familiar?",
            imageUrl: "https://www.eweek.com/wp-content/uploads/2021/02/browser-logos.png",
            explanation: "A browser is an app that you use to surf the Internet. It allows you to visit different websites. When you click on any of the above icons on your phone or computer, you are using a browser!"
        },
        {
            term: "Browser",
            shortDescription: 'An app to access the Internet',
            leadingText: "Find these icons familiar?",
            imageUrl: "https://www.eweek.com/wp-content/uploads/2021/02/browser-logos.png",
            explanation: "A browser is an app that you use to surf the Internet. It allows you to visit different websites. When you click on any of the above icons on your phone or computer, you are using a browser!"
        },
       
      ],
  }
  