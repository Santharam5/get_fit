import React from "react";
import USeCarousel from "./carousel";
import Getstart from "./Getstartsec";
import Fitness from "./fitness_instute";
import Product from "./products";
import Equipment from "./equipment";
import Bmicalc from "./bmicalc";
import Contact from "./contact_us";
import Footer from "./footer";

const HomePage=()=>{
return(<><USeCarousel />
        <Getstart id="Getstart" />
        <Fitness id="fitness"/>
        <Product id="Product"/>
        <Equipment id="equip"/>
        <Bmicalc id="Bmical"/>
        <Contact id="contactus" />
        <Footer />

</>)
}
export default HomePage;