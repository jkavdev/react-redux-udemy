import React, { Component } from 'react'
//vincula o componente com o state
import { connect } from 'react-redux'
//liga os actions creators com o props
import { bindActionCreators } from 'redux'
//action creator do componente
import { changeValue } from './fieldActions'

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.props.changeValue} value={this.props.value} />
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

//recebe um dispatch, que ira propagar a chamada
//e retorna os actionsCreators vinculado com o dispatch
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)
}

//O connect recebe o metodo de parse dos atributos e um componente
//E retorna o componente recebido com todos os atributos mapeados pelo stateToProps para o 
//props do componente
//Tambem recebe o mapeamento das actions creators para dentro do componente
export default connect(mapStateToProps, mapDispatchToProps)(Field)