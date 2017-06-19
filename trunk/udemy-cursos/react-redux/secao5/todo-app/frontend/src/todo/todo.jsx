import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoList from './todoList'
import TodoForm from './todoForm'

const URL = 'http://localhost:3003/api/todos'

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

    //Cadastrando a tarefa
    handleAdd() {
        const description = this.state.description
        //usando o axios para o cadastro
        //ele recebe a url, os dados a irem no servico, e uma funcao de callback
        axios.post(URL, {description})
            .then(resp => console.log('Cadastrou a tarefa........'))
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