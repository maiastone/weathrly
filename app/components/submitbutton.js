const React = require('react');

class SubmitButton extends React.Component {
    constructor() {
      super();
    }

  render() {
    return (
      <button className="submit-button"
      onClick={this.props.handleClick}
      type="submit">Get Weather
      </button>
    )
  }
};









module.exports = SubmitButton;
