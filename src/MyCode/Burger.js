import React, { Component } from 'react'
import Mixin from './Mixin.js'

class Burger extends Component {
    render () {
        return (
            <div>

                {
                    this.props.layers.map((layer, i) => {
                        if (i === 0) {
                            return (
                                <>
                                    < Mixin ingredient={layer} />
                                    <button onClick={this.props.onClick}>Remove</button>
                                </>
                            )
                        } else {
                            return < Mixin ingredient={layer} />
                        }
                    })
                }

            </div>
        )
    }
}

export default Burger