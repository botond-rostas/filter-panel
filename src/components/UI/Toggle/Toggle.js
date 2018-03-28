import React from "react";

import './Toggle.css';

const toggle = props => (
    <label className="switch" onChange={props.onChange}>
        <input checked={props.checked} onChange={()=>{}} type="checkbox" />
        <span className="slider round"></span>
    </label>
)
export default toggle;
