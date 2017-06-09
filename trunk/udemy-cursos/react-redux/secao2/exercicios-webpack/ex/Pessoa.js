//Export padrao sera a classe pessoa
//Nao verdade esta sintaxe da classe pessoa, no final vai ser transformada para uma funcao js
//Nao existe classes em js
export default class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    toString(){
        return `Pessoa: ${this.nome}`
    }
}