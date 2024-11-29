import React from "react";
import casual from '../Assets/casual.png';
import formal from '../Assets/formal.png'
import './Brows_producr.css';
const Brows_producr = () => {
   return (
      <section>
         <div className="maincontainer_brows">
            <div className="browser_name">
               <h2 className="brows_header"> BROWSE BY DRESS STYLE</h2>
            </div>
            <div className="image_conatner">
               <div className="first_row">
                  <div className="casuval product_card">
                     <img src={casual} className="product_image" alt="casual" />
                     <p className="casual_text">Casual</p>
                  </div>
                  <div className="formal product_card">
                     <img src={formal} className="product_image" alt="formal" />
                     <p className="formal_text">Formal</p>
                  </div>
               </div>
               <div className="first_row row_reverse">
                  <div className="casuval product_card">
                     <img src={casual} className="product_image" alt="casual" />
                     <p className="casual_text">Casual</p>
                  </div>
                  <div className="formal product_card">
                     <img src={formal} className="product_image" alt="formal" />
                     <p className="formal_text">Formal</p>
                  </div>
               </div>
              
            </div>
         </div>
      </section>
   )
}
export default Brows_producr;