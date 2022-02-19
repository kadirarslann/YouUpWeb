import React from 'react'
import {FaAddressCard} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function MenuItem(props) {
    let tolink="/"+props.link
    // console.log(tolink)
    return (
    <>
        
            <div className='menu-item'> 
            <Link to={tolink}>
                {props.link}
                <FaAddressCard className='menu-item-icon'>
                </FaAddressCard>
            </Link> 
            </div>
         
    </>
        
     
    
        
     
    )
}

export default MenuItem