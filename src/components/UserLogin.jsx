import React ,{ useState, useContext}from 'react'
import {GoogleLogin,GoogleLogout} from 'react-google-login';
import Context from '../context/Context';
function UserLogin() {

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


  return (
    <div className="userlogin">
         <div>
                <GoogleLogin
              clientId="285966116112-0bobejul0vbpchgl3255olo9ni7gbj0m.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={login}
              onFailure={responseGoogle}
              isSignedIn={true}
              cookiePolicy={'single_host_origin'}
            />,
        </div>
    </div>
  )
}

export default UserLogin