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
  term: "",
  shortDescription: "",
  leadingText: "",
  imageUrl: "",
  explanation: "",
};

export const TermsData: ListOfTerms = {
  terms: [
    {
      term: "Application",
      shortDescription: "A computer program on your phone or computer",
      leadingText: "Have you seen these icons before?",
      imageUrl:
        "https://cdn.neowin.com/news/images/uploaded/2019/09/1567518637_edhncg7wkaajtzm.jpg",
      explanation:
        "All these icons are different applications on your computer. An application is a small computer program that you can use on your phone or computer to do tasks, like playing games, checking the weather, or browsing the internet.",
    },
    {
      term: "Browser",
      shortDescription: "An app to access the Internet on the phone and computer",
      leadingText: "Find these icons familiar?",
      imageUrl: "https://www.eweek.com/wp-content/uploads/2021/02/browser-logos.png",
      explanation:
        "A browser is an app that you use to surf the Internet. It allows you to visit different websites. When you click on any of the above icons on your phone or computer, you are using a browser!",
    },
    {
      term: "Cache",
      shortDescription: "Stores information on your computer so websites load faster",
      leadingText: "How can websites load so fast on the browser?",
      imageUrl:
        "https://gbdesignstudio.co.uk/wp-content/uploads/2018/11/How-to-clear-your-browser-cache.jpg",
      explanation:
        "When you visit a website, some of the information on the website is stored on your computer in a place known as a cache. Then, when you visit the same website again, the computer can use the information in the cache to load the website, instead of having to fetch all the data from the Internet. This makes the website load much faster!",
    },
    {
      term: "Cookie",
      shortDescription: "Stores information about your activity on a website",
      leadingText:
        "Websites store information about your activity on the site in cookies",
      imageUrl:
        "https://www.adpushup.com/blog/wp-content/uploads/2021/02/Web_Browser_Cookie_Blog_Header-02.png",
      explanation:
        "Have you shopped online before and realise that the website could recommend you things that you are interested in? Well, such websites use cookies! Cookies allow websites to remember your preferences and browsing history so they can provide a personalised experience for you.",
    },
    {
      term: "Ethernet",
      shortDescription: "The wired technology to connect to the Internet",
      leadingText: "Have you seen such cables before?",
      imageUrl:
        "https://m.media-amazon.com/images/I/81QerFqLubL._AC_UF894,1000_QL80_.jpg",
      explanation:
        "Unlike WiFi which allows you to connect to the Internet without any wires, Ethernet uses a wire to connect your computer to the Internet. Usually, the wire used looks like the one shown in the picture above.",
    },
    {
      term: "File",
      shortDescription: "A digital document that you can edit and save",
      leadingText: "Want to save information on your computer?",
      imageUrl: "https://www.computerhope.com/jargon/f/file-formats.png",
      explanation:
        "In the physical world, we print or write our documents on paper. A file is like a document but it is stored on the computer, which you can easily save, open and edit.",
    },
    {
      term: "Folder",
      shortDescription: "A container for all your files",
      leadingText: "Do you know how folders look like in the physical world?",
      imageUrl:
        "https://www.oreilly.com/api/v2/epubs/9780134077642/files/graphics/common15.jpg",
      explanation:
        "Just like how you would file all your paper documents into a folder in the physical world, a folder in the computer allows you to group digital files together for better organisation.",
    },
    {
      term: "Hardware",
      shortDescription: "The physical parts of a computer",
      leadingText: "The parts of a computer that you can touch and see",
      imageUrl:
        "https://d3jlfsfsyc6yvi.cloudfront.net/image/mw:1024/q:85/https%3A%2F%2Fhaygot.s3.amazonaws.com%3A443%2Fcheatsheet%2F26258.png",
      explanation:
        "Hardware refers to the physical parts of a computer, like the parts you can touch, such as the screen, keyboard, and the mouse.",
    },
    {
      term: "Internet",
      shortDescription:
        "The network that connects computers and phones all around the world",
      leadingText: "The online place with a lot of information",
      imageUrl:
        "https://i0.wp.com/thedigitalchain.com/wp-content/uploads/2020/05/uses-of-the-internet.png?fit=1200%2C700&ssl=1",
      explanation:
        "When you visit a website or watch a video on YouTube, you are accessing the Internet! The Internet has a lot of information, and going onto the Internet allows you to share and search for information.",
    },
    {
      term: "Malware",
      shortDescription: "Harmful software that cause problems for your device",
      leadingText: "The software that is harmful to your computer and phone",
      imageUrl: "https://ichef.bbci.co.uk/images/ic/1200xn/p0d2q3sr.png",
      explanation:
        "When you are infected with bacteria or virus, you fall sick. Just like humans, computers can fall sick if they get infected with malware, which is harmful software that steals your information or damages the device.",
    },
    {
      term: "Mouse Cursor",
      shortDescription: "The icon that shows the position of your mouse",
      leadingText: "Want to know where the position of the mouse is?",
      imageUrl:
        "https://www.freeiconspng.com/thumbs/cursor-png/cursor-png-ico-icns-free-icon-download--icon100m-20.png",
      explanation:
        "A mouse cursor is the arrow or pointer you move on the screen with your mouse. It tells you where your mouse is on the screen, and you can use it to click on things and control your computer.",
    },
    {
      term: "Operating System",
      shortDescription:
        "The main software program that controls your computer and phone",
      leadingText: "Windows? macOS? iOS? Android? These are all operating systems!",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/Q7fy5dF52KLo4eju8DT5q5.jpg",
      explanation:
        "Operating system, commonly known as OS, is like the boss of your computer. It manages and controls all the other parts of your computer.",
    },
    {
      term: "Phishing",
      shortDescription: "A common scam technique through SMS and email",
      leadingText: "Fishing? No, it is phishing!",
      imageUrl: "https://www.ncsc.gov.uk/images/Phishing-vector%20-%20Copy.png",
      explanation:
        "When you go fishing, you give a bait to the fishes and hope that the fishes will take your bait. Phishing works the same way, where scammers try to attract you to reveal your personal data such as bank account or credit card numbers. Remember not to easily tell anyone your personal information online!",
    },
    {
      term: "Search Engine",
      shortDescription: "Allows you to search for answers on the Internet",
      leadingText:
        "Have you heard of Yahoo, Google or Bing? These are all search engines!",
      imageUrl:
        "https://aeroadmin.com/articles/en/wp-content/uploads/2020/11/search-engine-logo.png",
      explanation:
        "If you have a question, how can we find the answer to your question since the Internet has a lot of information? Use a search engine! A search engine allows you to type in a question or a topic, and it will show you the information that is related to what you have asked.",
    },
    {
      term: "Software",
      shortDescription: "The set of instructions that tells a computer what to do",
      leadingText: "The parts of a computer that you cannot touch but can see",
      imageUrl:
        "https://www.coderus.com/wp-content/uploads/2020/11/different-types-of-software-coderus-branded-image.jpg",
      explanation:
        "On your phone, you have many different apps. All these apps are software! Software are the parts that you cannot touch, but give instructions to run your computer.",
    },
    {
      term: "URL",
      shortDescription: "The address of a webpage on the Internet",
      leadingText: "URL tells us which webpage we want to visit",
      imageUrl:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp",
      explanation:
        "When you visit someone in the physical world, you need to know his address so you know where to go. This is the same as when you want to visit a webpage on the Internet. You need to know where this webpage is located at. A URL, which stands for Uniform Resource Locator, is the address of the website on the Internet. Providing the URL of your desired webpage will bring you to the correct page.",
    },
    {
      term: "WiFi",
      shortDescription: "The wireless technology to connect to the Internet",
      leadingText: "Find this umbrella icon familiar?",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/159/159076.png",
      explanation:
        "WiFi allows you to connect your computer or phone to the Internet without any wires. Once you are connected to a WiFi network, you can access the Internet!",
    },
    {
      term: "Action Center",
      shortDescription: "A centralized hub for system notifications and alerts",
      leadingText: "Have you seen notifications on your computer?",
      imageUrl:
        "https://www.groovypost.com/wp-content/uploads/2015/08/Action-Center-Laptop.png",
      explanation:
        "The Action Center is a central place on your computer where you can view and respond to system notifications and alerts. It keeps you informed about important events and issues.",
    },
    {
      term: "Address Bar",
      shortDescription:
        "A text field in a web browser displaying the URL of the current webpage",
      leadingText: "Have you noticed the text box at the top of your browser?",
      imageUrl:
        "https://static.javatpoint.com/computer/images/what-is-an-address-bar2.png",
      explanation:
        "The Address Bar is where you can see the web address (URL) of the webpage you are currently visiting. You can also type a web address in this bar to navigate to a specific site.",
    },
    {
      term: "Adware",
      shortDescription: "Unwanted software that displays advertising on a computer",
      leadingText: "Ever encountered unwanted ads on your computer?",
      imageUrl:
        "https://academy.avast.com/hs-fs/hubfs/New_Avast_Academy/Adware/Adware_02.png?width=990&name=Adware_02.png",
      explanation:
        "Adware is software that displays unwanted advertisements on your computer. It can be annoying and may come bundled with other programs you install.",
    },
    {
      term: "Adblocker",
      shortDescription: "A tool that prevents online advertisements from displaying",
      leadingText: "Tired of ads while browsing?",
      imageUrl:
        "https://play-lh.googleusercontent.com/NXgN-xTzwPSpSZYLe3jUo4NYCw_cN9MoxuGWYU71yuYEyT1oUvRhuEIV3mG8yLR_xlM",
      explanation:
        "An Adblocker is a tool that helps prevent online advertisements from displaying on websites. It can enhance your browsing experience by reducing distractions from ads.",
    },
    {
      term: "Anti-virus Software",
      shortDescription:
        "Programs designed to detect, prevent, and remove malicious software",
      leadingText: "Protecting your computer from harmful viruses and malware.",
      imageUrl:
        "https://www.whatismyip.com/static/6f608b22fa931dd6bc905ed085a46b25/antivirus-software.webp",
      explanation:
        "Anti-virus software is a program designed to detect, prevent, and remove malicious software, including viruses, worms, and other types of malware. It helps keep your computer secure.",
    },
    {
      term: "Application Window",
      shortDescription:
        "The graphical interface for an open application on your computer",
      leadingText: "Ever worked with multiple open programs?",
      imageUrl:
        "https://img.freepik.com/premium-vector/computer-app-window-frame-template-web-browser_53562-18794.jpg",
      explanation:
        "An Application Window is the graphical interface for an open application on your computer. It allows you to interact with and use the features of the application.",
    },
    {
      term: "Backup Data",
      shortDescription: "Creating a duplicate copy of important files for safekeeping",
      leadingText: "How do you keep your important files safe?",
      imageUrl:
        "https://software.covetrus.com/emea/wp-content/uploads/2021/02/Data-Backup-Easy-to-use-590x500-1-590x500.png",
      explanation:
        "Backing up data involves creating a duplicate copy of important files to ensure they are not lost in case of computer failure, damage, or accidental deletion.",
    },
    {
      term: "Boot Up",
      shortDescription: "The process of starting or restarting a computer",
      leadingText: "What happens when you turn on your computer?",
      imageUrl: "https://i.postimg.cc/v8zvK8tQ/01.jpg",
      explanation:
        "Boot Up is the process of starting or restarting a computer. During this process, the computer loads the operating system and prepares to run programs.",
    },
    {
      term: "Bookmark",
      shortDescription: "A saved link to a specific webpage for quick access",
      leadingText: "How do you quickly access your favorite websites?",
      imageUrl:
        "https://2.bp.blogspot.com/-pOPGIXDCLfw/Wtrk1eKi-WI/AAAAAAAAAWQ/uXa4RBEZM2gcEHvc0LcEYQlO3exs-5HCwCLcBGAs/s1600/how%2Bto%2Badd%2Bbookmarks%2Bin%2Bgoogle%2Bchrome.png",
      explanation:
        "A Bookmark is a saved link to a specific webpage. It allows you to quickly access your favorite websites without having to type in the web address each time.",
    },
    {
      term: "Browsing",
      shortDescription: "Exploring and navigating websites on the internet",
      leadingText: "Have you ever explored different websites on the internet?",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/1830/1830794.png",
      explanation:
        "Browsing refers to the activity of exploring and navigating websites on the internet. It involves visiting web pages and interacting with online content.",
    },
    {
      term: "Carbon Copy",
      shortDescription:
        "Sending an identical copy of a document or message to multiple recipients",
      leadingText: "Ever needed to send the same message to multiple people?",
      imageUrl: "https://www.rightinbox.com/wp-content/uploads/CC-email1.png",
      explanation:
        "A Carbon Copy (CC) is the practice of sending an identical copy of a document, email, or message to multiple recipients. It keeps everyone informed.",
    },
    {
      term: "Cloud Storage",
      shortDescription:
        "Storing and accessing data over the internet instead of on a local device",
      leadingText: "How do you store your files securely online?",
      imageUrl:
        "https://www.kwikkopy.com.au/wp-content/uploads/2014/08/Cloud-storage.png",
      explanation:
        "Cloud Storage involves storing and accessing data over the internet instead of on a local device. It provides a convenient and secure way to keep your files.",
    },
    {
      term: "Compose Window",
      shortDescription: "The interface for creating and writing messages or documents",
      leadingText: "How do you create new messages or documents?",
      imageUrl:
        "https://media.gcflearnfree.org/content/55e073917dd48174331f5195_01_17_2014/sending_compose_window.jpg",
      explanation:
        "A Compose Window is the interface for creating and writing messages or documents. It allows you to input text and format content before sending or saving.",
    },
    {
      term: "Computer",
      shortDescription: "An electronic device that processes data",
      leadingText: "Have you used a computer before?",
      imageUrl:
        "https://5.imimg.com/data5/LP/FA/MY-50363679/computer-world-500x500.jpg",
      explanation:
        "A computer is an electronic device that processes information. It can be used for various tasks like writing documents, browsing the internet, and playing games.",
    },
    {
      term: "Computer Virus",
      shortDescription:
        "Harmful software that can replicate and spread to other computers",
      leadingText: "Protecting your computer from malicious programs",
      imageUrl:
        "https://img.freepik.com/premium-vector/virus-warning-laptop-screen-danger-alert-computer-internet-safety-concept-vector_566734-111.jpg",
      explanation:
        "A computer virus is harmful software that can replicate itself and spread to other computers. It can cause damage to files and disrupt the normal functioning of a computer.",
    },
    {
      term: "Desktop",
      shortDescription:
        "The primary screen where icons, shortcuts, and background are displayed",
      leadingText: "What does your computer screen look like?",
      imageUrl:
        "https://www.oreilly.com/api/v2/epubs/9781491948286/files/httpatomoreillycomsourceoreillyimages2250439.png.jpg",
      explanation:
        "The desktop is the primary screen on your computer. It displays icons, shortcuts, and the background image. It serves as the main workspace for your computer activities.",
    },
    {
      term: "Drive",
      shortDescription: "A storage device that holds files and data on a computer",
      leadingText: "Where do you store your files on the computer?",
      imageUrl:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--IiUML3rd--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qodkr9l1eebah4e7uttj.png",
      explanation:
        "A drive is a storage device on your computer where you can store files and data. Examples include hard drives, solid-state drives, and external drives.",
    },
    {
      term: "Email",
      shortDescription: "Electronic messages sent over the internet",
      leadingText: "How do you communicate electronically?",
      imageUrl:
        "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png",
      explanation:
        "Email, short for electronic mail, is a method of exchanging digital messages over the internet. It is widely used for communication and sharing information.",
    },
    {
      term: "Email Address",
      shortDescription: "A unique identifier for sending and receiving emails",
      leadingText: "Do you have a unique email identifier?",
      imageUrl: "https://techtipnow.in/wp-content/uploads/2021/02/email_parts.png",
      explanation:
        "An email address is a unique identifier used for sending and receiving emails. It typically consists of a username followed by the @ symbol and a domain name.",
    },
    {
      term: "Email Attachment",
      shortDescription: "A file or document sent along with an email message",
      leadingText: "Have you ever sent or received email attachments?",
      imageUrl:
        "https://blogcdn.gmass.co/blog/wp-content/uploads/2022/04/Attach-file-button-1024x951.png",
      explanation:
        "An email attachment is a file or document that is sent along with an email message. It allows you to share documents, images, and other files with others.",
    },
    {
      term: "Executable File",
      shortDescription:
        "A file containing instructions that can be executed or run by a computer program",
      leadingText: "What happens when you run a program?",
      imageUrl: "https://www.computerhope.com/jargon/e/exe-file.png",
      explanation:
        "An executable file is a file that contains instructions that can be executed or run by a computer program. It initiates a specific action or process when activated.",
    },
    {
      term: "File Explorer",
      shortDescription: "A file management application on your computer",
      leadingText: "How do you navigate and manage your files?",
      imageUrl: "https://www.computerhope.com/jargon/e/explorer-win10.jpg",
      explanation:
        "File Explorer is a file management application on your computer that allows you to navigate, organize, and manage your files and folders. It provides an interface for interacting with your computer's file system.",
    },
    {
      term: "File Extension",
      shortDescription:
        "A set of characters at the end of a filename to indicate the file type",
      leadingText: "What do those letters after the dot in a filename mean?",
      imageUrl:
        "https://www.filecenter.com/blog/wp-content/uploads/2022/04/The-Giant-List-of-Document-File-Types-and-Extensions.jpg",
      explanation:
        "A file extension is a set of characters at the end of a filename, separated by a dot. It indicates the type or format of the file, helping the operating system understand how to handle and open the file.",
    },
    {
      term: "File Type",
      shortDescription: "The category or format of a file based on its content",
      leadingText: "How would you categorize different types of files?",
      imageUrl:
        "https://www.filecenter.com/blog/wp-content/uploads/2022/04/The-Giant-List-of-Document-File-Types-and-Extensions.jpg",
      explanation:
        "File type refers to the category or format of a file based on its content and purpose. Common file types include documents, images, videos, and applications.",
    },
    {
      term: "Forward",
      shortDescription:
        "To send information or messages to a subsequent destination or recipient",
      leadingText: "Have you ever forwarded a message or email?",
      imageUrl:
        "https://www.cloudns.net/blog/wp-content/uploads/2018/03/86306918_m.jpg",
      explanation:
        "Forwarding involves sending information, messages, or emails to a subsequent destination or recipient. It allows you to share content with others.",
    },
    {
      term: "Graphical User Interface",
      shortDescription:
        "An interface that uses graphical elements for user interaction",
      leadingText: "How do you interact with your computer visually?",
      imageUrl:
        "https://img.freepik.com/premium-vector/web-page-user-interface-template-social-network-website-browser-window-ui-design-flat-style_266660-829.jpg",
      explanation:
        "A Graphical User Interface (GUI) is an interface that uses graphical elements, such as icons and windows, for user interaction. It provides a visual way to interact with computer systems.",
    },
    {
      term: "Hyperlink",
      shortDescription:
        "A clickable link that navigates to another location or resource",
      leadingText: "Ever clicked on a highlighted link on a webpage?",
      imageUrl:
        "https://www.volusion.com/blog/content/images/2018/11/What-is-a-Hyperlink.png",
      explanation:
        "A hyperlink is a clickable link that, when activated, navigates to another location or resource. It is commonly used in documents and on the web for easy navigation.",
    },
    {
      term: "Icon",
      shortDescription: "A visual symbol representing a file, folder, or application",
      leadingText: "Recognize those small images on your screen?",
      imageUrl:
        "hhttps://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi0wMy5qcGc.jpg",
      explanation:
        "An icon is a visual symbol that represents a file, folder, or application on your computer. Icons make it easier to identify and interact with different elements on your screen.",
    },
    {
      term: "Inbox",
      shortDescription:
        "A location where received emails are stored for reading and processing",
      leadingText: "Where do you find emails you've received?",
      imageUrl: "https://i.ytimg.com/vi/JsPiG6TsnGg/maxresdefault.jpg",
      explanation:
        "An Inbox is a location in your email where received emails are stored for reading and processing. It is the main hub for managing your incoming messages.",
    },
    {
      term: "Keyboard",
      shortDescription:
        "A set of keys used for inputting text and commands into a computer",
      leadingText: "How do you type messages and commands on your computer?",
      imageUrl: "https://3.imimg.com/data3/PJ/JE/MY-12098417/computer-keyboard.jpg",
      explanation:
        "A keyboard is a set of keys used for inputting text and commands into a computer. It is a common input device and an essential tool for communication and interaction.",
    },
    {
      term: "Maximize",
      shortDescription: "To enlarge a window to its full size on the screen",
      leadingText: "Ever wanted to make a window bigger?",
      imageUrl:
        "https://cdn.icon-icons.com/icons2/2248/PNG/512/window_maximize_icon_137012.png",
      explanation:
        "Maximize is the action of enlarging a window to its full size on the screen. It allows you to make the most of the available screen space for a particular application or document.",
    },
    {
      term: "Media Player",
      shortDescription:
        "Software designed for playing multimedia files, such as audio and video",
      leadingText: "How do you listen to music or watch videos on your computer?",
      imageUrl:
        "https://blogs.windows.com/wp-content/uploads/prod/sites/44/2021/11/Logo.png",
      explanation:
        "A Media Player is software designed for playing multimedia files, including audio and video. It provides a user-friendly interface for managing and enjoying digital media content.",
    },
    {
      term: "Message Window",
      shortDescription: "An interface for viewing and composing messages or emails",
      leadingText: "How do you read and write messages or emails?",
      imageUrl:
        "https://img.freepik.com/premium-vector/blank-email-window-template-email-screen-with-mail-message_349999-136.jpg",
      explanation:
        "A Message Window is an interface for viewing and composing messages or emails. It allows you to read, reply to, and create new messages with ease.",
    },
    {
      term: "Minimize",
      shortDescription: "To reduce a window to a smaller size on the screen",
      leadingText: "Need to temporarily hide a window?",
      imageUrl: "https://static.javatpoint.com/computer/images/what-is-minimize.png",
      explanation:
        "Minimize is the action of reducing a window to a smaller size on the screen. It allows you to temporarily hide a window and access it later from the taskbar or dock.",
    },
    {
      term: "Modem",
      shortDescription:
        "A device that connects a computer to the internet via a telephone or cable line",
      leadingText: "How does your computer connect to the internet?",
      imageUrl:
        "https://www.dlink.com.my/wp-content/uploads/2015/03/DSL-2750E-mainimage-1-500x588.jpg",
      explanation:
        "A Modem is a device that connects a computer to the internet via a telephone or cable line. It facilitates the transmission of data between your computer and the internet service provider.",
    },
    {
      term: "Monitor",
      shortDescription:
        "The display screen of a computer where information is presented visually",
      leadingText: "What do you see on your computer screen?",
      imageUrl:
        "https://images.philips.com/is/image/PhilipsConsumer/241V8_69-IMS-en_MY?$jpglarge$&wid=960",
      explanation:
        "A Monitor is the display screen of a computer where information is presented visually. It allows you to view and interact with the content displayed by your computer.",
    },
    {
      term: "Mouse",
      shortDescription:
        "A pointing device used for navigating and interacting with a computer",
      leadingText: "How do you move the cursor on your computer screen?",
      imageUrl:
        "https://microless.com/cdn/products/3c47e794c314ebada1617d40ac7c39ca-hi.jpg",
      explanation:
        "A Mouse is a pointing device used for navigating and interacting with a computer. It allows you to move the cursor, click on icons, and perform various actions.",
    },
    {
      term: "Multitasking",
      shortDescription:
        "The ability to execute multiple tasks or processes simultaneously",
      leadingText: "Ever open multiple programs at the same time?",
      imageUrl:
        "https://img.freepik.com/free-vector/woman-working-multitask-activities_23-2148823002.jpg?w=2000",
      explanation:
        "Multitasking is the ability to execute multiple tasks or processes simultaneously. It enables you to work on different applications or activities at the same time.",
    },
    {
      term: "Notification Area",
      shortDescription:
        "The area on the taskbar displaying system and application notifications",
      leadingText: "Where do you see notifications on your computer?",
      imageUrl:
        "https://www.guidingtech.com/wp-content/uploads/customizenotificationarea1_4d470f76dc99e18ad75087b1b8410ea9.png",
      explanation:
        "The Notification Area is the part of the taskbar that displays system and application notifications. It provides quick access to important information and updates.",
    },
    {
      term: "Path",
      shortDescription:
        "The route or location of a file or folder in the computer's file system",
      leadingText: "How do you specify the location of a file?",
      imageUrl:
        "https://www.majorgeeks.com/content/file/1174_how%20to%20copy%20the%20path%20of%20a%20file%20or%20a%20folder%20to%20the%20clipboard%202.jpg",
      explanation:
        "A Path is the route or location of a file or folder in the computer's file system. It represents the series of directories or folders leading to the file's location.",
    },
    {
      term: "Port",
      shortDescription:
        "A physical or virtual endpoint for communication in a computer network",
      leadingText: "How does data travel between your computer and the internet?",
      imageUrl:
        "https://internet-access-guide.com/wp-content/uploads/2021/03/port-range-vs-local-port.jpg",
      explanation:
        "A Port is a physical or virtual endpoint for communication in a computer network. It enables the transfer of data between your computer and other devices on the network.",
    },
    {
      term: "Preview Pane",
      shortDescription:
        "A window pane that provides a preview of the content of a file or message",
      leadingText: "Ever want to preview the content of a file without opening it?",
      imageUrl:
        "https://www.ilovefreesoftware.com/wp-content/uploads/2014/11/windows-10-activate-preview-pane.png",
      explanation:
        "A Preview Pane is a window pane that provides a preview of the content of a file or message without fully opening it. It allows you to glance at the content quickly.",
    },
    {
      term: "Private Browsing",
      shortDescription:
        "A browsing mode that doesn't store history or cookies on the computer",
      leadingText: "Ever wanted to browse without leaving a trace?",
      imageUrl:
        "https://www.globalsign.com/application/files/3416/1644/1850/iStock-1022030450.jpg",
      explanation:
        "Private Browsing is a browsing mode that doesn't store the browsing history or cookies on the computer. It allows for a more private and secure online experience.",
    },
    {
      term: "Ransomware",
      shortDescription:
        "Malicious software that encrypts files and demands payment for their release",
      leadingText: "How do you protect your files from malicious attacks?",
      imageUrl:
        "https://www.globalsign.com/application/files/3416/1644/1850/iStock-1022030450.jpg",
      explanation:
        "Ransomware is malicious software that encrypts files on a computer and demands payment for their release. It poses a threat to the security of digital data.",
    },
    {
      term: "Recycling Bin",
      shortDescription:
        "A temporary storage for deleted files before permanent removal",
      leadingText: "What happens when you delete a file?",
      imageUrl:
        "https://www.intowindows.com/wp-content/uploads/2015/11/Add-Recycle-Bin-icon-to-Windows-10-Desktop.jpg",
      explanation:
        "The Recycling Bin is a temporary storage location for deleted files before they are permanently removed from the computer. It provides a chance to recover deleted items.",
    },
    {
      term: "Router",
      shortDescription:
        "A networking device that forwards data between computer networks",
      leadingText: "How does data travel between your devices and the internet?",
      imageUrl:
        "https://www.lifewire.com/thmb/J-RKLI26Tx6wSs_Hkp13kkIUJ3o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tp-link-router-5b2c1608a474be003670ae0f.jpg",
      explanation:
        "A Router is a networking device that forwards data between computer networks. It connects multiple devices to the internet and directs data traffic efficiently.",
    },
    {
      term: "Search Box",
      shortDescription: "A text input field for entering search queries or commands",
      leadingText:
        "How do you find information quickly on your computer or the internet?",
      imageUrl:
        "https://media.licdn.com/dms/image/C5112AQEw0brjwfv-VA/article-cover_image-shrink_600_2000/0/1552213440259?e=2147483647&v=beta&t=ZgjTOM9KnSiA1EnEdlHPNm1yu10rMq-vFR5DpN-ep4U",
      explanation:
        "A Search Box is a text input field that allows users to enter search queries or commands. It is commonly used to quickly find information on the computer or the internet.",
    },
    {
      term: "Sleep",
      shortDescription:
        "A low-power state in which a computer reduces energy consumption",
      leadingText: "How does your computer save power when not in use?",
      imageUrl:
        "https://www.dokklaus.com/wp-content/uploads/2018/08/computer-sleeping.jpg",
      explanation:
        "Sleep is a low-power state in which a computer reduces energy consumption while retaining the current system state. It allows for quick resume when needed.",
    },
    {
      term: "Start Menu",
      shortDescription:
        "A menu on the Windows operating system for accessing programs and features",
      leadingText: "How do you open programs and features on a Windows computer?",
      imageUrl:
        "https://i.pcmag.com/imagery/articles/04UeCgzKVJ5x3Y3kij4jSoP-21.fit_lim.size_1050x.png",
      explanation:
        "The Start Menu is a menu on the Windows operating system that provides access to programs, settings, and features. It serves as a central hub for navigation.",
    },
    {
      term: "Subfolder",
      shortDescription:
        "A folder located within another folder, creating a hierarchical structure",
      leadingText: "How do you organize your digital files into categories?",
      imageUrl:
        "https://desk.zoho.in/DocsDisplay?zgId=60001911841&mode=inline&blockId=zuzwjf77c895cf6e5452c98eb25bd620e7a24",
      explanation:
        "A Subfolder is a folder located within another folder, creating a hierarchical structure for organizing digital files. It helps maintain a systematic arrangement.",
    },
    {
      term: "System Unit",
      shortDescription:
        "The main part of a computer housing the central processing unit and other components",
      leadingText: "Where is the brain of your computer located?",
      imageUrl: "https://study.com/cimages/multimages/16/computersystemtower.png",
      explanation:
        "The System Unit is the main part of a computer housing the central processing unit (CPU) and other essential components. It is the core processing unit of the computer.",
    },
    {
      term: "Tabs",
      shortDescription:
        "Separate sections in a browser for viewing multiple webpages simultaneously",
      leadingText:
        "How do you browse multiple webpages without opening separate windows?",
      imageUrl:
        "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/10/Chrome-Change-Tab-Color-Based-on-URL-4.png?resize=666%2C463&ssl=1",
      explanation:
        "Tabs are separate sections in a web browser that allow users to view multiple webpages simultaneously within a single window. It enhances browsing efficiency.",
    },
    {
      term: "Taskbar",
      shortDescription:
        "A bar on the desktop displaying open programs and system notifications",
      leadingText: "Where do you see your open programs and system notifications?",
      imageUrl: "https://www.minitool.com/images/uploads/2019/06/windows-taskbar-1.png",
      explanation:
        "The Taskbar is a bar on the desktop that displays open programs, system notifications, and other useful information. It serves as a quick navigation tool.",
    },
    {
      term: "Website",
      shortDescription: "A collection of web pages accessible through the internet",
      leadingText: "How do you access information and services on the internet?",
      imageUrl:
        "https://st.depositphotos.com/2465651/3063/i/450/depositphotos_30637147-stock-photo-internet-concept.jpg",
      explanation:
        "A Website is a collection of interconnected web pages accessible through the internet. It can contain text, images, videos, and interactive features.",
    },
    {
      term: "Word Processor",
      shortDescription: "Software for creating, editing, and formatting text documents",
      leadingText: "How do you write and format documents on your computer?",
      imageUrl:
        "https://www.tutorialspoint.com/computer_concepts/images/word_processing.jpg",
      explanation:
        "A Word Processor is software designed for creating, editing, and formatting text documents. It provides tools for efficient document composition.",
    },
    {
      term: "Wikipedia",
      shortDescription: "A free online encyclopedia with articles on various topics",
      leadingText: "Where do you go for quick information on a wide range of topics?",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wikipedia-logo-v2-en.svg/1200px-Wikipedia-logo-v2-en.svg.png",
      explanation:
        "Wikipedia is a free online encyclopedia that offers articles on a wide range of topics. It is a valuable resource for quick information and research.",
    },
  ],
};
TermsData.terms.sort((a, b) => a.term.localeCompare(b.term));
export default TermsData;
