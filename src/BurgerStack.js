import React, { Component } from 'react'
import Ingredient from './Ingredient.js'

class BurgerStack extends Component {
    render () {

        let layers = this.props.layers.map((layer, i) => {
            return < Ingredient ingredient={layer.name} color={layer.color}
            key={`key${i}`} />
        })

        return (
            <ul>
                {layers}
            </ul>
        )
    }
 }

 export default BurgerStack