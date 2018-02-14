import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import './css/menu.css'

class Menu extends Component {
    render() {
        return (
            <header>
                <Link to="/" className="logo" data-scroll>
                    <FontAwesome name='calculator' /> Calculadora 
                </Link>
                <nav className="nav-collapse">
                    <ul>
                        <li className="menu-item">
                            <Link to="/" data-scroll>Somar</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/subtrair" data-scroll>Subtrair</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/dividir" data-scroll>Dividir</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/multiplicar" data-scroll>Multiplicar</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Menu