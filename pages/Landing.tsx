import Navbar from "@/components/Navbar";
import Logo from "@/assets/Logo.png";
import WLDLogo from "@/assets/WLDLogo.png";
import Image from "next/image";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import ResourceIcon1 from "@/assets/resource_icon_1.png";
import ResourceIcon2 from "@/assets/resource_icon_2.png";
import ResourceIcon3 from "@/assets/resource_icon_3.png";
import NextLink from "next/link";

const Intro = (props: any) => {
  const { title, text } = props;
  return (
    <div className="mx-auto w-1/2">
      <p className="text-4xl font-semibold text-trust-blue-900 p-12">{title}</p>
      <p className="text-xl text-gray-600 ">{text}</p>
    </div>
  );
};

const Resource = (props: any) => {
  const { image, title, text, button, link } = props;

  return (
    <div className="flex justify-center mb-12">
      <div className="w-1/4">
        <Image src={image} alt={title} className="h-32 w-auto" />
      </div>

      <div className="text-left w-1/3">
        <h2 className="text-3xl text-compassion-pink-900 font-bold">{title}</h2>
        <p className="text-gray-600 my-4 text-xl">{text}</p>
        <NextLink href={link}>
          <button className="w-40 h-12 bg-trust-blue-900 rounded-3xl text-white font-semibold text-xl">
            {button}
          </button>
        </NextLink>
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex flex-col justify-center items-center text-center bg-white w-screen overflow-y-hidden">
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
          <p className="text-compassion-pink-900 text-3xl text-center font-semibold p-12">
            Method 1: Curriculum + SilverBytes Playground (Recommended)
          </p>
          <ol className="list-decimal space-y-4 text-gray-600 text-xl">
            <li>
              View our foundation{" "}
              <NextLink href="#">
                <span className="underline text-blue-500">curriculum</span>
              </NextLink>{" "}
              to have an overview of the content that can be covered with the
              senior adults.
            </li>
            <li>
              <a className="underline text-blue-500" href="#">
                Request access
              </a>{" "}
              from Work Live Digital to the foundation class slides.
            </li>
            <li>
              Read the{" "}
              <NextLink href="#">
                <span className="underline text-blue-500">
                  curriculum guide
                </span>
              </NextLink>{" "}
              to understand how to incorporate hands-on learning via{" "}
              <NextLink href="/playground">
                <span className="underline text-blue-500">
                  SilverBytes Playground
                </span>
              </NextLink>{" "}
              during and after lessons.
            </li>
            <li>
              You are ready to teach senior adults fundamental computer skills!
            </li>
          </ol>
          <p className="text-compassion-pink-900 text-3xl text-center font-semibold p-12">
            Method 2: SilverBytes Playground
          </p>
          <ol className="list-decimal space-y-4 text-gray-600 text-xl">
            <li>
              If you do not wish to go through a structured curriculum for
              teaching, you can also directly use SilverBytes Playground to
              encourage hands-on learning of fundamental computer skills for
              senior adults.
            </li>
            <li>
              Read the{" "}
              <NextLink href="/playground">
                <span className="underline text-blue-500">
                  SilverBytes Playground{" "}
                </span>
              </NextLink>{" "}
              guide to understand how to use it and what skills the activities
              aim to impart.
            </li>
          </ol>
        </div>
        <Intro title="Useful Resources" />
        <Resource
          image={ResourceIcon1}
          title="SilverBytes Playground"
          text="Placeholder text to explain what the curriculum guide does and provide some context to give information about it."
          button="Go!"
          link="/playground"
        />
        <Resource
          image={ResourceIcon2}
          title="Curriculum Guide"
          text="Placeholder text to explain what the curriculum guide does and provide some context to give information about it."
          button="Download"
          link="/"
        />
        <Resource
          image={ResourceIcon3}
          title="Playground Guide"
          text="Placeholder text to explain what the curriculum guide does and provide some context to give information about it."
          button="View"
          link="/"
        />
        <p className="text-4xl font-semibold text-trust-blue-900 pt-12">
          We are supported by
        </p>
        <Image src={WLDLogo} alt="Work Live Digital Logo" className="w-48" />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
