import React from 'react'
import { connect } from 'react-redux'
//Ligara as actions as reducers
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

//As actions do componente
import { changeDescription } from './todoActions'

const TodoForm = props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.changeDescription}
                    onKeyUp={keyHandler}
                    value={props.description} />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd} alt='Enter'></IconButton>
                <IconButton style='info' icon='search' onClick={props.handleSearch} alt='Enter + Shift'></IconButton>
                <IconButton style='clear' icon='close' onClick={props.handleClear} alt='Esc'></IconButton>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({ description: state.todo.description })
//Atraves do dispatch que realizara as chamadas para a ligacao dos reducers
const mapDispatchToPros = dispath => bindActionCreators({ changeDescription }, dispath)

export default connect(mapStateToProps, mapDispatchToPros)(TodoForm)