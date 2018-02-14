import React, { Component } from 'react';

import './css/calculadora.css'

//Containers
import Somar from './../containers/SomarValor'
import ResultadoDaSoma from './../containers/Resultado'

class Soma extends Component {
  render() {
    return (
      <div>
        <p className="title">Somar</p>
        <ResultadoDaSoma />
        <Somar />
      </div>
    )
  }
}

export default Soma