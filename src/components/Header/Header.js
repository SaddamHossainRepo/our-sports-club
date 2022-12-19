import React from 'react';
import './Header.css'
import logo from '../../images/sports.png'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <h1>Our-Sporting-Club</h1>
                <p>select Today's Sport</p>
            </div>
        </nav>
    );
};

export default Header;