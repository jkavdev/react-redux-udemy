import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Kolen'>
        <Member name='Jhonatan' />
        <Member name='Maria' />
        <Member name='Lucas' />
        <Member name='Douglas' />
    </Family>
    , document.getElementById('app'))