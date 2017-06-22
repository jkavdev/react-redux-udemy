import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.counter.stepChanged}
            value={props.counter.step} type="number" />
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>
    </div>
)

const maptStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => ({ inc, dec, stepChanged }, dispatch)

export default connect(maptStateToProps, mapDispatchToProps)(Counter)