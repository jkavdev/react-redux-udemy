import React from 'react'

//Definindo logo com o nome da aplicacao
//E icone para minimizar e expandir logo da aplicacao
export default props => (
  <header className='main-header'>
    <a href="/#/" className='logo'>
      <span className='logo-lg'>
        <i className='fa fa-money'></i>
        <b> My</b> Money
      </span>
    </a>
    <nav className='navbar navbar-static-top'>
      <a className='sidebar-toggle' data-toggle='offcanvas'></a>
    </nav>
  </header>
)