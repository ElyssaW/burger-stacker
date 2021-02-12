import Ingredient from './Ingredient.js'

function BurgerStack (props) {
    let layers = props.layers.map((layer, i) => {
            return < Ingredient ingredient={layer.name} color={layer.color}
        key={`key${i}`} />
    })

    return (
        <ul>
            {layers}
        </ul>
    )
 }

 export default BurgerStack