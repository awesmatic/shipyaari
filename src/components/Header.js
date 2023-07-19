import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const cart = useSelector((state) => state.cart.cart);
    return (
        <div className='flex justify-between px-8'>
            <Link to="/" className='text-black-500 text-lg font-bold '>Home </Link>
            <Link to="cart" className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">Cart {cart.length} </Link>

        </div>
    )
}

export default Header