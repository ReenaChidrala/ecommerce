import React, { useEffect, useRef, useState } from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import './all-produts.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';
const AllProducts = ({ filters, toggleFilterVisibility }) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [allProduct, setAllProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    

    const containerRef = useRef(null); // To calculate available space
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAllProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);  
            }
        }
        fetchProducts();
    }, []);

    useEffect(() => {
        let product = allProduct;
        if (filters.category) {
            product = product.filter(product => product.category === filters.category);
        }
        if (filters.size) {
            product = product.filter(product => product.size === filters.size);
        }
        if (filters.price) {
            product = product.filter(product => product.price >= filters.price.min && product.price <= filters.price.max);
        }
        setFilterProducts(product)
    }, [filters, allProduct])

   
    
  
    


    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <section className="allproducts">
            <div className="productListing_container">

                <div className="productListing_right_main_container">
                    <div className="productListing_right_container">
                        <div className="show_filter">
                            <div>

                            </div>
                            <div onClick={toggleFilterVisibility} className="product_hidjustment">
                                <HiAdjustmentsVertical />
                            </div>
                        </div>
                        <div className="productListing_main_conatiner">
                            {filterProducts.length > 0 ? (filterProducts.map((product) => (
                                <div key={product.id} className=""
                                    onClick={() => navigate(`/product/${product.id}`)}>
                                    <div className="productListing_main_img_conatiner">
                                        <div className="productListing_img_conatiner">
                                            <img src={product.image} alt={product.title} className="productListing_img" />
                                        </div>
                                        <div className="productListing_product_details">
                                            <div className='productListing_product_title_container'>
                                                <Typography className="sujested_product_title" noWrap>
                                                    {product.title}
                                                </Typography>
                                            </div>
                                            <div className="productListing_product_price_container">
                                                <span className="product_stars" >★★★★ <span>4/5</span></span>
                                                <p className="productListing_product_price">${product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))) : (<div>No products found for the selected.</div>)}
                        </div>
                        <hr className="productListing_hr" />
                        {/* <div className="pagination_buttons">
                            <div className="previousAndNextButton_main_conatiner">
                                <div className="previousAndNextButton">
                                    <IoMdArrowRoundBack />
                                </div>
                                <div className="previousAndNextText">
                                    <button onClick={handlePrevious} disabled={currentPage === 0} className="prev_button">Previous</button>

                                </div>
                            </div>
                            <div className="previousAndNextButton_main_conatiner">
                                <div className="previousAndNextText">
                                    <button onClick={handleNext} disabled={
                                        (currentPage + 1) * productsPerPage >=
                                        filterProducts.length
                                    } className="next_button">Next</button>
                                </div>
                                <div className="previousAndNextButton">
                                    <IoMdArrowRoundForward />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AllProducts;