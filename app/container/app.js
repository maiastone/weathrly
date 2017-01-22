require('../style/reset');
require('../style/style');
require('../style/weather');
const React = require('react');
const $ = require('jquery');
const SubmitButton = require('../components/submitbutton');
const ForecastField = require('../components/forecastfield');
const LocationSearch = require('../components/locationsearch');

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      location: '',
      forecast: []
    };
  }

  setLocation(location){
    let userInput = location.target.value.toLowerCase();
    this.setState({location: userInput});
  }

  ajaxRequest() {
    let userLocation = this.state.location;
    let locationURL = userLocation.replace(' ','-');
    if (this.state.location !== ''){
      $.get('http://weatherly-api.herokuapp.com/api/weather/' + locationURL ,function(success){
        this.setState({forecast: success});
        localStorage.setItem('forecast', JSON.stringify(success));
      }.bind(this));
    }
  }

  componentDidMount () {
    let savedLocation = JSON.parse(localStorage.getItem('forecast'));
    if (savedLocation !== null){
      this.setState({forecast: savedLocation});
    }
  }

  render(){
    let forecast;

    if (this.state.forecast.length){
      forecast = <ForecastField data={this.state.forecast}/>;
    } else {
      forecast =
      (<h3> Please enter a valid city to see the forecast </h3>);
    }

    return (
    <div className="location">
      <header id="header">
        <LocationSearch setLocation={(event) => this.setLocation(event)}/>
        <SubmitButton handleClick={() => this.ajaxRequest()}/>
      </header>
      {forecast}
    </div>
    )
  }
};



module.exports = App;
