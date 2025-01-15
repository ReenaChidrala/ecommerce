import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavFooterWrapper from "./Components/nav-footer-wrapper/nav-footer-wrapper.component.jsx"
import Home from './pages/home/home';
import ProductDetails from "./pages/product-details/ProductDetails.jsx"
import CartListing from "./pages/cart-listing/CartListing.jsx";
import { Context } from "./pages/context/Context.jsx";
import ProductListing from "./pages/product-listing/product-listing.jsx";

function App() {


  const navFooter=[{
  id:1,
  path:"/",
  componenet:<Home/>
  },{
    id:2,
    path:"/product/:productId",
    componenet:<ProductDetails/>
  },{
    id:3,
   path:"/cart",
   
    componenet:<CartListing/>
  },{
    id:4,
    path:"/productlist",
    componenet:<ProductListing/>
  }
]
  return (

    <BrowserRouter>
      <Routes>
        {
          navFooter.map((ele)=> <Route key={ele.id} path={ele.path} element={<Context><NavFooterWrapper>{ele.componenet}</NavFooterWrapper></Context>}/>)
        }
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
