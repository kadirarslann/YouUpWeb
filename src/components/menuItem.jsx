import React from 'react'
import {FaAddressCard,FaUser,FaDatabase,FaBook,FaHeadset,FaHospitalUser,FaUsers,FaLine} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function MenuItem(props) {
    let iconString=props.link
    const getIcon = ( iconString) =>{
        switch(iconString){
            case "profile":
                return <FaUser className='menu-item-icon'>
                </FaUser>
        
            case "data":
                return <FaDatabase className='menu-item-icon'>
                </FaDatabase>
                
            case "readings":
                return <FaBook className='menu-item-icon'>
                </FaBook>
            case "listenings":
                return <FaHeadset className='menu-item-icon'>
                </FaHeadset>
            case "therapist":
                return <FaHospitalUser className='menu-item-icon'>
                </FaHospitalUser>;
            case "patients":
                return <FaUsers className='menu-item-icon'>
                </FaUsers>
            case "live":
                return <FaLine className='menu-item-icon'>
                </FaLine>
            default:
                return <FaLine className='menu-item-icon'>
                </FaLine>
        }
    }
   

    let tolink="/"+props.link
    
    // console.log(tolink)
    return (
    <>
        
            <div className='menu-item'> 
            <Link to={tolink}>
                {props.link}
                {getIcon(iconString)}
            </Link> 
            </div>
         
    </>
        
     
    
        
     
    )
}

export default MenuItem