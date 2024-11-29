import react from "react";
import './Subscribe.css';
const Subscribr = () => {
    return (
        <section className="subscrine_main_contanier">
            <div className="main_contanier">
                <div className="right_side_contanier">
                   
                    <h1 className="content"> STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                </div>
                <div className="left_side_contanier">
                    <input type="email" className="user_input " id="input"  name="email" placeholder="Enter your email address" />
                    <div className="subscribe_button ">
                        <button className="user_input">Subscribe to Newsletter</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Subscribr;