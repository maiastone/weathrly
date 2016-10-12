var React = require('react');

var PromptContainer = React.createClass({
  render: function() {
    return (
    <div className="location">
      <h1>Enter your location</h1>
              <div>
                    <input
                    placeholder="location"
                    type="text" />

                    <button className="submit-button"
                    type="submit">Get Weather
                    </button>

              </div>
    </div>
  )
  }
});

module.exports = PromptContainer;
