var React = require('react');
const Weekday = require('./weekdays');


class ForecastField extends React.Component {
    constructor() {
      super();
    }
  render() {
    return (
      <section>
    forecast.map()

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


// use map to return a new component for each day -- pass the array down as a prop and iterate through  pass weather object to weekday component

module.exports = ForecastField;
