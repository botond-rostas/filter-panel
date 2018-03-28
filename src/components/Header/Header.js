import React from 'react';

import logo from '../../assets/images/logo.png';

import './Header.css';

const header = () => (
    <div className="header-container">
        <img src={logo} alt="Shpock logo" />
    </div>
);

export default header;
