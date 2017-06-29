import React, { Component } from 'react'

//Componente que simula a condicao do react
export default props => {
  if (props.test) {
    return props.children
  } else {
    return false
  }
}