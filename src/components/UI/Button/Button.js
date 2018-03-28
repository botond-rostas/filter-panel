import React from 'react';

import './Button.css';

const button = props => (
    <button className={`button ${props.className}`} onClick={props.onClick}>{props.children}</button>
);

export default button;