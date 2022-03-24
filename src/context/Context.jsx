import { createContext, useState, useEffect } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  



  

  return (
    <Context.Provider
      value={{
        userAuthenticated,
        setUserAuthenticated,
        user,
        setUser
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
