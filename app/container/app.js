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
  setLocation(location){
    this.setState({location: location});
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
      <LocationSearch setLocation={this.setLocation().bind(this)}/>
      <SubmitButton  handleClick={this.ajaxRequest().bind(this)}/>
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
          onChange={this.props.setLocation(event)}
          type="text" />
        </div>
      </div>
    )
  }
}


module.exports = App;
