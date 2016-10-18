import React, { PropTypes} from 'react';

class CountdownControls extends React.Component {

  constructor() {
    super();
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onStatusChange (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }

  render() {
    const { countdownStatus } = this.props;

    var renderStartStopButton = () => {
      if (countdownStatus === "active") {
        return (
          <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
        );
      } else if (countdownStatus === 'paused') {
        return (
          <button className="button primary" onClick={this.onStatusChange('active')}>Start</button>
        );
      }
    }


    return (
      <div className="countdown-controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick= {this.onStatusChange('stopped')}>
          Clear
        </button>
      </div>
    );
  }
}

CountdownControls.propTypes = {
  countdownStatus: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired
}

export default CountdownControls;
