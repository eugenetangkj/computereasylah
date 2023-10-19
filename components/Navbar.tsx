import Image from "next/image";
import Logo from "@/assets/Logo.png";
import WhiteLogo from "@/assets/logo_white_font.png";
import BlackLogo from "@/assets/logo_black_font.png";
import NextLink from "next/link";
import { navLinks } from "@/constants";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-dark-blue h-20">
      <div className="">
        <NextLink href="/">
          <Image src={WhiteLogo} alt="Logo" className="w-48 ml-10" />
        </NextLink>
      </div>
      <div className="text-white mr-10">
        <ul className="list-none hidden sm:flex  flex-row gap-x-5 md:gap-x-10 items-center font-semibold text-xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NextLink href={`/${link.id}`}>
                {link.id === "playground" ? (
                  <button className="bg-rose-500 rounded-3xl h-12 w-36">
                    <span>{link.title}</span>
                  </button>
                ) : (
                  link.title
                )}
              </NextLink>
            </li>
          ))}
        </ul>
        <div className="sm:hidden">
          {/* Mobile menu button */}
          <button className="text-white">
            <AiOutlineMenu
              className="w-8 h-8 mt-2"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } bg-dark-blue absolute top-20 right-0 mx-4 my-2  z-10 rounded-xl`}
            >
              <ul className="list-none p-4 flex justify-end items-start flex-1 flex-col text-lg">
                {navLinks.map((link) => (
                  <li key={link.id} className="p-1 hover:text-light-blue">
                    <NextLink href={`/${link.id}`}>{link.title}</NextLink>
                  </li>
                ))}
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
