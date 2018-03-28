import React, { Component } from 'react';

import Header from "../../components/Header/Header";
import SearchField from "../../components/SearchField/SearchField";
import Filters from '../../components/Filters/Filters';
import Results from "../../components/Results/Results";

const DEFAULT_FILTERS = { timeRange: "forever", sort: "distance", radius: { range: "Everywhere", myCountry: false }, categories: ["all"], priceRange: { low: "", high: "", } }

class ShpockApp extends Component {
    state = {
        searchValue: "",
        filters: {
            timeRange: "forever",
            sort: "distance",
            radius: {
                range: "Everywhere",
                myCountry: false
            },
            categories: ["all"],
            priceRange: {
                low: "",
                high: "",
            }
        },
        priceRangeError: false,
        filtersVisible: false,
        results: ""
    }

    onChangeHandler = e => {
        const newValue = e.target.value;
        // const shouldFiltersShow = newValue.length > 0 ? true : false;
        this.setState({
            searchValue: newValue,
            filtersVisible: true,
            results: ""
        })
    }

    searchClickHandler = () => {
        if (this.state.results.length > 0) {
            this.setState({
                filtersVisible: true,
                results: ""
            })
        }
    }

    updateFilters = (filter, value) => {
        const newValue = value;
        const updatedFilters = {...this.state.filters};
        updatedFilters[filter] = newValue;

        this.setState({filters: updatedFilters});
    }

    resetFilters = () => {
        let updatedFilters = {...this.state.filters};
        updatedFilters = DEFAULT_FILTERS;
        this.setState({
            filters: updatedFilters,
            priceRangeError: false
        })
    }

    printResults = () => {
        if (this.state.filters.priceRange.low > this.state.filters.priceRange.high) {
            this.setState({priceRangeError: true});
        } else {
            console.log(this.state.filters);
            const resultToString = JSON.stringify(this.state.filters, null, 4);
            this.setState({
                results: resultToString,
                filtersVisible: false,
                priceRangeError: false
            });
        }
    }

    render() {
        let filters = null;
        if (this.state.filtersVisible === true) {
            filters = <Filters updateFilters={this.updateFilters} printResults={this.printResults} resetFilters={this.resetFilters} filters={this.state.filters} priceRangeError={this.state.priceRangeError} searchValue={this.state.searchValue}/>
        }

        let results = null;
        if (this.state.results.length > 0) {
            results = <Results searchValue={this.state.searchValue} results={this.state.results} />
        }

        return (
            <React.Fragment>
                <Header />
                <SearchField filtersVisible={this.state.filtersVisible} onChange={this.onChangeHandler} onClick={this.searchClickHandler}/>
                {filters}
                {results}
            </React.Fragment>
        );
    }
}

export default ShpockApp;
