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
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }

    //atualiza o estado do componente lista e descricacao, utilizado no inicio do render, e como callback de outras funcoes
    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
    }

    //Alterando o estado do componente de acordo com os valores atualizados passados pelo evento
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    //Cadastrando a tarefa
    handleAdd() {
        const description = this.state.description
        //usando o axios para o cadastro
        //ele recebe a url, os dados a irem no servico, e uma funcao de callback
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    //removendo as tarefas passando o todo com o id
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    //altera a tarefa para finalizada
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh())
    }

    //altera a tarefa para nao finalizada
    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>

                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <TodoList 
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}