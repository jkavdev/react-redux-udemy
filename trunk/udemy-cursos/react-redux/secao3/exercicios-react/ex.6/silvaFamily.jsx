import React from 'react'
//Importando componente customizado
import Member from './member'

export default props => (
    //Instanciacao de cada componenete com valores diferentes
    <div>
        <Member name='Jhonatan' lastName='Kolen' />
        <Member name='Maria' lastName='Helena' />
        <Member name='Lucas' lastName='Kolen' />
        <Member name='Douglas' lastName='Kolen' />
    </div>
)
