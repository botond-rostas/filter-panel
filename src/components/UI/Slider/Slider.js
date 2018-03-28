import React from "react";

import './Slider.css';

const slider = (props) => (
    <input value={props.value} type="range" className="slider-d" min="0" max={props.steps -1} onChange={props.onChange}/>
)

export default slider;
