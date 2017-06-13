import React from 'react'

//Um componente do react tambem recebe as propriedades do componente
// export default (props) => (
//     <h1>{props.value}</h1>
// )

//podemos simplificar ainda mais, pois como eh uma arrow function
//e recebe apenas um parametro, podemos omitir o nome e os () dos parametros, 
//Indicamos apenas o parametro a ser recebido
export default props => (
    <h1>{props.value}</h1>
)
