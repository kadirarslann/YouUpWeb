import React ,{ useState, useContext}from 'react'
import ReactDOM from 'react-dom';
import {GoogleLogin,GoogleLogout} from 'react-google-login';
import Context from '../context/Context';
import UserLogin from './UserLogin';
import UserLogout from './UserLogout';

function ProfilePage() {

  const { userAuthenticated,
    setUserAuthenticated,
    user,
    setUser } =
    useContext(Context)

  const responseGoogle = (response) => {
    // console.log(response);
  }
  const login = (response) => {
    setUserAuthenticated(true)
    // console.log("user login oldu")
    // console.log(response);
    setUser(response["profileObj"])
  }
  const logout = (response) => {
    setUserAuthenticated(false)
    // console.log("user logout oldu")
    // console.log(response);
    setUser({})
  }
  console.log(user)
  return (
    <div className="profile-page">
      {!userAuthenticated?
        <div className="profile-notlogin-container" >
            <div className="profile-notlogin">
                please login to access your YouUp Profile
            </div>
            <UserLogin lassName="flex-float-right">

            </UserLogin>
        </div>
      :     
        <div className="profile-logined-container">
           <div className="profile-logined">
                Welcome {user.name}
            </div>
          <UserLogout className="flex-float-right">

          </UserLogout>
           {/* <GoogleLogout
            clientId="285966116112-0bobejul0vbpchgl3255olo9ni7gbj0m.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          >
          </GoogleLogout> */}
        </div>
      }
            
        
    </div>
    
  )
}

export default ProfilePage