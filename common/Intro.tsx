import Title from "./Title";
import Text from "./Text";

export const Intro = (props: any) => {
    const { title, text } = props;
    return (
      <div className="flex flex-col sm:mx-auto w-11/12 sm:w-5/6 text-center items-center">
        <Title text={title} className="py-6 sm:py-8" />
        <Text content={text} className="text-lg text-pale-gray-500" />
      </div>
    );
  };