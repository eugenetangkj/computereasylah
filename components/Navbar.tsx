import { navLinks } from "@/constants";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import LogoIcon from "public/assets/home/logo-icon.png";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const [prevScrollPos, setPrevScrollPos] = useState(0);


  //Handle scroll effect for navbar, appearing when scroll upwards
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbarElement = document.getElementById("navbar");
  //     const currentScrollPos = window.scrollY;
  //     const isScrolledUp = prevScrollPos > currentScrollPos;

  //     if (isScrolledUp && navbarElement != null) {
  //       navbarElement.style.top = "0";

  //     } else if (! isScrolledUp && navbarElement != null) {
  //       navbarElement.style.top = "-200px";
  //     }

  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  // useEffect(() => {
  //   const bodyElement = document.getElementsByTagName("BODY")[0];
  //   bodyElement.classList.remove('overflow-hidden');

  // }, [])




//Runs when hamburger menu is pressed on
function openMenu() {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");
    const hamburgerMenuItems = document.getElementById("hamburger-menu-items");
    const bodyElement = document.getElementsByTagName("BODY")[0];
    const aboutUsElement = document.getElementById("about-us");

  
    hamburgerIcon?.classList.toggle("hidden");
    closeIcon?.classList.toggle("hidden");
    hamburgerMenuItems?.classList.add('w-[100%]');
    aboutUsElement?.classList.remove('relative');
    
    bodyElement?.classList.add('overflow-hidden');
    // introHeader?.classList.remove('z-10');
    // introSubHeader?.classList.remove('z-10');
}

//Runs when cross button is pressed on
function closeMenu() {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");
    const hamburgerMenuItems = document.getElementById("hamburger-menu-items");
    const bodyElement = document.getElementsByTagName("BODY")[0];

    hamburgerIcon?.classList.toggle("hidden");
    closeIcon?.classList.toggle("hidden");
    hamburgerMenuItems?.classList.remove('w-[100%]');
    bodyElement.classList.remove('overflow-hidden');
    // introHeader?.classList.add('z-10');
    // introSubHeader?.classList.add('z-10');
}


//If rise above custom navbar breakpoint, close menu
const breakPoint = 890;
const [screenWidth, setScreenWidth] = useState(0);

useEffect(() => {
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  // Clean up the event listener on unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [screenWidth]);

useEffect(() => {
    if (screenWidth >= breakPoint) {
      if (document.getElementById("hamburger-icon")?.classList.contains('hidden')) {
        //Menu is currently open. Close it.
        closeMenu();
      }
    }
}, [screenWidth]);













  return (
    <nav id="navbar" className="fixed top-0 flex justify-between items-center bg-white h-20 font-nunito w-full duration-300 z-10">
      {/* Logo */}
      <NextLink href="/home" className='w-fit'>
        <Image src={LogoIcon} alt="Logo" className="ml-10 w-28 sm:w-32" />
      </NextLink>
      {/* Desktop menu items */}
      <div className="text-black mr-10">
        <ul className="list-none hidden navbar-custom:flex flex-row gap-x-10 items-center font-semibold navbar-custom:text-lg lg:text-xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.id === "" ? (
                <a href={`/`} target="_blank">
                  <button className="bg-trust-blue-500 rounded-full sm:h-8 sm:w-32 md:h-12 md:w-36 text-black hover:bg-trust-blue-hover duration-300">
                    <span>{link.title}</span>
                  </button>
                </a>
              ) : (
                <NextLink
                  href={`/${link.id}`}
                  className={
                    router.pathname == "/" + link.id ? "text-trust-blue-900  hover:text-trust-blue-hover duration-300" : " hover:text-trust-blue-hover duration-300"
                  }
                >
                  {link.title}
                </NextLink>
              )}
            </li>
          ))}
        </ul>
        
      </div>


      {/* Hamburger menu */}
      <div id="hamburger-icon" className="mx-auto space-y-1 mr-5 navbar-custom:hidden cursor-pointer z-30 text-[40px] dark:text-white">
          <BiMenu onClick={ openMenu } name="menu"/>
      </div>

      {/* Items within hamburger menu */}
      <div id="hamburger-menu-items" className="flex flex-col justify-center items-center bg-trust-blue-500 dark:bg-black absolute left-0 top-0 w-0 h-[100vh] text-black dark:text-white font-semibold z-30 text-2xl duration-500 text-center overflow-hidden">
          <ul id="hamburger-menu-ul" className="space-y-10">
            {navLinks.map((link) => (
                    (link.id != "")
                    ?
                    <li key={link.id} className="p-1 hover:text-trust-blue-hover duration-300">
                      <NextLink href={`/${link.id}`}>{link.title}</NextLink>
                    </li>
                    :
                    <li key={link.id} className="p-1 hover:text-trust-blue-hover duration-300">
                      <a href={`/${link.id}`} target="_blank">
                        <button className="bg-trust-blue-900 rounded-full text-black hover:bg-trust-blue-hover px-8 py-4 duration-300">
                          <span>{link.title}</span>
                        </button>
                      </a>

                    </li>
                   

              ))}
          </ul>
      </div>

      {/* Close button  */}
      <div id="close-icon" className="hidden space-y-1 mr-5 md:mr-0 navbar-custom:hidden cursor-pointer z-30 text-[40px] text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 duration-500">
          <MdClose onClick= { closeMenu } name="close" />
      </div>

    </nav>
  );
};

export default Navbar;
