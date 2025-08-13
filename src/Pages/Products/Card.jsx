import './Card.css'
import React from 'react'


function Card(props){

    return <>
    <div className='section'>
      <div className='cardImg'>
        <img src={props.produto1.foto}/>
      </div>      
      <strong >{props.info.nome}</strong>
      <strong>{props.info.descricao}</strong>
      <strong>{props.info.preco}</strong>

    </div>
    </>
}



export default Card