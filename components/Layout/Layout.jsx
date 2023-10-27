import React from "react";
import Header from "./Header/Header";
import Head from "next/head";
import Footer from "./Footer/Footer";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Layout = ({ children }) => {
  return (
    <main className={`${poppins.className} h-screen flex flex-col`}>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
