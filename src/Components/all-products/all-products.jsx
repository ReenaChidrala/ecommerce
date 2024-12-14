import React, { useEffect, useState } from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import './all-produts.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const AllProducts = ({ filters, toggleFilterVisibility }) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [product, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(6);
      const navigate = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);
    useEffect(() => {
        const updateProductsPerPage = () => {
            if (window.innerWidth >= 768) {
                setProductsPerPage(9); 
            } else {
                setProductsPerPage(6); 
            }
        };

        updateProductsPerPage(); 

        // Recalculate when the window is resized
        window.addEventListener("resize", updateProductsPerPage);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateProductsPerPage);
        };
    }, []);

    useEffect(() => {

        let filtered = product;
        if (filters.category) {
            filtered = filtered.filter((product) => product.category === filters.category);
        }

        if (filters.size) {

            filtered = filtered.filter((prod) => prod.size === filters.size);
        }
        if (filters.price) {
            filtered = filtered.filter(
              (prod) =>
                prod.price >= filters.price.min && prod.price <= filters.price.max
            );
          }

        setFilteredProducts(filtered);  

    }, [filters, product]);
    

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + productsPerPage >= filteredProducts.length ? 0 : prevIndex + productsPerPage
        );
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? filteredProducts.length - productsPerPage : prevIndex - productsPerPage
        );
    };
    const visibleProducts = filteredProducts.slice(currentIndex, currentIndex + productsPerPage);


    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <section>
            <div className="productListing_container">

                <div className="productListing_right_main_container">
                    <div className="productListing_right_container">
                        <div className="show_filter">
                            <div>

                            </div>
                            <div onClick={toggleFilterVisibility}>
                                <HiAdjustmentsVertical />
                            </div>
                        </div>
                        <div className="productListing_main_conatiner">
                            {visibleProducts.map((product) => (
                                <div key={product.id} className=""
                                onClick={() => navigate(`/product/${product.id}`)}>
                                    <div className="productListing_main_img_conatiner">
                                        <div className="productListing_img_conatiner">
                                            <img src={product.image} alt={product.title} className="productListing_img" />
                                        </div>
                                        <div className="productListing_product_details">
                                            <div className='productListing_product_title_container'>
                                                {/* <p className="sujested_product_title">{product.title}</p> */}
                                            </div>
                                            <div className="productListing_product_price_container">
                                                <span className="product_stars" >★★★★ <span>4/5</span></span>
                                                <p className="productListing_product_price">${product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                        <hr className="productListing_hr" />
                        <div className="pagination_buttons">
                            <div className="previousAndNextButton_main_conatiner">
                                <div className="previousAndNextButton">
                                    <IoMdArrowRoundBack />
                                </div>
                                <div className="previousAndNextText">
                                    <button onClick={handlePrevious} disabled={currentIndex === 0} className="prev_button">Previous</button>

                                </div>
                            </div>
                            <div className="previousAndNextButton_main_conatiner">
                                <div className="previousAndNextText">
                                    <button onClick={handleNext} disabled={currentIndex + productsPerPage >= product.length} className="next_button">Next</button>
                                </div>
                                <div className="previousAndNextButton">
                                    <IoMdArrowRoundForward />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AllProducts;