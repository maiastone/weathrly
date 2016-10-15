/*jshint esversion: 6 */
const React = require('react');
const Weekday = require('./weekdays');

class ForecastField extends React.Component {
  constructor() {
    super();
  }

  getDayInfo(data) {
    var Month = {
      '01' : 'January',
      '02' : 'February',
      '03' : 'March',
      '04' : 'April',
      '05' : 'May',
      '06' : 'June',
      '07' : 'July',
      '08' : 'August',
      '09' : 'September',
      '10' : 'October',
      '11' : 'November',
      '12' : 'December'
    };
    let date = data.date;
    let convertedDate = Month[date.slice(0,2)] + ' ' + date.slice(3,5) + 'th';
    let chance = data.weatherType.chance;
    let convertedChance = '% ' + Math.floor(chance*100);

    return (
      <ul className={data.weatherType.type}>
        <li> { convertedDate } </li>
        <li> {data.weatherType.type} </li>
        <li> { convertedChance } </li>
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
