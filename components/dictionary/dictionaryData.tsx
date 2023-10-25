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

  export const EmptyTerm: Term = {
    term: '',
    shortDescription: '',
    leadingText: '',
    imageUrl: '',
    explanation: ''
  }
  
  
  
  export const TermsData: ListOfTerms = {
      terms: [
        {
          term: "Application",
          shortDescription: 'A computer program on your phone or computer',
          leadingText: "Have you seen these icons before?",
          imageUrl: "https://cdn.neowin.com/news/images/uploaded/2019/09/1567518637_edhncg7wkaajtzm.jpg",
          explanation: "All these icons are different applications on your computer. An application is a small computer program that you can use on your phone or computer to do tasks, like playing games, checking the weather, or browsing the internet."
        },
        {
            term: "Browser",
            shortDescription: 'An app to access the Internet on the phone and computer',
            leadingText: "Find these icons familiar?",
            imageUrl: "https://www.eweek.com/wp-content/uploads/2021/02/browser-logos.png",
            explanation: "A browser is an app that you use to surf the Internet. It allows you to visit different websites. When you click on any of the above icons on your phone or computer, you are using a browser!"
        },
        {
          term: "Cache",
          shortDescription: 'Stores information on your computer so websites load faster',
          leadingText: "How can websites load so fast on the browser?",
          imageUrl: "https://gbdesignstudio.co.uk/wp-content/uploads/2018/11/How-to-clear-your-browser-cache.jpg",
          explanation: "When you visit a website, some of the information on the website is stored on your computer in a place known as a cache. Then, when you visit the same website again, the computer can use the information in the cache to load the website, instead of having to fetch all the data from the Internet. This makes the website load much faster!"
        },
        {
          term: "Cookie",
          shortDescription: 'Stores information about your activity on a website',
          leadingText: "Websites store information about your activity on the site in cookies",
          imageUrl: "https://www.adpushup.com/blog/wp-content/uploads/2021/02/Web_Browser_Cookie_Blog_Header-02.png",
          explanation: "Have you shopped online before and realise that the website could recommend you things that you are interested in? Well, such websites use cookies! Cookies allow websites to remember your preferences and browsing history so they can provide a personalised experience for you."
        },
        {
          term: "Ethernet",
          shortDescription: 'The wired technology to connect to the Internet',
          leadingText: "Have you seen such cables before?",
          imageUrl: "https://m.media-amazon.com/images/I/81QerFqLubL._AC_UF894,1000_QL80_.jpg",
          explanation: "Unlike WiFi which allows you to connect to the Internet without any wires, Ethernet uses a wire to connect your computer to the Internet. Usually, the wire used looks like the one shown in the picture above."
        },
        {
          term: "File",
          shortDescription: 'A digital document that you can edit and save',
          leadingText: "Want to save information on your computer?",
          imageUrl: "https://www.computerhope.com/jargon/f/file-formats.png",
          explanation: "In the physical world, we print or write our documents on paper. A file is like a document but it is stored on the computer, which you can easily save, open and edit."
        },
        {
          term: "Folder",
          shortDescription: 'A container for all your files',
          leadingText: "Do you know how folders look like in the physical world?",
          imageUrl: "https://www.oreilly.com/api/v2/epubs/9780134077642/files/graphics/common15.jpg",
          explanation: "Just like how you would file all your paper documents into a folder in the physical world, a folder in the computer allows you to group digital files together for better organisation."
        },
        {
          term: "Hardware",
          shortDescription: 'The physical parts of a computer',
          leadingText: "The parts of a computer that you can touch and see",
          imageUrl: "https://d3jlfsfsyc6yvi.cloudfront.net/image/mw:1024/q:85/https%3A%2F%2Fhaygot.s3.amazonaws.com%3A443%2Fcheatsheet%2F26258.png",
          explanation: "Hardware refers to the physical parts of a computer, like the parts you can touch, such as the screen, keyboard, and the mouse."
        },
        {
          term: "Internet",
          shortDescription: 'The network that connects computers and phones all around the world',
          leadingText: "The online place with a lot of information",
          imageUrl: "https://i0.wp.com/thedigitalchain.com/wp-content/uploads/2020/05/uses-of-the-internet.png?fit=1200%2C700&ssl=1",
          explanation: "When you visit a website or watch a video on YouTube, you are accessing the Internet! The Internet has a lot of information, and going onto the Internet allows you to share and search for information."
        },
        {
          term: "Malware",
          shortDescription: 'Harmful software that cause problems for your device',
          leadingText: "The software that is harmful to your computer and phone",
          imageUrl: "https://ichef.bbci.co.uk/images/ic/1200xn/p0d2q3sr.png",
          explanation: "When you are infected with bacteria or virus, you fall sick. Just like humans, computers can fall sick if they get infected with malware, which is harmful software that steals your information or damages the device."
        },
        {
          term: "Mouse Cursor",
          shortDescription: 'The icon that shows the position of your mouse',
          leadingText: "Want to know where the position of the mouse is?",
          imageUrl: "https://www.freeiconspng.com/thumbs/cursor-png/cursor-png-ico-icns-free-icon-download--icon100m-20.png",
          explanation: "A mouse cursor is the arrow or pointer you move on the screen with your mouse. It tells you where your mouse is on the screen, and you can use it to click on things and control your computer."
        },
        {
          term: "Operating System",
          shortDescription: 'The main software program that controls your computer and phone',
          leadingText: "Windows? macOS? iOS? Android? These are all operating systems!",
          imageUrl: "https://cdn.mos.cms.futurecdn.net/Q7fy5dF52KLo4eju8DT5q5.jpg",
          explanation: "Operating system, commonly known as OS, is like the boss of your computer. It manages and controls all the other parts of your computer."
        },
        {
          term: "Phishing",
          shortDescription: 'A common scam technique through SMS and email',
          leadingText: "Fishing? No, it is phishing!",
          imageUrl: "https://www.ncsc.gov.uk/images/Phishing-vector%20-%20Copy.png",
          explanation: "When you go fishing, you give a bait to the fishes and hope that the fishes will take your bait. Phishing works the same way, where scammers try to attract you to reveal your personal data such as bank account or credit card numbers. Remember not to easily tell anyone your personal information online!"
      },
      {
        term: "Search Engine",
        shortDescription: 'Allows you to search for answers on the Internet',
        leadingText: "Have you heard of Yahoo, Google or Bing? These are all search engines!",
        imageUrl: "https://aeroadmin.com/articles/en/wp-content/uploads/2020/11/search-engine-logo.png",
        explanation: "If you have a question, how can we find the answer to your question since the Internet has a lot of information? Use a search engine! A search engine allows you to type in a question or a topic, and it will show you the information that is related to what you have asked."
      },
      {
        term: "Software",
        shortDescription: 'The set of instructions that tells a computer what to do',
        leadingText: "The parts of a computer that you cannot touch but can see",
        imageUrl: "https://www.coderus.com/wp-content/uploads/2020/11/different-types-of-software-coderus-branded-image.jpg",
        explanation: "On your phone, you have many different apps. All these apps are software! Software are the parts that you cannot touch, but give instructions to run your computer."
      },
      {
        term: "URL",
        shortDescription: 'The address of a webpage on the Internet',
        leadingText: "URL tells us which webpage we want to visit",
        imageUrl: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp",
        explanation: "When you visit someone in the physical world, you need to know his address so you know where to go. This is the same as when you want to visit a webpage on the Internet. You need to know where this webpage is located at. A URL, which stands for Uniform Resource Locator, is the address of the website on the Internet. Providing the URL of your desired webpage will bring you to the correct page."
      },
      {
        term: "WiFi",
        shortDescription: 'The wireless technology to connect to the Internet',
        leadingText: "Find this umbrella icon familiar?",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/159/159076.png",
        explanation: "WiFi allows you to connect your computer or phone to the Internet without any wires. Once you are connected to a WiFi network, you can access the Internet!"
      },
      













       
       
      ],
  }
  