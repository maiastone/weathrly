const React = require('react');

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

module.exports = LocationSearch;
