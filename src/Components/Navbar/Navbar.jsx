import React, { useState } from "react";
import HamburgerMenu from '../Assets/HamburgerMenu.png';
import search from '../Assets/search.png';
import addtocard from '../Assets/addtocard.png';
import human from '../Assets/human.png';
import './Navbar.css';
import vector from '../Assets/Vector.png';

const Navbar = () => {
    const [isHamBurgerClicked, setIsHamBurgerClicked] = useState(false);

    return (
        <div className="main-nav-container">
            <div className="flex">
                <div className="left-side">
                    <img
                        src={HamburgerMenu}
                        alt=""
                        className="hamburgure"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setIsHamBurgerClicked((prev) => !prev)}
                    />
                    <p className="test">SHOPE.CO</p>

                    <div className="trend_navbar_options">
                        <p>Shop</p>
                        <p>On Sale</p>
                        <p>New Arrivals</p>
                        <p>Brands</p>
                    </div>
                </div>

                <div className="icons">
                    <div className="search_input_container">
                        <input
                            className="search_input"
                            placeholder="Search for products..."
                        />
                        <img src={vector} alt="search-icon" className="search_icon" />
                    </div>


                    <img src={search} alt="" className="search" />
                    <img src={addtocard} alt="" className="addtocart" />
                    <img src={human} alt="" className="human" />
                </div>
            </div>

            <div
                className={`mobile_menu ${isHamBurgerClicked ? "visible" : "none"}`}
            >
                <p>Shop</p>
                <p>On Sale</p>
                <p>New Arrivals</p>
                <p>Brands</p>
            </div>
        </div>
    );
};

export default Navbar;
