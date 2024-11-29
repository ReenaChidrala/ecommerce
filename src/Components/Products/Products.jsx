import React, { useEffect, useState } from "react";
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Slicing for New Arrivals and Top Selling sections
    const newArrivals = products.filter((data,index)=> index % 2 === 0).slice(0,5);

    const topSelling = products.filter((data,index)=> index % 2!==0).slice(0,5);


    const renderProducts = (productList) => (
        <div className="products-container">
            {productList.map((product) => (
                <div key={product.id} className="product">
                    <ul className="product-details">
                       <div className="product_img">
                       <img className="product-image" src={product.image} alt={product.title}  />
                       </div>
                        <div className="product_price">
                        <p>Price: ${product.price} <span style={{ color: "yellow" }}>★★★★</span>4/5</p>
                        </div>
                        <p style={{ fontSize: "16px" }}>{product.title}</p>
                    </ul>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <section className="section-product-main-container">
                <div className="section-header">
                    <h1 className="new-arrival-text">NEW ARRIVALS</h1>
                </div>
                <section className="product-main-container">
                    {renderProducts(newArrivals)}
                </section>
                <div className="view-all-button-container">
                    <button className="view-all-button">View All</button>
                </div>
            </section>
            
           <hr />

            <section className="section-product-main-container">
                <div className="section-header">
                    <h1 className="top-selling-text">TOP SELLING</h1>
                </div>
                <section className="product-main-container">
                    {renderProducts(topSelling)}
                </section>
                <div className="view-all-button-container">
                    <button className="view-all-button">View All</button>
                </div>
            </section>
        </div>
    );
}

export default Products;