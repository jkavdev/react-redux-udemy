import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
//Reducers da aplicacao
import reducers from './main/reducers'

//Configurando o plugin do redux em sincronismo com a aplicacao
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()

//criacao do store
const store = createStore(reducers, devTools)

ReactDOM.render(
    //aplicando o connector do redux para os componentes do react
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))