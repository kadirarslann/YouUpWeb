import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Context from "../context/Context";
function RegistrationForm() {
  const { userAuthenticated, setUserAuthenticated, user, setUser } =
    useContext(Context);

  let type = "-1";

  function changeHandler(e) {
    console.log(e.target.value);
    if (e.target.value === "patient") {
      type = "2";
    } else if (e.target.value === "contributor") {
      type = "3";
    } else if (e.target.value === "therapist") {
      type = "1";
    }
    // userInfo[e.target]
  }
  function submitHandler(e) {
    console.log(user);
    e.preventDefault();
    axios
      .post("http://localhost:5000/createuser", {
        usertype: type,
        name: user.givenName,
        surname: user.familyName,
        id: user.googleId,
        email: user.email,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();

    // console.log(e.target.name);
    // userInfo[e.target]
  }

  return (
    <div className="registration-form m10">
      <div className="standart-text-format p10">
        Welcome to youup. To continue please select registration type
      </div>
      <form onSubmit={submitHandler}>
        <input name="type" id="type" list="types" onChange={changeHandler} />

        <button type="submit"> submit</button>
      </form>
      <datalist id="types">
        <option>patient</option>
        <option>contributor</option>
        <option>therapist</option>
      </datalist>
    </div>
  );
}

export default RegistrationForm;
