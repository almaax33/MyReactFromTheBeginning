import React, { Component } from 'react'

class StateInAction extends Component{
    constructor(){
        super()
        this.state = {
            name: 'LUKE',
            text: 'TU MATASTE A MI PADRE'
        }
        setTimeout(()=>{
            this.setState({ 
                name: 'DARTH VADER',
                text: 'NOOOO LUKE, YO SOY TU PADRE'
            })
        }, 3000)
    }
    render(){
        return(
        <h1>{this.state.name} - {this.state.text}</h1>
        )
    }
}

export default StateInAction