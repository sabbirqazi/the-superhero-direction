/* This is Header component */
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container">
            
                <h1><span className="amazon"> Amazon </span><span><img src="../../logo.svg" alt="" /></span> <span className="amazon"> Movies </span></h1>
                <h3>Make Your Ultimate Blockbuster Webseries Without Money And Enjoy</h3>
                <h2>Best Budget Ever: $10 Million  </h2>
            
           
        </div>
    );
};

export default Header;