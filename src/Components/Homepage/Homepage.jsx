import React from "react";
import './Homepage.css';
import Hero from "../Hero/Hero";
import Brandlist from "../Brandlist/Brandlist";
import Products from "../Products/Products";
import Brows_producr from "../Brows_producr/Brows_producr";
import Costomercommentes from "../Costomercomments/Costomercomments";
import Subscribr from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";

const Homepage=()=>{
 return(
    <div>
    <Hero/>
    <Brandlist/>
    <Products/>
    <Brows_producr/>
    <Costomercommentes/>
    <Subscribr/>
  <Footer/>
    </div>
 )
}
export default Homepage 