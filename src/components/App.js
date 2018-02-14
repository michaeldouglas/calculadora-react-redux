import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Calculadora from './Calculadora'
import Menu from './Menu'

import './css/calculadora.css'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <section className="box">
          <Route exact path="/" render={() => (
            <Calculadora
              title="Somar"
            />
          )}/>
          <Route exact path="/subtrair" render={() => (
            <Calculadora
              title="Subtrair"
            />
          )}/>
          <Route exact path="/dividir" render={() => (
            <Calculadora
              title="Dividir"
            />
          )}/>
          <Route exact path="/multiplicar" render={() => (
            <Calculadora
              title="Multiplicar"
            />
          )}/>
        </section>
      </div>
    )
  }
}

export default App