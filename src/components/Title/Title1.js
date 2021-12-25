import React from 'react'
import './Title1.css'

function Title1() {
    return (
        <div className='title1'>
            <h4 className='title1__text'>Your whitelist status: <span className='subtext'>Eligible</span></h4>
            
            <div className='title__right'>
                <h4 className='title1__text2'>Not whitelisted yet?  </h4>
               <button className='btn2 btn2__style'> Whitelist now</button>
              


            </div>
           
            
        </div>
    )
}

export default Title1
