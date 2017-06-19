import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoList from './todoList'
import TodoForm from './todoForm'

export default class Todo extends Component {

    constructor(props) {
        super(props)

        //precisamos ligar o contexto da funcao com o contexto do componente
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        console.log('Adicionando.....')
        //tem que ser o contexto do componente
        console.log(this)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>

                <TodoForm handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}