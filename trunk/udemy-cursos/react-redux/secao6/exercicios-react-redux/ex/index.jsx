import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field'

//createStore - cria o estado unico, o estado pode ter varios atributos, varios estados da aplicacao
//combineReducers - liga os reducers para cada atributo criado na store, gerando um objeto unico com os estados
import { combineReducers, createStore } from 'redux'
//Componente que liga os estados criados com o redux para os componentes do react
import { Provider } from 'react-redux'

//ligando os reducers com os campos
//um campo sempre eh ligado a um reducer
//reducer - uma funcao
const reducers = combineReducers({
    field: () => ({ value: 'Opa' })
})

ReactDOM.render(
    //criando provide fornecendo a store com os reducers
    <Provider store={createStore(reducers)}>
        <Field initialValue='Testai' />
    </Provider>,
    document.getElementById('app'))