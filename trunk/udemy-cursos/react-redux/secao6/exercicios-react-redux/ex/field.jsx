import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.handleChange} value={this.props.value} />
            </div>
        )
    }
}

//Metodo que ligara o estado do reduce para os props do componente
function mapStateToProps(state) {
    //este state, eh o state do reduce declarado no combineReducers
    return {
        value: state.field.value
    }
}

//O connect recebe o metodo de parse dos atributos e um componente
//E retorna o componente recebido com todos os atributos mapeados pelo stateToProps para o 
//props do componente
export default connect(mapStateToProps)(Field)