import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayOut() {
  return <div>
    <div>
        <Navbar/>
       
    </div>

    <Outlet/>
    <Footer/>
  </div>;
}

export default MainLayOut;
