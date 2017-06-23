const INITIAL_STATE = {
    description: 'Ler Livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    },
    {
        _id: 2,
        description: 'Jogar games irados',
        done: false
    },
    {
        _id: 3,
        description: 'Consulta na terça',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state;
    }
}