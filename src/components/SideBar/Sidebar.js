import React from 'react'
import './Sidebar.css'
import SidebarItems from './SidebarItems'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__title'>
                <h2 className='dashboard'>DASHBOARD</h2>
                <hr />

            </div>
           
            <div className='sidebar__items'>
                <SidebarItems name="My information" />
                <SidebarItems name="Project Listed" />
                <SidebarItems name="Project Invested" />
                <SidebarItems name="Save for later" />
                <SidebarItems name="My Earnings" />
                <SidebarItems name="Bank Items" />


                

            </div>
        </div>
    )
}

export default Sidebar
