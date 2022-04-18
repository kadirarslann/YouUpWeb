import React, { useState, useContext, useEffect } from "react";
import Context from "../context/Context";
import axios from "axios";
import { FaPlus, FaHeart } from "react-icons/fa";

function DataofPatients() {
  const {
    userAuthenticated,
    setUserAuthenticated,
    user,
    setUser,
    userRegistered,
    setuserRegistered,
    backendurl
  } = useContext(Context);
  const [data, setData] = useState([]);
  const [patientdata, setpatientdata] = useState([]);
  function getpatients() {
    axios
      .get(backendurl+"getpatients/" + user["googleId"])
      .then((response) => {
        console.log(response);
        setData(response["data"]["0"]);
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

      getpatients();
    }
  }, []);

  function submitHandler(e, id) {
    console.log(e);

    e.preventDefault();
    axios
      .get(backendurl+"/getevents/" + id)
      .then((response) => {
        setpatientdata(response["data"]["0"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="data-of-patients p20 m20 flex">
      <div className="patients">
        {data.map((item) => {
          return (
            <div key={item.id} className="data-item m10 b2">
              <div className="name p10 flex">
                {item.name} {item.surname}
                <FaPlus
                  className="red w30 flex-float-right"
                  value={item.id}
                  onClick={(e) => {
                    submitHandler(e, item.id);
                  }}
                ></FaPlus>
              </div>
              <div className="email p10">{item.email}</div>
            </div>
          );
        })}
      </div>
      <div className="patients-data">
        {patientdata.map((item) => {
          return (
            <div key={item.id} className="data-item p10 m10">
              <div className="data-item-heart-rate flex b2">
                {" "}
                <FaHeart className="red w30"></FaHeart>
                <div className="flex-float-right text-center f20">
                  {item.value}
                </div>
                <div className="data-item-time f15 p5">{item.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataofPatients;
