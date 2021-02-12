
function Ingredient (props) {
    return (
        <p style={{color: props.color}}>
            {props.ingredient}
        </p>
    )
}

export default Ingredient