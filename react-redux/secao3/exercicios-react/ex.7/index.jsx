import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family>
        <Member name='Jhonatan' lastName='Kolen' />
        <Member name='Maria' lastName='Helena' />
        <Member name='Lucas' lastName='Kolen' />
        <Member name='Douglas' lastName='Kolen' />
    </Family>
    , document.getElementById('app'))

//E se quisermos informar uma propriedade em um componente pais e propagar esta mudanca
//Para os componentes filhos
// ReactDOM.render(
//     <Family lastName='Kolen'>
//         <Member name='Jhonatan' />
//         <Member name='Maria' />
//         <Member name='Lucas' />
//         <Member name='Douglas' />
//     </Family>
//     , document.getElementById('app'))