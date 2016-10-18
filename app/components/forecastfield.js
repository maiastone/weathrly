const React = require('react');
const Weekday = require('./weekdays');

class ForecastField extends React.Component {
  constructor() {
    super();
  }

  setSummary(data) {
      let d = new Date();
      let summary = (<div>Today you can expect {data[0].weatherType.type.toUpperCase()}. Currently the temperature is  {data[0].hourly.timeBreakDown[Math.floor(d.getHours())]['hour'+parseInt(Math.floor(d.getHours())+1)].temp}° and the high will be {data[0].temp.high}°.</div>);
      let extremeWeather = data.map(this.extremeWeatherAlert);


      return (
      <p id='summary'> { summary } { extremeWeather } </p>
      )
  }

  extremeWeatherAlert(data) {
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

    if (data.weatherType.scale === 3){
      return (<li> There is an extreme weather alert in your area on {convertedDate}. </li>)
    }
  }

  getDayInfo(data) {
    let d = new Date();

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
            <br/>
            <li className={data.weatherType.type.replace(' ','-')}></li>
            <li className="type-font">{data.weatherType.type}</li>
          </div>

          <div className="data-image-container">
            <li className="label-font">Morning Average</li>
            <li className={data.hourly.timeBreakDown[6].hour7.type.replace(' ','-')}></li>
            <li className="degree-font">{morningTemp}°</li>
          </div>

          <div className="data-image-container">
            <li className="label-font">Daytime High</li>
            <li className={data.hourly.timeBreakDown[13].hour14.type.replace(' ','-')}></li>
            <li className="degree-font">{data.temp.high}°</li>
          </div>

          <div className="data-image-container">
            <li className="label-font">Evening Average</li>
            <li className={data.hourly.timeBreakDown[19].hour20.type.replace(' ','-')}></li>
            <li className="degree-font">{eveningTemp}°</li>
          </div>

          <div className="data-image-container">
            <li className="label-font">Nighttime Low</li>
            <li className={data.hourly.timeBreakDown[0].hour1.type.replace(' ','-')}></li>
            <li className="degree-font">{data.temp.low}°</li>
          </div>
        </ul>
      </div>
    )
  }

  render() {
    let summary = this.setSummary(this.props.data)
    return (
      <section>
        {summary}
        <Weekday data ={this.props.data.map(this.getDayInfo)} />
      </section>
    )
  }
};


module.exports = ForecastField;
