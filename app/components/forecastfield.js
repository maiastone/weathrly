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

    let convertedDate = Month[data.date.slice(0,2)] + ' ' + data.date.slice(3,5);
    let convertedChance =  Math.floor(data.weatherType.chance*100)+'% chance' ;

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
          <div className="data-image-container" className="bold-icon">
            <li> { convertedChance } </li>
            <li className={data.weatherType.type.replace(' ','-')}></li>
            <li className="type-font">{data.weatherType.type}</li>
          </div>

          <div className="data-image-container">
            <li className="label-font">Morning Average</li>
            <li className={data.weatherType.type.replace(' ','-')}></li>
            <li className="degree-font">{morningTemp}°</li>
          </div>

          <div className="data-image-container">
            <li className="label-font">Daytime High</li>
            <li className={data.weatherType.type.replace(' ','-')}></li>
            <li className="degree-font">{data.temp.high}°</li>
          </div>

          <div className="data-image-container">
            <li className="label-font">Evening Average</li>
            <li className={data.weatherType.type.replace(' ','-')}></li>
            <li className="degree-font">{eveningTemp}°</li>
          </div>

          <div className="data-image-container">
            <li className="label-font">Nighttime Low</li>
            <li className={data.weatherType.type.replace(' ','-')}></li>
            <li className="degree-font">{data.temp.low}°</li>
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
