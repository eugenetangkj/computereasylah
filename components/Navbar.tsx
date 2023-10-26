import { navLinks } from "@/constants";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import LogoIcon from "public/assets/home/logo-icon.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center bg-transparent h-20 font-nunito">
      <NextLink href="/">
        <Image src={LogoIcon} alt="Logo" className="ml-10 w-28 sm:w-32" />
      </NextLink>
      <div className="text-black mr-10">
        <ul className="list-none hidden sm:flex flex-row gap-x-5 sm:gap-x-5 md:gap-x-10 items-center font-semibold sm:text-lg md:text-xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.id === "playground" ? (
                <a href={`/${link.id}`} target="_blank">
                  <button className="bg-trust-blue-500 rounded-3xl sm:h-8 sm:w-32 md:h-12 md:w-36 text-black hover:bg-trust-blue-hover">
                    <span>{link.title}</span>
                  </button>
                </a>
              ) : (
                <NextLink
                  href={`/${link.id}`}
                  className={
                    router.pathname == "/" + link.id ? "text-trust-blue-900" : ""
                  }
                >
                  {link.title}
                </NextLink>
              )}
            </li>
          ))}
        </ul>
        <div className="sm:hidden">
          {/* Mobile menu button */}
          <button className="text-black">
            <AiOutlineMenu
              className="w-8 h-8 mt-2"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } bg-sky-900 absolute top-20 right-0 mx-4 my-2  z-10 rounded-xl`}
            >
              <ul className="list-none p-4 flex flex-col items-start  text-lg text-white">
                {navLinks.map((link) => (
                  <li key={link.id} className="p-1 hover:text-sky-500">
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
