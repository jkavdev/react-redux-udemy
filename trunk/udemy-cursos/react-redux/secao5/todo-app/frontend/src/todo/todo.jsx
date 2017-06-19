import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoList from './todoList'
import TodoForm from './todoForm'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        //Atribuindo estado inicial do componente
        this.state = { description: '', list: [] }

        //precisamos ligar o contexto da funcao com o contexto do componente
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    //Alterando o estado do componente de acordo com os valores atualizados passados pelo evento
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value})
    }

    handleAdd() {
        console.log(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>

                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <TodoList />
            </div>
        )
    }
}