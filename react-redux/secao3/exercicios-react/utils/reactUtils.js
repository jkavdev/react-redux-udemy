import React from 'react'

function childrenWithProps(children, props) {
    //Retorna um array de acordo com cada componente filho passado
    //e copiara todas as propriedade para cada filho elemento passado
    return React.Children.map(props.children,
        child => React.cloneElement(child, { ...props })
    )
}

//exportando funcao
export { childrenWithProps }