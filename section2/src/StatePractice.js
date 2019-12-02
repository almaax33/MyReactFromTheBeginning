import React, { Component } from 'react'

class StatePractice extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
    }
    handleFocus= (event) => {
        this.setState({
            text: 'u agree'
        })
        console.log(this.state.text)
        console.log(event   )
    }
    render() {
        return (
            <form>
                <input onFocus={ this.handleFocus } type="text" placeholder="Enter some text!" />
                <h3>
                    { this.state.text }
                </h3>
            </form>
        )
    }
}

export default StatePractice