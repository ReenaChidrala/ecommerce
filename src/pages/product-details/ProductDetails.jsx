import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetalis.css';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { CartContext } from '../context/Context';
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { ClipLoader } from "react-spinners";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [loadingCart, setLoadingCart] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);


  const decremetQuality = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementtQuality = () => {
    setQuantity(quantity + 1)
  };


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);


        const relatedResponse = await fetch('https://fakestoreapi.com/products');
        if (!relatedResponse.ok) {
          throw new Error("failed to fecth product detais");
        }
        const allProducts = await relatedResponse.json();
        const related = allProducts.filter((item) => item.category === data.category && item.id !== data.id);
        setRelatedProducts(related);

      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);






  if (loading) return <div>Loding....</div>
  if (error) return <div>Error: {error}</div>

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSelectedSize("Medium")
      return;
    }

    setLoadingCart(true);



    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity,
      size: selectedSize,
    };
    addToCart(cartItem);



    setTimeout(() => {
      setLoadingCart(false);
    }, 5000);
  };



  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };





  return (
    <section className='product_details_main_container'>

      <div className="sections_of_pages_main_container">
        <div className="homepage_container">
          <p className='pagestext'>Home > </p>
        </div>
        <div className="shopepage_container">
          <p className='pagestext'>Shope > </p>
        </div>
        <div className="menpage_container">
          <p className='pagestext'>Men > </p>
        </div>
        <div className="tshirtpage_container">
          <p className='pagestext'>T-shirts > </p>
        </div>
      </div>
      <div className="main_container_product_details">

        <div className="left_side_product_details_container">

          <div className="product_img_main_container">
            <div className="product_img_container">
              <img src={product.image} alt="" />
            </div>
          </div>
        </div>
        <div className="right_side_product_details_container">
          <div className="product_details">
            <div className="product_detail_title">
              <p className="product_title">
                {product.title}
              </p>
            </div>
            <div className="product_details_raiting">
              <span className="product_details_stars" >★★★★  <span>{product.rating.rate}</span></span>
            </div>
            <div className="product_details_price">
              <p className="product_price"> ${product.price}</p>
            </div>
            <div className="Product_right_description">
              <p className="product_description">{product.description}</p>
            </div>
          </div>
          <hr />
          <div className="productright_colorselecting_container">
            <div>
              <p className="selectcolors_text">Select Colors</p>
            </div>
            <div className="product_colors">
              <div className='chocecolor'></div>
              <div className='chocecolor'></div>
              <div className='chocecolor'></div>
            </div>
          </div>
          <hr />
          <div className="product_right_size_selection_container">
            <div className="choose_sizetext_container">
              <p className="choosesize_text">Choose Size</p>
            </div>
            <div className="choosesize_container">
              {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
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
          <div className="productdetails_quantity_addtocard_container">
            <div className="product_quantity_container">
              <div className="productdecrement" onClick={decremetQuality}>
                <FaMinus />
              </div>
              <div >
                <span className="productquantity">{quantity}</span>
              </div>
              <div className="productincrement" onClick={incrementtQuality}>
                <FaPlus />
              </div>
            </div>

            <div className="product_addtocard">

              {
                loadingCart ? (
                  <ClipLoader
                    size={20}
                    loading={loadingCart}
                    cssOverride={{
                      display: 'block',
                      margin: 'auto',
                    }}
                  />
                ) : (
                  <button id='productaddtocard' onClick={handleAddToCart}>Add To Cart
                  </button>
                )
              }
            </div>
          </div>
        </div>
      </div>


      <div className='product_details_main_container2'>
        <div className="product_details_container">
          <div className="product_detalis proucthr">
            <div>
              <p className='productdetalistext'>Product Detalis</p>
            </div>

          </div>
          <div className="raiting_Review proucthr">
            <div>
              <p className='productdetalistext'>Rating & Reviews</p>
            </div>

          </div>
          <div className="faqs proucthr">
            <div>
              <p className='productdetalistext'>FAQs</p>
            </div>
          </div>

        </div>
        <hr />
      </div>
      <div className="productdetails_all_revie_main_container">
        <div className="all_reviews_constiner">
          <div className="all_reviwes">
            <h3 className='all_reviwes'>All Reviews <span>(451)</span></h3>
          </div>
          <div className="rewivew_right_icos">
            <div className="HiAdjustments_contaoner ">
              <HiAdjustmentsVertical style={{ padding: '1px' }} />
            </div>
            <div className="reiver_latest_conatiner">
              <div className='latest_text rewievtext'>Latest </div>
              <div className='downarrow'>
                <IoIosArrowDown />
              </div>
            </div>
            <div className="writea_rewivew_conatiner">
              <div className="write_rewivew rewievtext">Write a Review</div>
            </div>
          </div>
        </div>

        <div className="cart_comments-container">
          <div className="cart_customer-comment">
            <span className="stars-rating">★★★★★</span>
            <h2 className="customer-comment-name">Sarah M.</h2>
            <p className="customer-comment-para">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
          </div>
          <div className="cart_customer-comment">
            <span className="stars-rating">★★★★★</span>
            <h2 className="customer-comment-name">Alex K.</h2>
            <p className="customer-comment-para">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
          </div>
          <div className="cart_customer-comment">
            <span className="stars-rating">★★★★★</span>
            <h2 className="customer-comment-name">Jamesh L.</h2>
            <p className="customer-comment-para">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
          </div>
          <div className="cart_customer-comment">
            <span className="stars-rating">★★★★★</span>
            <h2 className="customer-comment-name">Mooen M.</h2>
            <p className="customer-comment-para">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
          </div>
          <div className="cart_customer-comment">
            <span className="stars-rating">★★★★★</span>
            <h2 className="customer-comment-name">Jhon W.</h2>
            <p className="customer-comment-para">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
          </div>
        </div>
      </div>
      <div className="product_main_sujestions">
        <div className="product_sujestions_container">
          <div className="product_sujestions_header">
            <h1 className='product_sujested_h1'>YOU MIGHT ALSO LIKE</h1>
          </div>
          <div className="sujestions_product_imgs">
            {relatedProducts.map((product) => (
              <div className="sujested_product_img_main_container">
                <div className="sujested_product_img_container">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="sujested_product_details">
                  <div className='sujested_product_title_container'>
                    {/* <p className="sujested_product_title">{product.title}</p> */}
                  </div>
                  <div className="sujested_product_price_container">
                    <span className="product_stars" >★★★★ <span>4/5</span></span>
                    <p className="sujested_product_price">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default ProductDetails