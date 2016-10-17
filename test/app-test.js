var expect = require('chai').expect
var assert = require('chai').assert
const React = require('react');
const $ = require('jquery');
const SubmitButton = require('../app/components/submitbutton');
const ForecastField = require('../app/components/forecastfield');
const LocationSearch = require('../app/components/locationsearch');
const App = require('../app/container/app');
import { shallow, mount, render } from 'enzyme';


describe('app.js', function(){
  it('renders an input field on the page', function() {


    shallow(<App />).contains(<LocationSearch />).to.be.true;


    // expect(browser.find('#app-header').to.have.length(1));
  })

  // it('renders a submit button', function(){
  //   const wrapper = render(<App />)
  //   expect(wrapper.contains(<SubmitButton handleClick={() => this.ajaxRequest()}/>).to.be.true
  // })

})
