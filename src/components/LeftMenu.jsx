import React from 'react'
import MenuItem from './menuItem'


function LeftMenu() {
  return (
    <div className="left-menu">
        <MenuItem link="profile"></MenuItem>
        <MenuItem link="listenings"></MenuItem>
        <MenuItem link="readings"></MenuItem>
        <MenuItem link="therapist"></MenuItem>
        <MenuItem link="live"></MenuItem>
      

    </div>
  )
}

export default LeftMenu