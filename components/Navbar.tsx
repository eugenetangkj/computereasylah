import Image from "next/image";
import Logo from "@/assets/Logo.png";
import WhiteLogo from "@/assets/logo_white_font.png";
import BlackLogo from "@/assets/logo_black_font.png";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-dark-blue h-16">
      <div className="">
        <NextLink href="">
          <Image src={WhiteLogo} alt="Logo" className="w-48 h-11 m-1" />
        </NextLink>
      </div>
      <div className="text-white">
        <ul className="list-none flex flex-row gap-x-10 items-center font-semibold">
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
    </nav>
  );
};

export default Navbar;
