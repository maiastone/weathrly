var React = require('react');
var ReactDOM = require('react-dom');
require('./container/promptcontainer');
const PromptContainer = require('./container/promptcontainer');
// var UserLocation = require('../userlocation');



ReactDOM.render(
  <PromptContainer />,
  document.getElementById('app')
);

//
// ReactDOM.render(
//   <CommentBox url="/api/comments" />,
//   document.getElementById('content')
// );
