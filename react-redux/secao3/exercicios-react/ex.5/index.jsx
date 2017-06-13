import React from 'react'
import ReactDOM from 'react-dom'
//Importando um componente default, e um exportavel do arquivo component
import Primeiro, { Segundo } from './component'

//Por padrao todo retorno de um jsx, deve ser estar em uma tag html apenas
//Gerara erro pois estamos retornando dois componentes, solucao envelopar dentro de uma div por exemplo
// ReactDOM.render(
//         <Primeiro />
//         <Segundo />
//     , document.getElementById('app'))

ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
    , document.getElementById('app'))