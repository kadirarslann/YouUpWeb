import React ,{ useState, useContext}from 'react'
import {GoogleLogin,GoogleLogout} from 'react-google-login';
import Context from '../context/Context';

function UserLogout() {

    const { userAuthenticated,
        setUserAuthenticated,
        user,
        setUser } =
        useContext(Context)
    
    const logout = (response) => {
        setUserAuthenticated(false)
        console.log("user logout oldu")
        setUser({})
        }

  return (
    <div className="userlogout">
         <div>
           <GoogleLogout
            clientId="285966116112-0bobejul0vbpchgl3255olo9ni7gbj0m.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          >
          </GoogleLogout>
        </div>
    </div>
    
  )
}

export default UserLogout