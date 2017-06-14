import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

//Utilizando metodo util para componentes do react
export default props => (
    <div>
        <h1>Família</h1>
        {childrenWithProps(props.children, props)}
    </div>
)
