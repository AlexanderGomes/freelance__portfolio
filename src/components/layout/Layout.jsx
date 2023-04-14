import React from "react";
import { Footer, Navbar } from "..";
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout__main">
      <Navbar />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
