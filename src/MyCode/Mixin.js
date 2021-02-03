import React, { Component } from 'react'

class Mixin extends Component {
    render () {
        return (
            <h1 style={{color: this.props.ingredient.color}}>
                {this.props.ingredient.name}
            </h1>
        )
    }
}

export default Mixin