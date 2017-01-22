const React = require('react');

class LocationSearch extends React.Component {

  render() {
    return(
      <div id="app-header">
        <h1>Weathrly</h1>
        <input id="city"
        placeholder="search location" aria-label="search location"
        onChange={(event) => this.props.setLocation(event)}
        type="text" />
      </div>
    )
  }
};



module.exports = LocationSearch;
