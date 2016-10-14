/*jshint esversion: 6 */
const React = require('react');
const $ = require('jquery');
const SubmitButton = require('../components/submitbutton');
const ForecastField = require('../components/forecastfield');

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      location: '',
      forecast: ''
    };
  }
  ajaxRequest() {
    var userLocation = this.state.location;
    var locationURL = userLocation.replace(' ','-');
    $.get('http://weatherly-api.herokuapp.com/api/weather/' + locationURL ,function(success){
      this.setState({forecast: success});
    }.bind(this));
  }

  render(){
    let forecast;

    if (this.state.forecast){
      forecast = <ForecastField data={this.state.forecast}/>;
      console.log(this.state.forecast);
    } else {
      forecast = '';
    }
    return (
    <div className="location">
      <LocationSearch setLocation={this.ajaxRequest.bind(this)}/>
      <SubmitButton  handleClick={this.ajaxRequest()}/>
      {forecast}
    </div>
    )
  }

};

class LocationSearch extends React.Component {
  constructor() {
    super();
    this.state = {location: ''};
  }

  render() {
    return(
      <div>
        <h1>Enter your location</h1>
        <div>
          <input
          placeholder="location" aria-label="search location"
          value={this.state.location}
          onChange={(event)=> {this.setState({location: event.target.value})}}
          type="text" />
        </div>
      </div>
    )
  }
}


module.exports = App;
