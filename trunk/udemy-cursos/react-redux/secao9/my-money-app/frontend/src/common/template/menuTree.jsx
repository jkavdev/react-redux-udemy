import React from 'react'

//{props.children} - informando que este componente pode ter outros componentes como filhos
export default props => (
  <li className='treeview'>
  <a href="">
    <i className={`fa fa-${props.icon}`}></i> {props.label}
    <i className='fa fa-angle-left pull-right'></i>
  </a>
  <ul className='treeview-menu'>
    {props.children}
  </ul>
  </li>
)