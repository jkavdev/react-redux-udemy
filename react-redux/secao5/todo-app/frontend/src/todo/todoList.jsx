import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    //Renderizara as linhas de acordo com o que vier do props.list
    //para cada componente precisamos vincula-lo a uma chave unica, utilizamos o key com o id do registro
    //no butao temos uma arrow function que executa a funcao passada para ela pelo props passando o todo de cada linha e removendo-o

    //adicionado condicao, se tiver finalizado a tarefa carregar estilo proprio
    //adicionando condicao nos botoes de acordo com a situacao da tarefa
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}>
                    </IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}>
                    </IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}