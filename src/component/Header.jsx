import React from 'react';
import {NavLink} from "react-router-dom"
import { useSelector } from 'react-redux';

const Header = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">REDUX STORE</span>
            <div>
                <NavLink className="navLink" to="/home">
                    Home
                </NavLink>
                <NavLink className="navLink" to="/shop">
                    Shop
                </NavLink>
                <NavLink className="navLink" to="/cart">
                    Cart 
                </NavLink>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
        </div>
    );
};

export default Header;