import Image from "next/image";
import Logo from "@/assets/Logo.png";
import WhiteLogo from "@/assets/logo_white_font.png";
import BlackLogo from "@/assets/logo_black_font.png";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-trust-blue-900 h-20">
      <div className="">
        <NextLink href="">
          <img src={WhiteLogo} alt="Logo" className="w-48 ml-10" />
        </NextLink>
      </div>
      <div className="text-white mr-10">
        <ul className="list-none flex flex-row gap-x-10 items-center font-semibold text-xl">
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
              <button className="bg-rose-500 rounded-3xl h-12 w-36">
                <span>Playground</span>
              </button>
            </NextLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
