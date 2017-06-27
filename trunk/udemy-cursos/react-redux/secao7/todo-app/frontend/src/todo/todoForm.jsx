import React, { Component } from 'react'
import { connect } from 'react-redux'
//Ligara as actions as reducers
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

//As actions do componente
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)

    this.keyHandler = this.keyHandler.bind()
  }

  //Utilizando o ciclo de vida do react
  //este metodo sera chamado antes do componente ser renderizado
  componenteWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if (e.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
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
          <IconButton style='primary' icon='plus' onClick={this.props.handleAdd} alt='Enter'></IconButton>
          <IconButton style='info' icon='search' onClick={this.props.handleSearch} alt='Enter + Shift'></IconButton>
          <IconButton style='clear' icon='close' onClick={this.props.handleClear} alt='Esc'></IconButton>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
//Atraves do dispatch que realizara as chamadas para a ligacao dos reducers
const mapDispatchToPros = dispath => bindActionCreators({ changeDescription, search }, dispath)

export default connect(mapStateToProps, mapDispatchToPros)(TodoForm)