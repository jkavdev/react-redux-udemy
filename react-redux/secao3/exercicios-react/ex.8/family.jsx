import React from 'react'

//{props.children} - exibira os componentes que tiver ou nao as propriedades especificadas ao usar o componente member
//{React.cloneElement(props.children, props)} - estamos indicando que os componentes filhos deste componente recebera as
//propriedades deste componente, solucionando o caso de nao especificar o sobre nome da familia
//{React.cloneElement(props.children, props)} - mas ao realizar este parse, estamos passando a referencia das propriedades
//o componentes pai por referencia, boa pratica eh sempre passar uma copia, podemos fazer isso com spred(...)

//{React.cloneElement(props.children, {...props})} - so aceita apenas um componente, se passarmos mais de um membro para
//o componente familia gerara erro
export default props => (
    <div>
        <h1>Família</h1>
        
        {props.children}

        {React.cloneElement(props.children, {...props})}
    </div>
)
