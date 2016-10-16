/*jshint esversion: 6 */
require('../style/reset');
require('../style/style');
require('../style/weather');
const React = require('react');
const $ = require('jquery');
const SubmitButton = require('../components/submitbutton');
const ForecastField = require('../components/forecastfield');
const LocationSearch = require('../components/locationsearch');
// const Weekday = require('../components/weekday');

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      location: '',
      forecast: [],
      extremeWeather : false
    };
  }

  setLocation(location){
    let userInput = location.target.value.toLowerCase();
    this.setState({location: userInput});
    localStorage.setItem('location', userInput);
  }

  ajaxRequest() {
    let userLocation = this.state.location;
    let locationURL = userLocation.replace(' ','-');
    if (this.state.location !== ''){
      $.get('http://weatherly-api.herokuapp.com/api/weather/' + locationURL ,function(success){
        this.setState({forecast: success});
      }.bind(this));
    }
  }

  componentDidMount () {
    let savedLocation = JSON.parse(localStorage.getItem('location'));
    if (savedLocation !== undefined){
      this.setState({location: savedLocation});
    }
  }

  render(){
    let forecast;
    let weatherAlert;

    if (this.state.extremeWeather === true) {
      weatherAlert = (<div> {this.state.extremeWeather} forecasted for your area! Be aware! </div>);
    }
    if (this.state.forecast.length){
      forecast = <ForecastField data={this.state.forecast}/>;
    } else {
      forecast = (<p> Submit a city!!  </p>);
    }
    return (
    <div className="location">
      <header id="header">
        <LocationSearch setLocation={(event) => this.setLocation(event)}/>
        <SubmitButton  handleClick={() =>this.ajaxRequest()}/>
      </header>
      {weatherAlert}
      {forecast}
    </div>
    )
  }
};

module.exports = App;
