import Text from "@/common/Text";
import Title from "@/common/Title";
import Layout from "@/components/layout";
import Head from "next/head";
import { Resource } from "@/common/Resource";
import { useEffect } from "react";
import Image from "next/image";
import ResourceLogo from "public/assets/home/resource-logo.png";
import ResourceIcon1 from "public/assets/home/resource_icon_1.png";
import ResourceIcon2 from "public/assets/home/resource_icon_2.png";
import ResourceIcon3 from "public/assets/home/resource_icon_3.png";
import ResourceIcon4 from "public/assets/home/resource_icon_4.png";
import ResourceIcon5 from "public/assets/home/resource_icon_5.png";

//Resources page
const Resources = () => {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName("BODY")[0];
    bodyElement.classList.remove('overflow-hidden');

  }, []);

  return (
    <div>
      <Head>
        <title>Resources</title>
      </Head>

      <Layout>
        <div className="overflow-x-hidden mb-32">
          <div className="flex flex-col items-center text-center bg-white lg:mx-16 xl:mx-16 2xl:mx-48">
            <div className="mx-auto w-11/12 mb-8 md:mb-12">
              <Title
                className="p-4 md:p-12 items-center"
                text="Our Resources"
              />
              <Text
                className=""
                content="The following resources are free for you to use to enhance the learning experience of your participants of computer workshops."
              />
            </div>

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
              text="Check out our flagship interactive platform filled with hands-on activities, quizzes and videos to enrich the learning of senior adults."
              button="Go!"
              link="/"
            />
            <Resource
              image={ResourceIcon2}
              title="Curriculum Guide"
              text="Want to start your own computer workshops for senior adults? Consider Work Live Digital’s Foundation Class curriculum and learn how to weave The Playground into it."
              button="Download"
              link="/resources/curriculum-guide.pdf"
            />
            <Resource
              image={ResourceIcon3}
              title="Playground Guide"
              text="Interested in the details of The Playground? Check out this guide to understand what each activity is designed for."
              button="Download"
              link="/resources/playground-guide.pdf"
            />
            <Resource
              image={ResourceIcon4}
              title="Video Playlist"
              text="The educational videos in The Playground are publicly available on our YouTube channel. Feel free to browse through them!"
              button="Watch"
              link="https://www.youtube.com/@ComputerEasyLah"
            />
            <Resource
              image={ResourceIcon5}
              title="The Printables"
              text="Printable cards for participants to manage their computer journeys during and after classes."
              button="Download"
              link="/resources/printables.pdf"
            />




          </div>

      

           
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Resources;
