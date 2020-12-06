import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 122 //time in seconds
    };
  }

  getHours() {
    return ("0" + Math.floor(this.state.secondsElapsed / 3600)).slice(-2);
  }

  getMinutes() {
    return ("0" + Math.floor((this.state.secondsElapsed % 3600) / 60)).slice(-2);
  }

  getSeconds() {
    return ("0" + (this.state.secondsElapsed % 60)).slice(-2);
  }

  startTime() {
    var _this = this;
    this.countdown = setInterval(function() {
      _this.setState({ secondsElapsed: _this.state.secondsElapsed - 1 });
    }, 1000);
  }

  resetTime() {
    this.reset = this.setState({
      secondsElapsed: (this.state.secondsElapsed = 0)
    });
  }

  pauseTime() {
    clearInterval(this.countdown);
  }


  render() {
    return (
      <div className="App">
        <h1>
          {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
        </h1>
        <button onClick={() => this.startTime()}>Start</button>
        <button onClick={() => this.pauseTime()}>Pause</button>
        <button onClick={() => this.resetTime()}>Reset</button>
      </div>
    );
  }
}

export default Timer;