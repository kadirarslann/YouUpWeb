import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import Context from "../context/Context";
import UserLogin from "./UserLogin";
import UserLogout from "./UserLogout";
import axios from "axios";
import RegistrationForm from "./RegistrationForm";

function ProfilePage() {
  const {
    userAuthenticated,
    setUserAuthenticated,
    user,
    setUser,
    userRegistered,
    setuserRegistered,
    userrole,
    setuserrole,
    backendurl
  } = useContext(Context);
  function checkRegistration() {
    axios
      .get(backendurl+"getuser/" + user["googleId"])
      .then((response) => {
        console.log(response);
        if (response.data["registered"] === "true") {
          setuserRegistered(true);
          setuserrole(response.data["role"]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (user !== null && userAuthenticated === true) {
      // console.log(user)
      checkRegistration();
    }
  }, [userAuthenticated]);

  // console.log(user['googleId'])

  return (
    <div className="profile-page">
      {!userAuthenticated ? (
        <div className="profile-notlogin-container">
          <div className="profile-notlogin">
            please login to access your YouUp Profile
          </div>
          <UserLogin lassName="flex-float-right"></UserLogin>
        </div>
      ) : (
        <div className="profile-logined-container">
          <div className="profile-logined">Welcome {user.name}</div>
          <UserLogout className="flex-float-right"></UserLogout>
          {/* <GoogleLogout
            clientId="285966116112-0bobejul0vbpchgl3255olo9ni7gbj0m.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          >
          </GoogleLogout> */}
        </div>
      )}
      {!userRegistered && userAuthenticated ? (
        <RegistrationForm></RegistrationForm>
      ) : (
        ""
      )}
      <div className="bottom">
        <div className="p10 f15 red">
          YouUp is an application which is primary purpose to incrase
          information exchange between patients and therapists
        </div>
        <div className="p10 f15 red">
          beside user can also use this system to register to help or get help
          from patients and therapists
        </div>
        <div className="p10 f15 red">
          all users can use mediation books and listenings
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
