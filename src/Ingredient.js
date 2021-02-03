import React, { Component } from 'react'

class Ingredient extends Component {
    render () {
        return (
            <p style={{color: this.props.color}}>
                {this.props.ingredient}
            </p>
        )
    }
}

export default Ingredient