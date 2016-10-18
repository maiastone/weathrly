var expect = require('chai').expect;
var assert = require('chai').assert;
const React = require('react');
const $ = require('jquery');
const SubmitButton = require('../app/components/submitbutton');
const ForecastField = require('../app/components/forecastfield');
const LocationSearch = require('../app/components/locationsearch');
const App = require('../app/container/app');
require('locus')
import { shallow, mount, render } from 'enzyme';


describe('app.js', function(){
  it('renders an input field on the page', function() {
    const wrapper = mount (<App/>);
    wrapper.find('#city').simulate('change', {target: {value: 'denver'} });
    expect(wrapper.state('location')).to.equal('denver');
  });

  it('renders a button on the page', function(){
    const wrapper = mount (<App/>);
    wrapper.find('#city').simulate('change', {target: {value: 'denver'} });
    expect(wrapper.state('location')).to.equal('denver');
  });
});
