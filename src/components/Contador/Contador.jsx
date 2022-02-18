import React, { Component } from 'react'

export default class Contador extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: this.props.valorInicial,
            loggedIn: false
        }
    }

    handleSumar = () => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    handleRestar = () => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    handleReset = () => {
        this.setState({
            contador: this.props.valorInicial
        })
    }

    handleLogin = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    render() {
        return (
            <>
                <h3>Contador</h3>
                <button onClick={() => this.handleSumar()}> + 1 </button>
                <button onClick={() => this.handleRestar()}> - 1 </button>
                <button onClick={() => this.handleReset()}> Reset </button>
                <button onClick={() => this.handleLogin()} disabled={this.state.loggedIn}> Login </button>
                <button onClick={() => this.handleLogin()} disabled={!this.state.loggedIn}> Log out </button>
                <h5>Resultado: {this.state.contador}</h5>

                <button onClick={() => this.props.handleSubmitNumber(this.state.contador)}> Registar número </button>
            </>
        )
    }
}
