import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

//reducer que enblogabara todos os reducer da aplicao
const rootReducer = combineReducers({
	todo: todoReducer
})

export default rootReducer