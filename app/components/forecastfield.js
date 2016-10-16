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

    let convertedDate = Month[data.date.slice(0,2)] + ' ' + data.date.slice(3,5) + 'th';
    let convertedChance = '% ' + Math.floor(data.weatherType.chance*100) + ' chance' ;

    var getMorningTemp = function() {
      let temperature = 0;
      for (var i = 6; i < 11; i++) {
        temperature += data.hourly.timeBreakDown[i]["hour"+(parseInt(i)+1)].temp;
        }
      return temperature/5;
    };

    var getEveningTemp = function() {
      let temperature = 0;
      for (var i = 16; i < 21; i++) {
        temperature += data.hourly.timeBreakDown[i]["hour"+(parseInt(i)+1)].temp;
        }
      return temperature/5;
    };

    let morningTemp = getMorningTemp();
    let eveningTemp = getEveningTemp();

    return (
      <div>
        <h2> { convertedDate } </h2>
        
        <ul>
          <div className="data-image-container">
            <li> { convertedChance } </li>
            <li className={data.weatherType.type}></li>
            <li>{data.weatherType.type}</li>
          </div>

          <div className="data-image-container">
            <li>Morning: {morningTemp} </li>
            <li className={data.weatherType.type}></li>
            <li></li>
          </div>

          <div className="data-image-container">
            <li>High: {data.temp.high}</li>
            <li className={data.weatherType.type}></li>
            <li></li>
          </div>

          <div className="data-image-container">
            <li>Evening: {eveningTemp} </li>
            <li className={data.weatherType.type}></li>
            <li></li>
          </div>

          <div className="data-image-container">
            <li>Low: {data.temp.low}</li>
            <li className={data.weatherType.type}></li>
            <li></li>
          </div>

        </ul>
      </div>
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
