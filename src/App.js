import React, { useState, useEffect } from 'react'
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

function App () {

    let [burgerIngredients, setBurgerIngredients] = useState([
                {name: 'Tomato', color: 'tomato'},
                {name: 'Bacon', color: 'maroon'},
                {name: 'Soy Patty', color: '#3F250B'}])

    const addLayer = (e) => {
        let tempLayers = burgerIngredients

        let tempObject = {}
        tempObject.name = e.target.innerText
        tempObject.color = e.target.style.color

        tempLayers.unshift(tempObject)
        setBurgerIngredients([...tempLayers])
    }

    const clear = () => {
        setBurgerIngredients([])
    }

    return (
        <div style={{display: 'flex'}}>
            <h1>Ingredients</h1>
            < IngredientList 
            addToBurger={addLayer} 
            ingredients={ingredients}/>

            <h1>Burger</h1>
            < BurgerPane clear={clear} layers={burgerIngredients} />
        </div>
    )
}

export default App