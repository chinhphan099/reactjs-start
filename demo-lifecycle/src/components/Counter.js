import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrease() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    console.log('Counter render');
    return (
      <div className="counter">
        <button onClick={this.decrease}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.increase()}>+</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.count === nextState.count) {
      return false;
    }
    return true;
  }
}

export default Counter;
