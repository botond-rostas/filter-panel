import React from 'react';

import './Checkbox.css';

const checkbox = props => {
    const selected = props.checked === true ? "selected" : "";
    return (
        <React.Fragment>
            <div className={`container-checkbox ${selected}`} id={props.id} onClick={props.onClick}>
                <input type="checkbox" checked={props.checked} onChange={()=>{}} />
                {props.children}
                <span className="checkmark"></span>
            </div>
        </React.Fragment>
    )
}

export default checkbox;