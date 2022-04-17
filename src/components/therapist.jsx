import React, { useState, useContext, useEffect } from "react";
import Context from "../context/Context";
import axios from "axios";
function Therapist() {
  const {
    userAuthenticated,
    setUserAuthenticated,
    user,
    setUser,
    userRegistered,
    setuserRegistered,
    therapists,
    settherapists,
    therapistdata,
    settherapistdata,
  } = useContext(Context);

  function getAllTherapists() {
    axios
      .get("http://localhost:5000/gettherapists")
      .then((response) => {
        // if(response['data']['registered']==='true')
        settherapistdata(response["data"]["0"]);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getTherapist() {
    console.log("http://localhost:5000/gettherapist/" + user["googleId"]);
    axios
      .get("http://localhost:5000/gettherapist/" + user["googleId"])
      .then((response) => {
        if (response["data"]["registered"] === "true")
          settherapistdata(response["data"]);
        // else getAllTherapists();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    if (
      user !== null &&
      userAuthenticated === true &&
      userRegistered === true
    ) {
      console.log(user);

      getTherapist();
    }
  }, []);
  return (
    <div className="therapistPage m10">
      {therapistdata["registered"] === false ? (
        <div>
          asasas
          {therapists.map((item) => {
            return (
              <div key={item.id} className="data-item p10 m10">
                {" "}
                ass
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {" "}
          <div className=" f20 p5">
            Assigned Therapist : {therapistdata.name} {therapistdata.surname}
          </div>
          <div className=" f20 p5">Therapist email : {therapistdata.email}</div>
          <div className=" f20 p5 b2">Therapist messages : todo</div>
        </div>
      )}
    </div>
  );
}

export default Therapist;
