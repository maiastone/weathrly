var React = require('react');
var $ = require('jquery');

const SubmitButton = require('../components/submitbutton');
const ForecastField = require('../components/forecastfield');

var PromptContainer = React.createClass({

  render: function() {
    return (
    <div aria-role="search" className="location">
      <LocationSearch />
      <ForecastField />
    </div>
    )
  }
});

class LocationSearch extends React.Component {
  constructor() {
    super();
    this.state = {location: ''};
  }
  ajaxRequest() {
    var userLocation = this.state.location;
    var locationURL = userLocation.replace(' ','-');
    $.get('http://weatherly-api.herokuapp.com/api/weather/' + locationURL ,function(success){console.log(success)}.bind(this))
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

          <SubmitButton details={this.state.location} handleClick={this.ajaxRequest()}/>
        </div>
      </div>
    )
  }
}


module.exports = PromptContainer;
