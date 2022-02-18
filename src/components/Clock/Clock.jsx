import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }

    tick(){
        console.log("// tick tock //")
        this.setState({
            date : new Date()
        })
    }

    componentDidMount(){
        console.log('componentDidMount - STARTING INTERVAL CLOCK')
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount - UNMOUNTING COMPONENT')
        clearInterval(this.timerID)
    }

    render() {
        return <>
            <h3>Reloj</h3>
            {this.state.date.toLocaleTimeString()}
        </>
    }
}
