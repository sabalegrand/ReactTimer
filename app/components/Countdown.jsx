import React from 'react';

import Clock from './Clock';
import CountdownForm from './CountdownForm';
import CountdownControls from './CountdownControls';

class Countdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };

        this.startTimer = this.startTimer.bind(this);
        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    handleSetCountdown(seconds) {
        this.setState({count: seconds, countdownStatus: 'active'});
    }

    componentWillUnmount() {
      clearInterval(this.timer);
      this.timer = undefined;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'active':
                  this.startTimer();
                  break;
                case 'stopped':
                  this.setState({
                    count: 0
                  });
                case 'paused':
                  clearInterval(this.timer);
                  this.timer = undefined;
                  break;
            }
        }
    }

    startTimer() {
        this.timer = setInterval(() => {
            let  newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0
                    ? newCount
                    : 0
            });

            if ( newCount <= 0 ) {
              this.setState({
                countdownStatus: 'stopped'
              });
            }
        }, 1000);
    }

    handleStatusChange (newStatus) {
      this.setState({
        countdownStatus: newStatus
      });
    }

    render() {
        const {count, countdownStatus} = this.state;
        const handleStatusChange = this.handleStatusChange;
        const handleSetCountdown = this.handleSetCountdown;

        function controls() {
          if(countdownStatus === 'stopped') {
            return (
               <CountdownForm onSetCountdown={handleSetCountdown}/>
            );
          } else {
            return (
              <CountdownControls countdownStatus={countdownStatus} onStatusChange={handleStatusChange}/>
            );
          }
        }

        return (
            <div>
              <h1 className="page-title">Countdown App</h1>
              <Clock totalSeconds={count}/>
              {controls()}
            </div>
        );
    }

}

export default Countdown;
