import React from 'react';
import './App.css';

class  App extends React.Component {
  constructor() {
    super()
    this.state = {
      numClicks1: 0,
      numClicks2: 0,
      numClicks3: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handling = this.handling.bind(this);
    this.inhai = this.inhai.bind(this);
  }

  handleClick = () => {
    this.setState((estadoAtual, _props) => ({
      numClicks1: estadoAtual.numClicks1 + 1       
    }))
    if(this.state.numClicks1 % 2 === 0) {
      console.log('verde');
    }
  }
  
  handling = () => {
    this.setState((atual, _props) => ({
      numClicks2: atual.numClicks2 + 2
    }))
  }
  
  inhai = () => {
    this.setState((atual, _props) => ({
      numClicks3: atual.numClicks3 + 3
    }))
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>{this.state.numClicks1}</button>
        <button onClick={this.handling}>{this.state.numClicks2}</button>
        <button onClick={this.inhai}>{this.state.numClicks3}</button>        
      </div>
    );
  }
}

export default App;
