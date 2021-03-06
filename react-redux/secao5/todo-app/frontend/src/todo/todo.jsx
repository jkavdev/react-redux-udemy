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
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    //atualiza o estado do componente lista e descricacao, utilizado no inicio do render, e como callback de outras funcoes

    //fara a busca de acordo com um descricao, se nao passarmos uma nao nao adicionamos ela a codicao da busca

    //quando usarmos refresh precimas indicar a descricao de cada contexto de cada acao que devemos realizar
    //tipo quando adicionar, nao precisa informar uma descricao
    //mas quando for exluir, ou alterar indicamos o valor como o estado atual do componente de busca
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    //realiza a busca do bota de acordo com a descricao do campo
    handleSearch() {
        this.refresh(this.state.description)
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
            .then(resp => this.refresh(this.state.description))
    }

    //altera a tarefa para finalizada
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    //altera a tarefa para nao finalizada
    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    //delega para refresh, pois refresh tambem limpa o campo de busca e traz os resultados novamente
    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>

                <TodoForm
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}