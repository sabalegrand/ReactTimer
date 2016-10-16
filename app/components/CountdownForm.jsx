import React from 'react';

class CountdownForm extends React.Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();
    const strSecondes = this.refs.seconds.value;

    if (strSecondes.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(+strSecondes);
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in secondes"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }

}

export default CountdownForm;
