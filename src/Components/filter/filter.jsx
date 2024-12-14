import React, { useState } from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import './filter.css'
import { IoIosArrowDown } from "react-icons/io";
import { FaX } from "react-icons/fa6";

const Filter = ({ isVisible, setIsVisible, applyFilter }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });


    if (!isVisible && window.innerWidth < 768) return null;
    const toggleFilterVisibility = () => {
        setIsVisible(false);
    }
    const handleSizeClick = (size) => {
        setSelectedSize(size)
    }
    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // Set selected category
    };
    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setPriceRange((prev) => ({
            ...prev,
            [name]: Number(value),
        }));
    };
    const handleApplyFilter = () => {
        const appliedFilters = {
            size: selectedSize,
            category: selectedCategory,
            price:priceRange,
        };
        applyFilter(appliedFilters);
    };
    return (
        <section>
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
                            <IoIosArrowDown />
                        </div>
                        <div className="price_slider_container">
                            <div className="range_slider">
                                <input
                                    type="range"
                                    name="min"
                                    min="0"
                                    max="1000"
                                    value={priceRange.min}
                                    onChange={handlePriceChange}
                                    className="price_slider_left"
                                />
                                <input
                                    type="range"
                                    name="max"
                                    min="0"
                                    max="1000"
                                    value={priceRange.max}
                                    onChange={handlePriceChange}
                                    className="price_slider_right"
                                />
                            </div>
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