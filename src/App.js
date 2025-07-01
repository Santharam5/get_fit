import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
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
        <Adminpanel />
        <Contact />
      </BrowserRouter>
    </>
  );
};
export default App;
