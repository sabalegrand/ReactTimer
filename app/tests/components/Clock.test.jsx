import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Clock from '../../components/Clock';



describe('Clock', function() {
  it('should exist', function() {
    expect(Clock).toExist();
  });

  describe('render', function() {
    it('should render clock to output', function() {
      const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);;
      const $el = $(ReactDOM.findDOMNode(clock)); // converti clock en l'html qui sera render dans le browser

      const actual = $el.find('.clock-text').text();
      const expected = '01:02';

      expect(actual).toBe(expected);
    });
  });

  describe('formatSecondes', function() {
    it('should format secondes', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 615;
      const expected = '10:15';
      const actual = clock.formatSecondes(seconds);

      expect(actual).toBe(expected);
    });

    it('should format secondes when min/sec are less than 10', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 61;
      const expected = '01:01';
      const actual = clock.formatSecondes(seconds);

      expect(actual).toBe(expected);
    });
  });
});
