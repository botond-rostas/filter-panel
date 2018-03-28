import React, {Component} from 'react';

import Radio from '../../UI/Radio/Radio';

import './Sorting.css';

const SORTING = ["Distance", "Date", "Ascending", "Descending"]

class Sorting extends Component {
    sortingHandler = e => {
        const selectedValue = e.target.id.toLowerCase();
        this.props.updateFilters("sort", selectedValue);
    }

    render () {
        const selected = this.props.filters.sort;
        return (
            <div className="filter-sorting">
                <div className="label">Sort by</div>
                <div className="filters">
                    {SORTING.map(option => {
                        if (option.toLowerCase() === selected.toLowerCase()) {
                            return (
                                <Radio key={option} id={option} onClick={this.sortingHandler} checked={true}>{option}</Radio>
                            )
                        } else {
                            return (
                                <Radio key={option} id={option} onClick={this.sortingHandler} checked={false}>{option}</Radio>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Sorting;