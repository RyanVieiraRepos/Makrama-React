import './Card.css'
import React from 'react'



function Card(props) {

  return <>
    <div className='section' id='cardId'>
      <div className='cardImg'>
        <img src={props.info.foto} alt='image not loaded' />
      </div>
      <strong >{props.info.nome}</strong>
      <strong>{props.info.descricao}</strong>
      <strong>{props.info.preco}</strong>

    </div>
  </>
}



export default Card