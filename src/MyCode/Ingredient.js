import React, { Component } from 'react'

class Ingredient extends Component {
    render () {
        return (
            <button
                onClick={this.props.onClick}
                value={this.props.color}
                >
                    {this.props.name}
            </button>
        )
    }
}

export default Ingredient