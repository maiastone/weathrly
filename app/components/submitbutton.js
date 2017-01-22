const React = require('react');

class SubmitButton extends React.Component {

  render() {
    return (
      <button tabIndex="0" className="submit-button" onClick={this.props.handleClick} type="submit">
        <img src="/app/style/images/search.svg" alt="search"/>
      </button>
    )
  }
};



module.exports = SubmitButton;
