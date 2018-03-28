import React, {Component} from 'react';

import './PriceRange.css';

class PriceRange extends Component{
    priceRangeHandler = e => {
        const newPriceRange = {...this.props.filters.priceRange};
        newPriceRange[e.target.className] = e.target.value;
        this.props.updateFilters("priceRange", newPriceRange);
    }

    render () {
        let error = null;
        if (this.props.priceRangeError) {
            error = <div className="error">Min. price must be lower than the max. price.</div>
        }

        return (
            <div className="filter-price">
                <div className="label">Set your price range</div>
                <input value={this.props.filters.priceRange.low} className="low" type="number" placeholder="Min." onChange={this.priceRangeHandler} />
                <input value={this.props.filters.priceRange.high} className="high" type="number" placeholder="Max." onChange={this.priceRangeHandler} />
                {error}
            </div>
        )
    }
}

export default PriceRange;