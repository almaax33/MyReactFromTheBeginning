import React, { Component } from 'react'

class StateAndEvent extends Component{
    constructor(){
        super()
        this.state = {
            text: ""
        }
    }
    handleClick(){
        console.log("Test")
    }

    handleChange = (event) =>{
        this.setState({
            text: event.target.value
        })
        console.log("User change input!!")
    }

    handleSumbit = (event) => {
        console.log("Form submitted state!", this.state.text)
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSumbit}>
                    <button onClick={this.handleClick} className="btn">Click Me!</button>
                    <input onChange={this.handleChange} type="text" placeholder="Enter some text!" />
                </form>
            </div>
        )
    }
}

export default StateAndEvent