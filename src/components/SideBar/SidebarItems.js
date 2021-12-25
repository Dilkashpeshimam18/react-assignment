import React from 'react'
import './SidebarItems.css'

function SidebarItems({name}) {
    return (
        <div className='sidebarItems'>
            <h4 className='sidebar__name'>{name}</h4>
          
        </div>
    )
}

export default SidebarItems
