import React, { Component } from 'react' 
import BurgerStack from './BurgerStack.js'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    render () {
        return (
            <div>
                < BurgerStack layers={this.props.layers} />
                < ClearBurger clear={this.props.clear} />
            </div>
        )
    }
}

export default BurgerPane