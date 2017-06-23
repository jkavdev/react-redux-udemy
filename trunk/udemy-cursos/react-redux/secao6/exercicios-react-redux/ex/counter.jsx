import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged}
            value={props.counter.step} type="number" />
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

const maptStateToProps = state => ({ counter: state.counter })

//Os metodos serao mapeados para o props e nao para o reducer, como o que acontece com as propriedades
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch)

export default connect(maptStateToProps, mapDispatchToProps)(Counter)