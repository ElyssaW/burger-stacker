import Ingredient from './Ingredient'

function IngredientList (props) {
    let ingredientComps = props.ingredients.map((item, index) => {
        return <Ingredient ingredient={item.name} color={item.color} key={`key${index}`} />
    })

    return (
        <ul>
           <li onClick={(e)=>{props.addToBurger(e)}} >
           { ingredientComps }
           </li>
        </ul>
    )
}

export default IngredientList