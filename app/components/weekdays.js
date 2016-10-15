var React = require('react');

class Weekday extends React.Component {
    constructor() {
      super();
    }
  render() {
    return (
      <section>
        {this.props.data}
      </section>
    )
  }
};




module.exports = Weekday;
