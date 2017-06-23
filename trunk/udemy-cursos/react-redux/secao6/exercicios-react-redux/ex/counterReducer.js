//valor inicial do estado 
const INITIAL_STATE = { step: 10, number: 0 }

//caso o estado esteja undefined, atribui o valor inicial
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        //se acao for incremento
        case 'INC':
            return { ...state, number: state.number + state.step }
        //se acao for decremento
        case 'DEC':
            return { ...state, number: state.number - state.step }
        //altera o valor do step
        case 'STEP_CHANGED':
            return { ...state, step: +action.payload }
        //se nao retorna o estado como estava, sem evolucao
        default:
            return state
    }
}