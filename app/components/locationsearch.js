const React = require('react');

class LocationSearch extends React.Component {
  constructor() {
    super();
    this.state = {location: ''};
  }

  render() {
    return(
      <div id="app-header">
        <h1>Weathrly</h1>
        <input
        placeholder="search location" aria-label="search location"
        onChange={(event) => this.props.setLocation(event)}
        type="text" />
      </div>
    )
  }
};



module.exports = LocationSearch;
