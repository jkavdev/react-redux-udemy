import React from 'react'

// export default function() {
//     return <h1>Primeiro Componente</h1>
// }

// export default () => {
//     return <h1>Primeiro Componente</h1>
// }

//Nao precisamos indicar um retorno, retorno eh implicito
// export default () => <h1>Primeiro Componente</h1>

//utilizando () estamos indicando que eh o retorno da funcao
export default () => (
    <h1>Primeiro Componente</h1>
)

//Usando chaves estamos utilizando o corpo da funcao
// export default () => {
//     <h1>Primeiro Componente</h1>
// }
