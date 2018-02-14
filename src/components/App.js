import React, { Component } from 'react';
import Soma from './Somar'

import './css/calculadora.css'

class App extends Component {
  render() {
    return (
      <div className="box">
        <Soma />
      </div>
    )
  }
}

export default App