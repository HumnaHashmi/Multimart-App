import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiCart } from 'react-icons/bi';

const Header = () => {
    const items = useSelector((state) => state.cart);
    const cartItemCount = items.length;

    return (
        <header  style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            
        }}>
            <NavLink to="/home" style={{ 
                fontFamily: "revert",
              
                fontSize: "24px",
                textDecoration: "none",
                color: 'black',
            }}>
                Multi Mart Clothing
            </NavLink>
            <nav style={{ display: 'flex', alignItems: 'center' }}>
                <NavLink to="/home" className="navLink" style={navLinkStyle}>
                    Home
                </NavLink>
                <NavLink to="/shop" className="navLink" style={navLinkStyle}>
                    Shop
                </NavLink>
                <NavLink to="/cart" className="navLink" style={cartLinkStyle}>
                    <BiCart size={20} style={{ marginRight: '5px' }} />
                    Cart
                    {cartItemCount > 0 && <span style={cartCountStyle}>{cartItemCount}</span>}
                </NavLink>
            </nav>
        </header>
    );
};

const navLinkStyle = {
    fontSize: '16px',
    textDecoration: 'none',
    color: '#333',
    marginLeft: '20px',
};

const cartLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    textDecoration: 'none',
    color: '#333',
    marginLeft: '20px',
};

const cartCountStyle = {
    backgroundColor: '#ff4d4f',
    color: '#fff',
    borderRadius: '50%',
    padding: '2px 6px',
    marginLeft: '5px',
    fontSize: '12px',
};

export default Header;
