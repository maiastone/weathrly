var React = require('react');


class SubmitButton extends React.Component {
    constructor() {
      super();
  // this.state??
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
