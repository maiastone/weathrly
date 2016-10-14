var React = require('react');


class ForecastField extends React.Component {
    constructor() {
      super();
    }

  render() {
    return (
      <section>
        Hey There! {this.props.data[0].date}
      </section>
    )
  }
};




module.exports = ForecastField;
