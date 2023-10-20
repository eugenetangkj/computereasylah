import Image from "next/image";
import Logo from "@/assets/logo_white_font.png";
import IconButton from "@/common/IconButton";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col items-left bg-trust-blue-900 px-10 py-16 ">
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row items-center select-none">
            <Image src={Logo} alt="SilverBytes Logo" className="w-48" />
          </div>
        </div>
        <div className="flex gap-x-4 m-4">
          <IconButton icon={<FaInstagram />} />
          <IconButton icon={<FaFacebookF />} />
          <IconButton icon={<FaTwitter />} />
          <IconButton icon={<FaTelegramPlane />} />
          <IconButton icon={<FaYoutube />} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
