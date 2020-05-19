import React, { Component } from 'react';
// import Counter from './components/Counter';
import Counter2 from './components/Counter2';

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
        {this.state.showCounter && <Counter2 />}
      </div>
    );
  }
}

export default App;
