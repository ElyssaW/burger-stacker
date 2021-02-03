import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render () {
        return (

            this.props.ingredients.map(ingredient => {
                return < Ingredient 
                    color={ingredient.color} 
                    name={ingredient.name}
                    onClick={this.props.onClick}
                />
            })
            
        )
    }
}

export default IngredientList