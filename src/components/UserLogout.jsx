import React, { useState, useContext } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Context from "../context/Context";

function UserLogout() {
  const {
    userAuthenticated,
    setUserAuthenticated,
    user,
    setUser,
    userRegistered,
    setuserRegistered,
    userrole,
    setuserrole,
    therapists,
    settherapists,
    therapistdata,
    settherapistdata,
  } = useContext(Context);

  const logout = (response) => {
    setUser(null);
    setUserAuthenticated(false);
    console.log("user logout oldu");

    setuserRegistered(false);
    setuserrole(-1);
    setUserAuthenticated(false);
    settherapistdata({ registered: "false" });
    settherapists([]);
  };

  return (
    <div className="userlogout">
      <div>
        <GoogleLogout
          clientId="285966116112-0bobejul0vbpchgl3255olo9ni7gbj0m.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </div>
    </div>
  );
}

export default UserLogout;
