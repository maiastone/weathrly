var React = require('react');
const Weekday = require('./weekdays');


class ForecastField extends React.Component {
    constructor() {
      super();
    }

  getDayInfo(data) {

    return (
      <ul>
        <li>Date: {data.date}</li>
        <li>Type: {data.weatherType.type}</li>
        <li>High: {data.temp.high}</li>
        <li>Low: {data.temp.low}</li>
      </ul>
    )
  }

  render() {

    return (
      <section>
        <Weekday data ={this.props.data.map(this.getDayInfo)} />

      </section>
    )
  }
};


// use map to return a new component for each day -- pass the array down as a prop and iterate through
// pass weather object to weekday component

module.exports = ForecastField;
