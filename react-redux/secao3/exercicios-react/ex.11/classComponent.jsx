import React, { Component } from 'react'

export default class ClassComponent extends Component {

    //Um componente tem tambem um contrutor passando as propriedades na inicializacap
    constructor(props) {
        //sempre que chamar um construtor, o construtor pai deve sempre ser chamado primeiro que qualquer coisa
        super(props)
        //Estamos atribuindo o valor inicia que vem das propriedades do componente ao objeto estado do componente
        this.state = { value: props.initialValue }
    }

    //Funcao que ira decrementar ou incrementar um valor
    sum(delta) {
        //para alterarmos o estado do componente usamos a funcao setState
        //a funcao setState retorna um estado novo com os parametros alterados no state antigo
        this.setState({ value: this.state.value + delta })
    }

    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h1>{this.state.value}</h1>
                {/*para que possamos usar uma funcao como retorno usaremos arraowfunctions
                pois com elas estamos indicando que o retorno eh uma funcao
                Se chamarmos a funcao diretamente, gerara erro pois a funcao nao retorna nada*/}
                <button onClick={() => this.sum(-1)}>Decrementar</button>
                <button onClick={() => this.sum(1)}>Incrementar</button>
            </div>
        )
    }
}