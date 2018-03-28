import React from 'react';

import './SearchField.css';

import Input from '../UI/InputField/InputField';

const searchField = (props) => {
    const className = props.filtersVisible === true ? 'expanded' : '';
    return (
        <div className={`search-field-container ${className}`} onClick={props.onClick} >
            <Input placeholder="Search..." onChange={props.onChange} />
        </div>
    )
}

export default searchField;