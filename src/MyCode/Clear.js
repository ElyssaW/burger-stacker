import React, { Component } from 'react'

class Clear extends Component {
    render () {
        return (
            <button onClick={this.props.onClick}>Clear</button>
        )
    }
}

export default Clear