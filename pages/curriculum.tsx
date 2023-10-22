import Title from "@/common/Title";
import Text from "@/common/Text";
import NextLink from "next/link";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import { curriculumInfo } from "@/constants";

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
    <div className="mb-12">
      <div className="flex flex-col text-left">
        <Title text={props.title} className="text-sky-900" />
        <p className="text-sky-600 text-base">{props.subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-between ">
          <Text className="w-full sm:w-1/3 md:w-2/3" content={props.text} />
          <div className="w-full sm:w-1/4 flex justify-center">
            <Image
              src={props.imageSrc}
              alt={props.imageAlt}
              className="h-32 w-32 mx-auto "
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
      <div className="flex flex-col items-center text-center bg-white w-screen">
        <div className="mx-auto w-11/12 md:w-1/2 mb-8 md:mb-24">
          <Title className="p-4 md:p-12 text-sky-900 items-center" text="Curriculum" />
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
          {curriculumInfo.map((topic, index) => {
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
          })}
        </div>
      </div>
    </div>
  );

};

export default Curriculum;
