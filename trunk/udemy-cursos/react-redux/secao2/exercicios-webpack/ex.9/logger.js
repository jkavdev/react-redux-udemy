function info(text) {
    console.log(`INFO: ${text}`)
}

//Exportando info, por padrao se infere que a funcao info e uma propriedade e exporta um objeto
module.exports = { info }