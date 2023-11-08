import Image from "next/image";
import Text from "./Text";
import NextLink from "next/link";


export const Resource = (props: any) => {
    const { image, title, text, button, link } = props;
  
    return (
      <div className="flex flex-col space-y-8 lg:flex-row justify-center items-center lg:space-x-16 w-full"> 
        <div className="text-center lg:text-left w-full lg:ml-28 xl:ml-36">
          <div className="font-nunito font-bold text-3xl sm:text-4xl lg:text-4xl">
            {title}
          </div>
          <Text className="my-4 text-pale-gray-500 text-lg" content={text} />
          <NextLink href={ link } target="_blank">
            <button className="w-36 sm:w-48 py-4 bg-trust-blue-500 rounded-3xl text-black font-semibold text-xl hover:bg-trust-blue-hover duration-300">
              {button}
            </button>
          </NextLink>
        </div>

        <Image
          src={image}
          alt={title}
          style={{width: '300px'}}
          className="lg:mr-28 xl:mr-36"
        />
      </div>
    );
  };
  