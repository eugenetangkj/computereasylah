import Image from "next/image";
import Text from "./Text";
import NextLink from "next/link";

export const Resource = (props: any) => {
    const { image, title, text, button, link } = props;
  
    return (
      <div className="flex flex-col space-y-8 lg:flex-row justify-center items-center lg:mx-28 lg:space-x-16"> 
        <div className="text-center lg:text-left w-full">
          <div className="font-gaegu font-bold text-3xl sm:text-4xl md:text-5xl">
            {title}
          </div>
          <Text className="my-4 text-pale-gray-500 text-lg" content={text} />
          <NextLink href={link}>
            <button className="w-40 h-16 bg-trust-blue-500 rounded-3xl text-black font-semibold text-xl hover:bg-trust-blue-hover duration-300">
              {button}
            </button>
          </NextLink>
        </div>

        <Image
          src={image}
          alt={title}
          className="sm:w-1/2 lg:w-1/4"
        />
      </div>
    );
  };
  