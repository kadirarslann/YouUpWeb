import React, { useState, useContext, useEffect } from "react";
import Context from "../context/Context";
import MenuItem from "./menuItem";
import logo from "../assets/img/logo.png";

function LeftMenu() {
  const {
    userAuthenticated,
    setUserAuthenticated,
    user,
    setUser,
    userRegistered,
    setuserRegistered,
    userrole,
    setuserrole,
  } = useContext(Context);

  return (
    <div className="left-menu">
      <img src={logo} alt="" width={"100%"} height={"50px"} />
      <MenuItem link="profile"></MenuItem>
      {user !== null && userrole === 2 ? <MenuItem link="data"></MenuItem> : ""}

      {user !== null && userrole === 2 ? (
        <MenuItem link="therapist"></MenuItem>
      ) : (
        ""
      )}

      <MenuItem link="readings"></MenuItem>
      <MenuItem link="listenings"></MenuItem>

      {user !== null && userrole === 1 ? <MenuItem link="dataofpatients"></MenuItem> : ""}
      {/* <MenuItem link="live"></MenuItem> */}
    </div>
  );
}

export default LeftMenu;
