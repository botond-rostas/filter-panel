import React from 'react';

import './Results.css';

const results = (props) => (
    <div className="results-container">
        <div className="label">You searched for "{props.searchValue}" with the following filters:</div>
        <div className="result">{props.results}</div>
    </div>
);

export default results;
