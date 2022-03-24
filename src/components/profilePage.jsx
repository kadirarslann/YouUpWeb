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
    console.log(response);
  }
  const login = (response) => {
    setUserAuthenticated(true)
    console.log("user login oldu")
    console.log(response);
    setUser(response["profileObj"])
  }
  const logout = (response) => {
    setUserAuthenticated(false)
    console.log("user logout oldu")
    console.log(response);
    setUser({})
  }
  return (
    <div className="profile-page">
      {!userAuthenticated?
        <div>
            <UserLogin>

            </UserLogin>
        </div>
      :
        <div>
          
          <UserLogout>

          </UserLogout>
           {/* <GoogleLogout
            clientId="285966116112-0bobejul0vbpchgl3255olo9ni7gbj0m.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          >
          </GoogleLogout> */}
        </div>
      }
            
        <div>profilePagP</div>
    </div>
    
  )
}

export default ProfilePage