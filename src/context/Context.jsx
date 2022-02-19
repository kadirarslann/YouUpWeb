import { createContext, useState, useEffect } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
      isAuthenticated:false
  })



  

  return (
    <Context.Provider
      value={{
        user,
        
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
