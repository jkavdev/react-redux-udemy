import React from 'react'

//Componente padrao que recebe as propriedade, e devolve o nome e o sobrenome em negrito
export default props => (
    <div>{props.name} <strong>{props.lastName}</strong></div>
)
