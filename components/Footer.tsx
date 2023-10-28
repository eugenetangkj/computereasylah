import { BiLogoGithub, BiLogoYoutube} from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full overflow-x-auto">
      <div className="flex justify-between items-center bg-gray-200 px-4 sm:px-8 py-8">
        <h2 className='font-gaegu text-xl sm:text-2xl md:text-3xl font-bold'>Computer, Easy Lah!</h2>
        <div className="flex items-center space-x-4 sm:space-x-8">
          {/* Email logo */}
          <a href="mailto:computereasylah@gmail.com">
            <MdEmail className='text-4xl lg:text-5xl hover:text-trust-blue-hover cursor-pointer duration-300' />
          </a>

          {/* YouTube logo */}
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <BiLogoYoutube className='text-4xl lg:text-5xl hover:text-trust-blue-hover cursor-pointer duration-300' />
          </a>

          {/* Github logo */}
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <BiLogoGithub className='text-4xl lg:text-5xl hover:text-trust-blue-hover cursor-pointer duration-300' />
          </a>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
