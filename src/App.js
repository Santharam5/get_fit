import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./navbar";
import USeCarousel from "./carousel";
import Getstart from "./Getstartsec";
import Fitness from "./fitness_instute";
import Product from "./products";
import "./navbars.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./products.css";
import Equipment from "./equipment";
import Bmicalc from "./bmicalc";
import Footer from "./footer";
import Contact from "./contact_us";
import Adminpanel from "./admin_panel";
import Userlogin from "./userlogin";
import HomePage from "./HomePage";
import { MainLayout } from "./MainLayout";
import AdminLogin from "./adminlogin";
import { Navigate } from "react-router-dom";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false }); //once is onetime if true else it will false for many times
  }, []);
  return (
    <>
      <BrowserRouter>
        {/*<Navbars />
        <USeCarousel />
        <Getstart />
        <Fitness />
        <Product />
        <Equipment />
        <Bmicalc />
        <Contact />
        <Footer />
        <admin_panel/>*/}
        <Routes>
          
          <Route path="/get_fit" element={<Userlogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
         <Route path="/Adminpanel" element={<Adminpanel />} />


          <Route element={<MainLayout />}>
            <Route path="/get_fit_home" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
