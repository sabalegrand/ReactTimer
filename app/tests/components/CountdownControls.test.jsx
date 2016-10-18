import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import CountdownControls from '../../components/CountdownControls';


describe('Controls', function() {
  it('should exist', function() {
    expect(CountdownControls).toExist();
  });

  describe('render', function() {
    it('should render Pause when started', function() {
      const countdownControls = TestUtils.renderIntoDocument(<CountdownControls countdownStatus="active"/>);
      const $el = $(ReactDOM.findDOMNode(countdownControls));
      const $pauseButton = $el.find('button:contains(Pause)')

      expect($pauseButton.length).toBe(1);
    });

    it('should render Start when paused', function() {
      const countdownControls = TestUtils.renderIntoDocument(<CountdownControls countdownStatus="paused"/>);
      const $el = $(ReactDOM.findDOMNode(countdownControls));
      const $startButton = $el.find('button:contains(Start)')

      expect($startButton.length).toBe(1);
    });

  });
});
