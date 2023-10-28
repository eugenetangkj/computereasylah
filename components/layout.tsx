import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <Navbar />
      <main style={{ marginTop: '4.75rem' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
