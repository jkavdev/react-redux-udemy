import React, { Component } from 'react'
import { connect } from 'react-redux'
//Ligara as actions as reducers
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

//As actions do componente
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.keyHandler = this.keyHandler.bind(this)
  }

  //Utilizando o ciclo de vida do react
  //este metodo sera chamado antes do componente ser renderizado
  componenteWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    //Utiliizando feature destructuring do es6
    //no qual estamos extraimos os seguintes propriedades de this.props
    const { add, search, description, clear } = this.props

    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  render() {
    const { add, search, description, clear } = this.props

    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description' className='form-control'
            placeholder='Adicione uma tarefa'
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
            value={this.props.description} />
        </Grid>

        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus' onClick={() => add(description)} alt='Enter'></IconButton>
          <IconButton style='info' icon='search' onClick={search} alt='Enter + Shift'></IconButton>
          <IconButton style='clear' icon='close' onClick={clear} alt='Esc'></IconButton>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
//Atraves do dispatch que realizara as chamadas para a ligacao dos reducers
const mapDispatchToPros = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToPros)(TodoForm)