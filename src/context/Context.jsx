import { createContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [userRegistered, setuserRegistered] = useState(false);
  const [user, setUser] = useState(null);
  const [userrole, setuserrole] = useState(-1);
  const [therapistdata, settherapistdata] = useState({ registered: false });
  const [therapists, settherapists] = useState([]);

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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
