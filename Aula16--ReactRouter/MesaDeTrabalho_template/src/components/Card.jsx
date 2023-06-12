import React from 'react'

const Card = ({data}) => {
  return (
   //Dica da DH: Você pode adicionar um evento de click neste componente (...para acessar a rota beer/:id)
    <div className='card'> 
        <h3>{data.name}</h3>
        <p>{data.tagline}</p>
        <img src={data.image_url} alt="beer-detail" />
    </div>
  )
}

export default Card