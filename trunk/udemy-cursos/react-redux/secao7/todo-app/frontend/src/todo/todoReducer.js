//Estado inicial do reducer
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

//o reducer recebe o estado atual e uma acao
export default (state = INITIAL_STATE, action) => {
  //descrevo quem o reducer esta ouvindo e qual alteracao a ser realizada
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
    case 'TODO_SEARCHED':
      return { ...state, list: action.payload.data }
    default:
      return state;
  }
}