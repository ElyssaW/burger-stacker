import BurgerStack from './BurgerStack.js'
import ClearBurger from './ClearBurger'

function BurgerPane(props) {
    return (
        <div>
            < BurgerStack layers={props.layers} />
            < ClearBurger clear={props.clear} />
        </div>
    )
}

export default BurgerPane