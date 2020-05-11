import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.inputElement.current.focus();
  }

  render() {
    console.log('render');
    return (
      <div className="App">
        <input type = "input" ref={this.inputElement} />
      </div>
    )
  }
}

export default App;
