import React, { Component } from 'react'

export default class Field extends Component {

    constructor(props) {
        super(props)
        //atribuindo propriedade do componente ao estado do componente
        this.state = { value: props.initialValue }

        //dizemos que este eh um componente nao controlado
        // this.state = { value: null }

        //por isso quando devemos limpar o estado de um campo usamos o '' ou undefined
        // this.state = { value: '' }
        // this.state = { value: undefined }

        //atribuindo o contexto do Field a funcao handleChange
        this.handleChange = this.handleChange.bind(this)
    }

    //Funcao que recebe o evento do input, o input em si
    handleChange(event) {
        //atribuindo valor do input ao estado do label
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label><br />
                {/*Queremos que a funcao seja executado por isso passamos ela*/}
                <input onChange={this.handleChange} value={this.state.value}/>
            </div>
        )
    }
}