//Estado inicial do reducer
const INITIAL_STATE = { description: '', list: [] }

//o reducer recebe o estado atual e uma acao
export default (state = INITIAL_STATE, action) => {
  //descrevo quem o reducer esta ouvindo e qual alteracao a ser realizada
  switch (action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
    case 'TODO_SEARCHED':
      return { ...state, list: action.payload.data }
    case 'TODO_CLEAR':
      return { ...state, description: '' }
    default:
      return state;
  }
}