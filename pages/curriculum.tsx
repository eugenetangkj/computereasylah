import Navbar from "@/components/Navbar";
import Title from "@/common/Title";
import Text from "@/common/Text";
import NextLink from "next/link";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import { curriculumInfo } from "@/constants";
import Footer from "@/components/Footer";

interface CurriculumProps {
  // Define your props if needed
}

interface TopicProps {
  title: string;
  subtitle: string;
  text: string;
  imageSrc: any;
  imageAlt: string;
}

const Topic: React.FC<TopicProps> = (props) => {
  return (
    <div className="grow">
      <div className="text-left w-full ">
        <Title text={props.title} className="text-sky-900" />
        <p className="">{props.subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-between ">
          <Text className="my-4 w-2/3" content={props.text} />
          <div className="w-1/4 ">
            <Image
              src={props.imageSrc}
              alt={props.imageAlt}
              className="h-32 w-32 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Curriculum: React.FC<CurriculumProps> = (props) => {
  // You can use the props and state here

  return (
    <div className="bg-white overflow-x-hidden">
      <div className="flex flex-col justify-center items-center text-center bg-white w-screen">
        <div className="mx-auto w-1/2 mb-24">
          <Title className="p-12 text-sky-900" text="Curriculum" />
          <Text content="Our Foundation Class Curriculum, designed by Work Live Digital, is specifically tailored to instill essential computer skills in senior adults, starting from the very basics. We believe in empowering seniors to confidently navigate the digital world, and our curriculum serves as the starting point on their digital journey." />
          <NextLink href="/slides">
            <button className="w-44 h-16 bg-sky-900 rounded-full text-white font-semibold text-xl mt-8 hover:bg-sky-600">
              Request Slides
            </button>
          </NextLink>
        </div>

        <div className="flex flex-col justify-center items-center w-1/2">
          {curriculumInfo.map((topic, index) => {
            // Use a function to format the index with leading zeros
            const formattedIndex = (index + 1).toString().padStart(2, "0");

            // Append the formatted index to the topic title
            const formattedTitle = `${formattedIndex} ${topic.title}`;

            return (
              <Topic
                key={index}
                title={formattedTitle}
                subtitle={topic.subtitle}
                text={topic.text}
                imageSrc={Logo}
                imageAlt={formattedTitle} // Use the formatted title as alt text
              />
            );
          })}
        </div>
      </div>
    </div>
  );

};

export default Curriculum;
