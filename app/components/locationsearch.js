const React = require('react');

class LocationSearch extends React.Component {
  constructor() {
    super();
    this.state = {location: ''};
  }

  render() {
    return(
      <div>
        <div>
          <h1>Weathrly</h1>
          <input
          placeholder="search location" aria-label="search location"
          onChange={(event) => this.props.setLocation(event)}
          type="text" />
        </div>
      </div>
    )
  }
}

module.exports = LocationSearch;
