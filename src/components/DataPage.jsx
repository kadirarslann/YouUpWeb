import React, { useState, useContext, useEffect } from "react";
import Context from "../context/Context";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
function DataPage() {
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

  function getuserdata() {
    axios
      .get(backendurl+"getevents/" + user["googleId"])
      .then((response) => {
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

      getuserdata();
    }
  }, []);

  //   getuserdata();
  return (
    <div className="dataPage p10">
      <div className="f20 p15">
        Past high heart rate event for user {user.name}
      </div>
      {data.map((item) => {
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
  );
}

export default DataPage;
