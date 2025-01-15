import React, { useState } from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import './filter.css'
import { IoIosArrowDown } from "react-icons/io";
import { FaX } from "react-icons/fa6";
import Modal from 'react-modal';
import Slider from '@mui/joy/Slider';


const Filter = ({ isVisible, setIsVisible, applyFilter }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });


    if (!isVisible && window.innerWidth < 768) return null;
    const toggleFilterVisibility = () => {
        setIsVisible(false);
    }
    const handleSizeClick = (size) => {
        
        setSelectedSize((prevSize)=>
            prevSize===size?null:size );  
    }
    const handleCategoryClick = (category) => {
        setSelectedCategory((prevcategory)=>
            prevcategory===category?null:category);
    };
    
    const handleApplyFilter = () => {
        const appliedFilters = {
            size: selectedSize,
            category: selectedCategory,
            price: priceRange,
        };
        applyFilter(appliedFilters);
    };
    return (
        <section className="filter">
            <div className={`productListing_left_main_container ${isVisible ? 'visible' : 'non'}`}>
                <div className="filter_main_header_conatiner">
                    <div className="filter_text_conatiner">
                        <p className="filter_yext">Filters</p>
                    </div>
                    <div className="filter_left_imgcontainer">
                        <HiAdjustmentsVertical className="filter_menu" />
                        <FaX style={{ color: " #61636499" }} className="back_button" onClick={toggleFilterVisibility} />
                    </div>
                </div>
                <hr />
                <div className="productListing_categeris_container">
                    {['men\'s clothing', 'women\'s clothing', 'jewelery', 'electronics'].map((category) => (
                        <div
                            key={category}
                            className={`product_categeris ${selectedCategory === category ? 'selected' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            <div>
                                <span>{category}</span>
                            </div>
                            <span className="filterspan">{'>'}</span>
                        </div>
                    ))}
                </div>
                <hr />
                <div className="productListing_price_main_container sections_space">
                    <div className="productListing_conatiner">
                        <div className="productListing_price">
                            <p className="filter_yext">Price </p>
                        </div>
                        <div>
                            {/* <IoIosArrowDown /> */}
                        </div>
                        <div className="price_slider_container">
                            <Slider
                                value={[priceRange.min, priceRange.max]}
                                onChange={(e, newValue) => setPriceRange({ min: newValue[0], max: newValue[1] })}
                                valueLabelDisplay="auto"
                                min={0}
                                max={1000}
                                sx={{
                                    color: "black", // The color of the slider thumb and track
                                    '& .MuiSlider-thumb': {
                                        backgroundColor: "black", // Thumb color
                                    },
                                    '& .MuiSlider-rail': {
                                        background:" #F0F0F0", // Rail background color
                                    },
                                    '& .MuiSlider-track': {
                                        backgroundColor: "black", // Active track color
                                    },
                                }}
                            />


                        </div>
                        <div className="price_labels">
                            <span>Min: ${priceRange.min}</span>
                            <span>Max: ${priceRange.max}</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="productListing_colors_conatiner sections_space">
                    <div className="productListing_color_text_conatiner">
                        <p className="filter_yext">Colors</p>
                    </div>
                    <div className="productListing_colors">
                        <div className="filter_colors"></div>
                        <div className="filter_colors"></div>
                        <div className="filter_colors"></div>
                        <div className="filter_colors"></div>
                        <div className="filter_colors"></div>
                        <div className="filter_colors"></div>
                        <div className="filter_colors"></div>
                        <div className="filter_colors"></div>
                        <div className="filter_colors"></div>
                        <div className="filter_colors"></div>


                    </div>
                </div>
                <hr />
                <div className="productListing_sizes_main_container sections_space">
                    <div className="productListing_size_text_conainer">
                        <div>
                            <p className="filter_yext">Size</p>
                        </div>
                    </div>
                    <div className="productListing_choosesize_container">
                        {['XX-Small', 'x-small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', 'X3-Large', 'X4-Large'].map((size) => (
                            <div
                                key={size}
                                className={`sizes ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <div className="applyFilter_main_conatainer sections_space">
                    <button className="applyFilter" onClick={handleApplyFilter}>
                        Apply Filter
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Filter;