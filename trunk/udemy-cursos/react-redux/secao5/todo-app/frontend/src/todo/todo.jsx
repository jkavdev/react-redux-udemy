import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoList from './todoList'
import TodoForm from './todoForm'

export default class Todo extends Component {

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>

                <TodoForm />
                <TodoList />
            </div>
        )
    }
}