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
export const add = (description) => {
    const request = axios.post(URL, { description })
    return {
        type: 'TODO_ADDED',
        payload: request
    }
}