var React = require('react');
const Weekday = require('./weekdays');


class ForecastField extends React.Component {
    constructor() {
      super();
    }

  getDayInfo(data) {
    return (
      <ul className={data.weatherType.type}>
        <li>{data.date}</li>
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


module.exports = ForecastField;
