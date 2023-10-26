import Title from "@/common/Title";
import Text from "@/common/Text";
import NextLink from "next/link";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import { curriculumInfo } from "@/constants";
import Layout from "@/components/layout";

interface CurriculumProps {
  // Define your props if needed
}

const Curriculum: React.FC<CurriculumProps> = (props) => {
  // You can use the props and state here

  return (
    <Layout>
      <div className="bg-white overflow-x-hidden">
        <div className="flex flex-col items-center text-center bg-white w-screen">
          <div className="mx-auto w-11/12 md:w-1/2 mb-8 md:mb-24">
            <Title
              className="p-4 md:p-12 text-sky-900 items-center"
              text="Curriculum"
            />
            <Text
              className=""
              content="Our Foundation Class Curriculum, designed by Work Live Digital, is specifically tailored to instill essential computer skills in senior adults, starting from the very basics. We believe in empowering seniors to confidently navigate the digital world, and our curriculum serves as the starting point on their digital journey."
            />
            <NextLink href="/slides">
              <button className="w-32 md:w-44 h-12 md:h-16 bg-sky-900 rounded-full text-white font-semibold text-sm md:text-xl mt-4 md:mt-8 hover:bg-sky-600">
                Request Slides
              </button>
            </NextLink>
          </div>

          <div className="w-5/6 sm:w-1/3 md:w-2/3">
            {/* {curriculumInfo.map((topic, index) => {
              // Format the index with leading zeros
              const formattedIndex = (index + 1).toString().padStart(2, "0");
              const formattedTitle = `${formattedIndex} ${topic.title}`;

              return (
                <Topic
                  key={index}
                  title={formattedTitle}
                  subtitle={topic.subtitle}
                  text={topic.text}
                  imageSrc={Logo}
                  imageAlt={topic.title}
                />
              );
            })} */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Curriculum;
