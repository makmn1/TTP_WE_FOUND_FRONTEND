import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar(){
    return(
        <nav>
            <Link className="logoArea" to="/products">WeFound</Link>
            <Link className="cart" to="/">Cart</Link>
            <Link className="Others" to="/">Favorites</Link>
            <Link className="Others"  to="/">WishList</Link>
            <Link className="Others"  to="/">Products</Link>
        </nav>
    )
}

export default Navbar