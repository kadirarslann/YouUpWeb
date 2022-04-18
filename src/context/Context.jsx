import { createContext, useState, useEffect } from "react";
import axios from "axios";
const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [userRegistered, setuserRegistered] = useState(false);
  const [user, setUser] = useState(null);
  const [userrole, setuserrole] = useState(-1);
  const [therapistdata, settherapistdata] = useState({ registered: false });
  const [therapists, settherapists] = useState([]);
  const [backendurl, setbackendurl] = useState("https://youup.herokuapp.com/");


  let buildtype="dev"
  if(buildtype ==="env"){
    setbackendurl("http://localhost:5000/")
  }
  
  function checkRegistration() {
    axios
      .get(backendurl + user["googleId"])
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
      console.log(user);
      checkRegistration();
    }
  }, [userAuthenticated]);

  // console.log(user['googleId'])
  return (
    <Context.Provider
      value={{
        userAuthenticated,
        setUserAuthenticated,
        user,
        setUser,
        userRegistered,
        setuserRegistered,
        userrole,
        setuserrole,
        therapistdata,
        settherapistdata,
        therapists,
        settherapists,
        backendurl,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
