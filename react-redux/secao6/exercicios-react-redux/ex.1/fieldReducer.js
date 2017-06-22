//atribuindo um estado inicial ao reducer
const INITIAL_STATE = { value: 'opa' }

//se o state tiver undefined, entao sera usado o state inicial
export default function (state = INITIAL_STATE, action) {
    //de acordo com a acao sera executado uma acao, no caso quem ta interessado neste tipo de acao
    switch (action.type) {
        case 'VALUE_CHANGED':
            //como o state eh apenas um atributos, podemos retornar um objeto a partir do valor que 
            //veio com a acao
            return { value: action.payload }
        
        //se ninguem tiver interessado na acao, apenas retorna o state sem ateracao
        default:
            return state
    }
}