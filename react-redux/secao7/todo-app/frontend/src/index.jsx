import React from 'react'
import ReactDOM from 'react-dom'
//applyMiddleware - responsavel pelo recebimento dos dados das chamadas dos metodos sincronos e assincronos
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//promise do redux
import promise from 'redux-promise'
//multi para multiplos dispatches
import multi from 'redux-multi'
//thunk possibilitara dispatcher encadeados, 
//sendo possivel utilizar o recurso de promises e depois executar um outro dispatcher
import thunk from 'redux-thunk'

import App from './main/app'
//Reducers da aplicacao
import reducers from './main/reducers'

//Configurando o plugin do redux em sincronismo com a aplicacao
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

//criacao do store
const store = applyMiddleware(thunk, promise, multi)(createStore)(reducers, devTools)

ReactDOM.render(
    //aplicando o connector do redux para os componentes do react
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))