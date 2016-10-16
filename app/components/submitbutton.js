const React = require('react');

class SubmitButton extends React.Component {
    constructor() {
      super();
    }

  render() {
    return (
      <button className="submit-button" onClick={this.props.handleClick} type="submit">
        <img src="/app/style/images/search.svg"/>
      </button>
    )
  }
};



module.exports = SubmitButton;
