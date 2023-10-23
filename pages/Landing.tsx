import Logo from "@/assets/Logo.png";
import WLDLogo from "@/assets/WLDLogo.png";
import Image from "next/image";
import TeachingImage from "@/assets/teaching_image.png";
import ResourceIcon1 from "@/assets/resource_icon_1.png";
import ResourceIcon2 from "@/assets/resource_icon_2.png";
import ResourceIcon3 from "@/assets/resource_icon_3.png";
import NextLink from "next/link";
import Title from "@/common/Title";
import Text from "@/common/Text";
import Layout from "@/components/layout";

const Intro = (props: any) => {
  const { title, text } = props;
  return (
    <div className="flex flex-col mx- sm:mx-auto w-full sm:w-1/2 text-center items-center">
      <Title className="py-8 sm:py-12 text-sky-900 w-fit" text={title} />
      <Text content={text} />
    </div>
  );
};

const Resource = (props: any) => {
  const { image, title, text, button, link } = props;

  return (
    <div className="flex flex-col sm:flex-row justify-between mb-12">
      <div className="w-1/6 mx-auto">
        <Image src={image} alt={title} className="h-32 w-auto " />
      </div>

      <div className="text-center sm:text-left w-full sm:w-1/3 md:w-1/2 ">
        <Title text={title} className="text-compassion-pink-900" />
        <Text className="my-4" content={text} />
        <NextLink href={link}>
          <button className="w-40 h-12 bg-trust-blue-900 rounded-3xl text-white font-semibold text-xl">
            {button}
          </button>
        </NextLink>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <></>
    // <div className="relative bg-cover bg-teaching-image h-screen w-full overflow-x-hidden">
    //   <div className="absolute bottom-0 w-full text-5xl font-semibold text-white p-24 text-center bg-black bg-opacity-50">
    //     Equipping senior adults with the confidence and skills to use a computer.
    //   </div>
    // </div>
  );
};

const Landing = () => {
  return (
    <Layout>
      <div>
        <Hero />
        <div className="flex flex-col justify-center items-center text-center bg-white w-screen overflow-x-auto">
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

          <div className="text-center w-4/5 sm:w-1/2">
            <Title
              text="Method 1: Curriculum + SilverBytes Playground (Recommended)"
              className="text-compassion-pink-900  mt-8 sm:mt-12"
            />
            <Text className="text-left mt-4 sm:mt-8">
              <ol className="list-decimal space-y-4">
                <li>
                  View our foundation{" "}
                  <NextLink href="#">
                    <span className="underline text-blue-500">curriculum</span>
                  </NextLink>{" "}
                  to have an overview of the content that can be covered with the senior
                  adults.
                </li>
                <li>
                  <NextLink href="slides">
                    <span className="underline text-blue-500">Request access</span>
                  </NextLink>{" "}
                  from Work Live Digital to the foundation class slides.
                </li>
                <li>
                  Read the{" "}
                  <NextLink href="#">
                    <span className="underline text-blue-500">curriculum guide</span>
                  </NextLink>{" "}
                  to understand how to incorporate hands-on learning via{" "}
                  <NextLink className="underline text-blue-500" href="/playground">
                    SilverBytes Playground
                  </NextLink>{" "}
                  during and after lessons.
                </li>
                <li>
                  You are ready to teach senior adults fundamental computer skills!
                </li>
              </ol>
            </Text>

            <Title
              text="Method 2: SilverBytes Playground"
              className="text-compassion-pink-900 mt-8 sm:mt-12"
            />
            <Text className="text-left mt-4 sm:mt-8">
              <ol className="list-decimal space-y-4">
                <li>
                  If you do not wish to go through a structured curriculum for teaching,
                  you can also directly use SilverBytes Playground to encourage hands-on
                  learning of fundamental computer skills for senior adults.
                </li>
                <li>
                  Read the{" "}
                  <NextLink className="underline text-blue-500" href="/playground">
                    SilverBytes Playground{" "}
                  </NextLink>{" "}
                  guide to understand how to use it and what skills the activities aim
                  to impart.
                </li>
              </ol>
            </Text>
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
          <Title text="We are supported by" />
          <Image src={WLDLogo} alt="Work Live Digital Logo" className="w-48" />
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
