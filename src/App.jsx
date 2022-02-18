import React, { Component } from 'react'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Clock from './components/Clock/Clock';
import Saludo from './components/Saludo/Saludo'
import Contador from './components/Contador/Contador';

export default class App extends Component {

  menuItems = ['Home', 'Marketplace', 'Cart', 'Login']

  handleSubmitNumber = (contador) => {
    console.log(contador)
  }

  render() {
    return (
      <>
        <Navbar items={this.menuItems} />
        <Clock />
        <Contador valorInicial={50} handleSubmitNumber={(contador) => this.handleSubmitNumber(contador)} />
        <Saludo nombre={'Pepe'} edad={32} apellido={'Gomez'} />
        <Footer />
      </>
    )
  }
}
