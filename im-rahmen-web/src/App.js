import React, { Component } from 'react';
import './styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
          {this.props.children}
      </div>
    );
  }
}

export default App;
