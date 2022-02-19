import React, { Component } from 'react'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Clock from './components/Clock/Clock';
import Saludo from './components/Saludo/Saludo'
import Contador from './components/Contador/Contador';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numerosRegistrados: []
    }
  }

  menuItems = ['Home', 'Marketplace', 'Cart', 'Login']

  handleSubmitNumber = (contador) => {
    this.setState({
      numerosRegistrados: [...this.state.numerosRegistrados, contador]
    })
  }

  render() {
    return (
      <>
        <Navbar items={this.menuItems} />
        <Clock />
        <Contador valorInicial={50} handleSubmitNumber={(contador) => this.handleSubmitNumber(contador)} />
        <h3>Numeros registrados:</h3>
        <ul>
          {this.state.numerosRegistrados.map((num, i) => {
            return <li key={i}>{num}</li>
          })}
        </ul>
        {/* <Saludo nombre={'Pepe'} edad={32} apellido={'Gomez'} /> */}
        <Footer />
      </>
    )
  }
}
