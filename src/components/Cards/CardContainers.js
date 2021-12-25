import React from 'react'
import './CardContainers.css'

function CardContainers({tokenname,equityshares,amount1,amount2}) {
    return (
        <div className='card__containers' >
            <h3 className='card__containerText'>{tokenname}{equityshares}<p className='card__containerAmount'>{amount1}{amount2}</p></h3>
        </div>
    )
}

export default CardContainers
