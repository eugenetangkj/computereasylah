import Image from "next/image";
import LogoIcon from "public/assets/home/logo-icon.png";

import Title from "@/common/Title";

const Footer = () => {
  return (
    <footer className="relative z-10 w-full overflow-x-auto">
      <div className="flex flex-col items-center bg-pale-gray-100 px-4 py-8">
        <div className="flex flex-col items-center select-none gap-x-12">
          <Image src={LogoIcon} alt="Logo" className="w-48" />
          <Title text="Computer, Easy Lah!" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
