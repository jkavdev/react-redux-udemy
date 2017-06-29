import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

//Acao que recebe um evento e retorna um objeto com tipo e valor
export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

//Metodo sincrono, chamado e excutado ao mesmo tempo
//Como estamos utilizado o axios, estamos realizando uma chamada assincrona
//Por isso nao da tempo de buscar os resultados e atribuir ao request
export const search = () => {
  const request = axios.get(`${URL}?sort-=createdAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}

//Realiza um post com a descricao e retorna uma promise
//Agora com a ajuda do midleware multi podemos executar mais de um dispatch, apenas informando um array
export const add = (description) => {
  //retorna a chamado de um metodo recebendo quem disparara as actions para os reducers
  return dispatch => {
    //encadeando acoes
    axios.post(URL, { description })
      //executando metodo da promise
      //ele recebe um callback, e nela disparamos outra acao
      .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
      //executando outra promise e disparando outra acao
      .then(resp => dispatch(search()))
  }
}

//alterando tarefa para finalizada
//recebe uma tarefa
export const markAsDone = (todo) => {
  //executa uma funcao passando um dispatch
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
    //ao finalizar alteracao, outro dispatch para busca
      .then(resp => dispatch(search()))
  }
}

//alterando para tarefa pendente
export const markAsPending = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => dispatch(search()))
  }
}