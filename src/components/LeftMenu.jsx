import React from 'react'
import MenuItem from './menuItem'
import logo from '../assets/img/logo.png'; 


function LeftMenu() {
  return (
    <div className="left-menu">
        <img src={logo} alt="" width={'100%'} height={'50px'}/>
        <MenuItem link="profile"></MenuItem>
        <MenuItem link="data"></MenuItem>
        <MenuItem link="readings"></MenuItem>
        <MenuItem link="listenings"></MenuItem>
        <MenuItem link="therapist"></MenuItem>
        <MenuItem link="patients"></MenuItem>
        <MenuItem link="live"></MenuItem>
      
      

    </div>
  )
}

export default LeftMenu