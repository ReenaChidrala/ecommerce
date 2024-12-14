import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import './CartListing.css'
import { CartContext } from "../context/Context";
import { FaArrowRight } from "react-icons/fa6";
const CartListing = () => {

    const navigate = useNavigate();

    const { cart, setCart } = useContext(CartContext);
    const decremetQuality = (id, size) => {
        const updateQuantity = cart.map((item) => {
            if (item.id === id && item.size === size && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item;
        })
        localStorage.setItem("cart", JSON.stringify(updateQuantity));
        setCart(updateQuantity);

    }
    const incrementtQuality = (id, size) => {
        const updateQuantity = cart.map((item) => {
            if (item.id === id && item.size === size) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item;
        })
        localStorage.setItem("cart", JSON.stringify(updateQuantity));
        setCart(updateQuantity);

    }


    const handleDelet = (id, size) => {

        const updatedCart = cart.filter(item => !(item.id === id && item.size === size));

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        setCart(updatedCart);
    };




    if (cart.length===0) return <div>Your cart is empty!</div>;

    const handleHome = () => {
        navigate("/");
    }
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = subtotal * 0.2; 
    const deliveryFee = 5.0; 
    const total = subtotal - discount + deliveryFee;

    return (
        <section className="cartdetalis_main_container">
            <div className="cart_main_container">
                <div className="cart_section">
                    <div className="cart_home" onClick={handleHome}>
                        <p>Home ></p>
                    </div>
                    <div className="cart_cart">
                        <p>Cart</p>
                    </div>
                </div>

            </div>
            <div className="cart_product_container">
                <div className="cart_heater_title">
                    <h1>YOUR CART</h1>
                </div>

                <div className="cart-lef_right_container">
                    <div className="cart_left_main_container" >
                        {cart.map((item) => (
                            <div className="cart_left">
                                <div key={item.id} className="cart_left_container">
                                    <div className="cart_left_details_container">
                                        <div className="cart_img_main_container">
                                            <img src={item.image} alt="" className="cart_img_container" />
                                        </div>
                                        <div className="cart_product_details">
                                            <p className="cart_product_title">{item.title}</p>
                                            <p className="cart_product_size cart_p">Size: <span style={{fontSize:"12px"}}>{item.size}</span> </p>
                                            <p className="cart_product_color cart_p">Color: </p>
                                            <p className="cart_product_price">${item.price}</p>
                                        </div>
                                    </div>
                                    <div className="cart_remove">
                                        <div className="cart_decrement" onClick={() => decremetQuality(item.id, item.size)}>
                                            <FaMinus />
                                        </div>
                                        <div >
                                            <span className="cart_quantity">{item.quantity}</span>
                                        </div>
                                        <div className="cart_incerment" onClick={() => incrementtQuality(item.id, item.size)}>
                                            <FaPlus />
                                        </div>
                                    </div>
                                    <div className="cart_delete" onClick={() => handleDelet(item.id, item.size)}>
                                        <RiDeleteBin6Fill color="red" />
                                    </div>

                                </div>
                                <hr className="cart_hr" />
                            </div>


                        ))}
                    </div>

                    <div className="cart_right_main-container">
                        <div className="cart_left">
                             <h1 className="cart_h1">Order Summary</h1>

                            <div className="car_totalprice_details">
                                <div className="cart_name">
                                    <div className="cart_sub_totla">
                                        <p className="sub_toal ">Subtotal</p>
                                    </div>
                                    <div className="cart_sub_totla_price">
                                        <p>${subtotal}</p>
                                    </div>
                                </div>
                                <div className="cart_name">
                                    <div className="cart_sub_totla">
                                        <p className="sub_toal">Discount(-20%)</p>
                                    </div>
                                    <div className="cart_sub_totla_price">
                                        <p style={{color:'red'}}>${discount}</p>
                                    </div>
                                </div>
                                <div className="cart_name">
                                    <div className="cart_sub_totla">
                                        <p className="sub_toal">Delivery Fee</p>
                                    </div>
                                    <div className="cart_sub_totla_price">
                                        <p>${deliveryFee}</p>
                                    </div>
                                </div>
                                <hr  />
                                <div className="cart_name " style={{marginTop:"5%"}} >
                                    <div className="cart_sub_totla ">
                                        <p className="sub_toal cart_price" style={{ fontSize: "13px",color:"black"}}>Total</p>
                                    </div>
                                    <div className="cart_sub_totla_price e">
                                        <p style={{fontWeight:"700",fontSize:"15px"}}>${total}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cart_promo_apply">
                                <div className="add_promo_button">
                                    <input type="text" className="cart_button" id="cart_promo" placeholder="Add promo code"  />
                                </div>
                                <div className="aply_button">
                                    <button className="aply cart_button" style={{backgroundColor:"black",color:"white"}}>Apply</button>
                                </div>
                            </div>
                            <div className="cart_ceckout_main_button">
                                <div className="cekout_container">
                                    <button className="cart_ceckout">Go to Checkout</button>
                                </div>
                                <div className="cart_arow_img">
                                    <FaArrowRight color="white" />
                                </div>
                            </div>
                            </div>



                    </div>
                </div>
            </div>
        </section>
    )
}
export default CartListing;
