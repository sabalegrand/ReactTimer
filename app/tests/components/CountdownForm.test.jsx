import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import CountdownForm from '../../components/CountdownForm';

describe('CountdownForm', function() {

  it('should exist', function() {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', function() {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '123';
    TestUtils.Simulate.submit($el.find('form')[0]); // attends un element dom et non jquery

    expect(spy).toHaveBeenCalledWith(123);
  });

  it('should not call onSetCountdown if valid seconds entered', function() {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'aze';
    TestUtils.Simulate.submit($el.find('form')[0]); // attends un element dom et non jquery

    expect(spy).toNotHaveBeenCalled();
  });

});
