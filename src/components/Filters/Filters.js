import React from 'react';

import Button from '../UI/Button/Button';

import TimeRange from './TimeRange/TimeRange';
import Sorting from './Sorting/Sorting';
import Location from './Location/Location';
import Categories from './Categories/Categories';
import PriceRange from './PriceRange/PriceRange';

import './Filters.css';

const filters = props => {
    const applyDisabled = props.searchValue.length === 0 ? "disabled" : "";
    return (
        <div className="filters-container">
            <div className="controls">
                <div className="filters-header">Filters</div>
                <Sorting filters={props.filters} updateFilters={props.updateFilters} />
                <Categories filters={props.filters} updateFilters={props.updateFilters} />
                <Location filters={props.filters} updateFilters={props.updateFilters} />
                <div className="time-price-filters">
                    <TimeRange filters={props.filters} updateFilters={props.updateFilters} />

                    <PriceRange filters={props.filters} updateFilters={props.updateFilters} priceRangeError={props.priceRangeError} />
                </div>
                <div className="action-buttons">
                    <Button className="cancel" onClick={props.resetFilters}>Clear Filters</Button>
                    <Button className={`apply ${applyDisabled}`} onClick={props.printResults}>Apply and print results</Button>
                </div>
            </div>
        </div>
    )
}

export default filters;