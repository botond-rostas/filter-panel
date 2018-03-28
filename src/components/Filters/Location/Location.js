import React, {Component} from 'react';

import Slider from '../../UI/Slider/Slider';
import Toggle from '../../UI/Toggle/Toggle';

import './Location.css';

const LOCATION_STEPS = ["1", "2", "3", "4", "5", "7", "10", "15", "20", "30", "60", "100", "200", "300", "400", "500", "1000","Everywhere"]

class Location extends Component {

    locationHandler = e => {
        const selectedValue = LOCATION_STEPS[e.target.value];
        const newRadius = {...this.props.filters.radius};
        newRadius.range = selectedValue;
        this.props.updateFilters("radius", newRadius);
    }

    locationToggleHandler = () => {
        const newRadius = {...this.props.filters.radius};
        newRadius.myCountry = newRadius.myCountry === false ? true : false;
        this.props.updateFilters("radius", newRadius);
    }

    render () {
        let value = LOCATION_STEPS[LOCATION_STEPS.indexOf(this.props.filters.radius.range)];

        if (value !== LOCATION_STEPS[LOCATION_STEPS.length -1]) {
            value = value + " km";
        }

        return (
            <div className="filter-location">
                <div className="location-slider">
                    <div className="info">
                        <div className="label">Radius</div>
                        <div className="value">{value}</div>
                    </div>
                    <Slider value={LOCATION_STEPS.indexOf(this.props.filters.radius.range)} onChange={this.locationHandler} steps={LOCATION_STEPS.length} />
                </div>
                <div className="location-toggle">
                    <div className="label">Search only in my country</div>
                    <Toggle checked={this.props.filters.radius.myCountry} onChange={this.locationToggleHandler}/>
                </div>
            </div>
        )
    }
}

export default Location;