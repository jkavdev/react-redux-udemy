import React from 'react'
import If from './if'

//Componentizando o botao, informando seu estilo, boostrap e o tipo do icone font-awesome
export default props => (
    //Utilizando o componente if, se hide=true, nao mostra botao e vice-versa
    <If test={!props.hide}>
        <button className={'btn btn-' + props.style}
            onClick={onclick}>
            <i className={'fa fa-' + props.icon}></i>
        </button >
    </If>
)