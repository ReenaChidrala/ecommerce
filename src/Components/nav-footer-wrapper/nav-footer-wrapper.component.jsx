import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Subscribe from '../Subscribe/Subscribe.jsx'

 const NavFooterWrapper = ({children}) => {
    return <>
        <Navbar/>
        {children}
        <Subscribe/>
        <Footer/>
    </>
}
export default NavFooterWrapper;