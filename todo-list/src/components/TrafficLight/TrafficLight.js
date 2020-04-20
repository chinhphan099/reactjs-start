import React, {Component} from 'react';
import './TrafficLight.css';
import classNames from 'classnames';
const RED = 0,
    ORANGE = 1,
    GREEN = 2;

class TrafficLight extends Component {
    render() {
        const {currentColor} = this.props;
        return (
            <div className="TrafficLight">
                <div className={classNames('bulb', 'red', {'active': currentColor === RED})} />
                <div className={classNames('bulb', 'orange', {'active': currentColor === ORANGE})} />
                <div className={classNames('bulb', 'green', {'active': currentColor === GREEN})} />
            </div>
        );
    }
}

export default TrafficLight;