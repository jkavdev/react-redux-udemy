import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

//passando apenas o nome de cada membro da familia
ReactDOM.render(
    <Family lastName='Kolen'>
        <Member name='Jhonatan' />
    </Family>
    , document.getElementById('app'))

//mas e quando queremos informar para varios filhos
//gerara erro, pois o componente espera uma string
// ReactDOM.render(
//     <Family lastName='Kolen'>
//         <Member name='Jhonatan' />
//         <Member name='Maria' />
//         <Member name='Lucas' />
//         <Member name='Douglas' />
//     </Family>
//     , document.getElementById('app'))