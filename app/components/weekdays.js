const React = require('react');

class Weekday extends React.Component {

  render() {
    return (
      <section>
        {this.props.data}
      </section>
    )
  };
};


module.exports = Weekday;
