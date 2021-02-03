import { findByLabelText } from '@testing-library/react'
import React, { Component } from 'react'
import BurgerPane from './BurgerPane.js'
import IngredientList from './IngredientList'

const ingredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]

class App extends Component {

    state = {
        burgerIngredients: []
    }

    addLayer = (e) => {
        console.log('firing')
        let tempLayers = this.state.burgerIngredients

        let tempObject = {}
        tempObject.name = e.target.innerText
        tempObject.color = e.target.style.color

        tempLayers.unshift(tempObject)
        this.setState({
            burgerIngredients: tempLayers
        })
    }

    clear = () => {
        this.setState({
            burgerIngredients: []
        })
    }
    render () {
        return (
            <div style={{display: 'flex'}}>
                < IngredientList 
                addToBurger={this.addLayer} 
                ingredients={ingredients}/>

                < BurgerPane clear={this.clear} layers={this.state.burgerIngredients} />
            </div>
        )
    }
}

export default App