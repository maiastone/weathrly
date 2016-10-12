var React = require('react');
var $ = require('jquery');

const SubmitButton = require('../components/submitbutton')

var PromptContainer = React.createClass({

  render: function() {
    return (
    <div aria-role="search" className="location">
      <LocationSearch />
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
    $.get('http://weatherly-api.herokuapp.com/api/weather',function(success){console.log(success)})
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

          <SubmitButton handleClick={this.ajaxRequest}/>
        </div>
      </div>
    )
  }
}


module.exports = PromptContainer;
