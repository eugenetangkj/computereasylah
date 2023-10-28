import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";

type LayoutProps = {
  children: ReactNode;
};


const Layout = ({ children }: LayoutProps) => {
  // Animation
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
      // Set isActive to true after a short delay when the component is mounted
      const timer = setTimeout(() => {
      setIsActive(true);
      }, 100); // Adjust the delay as needed

      return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);


  return (
    <div className={`opacity-0 transition-opacity ${ isActive ? "opacity-100" : "" } duration-1000`}>
      <Navbar />
      <main style={{ marginTop: '4.75rem' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
