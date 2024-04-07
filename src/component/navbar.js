import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ()=>{
    return(
        <>
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/product">Product</Link>
                <Link to="/cart">
                    <ShoppingCart size={32}></ShoppingCart>
                </Link>
            </div>
        </div>
        </>
    )
}