import React from 'react'
import './Card.css'
import CardButtons from './CardButtons'
import CardContainers from './CardContainers'
import FilterListIcon from '@mui/icons-material/FilterList';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Card() {
    return (
        <div className='card'>
            <div className='card__container1'>
                <p className='card__text'>Fundraiser name</p>
                <img className='card__img' src="https://s-i.huffpost.com/gen/1880660/images/o-SOCIAL-INVESTMENT-facebook.jpg" />

            </div>
            <div className='card__container2'>
                <CardContainers tokenname="No. of Tokens" amount1={100} />
                <CardContainers equityshares="Equity Shares offered(%)" amount1="25%" />


            </div>
            <div className='card__container3'>
                <input className='card__input' placeholder='Category' />

            </div>
            <div className='button__class'><button className='card__button'>Amount</button></div>
            <div className='card__container4'>
             <h4 className='container4__text1'>Time Remaining </h4><h4 className='container4__text2'> 00:00:00 HRS</h4>

            </div>
            <div className='card__container5'>
                <CardButtons selected Icon={FilterListIcon} name="View Project" />
                <CardButtons  Icon={BookmarkBorderIcon} name="Save for Later" />


            </div>
            
            
        </div>
    )
}

export default Card
