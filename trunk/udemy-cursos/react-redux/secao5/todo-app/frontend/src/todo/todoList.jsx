import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    //Renderizara as linhas de acordo com o que vier do props.list
    //para cada componente precisamos vincula-lo a uma chave unica, utilizamos o key com o id do registro
    //no butao temos uma arrow function que executa a funcao passada para ela pelo props passando o todo de cada linha e removendo-o
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
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
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}