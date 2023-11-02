import WLDLogo from "@/assets/WLDLogo.png";
import { Intro } from "@/common/Intro";
import { Resource } from "@/common/Resource";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import Image from "next/image";
import PartnerLogo from "public/assets/home/partner-logo.png";
import ResourceLogo from "public/assets/home/resource-logo.png";
import ResourceIcon1 from "public/assets/home/resource_icon_1.png";
import ResourceIcon2 from "public/assets/home/resource_icon_2.png";
import ResourceIcon3 from "public/assets/home/resource_icon_3.png";
import ResourceIcon4 from "public/assets/home/resource_icon_4.png";
import VisionLogo from "public/assets/home/vision-logo.png";
import { useEffect, useState } from "react";

//Landing page
const Landing = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Layout>
      <div>
        {/* Video */}
        {isClient && (
          <div className="video-container" id="landing-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-80vh w-full object-cover pointer-events-none"
            >
              <source src="/assets/home/landing-video.mp4" type="video/mp4" />
            </video>
          </div>
        )}
        <div className="flex flex-col justify-center items-center text-center mt-8 bg-white mx-8 lg:mx-16 xl:mx-48 2xl:mx-64">
          {/* About Us */}
          <Intro
            title="About Us"
            text="Computer Easy Lah! is an initiative in collaboration with Work Live Digital to provide essential computer literacy to senior adults. We offer a thoughtfully designed interactive platform known as The Playground, which is tailored exclusively to empower senior adults as they embark on a journey to acquire fundamental computer skills."
          />
          <Image src={PartnerLogo} alt="" className="w-1/2 md:w-1/5 lg:w-1/4 m-12" />
          <Intro
            title="Our Vision"
            text="We envision to create a learning platform that would support participants in their learning during and after the curriculum of computer classes. It is a tool complementary to the computer classes, providing useful resources and hands-on activities that can complement and reinforce what was taught during the classes."
          />
          <Image src={VisionLogo} alt="" className="w-1/2 md:w-1/5 lg:w-1/4 m-12" />

          <Intro
            title="Our Resources"
            text="We have created a suite of resources to support the learning of senior adults, and to help them gain confidence in using a computer. These resources are available for free download and use. "
          />

          {/* Resources */}
          <Image
            src={ResourceLogo}
            alt=""
            className="w-full mt-8 sm:w-1/2 mb-12 lg:mb-8"
          />

          <div className="flex flex-col space-y-16 lg:justify-center lg:items-center mt-8">
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
              text="A guide that outlines the curriculum of Work Live Digital's foundation computer classes, and how to best incorporate The Playground with the lessons."
              button="Download"
              link="/resources/curriculum-guide.pdf"
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
          </div>

          {/* Video
           <div className="video-container mt-16 flex flex-col justify-center items-center">
          <Intro
            title="Promotional Video"
            text=""
          />
            <video controls className="xl:w-3/4">
              <source src="/assets/home/landing-video.mp4" type="video/mp4" />
            </video>
          </div> */}

          <Title text="We are supported by" className="mt-20" />
          <Image src={WLDLogo} alt="Work Live Digital Logo" className="w-48" />
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
