import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.removeCounter = this.removeCounter.bind(this);
    this.state = {
      showCounter: true
    };
  }

  componentDidUpdate() {
    console.log('App update');
  }

  removeCounter() {
    this.setState({
      showCounter: false
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.removeCounter()}>Remove Counter</button>
        {this.state.showCounter && <Counter />}
      </div>
    );
  }
}

export default App;
