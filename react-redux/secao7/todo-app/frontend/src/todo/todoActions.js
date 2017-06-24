//Acao que recebe um evento e retorna um objeto com tipo e valor
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})