import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {
    render () {

        let ingredientComps = this.props.ingredients.map((item, index) => {
            return <Ingredient ingredient={item.name} color={item.color} key={`key${index}`} />
        })

        return (
            <ul>
               <li onClick={this.props.addToBurger} >
               { ingredientComps }
               </li>
            </ul>
        )
    }
}

export default IngredientList