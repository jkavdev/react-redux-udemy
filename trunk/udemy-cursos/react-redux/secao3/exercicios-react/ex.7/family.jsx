import React from 'react'

//Deixando o componente mais generico
//{props.children} - retorna os componentes filhos que forem especificados
export default props => (
    <div>
        <h1>Família</h1>
        {props.children}
    </div>
)
