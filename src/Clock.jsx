import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        console.log('this.props', this.props);
        console.log('deadline within Component', this.props.deadline);

    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
        setInterval(() => { this.getTimeUntil(this.props.deadline), 1000 })
    }
    getTimeUntil(deadline) {
        console.log('deadline within getTimeUntil', deadline);
        const time = Date.parse(deadline) - Date.parse(new Date());
        console.log('time', time);
        let newseconds = Math.floor((time / 1000) % 60);
        let newminutes = Math.floor((time / (1000 * 60)) % 60);
        let newhours = Math.floor((time / (1000 * 60 * 60)) % 24);
        let newdays = Math.floor(time / (1000 * 60 * 60 * 24));
        this.setState({
            seconds: newseconds,
            minutes: newminutes,
            hours: newhours,
            days: newdays
        })
    }
    leadingZero(num) {
        return num < 10 ? '0' + num : num
    }
    render() {

        return (
            <div>
                <div className="Clock-days" >{this.leadingZero(this.state.days)}Days</div>
                <div className="Clock-hours">{this.leadingZero(this.state.hours)}Hours</div>
                <div className="Clock-minutes">{this.leadingZero(this.state.minutes)}Minutes</div>
                <div className="Clock-seconds">{this.leadingZero(this.state.seconds)}Seconds</div>
            </div>
        );
    }
}
export default Clock;