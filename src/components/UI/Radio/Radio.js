import React from 'react';

import './Radio.css';

const radio = props => {
    const checked = props.checked === true ? "checked" : "";
    return (
        <React.Fragment>
            <div className={`container-radio ${checked}`} id={props.id} onClick={props.onClick}>
                <input type="radio" checked={props.checked} onChange={()=>{}} />
                {props.children}
                <span className="checkmark"></span>
            </div>
        </React.Fragment>
    )
}

export default radio;