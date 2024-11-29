import React from "react";
import './Footer.css'
import birdicon from '../Assets/bird_icon.png';
import facbook from '../Assets/facebook_icon.png';
import insta from '../Assets/insta_icon.png';
import github from '../Assets/gitHub_icon.png';
import visa from '../Assets/visa_img.png';
import matercard from '../Assets/Badge_img.png';
import paypal from '../Assets/paypal_img.png';
import gpay from '../Assets/gpay_img.png';
import pay from '../Assets/pay_img.png'
const Footer = () => {
    return (
        <section className="fotter_main_contanier">
            <div className="fotter_contanier">
                <div className="first_colon">
                    <div className="head">
                        <h1 className="headr_contaner">SHOP.CO</h1>
                    </div>
                    <div className="para">
                        <p className="para_conatiner">
                            We have clothes that suits your style and which youre proud to wear. From women to men.
                        </p>
                    </div>
                    <div className="fotter_apps_icons">
                        <div className="bir_icon">
                            <img src={birdicon} alt="" />
                        </div>
                        <div className="facebook_icon">
                            <img src={facbook} alt="" />
                        </div>
                        <div className="insta_icon">
                            <img src={insta} alt="" />
                        </div>
                        <div className="github_icon">
                            <img src={github} alt="" />
                        </div>
                    </div>
                </div>
                <div className="aboutus_context">
                    <div className="button_left">
                        <div className="list" id="secod_colon">
                            <span className="sp">COMPANY</span>
                            <span>About</span>
                            <span>Features</span>
                            <span>Work</span>
                            <span>Career</span>
                        </div>
                        <div className="list" id="thired_colon">
                            <span className="sp">HELPE</span>
                            <span>Customer Support</span>
                            <span>Delivery Details</span>
                            <span>Terms & Conditions</span>
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                    <div className="button_right">
                        <div className="list" id="fourth_colon">
                            <span className="sp">F A Q</span>
                            <span>Account</span>
                            <span>Manage Deliveries</span>
                            <span>Orders</span>
                            <span>Payaments</span>
                        </div>
                        <div className="list" id="fifth_colon">
                            <span className="sp">RESOURSES</span>
                            <span>Customer Support</span>
                            <span>Delivery Details</span>
                            <span>Terms & Conditions</span>
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="bottom_container_main">
                <div className="bottom_container">
                    <div className="bottom_right_conainer">
                        <p className="shope">Shop.co © 2000-2023, All Rights Reserved</p>
                    </div>
                    <div className="bottom_left_container">
                        <div className="bottom_left_imgs">
                            <div className="visa">
                                <img src={visa} alt="" />
                            </div>
                            <div className="master_card">
                                <img src={matercard} alt="" />
                            </div>
                            <div className="paypal">
                                <img src={paypal} alt="" />
                            </div>
                            <div className="gpay">
                                <img src={pay} alt="" />
                            </div>
                            <div className="gpay">
                                <img src={gpay} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer;