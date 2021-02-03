
import React, { Component } from 'react'
import IngredientList from './IngredientList.js'
import Burger from './Burger.js'
import Clear from './Clear'

class Stacker extends Component {

  state = {
    ingredients: [
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
    ],
    layers: [
      {name: 'Kaiser Bun', color: 'saddlebrown'},
      {name: 'Sesame Bun', color: 'sandybrown'},
      {name: 'Gluten Free Bun', color: 'peru'}
    ],
    newIngredient: '',
    newColor: '',
  }

  addItem = (e) => {
    console.log('adding item')
    console.log(e.target.value)
    let tempLayers = this.state.layers
    let tempObject = {}
    tempObject.name = e.target.innerText
    tempObject.color = e.target.value
    tempLayers.unshift(tempObject)
    this.setState({
      layers: tempLayers
    })
  }

  newColorChange = (e) => {
    this.setState({
      newColor: e.target.value
    })
  }

  newIngredientChange = (e) => {
    this.setState({
      newIngredient: e.target.value
    })
  }

  addIngredient = (e) => {
    e.preventDefault()
    let tempIngredients = this.state.ingredients
    let tempNewItem = {}
    tempNewItem.color = this.state.newColor
    tempNewItem.name = this.state.newIngredient
    tempIngredients.push(tempNewItem)
    this.setState({
      ingredients: tempIngredients,
      newIngredient: '',
      newColor: ''
    })
  }

  removeLayer = () => {
    let tempLayers = this.state.layers
    tempLayers.shift()
    this.setState({
      layers: tempLayers
    })
  }

  clearStack = () => {
    this.setState({
      layers: []
    })
  }

  render () {
    return (
      <div>
          
          < IngredientList onClick={this.addItem} ingredients={this.state.ingredients} />
      
          < Burger onClick={this.removeLayer} layers={this.state.layers} />

          <form>
            <input
              type='text'
              placeholder='Type new ingredient here'
              onChange={this.newIngredientChange}
              value={this.newIngredient}
            />
            <input
              type='text'
              placeholder='Type ingredient color here'
              onChange={this.newColorChange}
              value={this.newColor}
            />

            <button onClick={this.addIngredient}>Submit</button>
          </form>
      
          < Clear onClick={this.clearStack} />
      
      </div>
    )
  }
}

export default Stacker
