import WLDLogo from "@/assets/WLDLogo.png";
import Text from "@/common/Text";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import Image from "next/image";
import NextLink from "next/link";
import PartnerLogo from "public/assets/home/partner-logo.png";
import ResourceLogo from "public/assets/home/resource-logo.png";
import ResourceIcon1 from "public/assets/home/resource_icon_1.png";
import ResourceIcon2 from "public/assets/home/resource_icon_2.png";
import ResourceIcon3 from "public/assets/home/resource_icon_3.png";
import ResourceIcon4 from "public/assets/home/resource_icon_4.png";
import VisionLogo from "public/assets/home/vision-logo.png";

const Intro = (props: any) => {
  const { title, text } = props;
  return (
    <div className="flex flex-col sm:mx-auto w-11/12 sm:w-5/6 md:w-2/3 text-center items-center">
      <Title text={title} className="py-6 sm:py-8 w-full" />
      <Text content={text} className="text-pale-gray-500" />
    </div>
  );
};

const Resource = (props: any) => {
  const { image, title, text, button, link } = props;

  return (
    <div className="flex flex-col sm:flex-row justify-between mb-12">
      <Image
        src={image}
        alt={title}
        className="h-36 w-auto mx-auto sm:ml-auto sm:mr-20 hidden sm:block"
      />
      <div className="text-center sm:text-left w-full sm:w-1/3 md:w-1/2 sm:mx-12">
        <div className="font-gaegu font-bold text-3xl sm:text-4xl md:text-5xl">
          {title}
        </div>
        <Text className="my-4 text-pale-gray-500" content={text} />
        <NextLink href={link}>
          <button className="w-40 h-12 bg-trust-blue-500 rounded-3xl text-black font-semibold text-xl hover:bg-trust-blue-hover">
            {button}
          </button>
        </NextLink>
      </div>
      <Image src={image} alt={title} className="h-36 w-auto mx-auto sm:hidden my-10" />
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
            title="About Us"
            text="Computer Easy Lah! is an initiative in collaboration with Work Live Digital to provide essential computer literacy to senior adults. We offer a thoughtfully designed interactive platform known as The Playground, which is tailored exclusively to empower senior adults as they embark on a journey to acquire fundamental computer skills."
          />
          <Image src={PartnerLogo} alt="" className="w-1/2 md:w-1/6 m-12" />
          <Intro
            title="Our Vision"
            text="We envision to create a learning platform that would support participants in their learning during and after the curriculum of computer classes. It is a tool complementary to the computer classes, providing useful resources and hands-on activities that can complement and reinforce what was taught during the classes."
          />
          <Image src={VisionLogo} alt="" className="w-1/2 md:w-1/6 m-12" />

          <Intro
            title="Our Resources"
            text="We have created a suite of resources to support the learning of senior adults, and to help them gain confidence in using a computer. These resources are available for free download and use. "
          />

          <Image src={ResourceLogo} alt="" className="w-4/5 sm:w-1/2 mb-12" />

          <Resource
            image={ResourceIcon1}
            title="The Playground"
            text="An interactive platform filled with hands-on activities, quizzes and videos to enrich the learning of senior adults."
            button="Go!"
            link="/playground"
          />
          <Resource
            image={ResourceIcon2}
            title="Curriculum Guide"
            text="A guide that outlines the curriculum of Work Live Digital’s foundation computer classes, and how to best incorporate The Playground with the lessons."
            button="Download"
            link="/"
          />
          <Resource
            image={ResourceIcon3}
            title="Playground Guide"
            text="A guide that introduces the different features of The Playground, and how to use each of them for the best learning experience."
            button="Download"
            link="/"
          />
          <Resource
            image={ResourceIcon4}
            title="Video Playlist"
            text="The educational videos in The Playground are publicly available on our YouTube channel. Feel free to browse through them!"
            button="Watch"
            link="/"
          />
          <Title text="We are supported by" className="mt-20"/>
          <Image src={WLDLogo} alt="Work Live Digital Logo" className="w-48" />
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
