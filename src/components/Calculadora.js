import React, { Component } from 'react';

import './css/calculadora.css'

//Containers
import Somar from './../containers/SomarValor'
import ResultadoDaSoma from './../containers/Resultado'

class Calculadora extends Component {
  render() {
    const { title, tipo } = this.props

    return (
      <div>
        <p className="title">{title}</p>
        {tipo === "1" &&
          <div>
            <ResultadoDaSoma />
            <Somar />
          </div>
        }
      </div>
    )
  }
}

export default Calculadora