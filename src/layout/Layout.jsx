import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Menu";
import Footer from "../components/Footer";
import ToTheTop from "../hooks/ToTheTop";
import Cursor from "../components/Cursor/Cursor";
import { MouseContext } from "../context/MouseContext";
import ScrollToTop from "../components/ScrollToTop";
import OrientationLock from "../hooks/OrientationLock";

const Layout = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  

  return (
    <div className="h-full max-w-[2000px] mx-auto ">
      <OrientationLock />
      <Cursor />
      <Header />
      <Outlet />
      <Footer />
      <ToTheTop />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
