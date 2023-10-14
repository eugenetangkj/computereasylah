import Navbar from "@/components/Navbar";
import Logo from "@/assets/Logo.png";
import WLDLogo from "@/assets/WLDLogo.png";
import Image from "next/image";
import Footer from "@/components/Footer";

const Intro = (props) => {
  const { title, text } = props;
  return (
    <div className="mx-auto w-1/2">
      <p className="text-3xl font-semibold text-dark-blue p-12">{title}</p>
      <p className="text-dark-gray ">{text}</p>
    </div>
  );
};

const Resource = (props) => {
  const { image, title, text, button } = props;

  return (
    <div className="flex justify-center mb-12">
      <div className="w-1/4">
        <Image src={image} alt={title} className="w-32" />
      </div>

      <div className="text-left w-1/3">
        <h2 className="text-2xl text-pink font-bold">{title}</h2>
        <p className="text-dark-gray my-4">{text}</p>
        <button className="w-32 h-12 bg-dark-blue rounded-3xl text-white">
          {button}
        </button>
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <div className="bg-gray-500 w-full">
          <div className="text-5xl font-semibold text-white p-12 h-screen">
            Equipping senior adults with the confidence and skills to use a computer.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <Intro
            title="About SilverBytes"
            text="SilverBytes is an initiative in collaboration with Work Live Digital to
            provide essential computer literacy to senior adults. Our program offers a
            thoughtfully designed curriculum and an engaging interactive platform,
            tailored exclusively to empower senior adults as they embark on a journey to
            acquire and practice fundamental computer skills."
          />
          <Intro
            title="Our Vision"
            text="We believe that anyone, regardless of their background or expertise, can
            play a pivotal role in teaching computer skills to senior adults. Bridging
            the digital divide is a collective effort, and we aim to make it easy for
            individuals to organize classes and guide seniors in mastering the art of
            using a computer."
          />
          <Intro
            title="How to use SilverBytes"
            text="Are you someone looking to teach senior adults fundamental computer skills?"
          />

          <div className="text-text text-left w-1/2">
            <p className="text-pink text-2xl text-center font-semibold p-12">
              Method 1: Curriculum + SilverBytes Playground (Recommended)
            </p>
            <ol className="list-decimal">
              <li>
                View our foundation curriculum to have an overview of the content that
                can be covered with the senior adults.
              </li>
              <li>
                Request access from Work Live Digital to the foundation class slides.
              </li>
              <li>
                Read the curriculum guide to understand how to incorporate hands-on
                learning via SilverBytes Playground during and after lessons.
              </li>
              <li>You are ready to teach senior adults fundamental computer skills!</li>
            </ol>
            <p className="text-pink text-2xl text-center font-semibold p-12">
              Method 2: SilverBytes Playground
            </p>
            <ol className="list-decimal">
              <li>
                If you do not wish to go through a structured curriculum for teaching,
                you can also directly use SilverBytes Playground to encourage hands-on
                learning of fundamental computer skills for senior adults.
              </li>
              <li>
                Read the SilverBytes Playground guide to understand how to use it and
                what skills the activities aim to impart.
              </li>
            </ol>
          </div>
          <Intro title="Useful Resources" />
          <Resource
            image={Logo}
            title="SilverBytes Playground"
            text="Placeholder text to explain what the curriculum guide does and provide some context to give information about it."
            button="Go!"
          />
          <Resource
            image={Logo}
            title="Curriculum Guide"
            text="Placeholder text to explain what the curriculum guide does and provide some context to give information about it."
            button="Download"
          />
          <Resource
            image={Logo}
            title="Playground Guide"
            text="Placeholder text to explain what the curriculum guide does and provide some context to give information about it."
            button="View"
          />
          <Intro title="We are supported by" />
          <Image src={WLDLogo} alt="Work Live Digital Logo" className="w-48" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
