import { combineReducers } from 'redux'

//reducer que enblogabara todos os reducer da aplicao
const rootReducer = combineReducers({
	todo: () => ({
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
		},]
	})
})

export default rootReducer