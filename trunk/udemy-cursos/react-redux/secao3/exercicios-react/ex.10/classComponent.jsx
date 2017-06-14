//Importando component para criacao dos components
import React, { Component } from 'react'

//Criando componente default
export default class ClassComponent extends Component {

    //todo componente herdado de component tem que sobreescrever o metodo render
    render() {
        return (
            // {this.props.value} - this.props, eh um atributo de component por isso nao podemos alterar seu nome
            <h1>{this.props.value}</h1>
        )
    }
}