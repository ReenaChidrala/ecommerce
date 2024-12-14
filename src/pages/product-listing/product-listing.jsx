import { useEffect, useState } from "react";
import AllProducts from "../../Components/all-products/all-products";
import Filter from "../../Components/filter/filter";
import './product-listing.css';
const ProductListing = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filters, setFilters] = useState({});
  const [isMobile, setIsMobile] = useState(); 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFilterVisibility = () => {
    if (isMobile) {
      setIsFilterVisible(!isFilterVisible);
    }
  };

  const applyFilter = (newFilter) => {
    setFilters(newFilter);
    if (isMobile) {
      setIsFilterVisible(false); // Close filter on mobile after applying
    }
  };




    return (
        <section className="productListing_main_page">
         <Filter  isVisible={isMobile ? isFilterVisible : true} setIsVisible={setIsFilterVisible} className="filter_left" applyFilter={applyFilter} />
         <AllProducts filters={filters} className="allProct_right" toggleFilterVisibility={toggleFilterVisibility} />
        </section>
    )
}
export default ProductListing;