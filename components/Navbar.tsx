import Image from "next/image";
import Logo from "@/assets/Logo.png";
import WhiteLogo from "@/assets/logo_white_font.png";
import BlackLogo from "@/assets/logo_black_font.png";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex select-none">
        <Image src={WhiteLogo} alt="Logo" className="w-48 h-11 m-1 mt-[1px]" />
      </div>
      <div className="text-white">
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          <li>
            <NextLink href="">Home</NextLink>
          </li>
          <li>
            <NextLink href="">Impact</NextLink>
          </li>
          <li>
            <NextLink href="">Curriculum</NextLink>
          </li>
          <li>
            <NextLink href="">Slides</NextLink>
          </li>
          <li>
            <NextLink href="/playground">
              <button className="bg-rose-500 rounded-3xl h-10 w-32">
                <span>Playground</span>
              </button>
            </NextLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
