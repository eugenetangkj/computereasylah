import Image from "next/image";
import Text from "./Text";
import NextLink from "next/link";

export const Resource = (props: any) => {
    const { image, title, text, button, link } = props;
  
    return (
      <div className="flex flex-col space-y-8 sm:flex-row justify-center items-center"> 
        <div className="text-center sm:text-left w-full sm:w-1/3 md:w-1/2 sm:mx-12">
          <div className="font-gaegu font-bold text-3xl sm:text-4xl md:text-5xl">
            {title}
          </div>
          <Text className="my-4 text-pale-gray-500 text-lg" content={text} />
          <NextLink href={link}>
            <button className="w-40 h-12 bg-trust-blue-500 rounded-3xl text-black font-semibold text-xl hover:bg-trust-blue-hover duration-300">
              {button}
            </button>
          </NextLink>
        </div>

        <Image
          src={image}
          alt={title}
          className=""
        />
      </div>
    );
  };
  