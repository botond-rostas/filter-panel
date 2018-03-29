import React, {Component} from 'react';

import CheckBox from '../../UI/Checkbox/Checkbox';

import './Categories.css';

const CATEGORIES = ["All", "New in tour area", "Fashion and Accessories", "Home and Garden", "Electronics", "Baby and Child", "Sport, Leisure and Games", "Movie, Books and Music", "Cars and Motors", "Property", "Services", "Other"]

class Categories extends Component {
    categoriesHandler = e => {
        const selectedValue = e.target.id.toLowerCase();
        let newCategories = [...this.props.filters.categories];

        if (selectedValue === "all") {
            newCategories = [selectedValue];
        } else if (newCategories.includes(selectedValue)) {
            newCategories = newCategories.filter(item => item !== selectedValue & item !== "all");
        } else {
            const filteredCategories = newCategories.filter(item => item !== "all");
            filteredCategories.push(selectedValue);
            newCategories = filteredCategories;
        }

        this.props.updateFilters("categories", newCategories);
    }

    render () {
        const selected = this.props.filters.categories;
        return (
            <div className="filter-categories">
                <div className="label">Choose categories</div>
                <div className="filters">
                    {CATEGORIES.map(option => {
                        if (selected.includes(option.toLowerCase())) {
                            return (
                                <CheckBox key={option} id={option} onClick={this.categoriesHandler} checked={true}>{option}</CheckBox>
                            )
                        } else {
                            return (
                                <CheckBox key={option} id={option} onClick={this.categoriesHandler} checked={false}>{option}</CheckBox>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default Categories;