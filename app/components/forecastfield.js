var React = require('react');
const Weekday = require('./weekdays');


class ForecastField extends React.Component {
    constructor() {
      super();
    }
  render() {
    return (
      <section>
        Hey There! {this.props.data[0].date}
        <Weekday />
        <Weekday />
        <Weekday />
        <Weekday />
        <Weekday />
        <Weekday />
        <Weekday />
      </section>
    )
  }
};




module.exports = ForecastField;
