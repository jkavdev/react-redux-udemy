import React from 'react'

//Componentizando o botao, informando seu estilo, boostrap e o tipo do icone font-awesome
export default props => {
    if (props.hide) {
        return null
    } else {
        return (
            <button className={'btn btn-' + props.style}
                onClick={onclick}>
                <i className={'fa fa-' + props.icon}></i>
            </button >
        )
    }
}