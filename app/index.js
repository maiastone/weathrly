var React = require('react');
var ReactDOM = require('react-dom');
require('./container/promptcontainer');
// var UserLocation = require('../userlocation');
const PromptContainer = require('./container/promptcontainer');



ReactDOM.render(
  <PromptContainer />,
  document.getElementById('app')
);
