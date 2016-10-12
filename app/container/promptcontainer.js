var React = require('react');

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

  render() {
    return(
      <div>
        <h1>Enter your location</h1>
        <div>
          <input
          placeholder="location" aria-label="search location"
          value={this.state.location}
          onChange={(e)=> {this.setState({location: e.target.value})}}
          type="text" />

          <button className="submit-button"
          type="submit">Get Weather
          </button>
        </div>
      </div>
    )
  }
}

module.exports = PromptContainer;
