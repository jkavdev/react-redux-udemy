//as actions creators devem ser objetos que retornam um tipo, e no caso estamos retornando
//um dado que vem junto de uma acao, payload - noe geralmente dado a este tipo de dado
export function changeValue(e) {
    console.log('changeValue')
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}