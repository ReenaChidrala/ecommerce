import React from "react";
import './home.css';
import Hero from '../../Components/Hero/Hero'
import Brandlist from "../../Components/Brandlist/Brandlist";
import Products from "../../Components/Products/Products";
import Brows_producr from "../../Components/Brows_producr/Brows_producr";
import Costomercommentes from "../../Components/Costomercomments/Costomercomments";
import Subscribr from "../../Components/Subscribe/Subscribe";


const Home = () => {
   return (
      <div>
         <Hero />
         <Brandlist />
         <Products />
         <Brows_producr />
         <Costomercommentes />
      </div>
   )
}
export default Home;