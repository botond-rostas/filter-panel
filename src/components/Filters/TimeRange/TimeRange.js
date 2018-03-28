import React, {Component} from 'react';

import Slider from '../../UI/Slider/Slider';

import './TimeRange.css';

const TIME_STEPS = ["24 hours", "3 days", "7 days", "30 days", "forever"]

class TimeRange extends Component {

    timeRangeHandler = e => {
        const selectedValue = TIME_STEPS[e.target.value];
        this.props.updateFilters("timeRange", selectedValue);
    }

    render () {
        let value = TIME_STEPS[TIME_STEPS.indexOf(this.props.filters.timeRange)];
        return (
            <div className="filter-time">
                <div className="info">
                    <div className="label">Listed in the last</div>
                    <div className="value">{value}</div>
                </div>
                <Slider value={TIME_STEPS.indexOf(this.props.filters.timeRange)} onChange={this.timeRangeHandler} steps={TIME_STEPS.length} />
            </div>
        )
    }

}

export default TimeRange;