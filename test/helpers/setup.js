
require('locus')
require('babel-register');
require('babel-polyfill');

global.document = require('jsdom').jsdom(
  "<head> <meta charset='UTF-8'><title>React In Theory</title></head><body><div id='application'></div>"
);

global.window = document.defaultView;
global.navigator = window.navigator;

if (!global.window.localStorage) {
  localStorage = {
    getItem() { return '{}'; },
    setItem() {}
  };
}
if (typeof(exports) !== "undefined"){
  var $ = require('jquery');
}
