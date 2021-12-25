import React from 'react'
import './CardButtons.css'

function CardButtons({selected,Icon,name}) {
    return (
        <div className={`card__buttons ${selected && "selected"}`}>
            <div className="button__icon">
            <Icon  />

            </div>
            <div className='button__name'>
            <span>{name}</span>


            </div>

            
            
        </div>
    )
}

export default CardButtons
