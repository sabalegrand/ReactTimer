import React, { PropTypes } from 'react';


class Clock extends React.Component {

  formatSecondes (totalSeconds) {
    let total = totalSeconds;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if ( seconds < 10 ) {
      seconds = '0' + seconds;
    }
    if ( minutes < 10 ) {
      minutes = '0' + minutes;
    }
    // if ( minutes > 59 ) {
    //   minutes = 59;
    //   seconds = 59;
    // }

    return minutes + ':' + seconds;
  }

  render() {
    const { totalSeconds } = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSecondes(totalSeconds)}
        </span>
      </div>
    );
  }
}

Clock.defaultProps = {
  totalSeconds: 0
};

Clock.propTypes = {
  totalSeconds: PropTypes.number
}


export default Clock;
