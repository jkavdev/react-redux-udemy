import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import About from '../about/about'
import Todo from '../todo/todo'

//Router - recebera as rotas do sistema e implementa um tipo de historico, no caso hashHistory
//Route - eh a rota, indicamos o caminho no qual devemos acessar e o componente responsavel por aquele caminho
//Redirect - sera ativado quando for requisitado qualquer coisa diferente das rotas especificadas
export default props => (
  <Router history={hashHistory}>
    <Route path='/todos' component={Todo} />
    <Route path='/about' component={About} />
    <Redirect from='*' to='/todos' />
  </Router>
)