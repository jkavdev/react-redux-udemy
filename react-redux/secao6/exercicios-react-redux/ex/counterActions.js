//Funcao de incrementar
export function inc() {
    return { type: 'INC' }
}

//Funcao de decrementar
export function dec() {
    return { type: 'DEC' }
}

//Funcao para alterar o valor
//Recebe o evento do botao, com os dados
export function stepChanged(e) {
    return {
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}