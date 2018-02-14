import React, { Component } from 'react';

import './css/calculadora.css'

//Containers
import Somar from './../containers/SomarValor'
import ResultadoDaSoma from './../containers/Resultado'

class App extends Component {
  render() {
    return (
      <div className="bgimg-1 box">
        <p className="title">Somar</p>
        <ResultadoDaSoma />
        <Somar />
      </div>
    )
  }
}

export default App