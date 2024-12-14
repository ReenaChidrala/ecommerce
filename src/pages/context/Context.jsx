import React, { createContext, useEffect, useState } from "react";

export const CartContext=createContext();
export const Context=({children})=>{
 const [cart,setCart]=useState([]);
 
   const addToCart = (product) => {
    setCart((prevcart) => {
       const existingProductIndex=prevcart.findIndex((item)=>item.id=== product.id && item.size===product.size    );
       let updatedCart;
       if(existingProductIndex!==-1){
        updatedCart=[...prevcart];
        updatedCart[existingProductIndex].quantity+=product.quantity;
       }else{
        updatedCart = [...prevcart, product];
       }
      
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  useEffect(() => {
    let savedCart;  
    try{
        savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }catch (error){
      savedCart=[]
    }
    
    
  }, []);

 return(
<CartContext.Provider value={{cart,setCart,addToCart}}>
    {children}
</CartContext.Provider>
 )
}