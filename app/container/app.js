/*jshint esversion: 6 */
require('../style/reset');
require('../style/style');
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
      forecast: []
    };
  }

  setLocation(location){
    let userInput = location.target.value
    this.setState({location: userInput});
  }

  ajaxRequest() {
    let userLocation = this.state.location;
    let locationURL = userLocation.replace(' ','-');
    $.get('http://weatherly-api.herokuapp.com/api/weather/' + locationURL ,function(success){
      this.setState({forecast: success});
    }.bind(this));
  }

  render(){
    let forecast;
    if (this.state.forecast.length){
      forecast = <ForecastField data={this.state.forecast}/>;
    }
    return (
    <div className="location">
      <header id="header">
      <LocationSearch setLocation={(event) => this.setLocation(event)}/>
      <SubmitButton  handleClick={() =>this.ajaxRequest()}/>
      </header>
      {forecast}
    </div>
    )
  }
};

module.exports = App;
